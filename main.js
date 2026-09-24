/* ═══════════════════════════════════════════════════════════════════════════
   PRATHAMESH PATEL — PORTFOLIO SCROLL ENGINE (GSAP + LENIS)
   - 144 Frame 3D Rotating Avatar Scrubber (Clip 1)
   - Real-time Sliding-Window ImageBitmap Cache
   - Seamless Transition to Three.js 3D Avatar Lab
   - GSAP ScrollTrigger Section Reveals & Telemetry Tracking
   ═══════════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // DOM Selectors
  const canvas = document.getElementById('film');
  const ctx = canvas.getContext('2d', { alpha: false });
  const scrollHero = document.getElementById('scroll-hero');
  const stage = document.getElementById('stage');
  const loader = document.getElementById('loader');
  const loadbar = document.getElementById('loadbar');
  const loadPctText = document.getElementById('load-pct-text');
  const loadStatusText = document.getElementById('load-status-text');
  const scrollCue = document.getElementById('scroll-cue');
  const hudPct = document.getElementById('hud-scroll-pct');
  const brandNav = document.getElementById('brandnav');

  // Modal / Clips Integration
  const clipModal = document.getElementById('clip-modal');
  const clipDrawerBtn = document.getElementById('clip-drawer-btn');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const dropZone = document.getElementById('drop-zone');
  const videoFileInput = document.getElementById('video-file-input');

  // Audio Controls
  const soundToggle = document.getElementById('sound-toggle');

  // Frame Scrubber State
  const KEEP = 80;
  const AHEAD = 25;

  const state = {
    blobs: [],
    bitmaps: new Map(),
    decoding: new Set(),
    count: 144,
    pattern: 'frames/frame_%04d.webp',
    progress: 0,
    currentFrame: -1,
    lastDirection: 1,
    audioEnabled: false,
    audioCtx: null,
    ambientGain: null,
    droneOsc: null,
    lastChapterIndex: -1
  };

  /* ── 1. Retina Sizing ────────────────────────────────────────────── */
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = stage.clientWidth;
    const h = stage.clientHeight;

    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });
  resizeCanvas();

  /* ── 2. Frame Cache Engine ───────────────────────────────────────── */
  function frameURL(i) {
    return state.pattern.replace('%04d', String(i + 1).padStart(4, '0'));
  }

  async function fetchBlob(i) {
    if (state.blobs[i]) return state.blobs[i];
    try {
      const res = await fetch(frameURL(i));
      if (!res.ok) return null;
      state.blobs[i] = await res.blob();
      return state.blobs[i];
    } catch (e) {
      return null;
    }
  }

  async function decodeFrame(i) {
    if (state.bitmaps.has(i) || state.decoding.has(i)) return;
    state.decoding.add(i);

    try {
      const blob = await fetchBlob(i);
      if (blob) {
        const bmp = await createImageBitmap(blob);
        state.bitmaps.set(i, bmp);
      }
    } catch (e) {
      // transient decode error
    } finally {
      state.decoding.delete(i);
    }
  }

  function manageWindow(center) {
    const dir = state.lastDirection;
    for (let d = 0; d <= AHEAD; d++) {
      const fwd = center + d * dir;
      const back = center - Math.min(d, 6) * dir;
      if (fwd >= 0 && fwd < state.count) decodeFrame(fwd);
      if (back >= 0 && back < state.count) decodeFrame(back);
    }

    if (state.bitmaps.size > KEEP * 2) {
      for (const [idx, bmp] of state.bitmaps) {
        if (Math.abs(idx - center) > KEEP) {
          if (bmp.close) bmp.close();
          state.bitmaps.delete(idx);
        }
      }
    }
  }

  /* ── 3. Eager Preloader ──────────────────────────────────────────── */
  async function preloadSequence() {
    try {
      const res = await fetch('frames/manifest.json');
      if (res.ok) {
        const manifest = await res.json();
        state.count = manifest.count || 144;
      }
    } catch (e) {
      console.log('Using default 144 count');
    }

    const eagerCount = Math.min(Math.ceil(state.count * 0.2), 35);
    let loaded = 0;

    await Promise.all(
      Array.from({ length: eagerCount }, (_, i) => 
        fetchBlob(i).then(async (blob) => {
          loaded++;
          const pct = Math.round((loaded / eagerCount) * 100);
          if (loadbar) loadbar.style.width = `${pct}%`;
          if (loadPctText) loadPctText.textContent = `${String(pct).padStart(2, '0')}%`;
          
          if (loadStatusText) {
            if (pct < 30) {
              loadStatusText.textContent = 'SEALING GARAGE BAY 07 // DEPLOYING WEB MATRIX';
            } else if (pct < 70) {
              loadStatusText.textContent = 'CALIBRATING 369 SPATIAL MOTION FRAMES';
            } else if (pct < 95) {
              loadStatusText.textContent = 'CHARGING SPIDER-SUIT HYDRAULICS (4500 PSI)';
            } else {
              loadStatusText.textContent = 'GARAGE UNLOCKED // LAUNCHING SPATIAL LAB';
            }
          }

          if (i === 0 && blob) await decodeFrame(0);
        })
      )
    );

    // Dramatic pause for mechanical seal, then trigger hydraulic release
    await new Promise((r) => setTimeout(r, 450));
    playHydraulicSound();
    loader.classList.add('done');
    drawCurrentFrame(0);

    setTimeout(() => {
      if (loader) loader.style.display = 'none';
    }, 1100);

    // Stream remaining frames in background
    let nextIdx = eagerCount;
    Array.from({ length: 4 }, async () => {
      while (nextIdx < state.count) {
        const idx = nextIdx++;
        await fetchBlob(idx);
      }
    });
  }

  /* ── 4. Web Audio Engine ─────────────────────────────────────────── */
  function initAudio() {
    if (!state.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      state.audioCtx = new AudioContext();
    }
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
  }

  function playHydraulicSound() {
    try {
      if (!state.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        state.audioCtx = new AudioContext();
      }
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
      const now = state.audioCtx.currentTime;

      // Heavy sub-bass thud (garage door release)
      const subOsc = state.audioCtx.createOscillator();
      const subGain = state.audioCtx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(140, now);
      subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.4);
      subGain.gain.setValueAtTime(0.25, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      subOsc.connect(subGain);
      subGain.connect(state.audioCtx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.42);

      // Pneumatic hydraulic hiss
      const bufferSize = Math.floor(state.audioCtx.sampleRate * 0.45);
      const noiseBuffer = state.audioCtx.createBuffer(1, bufferSize, state.audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = state.audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      const filter = state.audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1900, now);
      filter.frequency.exponentialRampToValueAtTime(450, now + 0.45);
      const hissGain = state.audioCtx.createGain();
      hissGain.gain.setValueAtTime(0.12, now);
      hissGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      whiteNoise.connect(filter);
      filter.connect(hissGain);
      hissGain.connect(state.audioCtx.destination);
      whiteNoise.start(now);
    } catch(e) {
      // Audio autoplay policy fallback
    }
  }

  function playTickSound() {
    if (!state.audioEnabled || !state.audioCtx) return;
    const now = state.audioCtx.currentTime;

    const osc = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.03);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    osc.connect(gain);
    gain.connect(state.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.035);
  }

  soundToggle.addEventListener('click', () => {
    initAudio();
    state.audioEnabled = !state.audioEnabled;
    soundToggle.classList.toggle('active', state.audioEnabled);
    if (state.audioEnabled) playTickSound();
  });

  /* ── 5. Canvas Drawing (Full-Bleed Viewport Cover) ───────────────── */
  function drawImageCover(img) {
    if (!img) return;
    const w = stage.clientWidth;
    const h = stage.clientHeight;

    // Full screen cover: scale fills 100% of both width and height
    const scale = Math.max(w / img.width, h / img.height);
    const drawW = img.width * scale;
    const drawH = img.height * scale;
    const x = (w - drawW) / 2;
    const y = (h - drawH) / 2;

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, x, y, drawW, drawH);
  }

  function drawCurrentFrame(index) {
    const safeIdx = Math.max(0, Math.min(index, state.count - 1));
    const bmp = state.bitmaps.get(safeIdx);

    if (bmp) {
      drawImageCover(bmp);
    } else {
      let closest = null;
      let minDiff = Infinity;
      for (const [idx, b] of state.bitmaps) {
        const diff = Math.abs(idx - safeIdx);
        if (diff < minDiff) {
          minDiff = diff;
          closest = b;
        }
      }
      if (closest) drawImageCover(closest);
      decodeFrame(safeIdx);
    }

    manageWindow(safeIdx);
  }

  /* ── 6. Progress Scrubber Render Handler ─────────────────────────── */
  function renderProgress(p) {
    state.progress = p;

    const chapterIdx = Math.floor(p * 5);
    if (chapterIdx !== state.lastChapterIndex) {
      state.lastChapterIndex = chapterIdx;
      playTickSound();
    }

    const frameIdx = Math.round(p * (state.count - 1));
    state.lastDirection = frameIdx >= state.currentFrame ? 1 : -1;
    state.currentFrame = frameIdx;
    drawCurrentFrame(frameIdx);

    const pct = Math.min(Math.round(p * 100), 100);
    hudPct.textContent = `${String(pct).padStart(2, '0')}%`;

    if (scrollCue) {
      scrollCue.style.opacity = p > 0.04 ? '0' : '0.8';
    }
  }

  /* ── 7. GSAP & Lenis Setup ───────────────────────────────────────── */
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.85,
      });

      window.lenis = lenis;

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // Master Pinned Timeline for Full-Screen Video Scrubber
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollHero,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          renderProgress(self.progress);
        }
      }
    });

    const cap1 = document.getElementById('cap-1');
    const cap2 = document.getElementById('cap-2');
    const cap3 = document.getElementById('cap-3');
    const cap4 = document.getElementById('cap-4');
    const cap5 = document.getElementById('cap-5');

    // Chapter 1: 0.00 -> 0.16 (Identity / Centered Prathamesh Patel)
    if (cap1) {
      masterTimeline
        .fromTo(cap1, 
          { opacity: 0, y: 35, scale: 0.94, filter: 'blur(12px)', pointerEvents: 'none' }, 
          { opacity: 1, y: 0, scale: 1.0, filter: 'blur(0px)', pointerEvents: 'auto', duration: 0.08, ease: 'power2.out' }, 0.00)
        .to(cap1, 
          { opacity: 0, y: -25, scale: 0.96, filter: 'blur(8px)', pointerEvents: 'none', duration: 0.06 }, 0.16);
    }

    // Chapter 2: 0.20 -> 0.35 (Multi-Agent Systems)
    if (cap2) {
      masterTimeline
        .fromTo(cap2, 
          { opacity: 0, y: 35, filter: 'blur(10px)', pointerEvents: 'none' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', pointerEvents: 'auto', duration: 0.07 }, 0.20)
        .to(cap2, 
          { opacity: 0, y: -25, filter: 'blur(8px)', pointerEvents: 'none', duration: 0.06 }, 0.35);
    }

    // Chapter 3: 0.39 -> 0.60 (Clip 2: Fluid Dynamics & Generative Motion)
    if (cap3) {
      masterTimeline
        .fromTo(cap3, 
          { opacity: 0, y: 35, filter: 'blur(10px)', pointerEvents: 'none' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', pointerEvents: 'auto', duration: 0.08 }, 0.39)
        .to(cap3, 
          { opacity: 0, y: -25, filter: 'blur(8px)', pointerEvents: 'none', duration: 0.06 }, 0.60);
    }

    // Chapter 4: 0.64 -> 0.82 (SIH 2024 Rank 1 & Computer Vision)
    if (cap4) {
      masterTimeline
        .fromTo(cap4, 
          { opacity: 0, y: 35, filter: 'blur(10px)', pointerEvents: 'none' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', pointerEvents: 'auto', duration: 0.08 }, 0.64)
        .to(cap4, 
          { opacity: 0, y: -25, filter: 'blur(8px)', pointerEvents: 'none', duration: 0.06 }, 0.82);
    }

    // Chapter 5: 0.86 -> 1.00 (Transition into Interactive 3D Avatar Lab)
    if (cap5) {
      masterTimeline
        .fromTo(cap5, 
          { opacity: 0, y: 35, scale: 0.94, filter: 'blur(10px)', pointerEvents: 'none' }, 
          { opacity: 1, y: 0, scale: 1.0, filter: 'blur(0px)', pointerEvents: 'auto', duration: 0.08 }, 0.86);
    }

    // Sticky Nav Reveal
    if (brandNav) {
      ScrollTrigger.create({
        trigger: '#brand-content',
        start: 'top 20%',
        onEnter: () => brandNav.classList.add('visible'),
        onLeaveBack: () => brandNav.classList.remove('visible')
      });
    }

    // Batch ScrollTriggers for Portfolio Sections
    gsap.utils.toArray('.gsap-reveal').forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 35, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    ScrollTrigger.refresh();
  }

  /* ── Hadaka Feature 1: Pinned Horizontal Projects Rail (Multi-Mode) ─ */
  let currentProjectIndex = 0;
  const projectCardsCount = 4;

  function initHorizontalProjectsScroll() {
    const track = document.getElementById('h-projects-track');
    const outer = document.querySelector('.horizontal-projects-outer');
    const prevBtn = document.getElementById('h-prev-btn');
    const nextBtn = document.getElementById('h-next-btn');
    if (!track || !outer) return;

    function updateRail(index) {
      currentProjectIndex = Math.max(0, Math.min(index, projectCardsCount - 1));
      const cards = track.querySelectorAll('.h-project-card');
      if (cards[currentProjectIndex]) {
        const offsetLeft = cards[currentProjectIndex].offsetLeft - (window.innerWidth * 0.07);
        track.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        track.style.transform = `translate3d(-${Math.max(0, offsetLeft)}px, 0px, 0px)`;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateRail(currentProjectIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateRail(currentProjectIndex + 1);
      });
    }

    // Smooth horizontal dragging
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    track.addEventListener('mousedown', (e) => {
      // Don't drag if clicking a button
      if (e.target.closest('button')) return;
      isDragging = true;
      startX = e.pageX;
      track.style.transition = 'none';
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      prevTranslate = currentTranslate;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const currentX = e.pageX;
      const diff = currentX - startX;
      currentTranslate = prevTranslate + diff;
      const maxScroll = -(track.scrollWidth - window.innerWidth + 100);
      currentTranslate = Math.min(0, Math.max(maxScroll, currentTranslate));
      track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
    });

    // Touch support for mobile & trackpads
    track.addEventListener('touchstart', (e) => {
      if (e.target.closest('button')) return;
      startX = e.touches[0].pageX;
      track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      const currentX = e.touches[0].pageX;
      const diff = currentX - startX;
      currentTranslate = prevTranslate + diff;
      const maxScroll = -(track.scrollWidth - window.innerWidth + 100);
      currentTranslate = Math.min(0, Math.max(maxScroll, currentTranslate));
      track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
    }, { passive: true });

    track.addEventListener('touchend', () => {
      track.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      prevTranslate = currentTranslate;
    });

    // ScrollTrigger Pinned Sync (Vertical Scroll to Horizontal Slide)
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: outer,
        start: 'top 8%',
        end: () => `+=${Math.max(window.innerHeight * 1.2, track.scrollWidth - window.innerWidth + 250)}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!isDragging) {
            const maxScroll = -(track.scrollWidth - window.innerWidth + (window.innerWidth * 0.14));
            const x = self.progress * maxScroll;
            currentTranslate = x;
            prevTranslate = x;
            track.style.transition = 'none';
            track.style.transform = `translate3d(${x}px, 0px, 0px)`;
          }
        }
      });
    }
  }

  /* ── Hadaka Feature 2: 3D Tilt & Mouse Spotlight ─────────────────── */
  function initTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      });
    });
  }

  /* ── Hadaka Feature 3: Cybernetic Terminal REPL Simulator ─────────── */
  const SIM_DATA = {
    insightforge: {
      title: 'prathamesh-patel@agent-runtime:~/insightforge$ ./run-orchestrator.sh',
      cmd: 'insightforge --mode=multi-agent-orchestration --dataset=sales_q3.csv',
      latency: '14ms',
      agents: '4/4 (Planner, Synthesizer, Validator, Reporter)',
      memory: '256MB / SQLite VSS',
      lines: [
        { type: 'agent', text: '[AGENT-01 // PLANNER] Decomposing user prompt: "Calculate revenue by region and detect 2-sigma anomalies"' },
        { type: 'info', text: '[AGENT-01 // PLANNER] Inferred schema: Orders(id: uuid, region: str, revenue: float, status: str)' },
        { type: 'agent', text: '[AGENT-02 // SYNTHESIZER] Generating parameterized SQL dialect: SQLite 3.42 with window functions' },
        { type: 'code', text: 'SELECT region, SUM(revenue) as total, AVG(revenue) as mean, (revenue - AVG(revenue))/STDEV(revenue) as z_score FROM Orders WHERE status = "completed" GROUP BY region HAVING ABS(z_score) > 2.0;' },
        { type: 'info', text: '[AGENT-03 // VALIDATOR] AST validation OK. Zero SQL injection vectors detected. Query plan: B-TREE INDEX SCAN' },
        { type: 'agent', text: '[AGENT-04 // REPORTER] Query executed in 14.2ms. Found 3 revenue anomalies in APAC & EMEA regions.' },
        { type: 'success', text: '✓ Multi-Agent Orchestration cycle completed successfully with 0 errors. Dispatched to WebSocket stream.' }
      ]
    },
    aircanvas: {
      title: 'prathamesh-patel@vision-core:~/aircanvas$ npm run dev:cv',
      cmd: 'aircanvas --stream=mediapipe-hands --render=60fps --mode=gesture-canvas',
      latency: '8ms',
      agents: '21/21 Hand Landmarks Active',
      memory: '128MB / WebWorker GPU',
      lines: [
        { type: 'info', text: '[CV-ENGINE] Initializing MediaPipe Hands v0.10.14 via WebGL GPU acceleration...' },
        { type: 'info', text: '[CV-ENGINE] Camera feed synchronized: 1920x1080 resolution locked at 60 FPS.' },
        { type: 'agent', text: '[GESTURE] Tracking Index Tip (id: 8) & Thumb Tip (id: 4). Normalized distance: 0.038 (PINCH DETECTED)' },
        { type: 'code', text: 'ctx.beginPath(); ctx.moveTo(prevX, prevY); ctx.quadraticCurveTo(ctrlX, ctrlY, currX, currY); ctx.stroke();' },
        { type: 'agent', text: '[SMOOTHER] Kalmann coordinate filtering active: Jitter reduction = 98.4%. Smoothing latency: 1.2ms.' },
        { type: 'warning', text: '[GESTURE] Five fingers open -> ERASER MODE activated. Canvas buffer cleared without lag.' },
        { type: 'success', text: '✓ Touchless in-air canvas operating smoothly with zero frame drops at 60 FPS.' }
      ]
    },
    sih: {
      title: 'prathamesh-patel@sih2024:~/grand-finale$ docker-compose up',
      cmd: 'sih2024 --deploy=national-champion-architecture --audit=aicte-finance',
      latency: '21ms',
      agents: 'Evaluation: Ministry of Finance & AICTE',
      memory: 'Rank #1 / 100,000+ Competitors',
      lines: [
        { type: 'info', text: '[SIH 2024] Initializing Smart India Hackathon Grand Finale Software Edition Stack...' },
        { type: 'agent', text: '[PROBLEM STATEMENT] Automated Financial Auditing & Discrepancy Reconciliation at Enterprise Scale.' },
        { type: 'info', text: '[ARCHITECTURE] Orchestrated Dockerized microservices cluster with PostgreSQL ACID transactions.' },
        { type: 'code', text: 'docker compose -f docker-compose.prod.yml up -d --scale worker=8 --scale audit-agent=4' },
        { type: 'agent', text: '[EVALUATION] High-concurrency stress test: 15,000 req/sec handled with 99.98% uptime and zero dropped packets.' },
        { type: 'info', text: '[JURY VERDICT] Ministry of Finance & AICTE evaluation panel completed technical audit.' },
        { type: 'success', text: '★ 1ST POSITION NATIONWIDE DECLARED (₹1,00,000 CASH AWARD OUT OF 100,000+ PARTICIPANTS).' }
      ]
    },
    careerplus: {
      title: 'prathamesh-patel@careerplus:~/ats-pipeline$ python -m pipeline.evaluate',
      cmd: 'careerplus --ats-parser --embed=huggingface --candidate-eval=live',
      latency: '18ms',
      agents: 'Embedder: BAAI/bge-small-en-v1.5',
      memory: '512MB / Vector DB',
      lines: [
        { type: 'info', text: '[CAREERPLUS] Ingesting candidate document: "FullStack_AI_Engineer_CV.pdf"...' },
        { type: 'agent', text: '[NLP EXTRACTOR] Extracted 42 technical competencies: [React, FastAPI, MediaPipe, Three.js, Docker, WebSockets, Python, C++]' },
        { type: 'agent', text: '[ATS MATCHER] Cosine similarity against Senior AI Engineer requirements: 0.942 / 1.000.' },
        { type: 'code', text: 'const score = computeVectorSimilarity(resumeVector, jobProfileVector); // MatchScore: 94.2%' },
        { type: 'info', text: '[VIDEO INTERVIEW] Real-time facial sentiment & speech cadence telemetry verified.' },
        { type: 'agent', text: '[PAYMENTS] Stripe webhook verified: Enterprise Recruiter Pipeline tier activated.' },
        { type: 'success', text: '✓ Candidate ATS pipeline verified with Highest Distinction (Top 1% Percentile).' }
      ]
    }
  };

  let simTimeouts = [];

  function runSimulation(key) {
    const data = SIM_DATA[key];
    if (!data) return;

    // Clear existing animation timeouts
    simTimeouts.forEach(t => clearTimeout(t));
    simTimeouts = [];

    // Update Pills
    document.querySelectorAll('.sim-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cmd === key);
    });

    // Update Header & Prompt
    const titleEl = document.getElementById('sim-term-title');
    const cmdEl = document.getElementById('sim-active-cmd');
    const streamEl = document.getElementById('sim-term-stream');
    const latEl = document.getElementById('sim-latency');
    const agEl = document.getElementById('sim-agents');
    const memEl = document.getElementById('sim-memory');

    if (titleEl) titleEl.textContent = data.title;
    if (cmdEl) cmdEl.textContent = data.cmd;
    if (latEl) latEl.textContent = data.latency;
    if (agEl) agEl.textContent = data.agents;
    if (memEl) memEl.textContent = data.memory;

    if (!streamEl) return;
    streamEl.innerHTML = '';

    // Stream lines with realistic staggered timing
    data.lines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        const lineEl = document.createElement('div');
        lineEl.className = `stream-line ${line.type}`;
        lineEl.textContent = line.text;
        streamEl.appendChild(lineEl);
        if (streamEl.parentElement) {
          streamEl.parentElement.scrollTop = streamEl.parentElement.scrollHeight;
        }
      }, 150 * (index + 1));
      simTimeouts.push(timeout);
    });
  }

  function initSimulator() {
    // Simulator Pills Click Handlers
    document.querySelectorAll('.sim-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.dataset.cmd;
        runSimulation(cmd);
      });
    });

    // Interactive CLI input bar
    const cliInput = document.getElementById('sim-cli-input');
    const cliSubmit = document.getElementById('sim-cli-submit');

    function handleCliCommand() {
      if (!cliInput) return;
      const val = cliInput.value.trim().toLowerCase();
      if (!val) return;

      if (val === '1' || val.includes('insight') || val.includes('forge') || val.includes('sql')) {
        runSimulation('insightforge');
      } else if (val === '2' || val.includes('air') || val.includes('canvas') || val.includes('cv') || val.includes('gesture')) {
        runSimulation('aircanvas');
      } else if (val === '3' || val.includes('sih') || val.includes('hackathon') || val.includes('winner')) {
        runSimulation('sih');
      } else if (val === '4' || val.includes('career') || val.includes('resume') || val.includes('ats')) {
        runSimulation('careerplus');
      } else if (val === 'clear') {
        const streamEl = document.getElementById('sim-term-stream');
        if (streamEl) streamEl.innerHTML = '<div class="stream-line info">Terminal cleared. Ready for next command.</div>';
      } else if (val === 'help') {
        const streamEl = document.getElementById('sim-term-stream');
        if (streamEl) {
          streamEl.innerHTML += '<div class="stream-line info">Available commands: [1: insightforge, 2: aircanvas, 3: sih, 4: careerplus, clear, help]</div>';
        }
      } else {
        const streamEl = document.getElementById('sim-term-stream');
        if (streamEl) {
          streamEl.innerHTML += `<div class="stream-line warning">Command not found: '${val}'. Type 'help' or click presets above.</div>`;
        }
      }
      cliInput.value = '';
    }

    if (cliSubmit) cliSubmit.addEventListener('click', handleCliCommand);
    if (cliInput) {
      cliInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleCliCommand();
      });
    }

    // Horizontal Card "RUN AGENT SIMULATOR" Buttons
    document.querySelectorAll('.run-sim-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const simKey = btn.dataset.sim;
        const simSection = document.getElementById('simulator');
        if (simSection) {
          if (window.lenis) {
            window.lenis.scrollTo(simSection, { offset: -60, duration: 1.0 });
          } else {
            simSection.scrollIntoView({ behavior: 'smooth' });
          }
          setTimeout(() => runSimulation(simKey), 400);
        }
      });
    });

    // Default simulation kickoff
    runSimulation('insightforge');
  }

  /* ── Hadaka Feature 4: Interactive Skills Capability Filter ───────── */
  function initSkillsFilter() {
    const filterBtns = document.querySelectorAll('.sfilter-btn');
    const skillTiles = document.querySelectorAll('.skill-tile');
    if (!filterBtns.length || !skillTiles.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.dataset.filter;

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        skillTiles.forEach(tile => {
          const cat = tile.dataset.cat;
          if (filter === 'all' || cat === filter) {
            tile.style.display = 'flex';
            tile.classList.remove('hidden');
            tile.style.opacity = '1';
            tile.style.transform = 'translateY(0) scale(1)';
          } else {
            tile.style.display = 'none';
            tile.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ── Hadaka Feature 5: Rolling Numbers Counter Animation ─────────── */
  function initRollingCounters() {
    const statNums = document.querySelectorAll('.h-stat-num');
    if (!statNums.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNums.forEach(el => {
            const target = parseFloat(el.dataset.target);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const isDecimal = el.dataset.decimal === 'true';
            const duration = 1200;
            const startTime = performance.now();

            function tick(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic curve: 1 - (1 - t)^3
              const ease = 1 - Math.pow(1 - progress, 3);
              const current = target * ease;

              if (isDecimal) {
                el.textContent = `${prefix}${current.toFixed(2)}${suffix}`;
              } else {
                el.textContent = `${prefix}${Math.round(current)}${suffix}`;
              }

              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                if (isDecimal) {
                  el.textContent = `${prefix}${target.toFixed(2)}${suffix}`;
                } else {
                  el.textContent = `${prefix}${target}${suffix}`;
                }
              }
            }
            requestAnimationFrame(tick);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    const achSection = document.getElementById('achievements');
    if (achSection) observer.observe(achSection);
  }

  /* ── Hadaka Feature 6: Ultra-Interactive Contact HUD & Toast ──────── */
  function initContactHUD() {
    const copyBtn = document.getElementById('copy-email-btn');
    const copyInput = document.getElementById('copy-email-input');
    const copyBtnText = document.getElementById('copy-btn-text');
    const toast = document.getElementById('hud-toast');
    if (!copyBtn || !copyInput) return;

    let toastTimer = null;

    copyBtn.addEventListener('click', async () => {
      const email = copyInput.value || 'prathameshpatel.2020@gmail.com';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          throw new Error('Clipboard API unavailable');
        }
      } catch (err) {
        copyInput.focus();
        copyInput.select();
        document.execCommand('copy');
      }

      if (copyBtnText) copyBtnText.textContent = 'COPIED!';
      copyBtn.style.background = '#34d399';
      copyBtn.style.color = '#060709';

      if (toast) {
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
          if (copyBtnText) copyBtnText.textContent = 'COPY EMAIL';
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2600);
      }
    });
  }

  /* ── Hadaka Feature 7: Smooth Lenis Anchor Links ──────────────────── */
  function initSmoothAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            if (window.lenis) {
              window.lenis.scrollTo(target, { offset: -40, duration: 1.1 });
            } else {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      });
    });
  }

  /* ── Initialize All Interactive Features Immediately ─────────────── */
  function initAllFeatures() {
    try { initTiltCards(); } catch (e) { console.warn('Tilt init:', e); }
    try { initSimulator(); } catch (e) { console.warn('Simulator init:', e); }
    try { initSkillsFilter(); } catch (e) { console.warn('Skills filter init:', e); }
    try { initRollingCounters(); } catch (e) { console.warn('Counters init:', e); }
    try { initContactHUD(); } catch (e) { console.warn('Contact HUD init:', e); }
    try { initHorizontalProjectsScroll(); } catch (e) { console.warn('Rail init:', e); }
    try { initSmoothAnchorLinks(); } catch (e) { console.warn('Anchors init:', e); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllFeatures);
  } else {
    initAllFeatures();
  }

  /* ── 8. Clips Modal Events ───────────────────────────────────────── */
  if (clipDrawerBtn) clipDrawerBtn.addEventListener('click', () => clipModal && clipModal.classList.add('open'));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => clipModal && clipModal.classList.remove('open'));
  if (clipModal) {
    clipModal.addEventListener('click', (e) => {
      if (e.target === clipModal) clipModal.classList.remove('open');
    });
  }

  if (dropZone && videoFileInput) {
    dropZone.addEventListener('click', () => videoFileInput.click());
    videoFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        alert(`Received ${e.target.files[0].name}. When you are ready with all clips, we can compile the 3-clip master sequence!`);
        clipModal.classList.remove('open');
      }
    });
  }

  /* ── 9. Kickoff ─────────────────────────────────────────────────── */
  preloadSequence()
    .then(() => {
      initGSAP();
      renderProgress(0);
    })
    .catch((err) => {
      console.warn('Preload notice:', err);
      initGSAP();
      if (loader) loader.style.display = 'none';
      renderProgress(0);
    });

})();

