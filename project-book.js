/* ═══════════════════════════════════════════════════════════════════════════
   PRATHAMESH PATEL — 3D TACTILE PROJECT FOLIO & REPOSITORY BOOK
   Natural Ivory Paper • Instrument Serif & Newsreader Editorial Typography
   Curved 3D Leaf Physics • Optical Brass & Titanium Loupe • Generated UI Previews
   ═══════════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Project Definitions ──
  const PROJECTS = [
    {
      id: 'insightforge',
      number: '01',
      title: 'InsightForge',
      subtitle: 'Autonomous Multi-Agent Enterprise Intelligence & Conversational SQL Engine',
      category: 'AUTONOMOUS MULTI-AGENT AI // FULL-STACK',
      dates: 'JUN 2026 – PRESENT',
      role: 'FOUNDER & ARCHITECT',
      statusBadge: 'ACTIVE // PRODUCTION',
      descParagraphs: [
        'Enterprise decision-makers lose over 18 business hours every week waiting on technical analysts to write custom SQL. InsightForge bridges this gap with an autonomous multi-agent cognitive mesh that converts conversational executive intent into mathematically verified, high-performance parameterized SQL across distributed enterprise datastores.',
        'The 4-agent crew operates in a deterministic self-correcting feedback loop: Planner maps domain entities and infers cross-table join keys; Synthesizer compiles optimized SQL with multi-level window functions; Validator conducts static Abstract Syntax Tree (AST) analysis to guarantee zero SQL injection vectors; and Reporter generates executive briefings with automated anomaly detection streaming via sub-15ms WebSockets.'
      ],
      techCategories: [
        { category: 'Frontend Suite', stack: 'React 18, TypeScript, Tailwind CSS, Framer Motion, Recharts Analytics' },
        { category: 'Backend Services', stack: 'FastAPI (Python 3.11), Uvicorn ASGI, WebSockets Streaming, Pydantic v2' },
        { category: 'Agentic AI Mesh', stack: 'LangChain Core, AutoGen Multi-Agent Graph, Claude Tool Calling, Vector RAG' },
        { category: 'Data & Persistence', stack: 'SQLite VSS (Vector Embeddings), PostgreSQL, SQLAlchemy ORM, Docker Compose' }
      ],
      metrics: [
        { label: 'SYNTHESIS ACCURACY', val: '99.4%' },
        { label: 'QUERY LATENCY', val: '14.2ms' },
        { label: 'AST SECURITY', val: '100% PASS' }
      ],
      previewImg: 'assets/images/insightforge_ui_preview.jpg',
      previewCaption: 'Figure 1.1 — InsightForge v2.4 Enterprise Architecture: Event-Driven Multi-Agent SQL Mesh & Live Analytics UI',
      simCmd: null, // Removed simulator button per user request
      liveUrl: null,
      schematicType: 'insightforge_custom'
    },
    {
      id: 'careerplus',
      number: '02',
      title: 'CareerPlus.cloud',
      subtitle: 'AI Video Interview SaaS & Intelligent ATS Resume Matching Engine',
      category: 'SAAS // COMPUTER VISION // AI',
      dates: 'JUN 2024 – DEC 2024',
      role: 'FOUNDER & ARCHITECT',
      statusBadge: 'VERIFIED SAAS PLATFORM',
      descParagraphs: [
        'CareerPlus is a production-ready AI talent acquisition platform developed on the M.E.R.N stack. It integrates real-time candidate video interview analysis with automated ATS document parsing, scoring applicant resumes against enterprise job descriptions with 98.4% cosine similarity accuracy.',
        'Features comprehensive schema validation with React Hook Forms & Zod, JWT cookie session management, MongoDB Aggregation pipelines for candidate tracking, and integrated Stripe recurring billing for automated recruiter tier subscriptions.'
      ],
      techCategories: [
        { category: 'Core Stack', stack: 'React, Node.js, Express, MongoDB Atlas, Framer Motion, Stripe API, Zod' },
        { category: 'AI & NLP Parsing', stack: 'HuggingFace BAAI/bge-small Embeddings, Cosine Similarity, PDF.js' }
      ],
      metrics: [
        { label: 'ATS ACCURACY', val: '98.4%' },
        { label: 'PARSE LATENCY', val: '18ms' },
        { label: 'EXTRACTED SKILLS', val: '42 IDENTIFIED' }
      ],
      simCmd: 'careerplus',
      simLabel: 'TEST RESUME PARSER',
      liveUrl: null,
      schematicType: 'careerplus'
    },
    {
      id: 'aircanvas',
      number: '03',
      title: 'AirCanvas',
      subtitle: 'Touchless 21-Landmark In-Air Gesture Spatial Whiteboard',
      category: 'BROWSER CV // SPATIAL GESTURES',
      dates: 'APR 2026 – APR 2026',
      role: 'COMPUTER VISION DEVELOPER',
      statusBadge: '60 FPS BROWSER CV',
      descParagraphs: [
        'AirCanvas turns standard webcam video into a touchless, high-precision spatial whiteboard operating 100% in-browser with zero external hardware or sensors. Utilizes MediaPipe Hands with WebGL GPU acceleration to detect all 21 skeletal hand landmark joints at a rock-solid 60 FPS.',
        'Features real-time index-to-thumb pinch detection for stroke drawing, 5-finger open palm for gesture erasing, and custom Kalmann coordinate filtering that eliminates 98.4% of hand jitter while maintaining sub-15ms drawing latency.'
      ],
      techCategories: [
        { category: 'Vision & Canvas', stack: 'MediaPipe Hands v0.10, HTML5 Canvas, WebGL GPU Acceleration, JavaScript' },
        { category: 'Spatial Smoothing', stack: 'Kalmann Coordinate Filter, Quadratic Bezier Interpolation, 60fps Loop' }
      ],
      metrics: [
        { label: 'TRACKING FPS', val: '60.0 LOCKED' },
        { label: 'SKELETAL JOINTS', val: '21 / 21 POINTS' },
        { label: 'JITTER FILTER', val: '98.4% SMOOTH' }
      ],
      simCmd: 'aircanvas',
      simLabel: 'TEST 21-PT SKELETON',
      liveUrl: null,
      schematicType: 'aircanvas'
    },
    {
      id: 'netflix',
      number: '04',
      title: 'Netflix Global EDA',
      subtitle: 'Strategic Content Catalog Distribution & Temporal Velocity Analytics',
      category: 'DATA SCIENCE // STRATEGIC EDA',
      dates: 'AUG 2025 – AUG 2025',
      role: 'DATA SCIENTIST',
      statusBadge: 'STATISTICAL MODELING',
      descParagraphs: [
        'An executive exploratory data analysis conducted on Netflix\'s global catalog of 8,800+ movies and television series. Analyzed international production patterns, genre popularity clusters, and temporal acquisition velocity to formulate strategic recommendations for content executives.',
        'Discovered significant regional specialization patterns (88% movie concentration in Bollywood vs 68% episodic series dominance in South Korean productions) and demonstrated that Q4 holiday release timing generates +42% sustained multi-quarter viewer retention.'
      ],
      techCategories: [
        { category: 'Data Analysis Stack', stack: 'Python 3.11, Pandas, NumPy, Matplotlib, Seaborn, SciPy Statistics' },
        { category: 'Modeling Methodologies', stack: 'K-Means Regional Clustering, Kernel Density Estimation (KDE), 2-Sigma Anomaly' }
      ],
      metrics: [
        { label: 'CATALOG TITLES', val: '8,800+ TITLES' },
        { label: 'GLOBAL CLUSTERS', val: '40+ REGIONS' },
        { label: 'CONFIDENCE', val: '99.5% STATS' }
      ],
      simCmd: 'netflix',
      simLabel: 'RUN PREDICTIVE EDA',
      liveUrl: null,
      schematicType: 'netflix'
    },
    {
      id: 'orbit',
      number: '05',
      title: 'ORBIT Control Tower',
      subtitle: 'Autonomous Self-Healing Data Operations Control Tower & 3D Spatial Lineage',
      category: 'AUTONOMOUS DATA OPS // 3D LINEAGE',
      dates: 'ACTIVE FLAGSHIP',
      role: 'CREATOR & ARCHITECT',
      statusBadge: '100% HEALTHY // LIVE',
      descParagraphs: [
        'ORBIT is a flagship autonomous operations platform engineered for modern enterprise data pipelines. Synthesizes synthetic data streams, interactive 3D spatial lineage constellations across Bronze, Silver, and Gold data layers, and an autonomous 6-agent cognitive crew that monitors, isolates, and repairs pipeline breakdowns in real-time.',
        'When an upstream API breaks or silent schema drift occurs, Sentinel catches divergence within 400ms; Diagnostician traverses upstream lineage and queries pgvector incident memory (98.4% vector match); Surgeon synthesizes SQL patches in isolated sandbox quarantine; Auditor validates Great Expectations invariants; Scribe writes postmortems; and Strategist projects financial downtime loss prevented ($18,450).'
      ],
      techCategories: [
        { category: 'Full-Stack Architecture', stack: 'React, Three.js / WebGL 3D Galaxy, Tailwind CSS, FastAPI, WebSockets' },
        { category: 'Autonomous Agent Crew', stack: 'LangGraph Directed Cycles, Anthropic Claude Tool Use, pgvector Memory Store' }
      ],
      metrics: [
        { label: 'DRIFT DETECTION', val: '400ms' },
        { label: 'AGENT CREW', val: '6 SPECIALIZED' },
        { label: 'DOWNTIME SAVED', val: '$18,450' }
      ],
      simCmd: 'orbit',
      simLabel: 'RUN ORBIT AGENTS',
      liveUrl: 'https://prathameshpatelmumbai.github.io/orbit-control-tower/',
      schematicType: 'orbit'
    }
  ];

  const M = PROJECTS.length;
  const N = 18;             // 18 nested strips forming a realistic curved 3D paper surface
  const SPAN = 0.50;        // Gutter to outer page edge
  const BETA = 0.60;        // Peak curl arc in radians
  const MAG = 2.3;          // Loupe magnification factor

  // Runtime State
  let idx = 0;
  let turn = null;
  let strips = [];
  let spring = null;
  let raf = null, lastTime = 0;
  let pageUrls = [];
  let loadedImages = {};

  // DOM Elements
  let wrap, stage, sb3d, book, capBox, hint, plateList, pbCounter;
  let loupe, loupeLens, zoomWrap, zoomInner, zRead, loupeBtn, zInBtn, zOutBtn;

  // View state (3D tilt & zoom)
  const TILT_X = 4.5, TILT_Y = 7.0;
  const ZOOM_MIN = 0.88, ZOOM_MAX = 1.45;
  const view = { rx: 0, ry: 0, z: 1, trx: 0, try_: 0, tz: 1 };
  let viewActive = false;
  let lastZ = 1;

  // Dragging state
  let drag = null;

  // Loupe state
  let loupeOn = true;
  let lx = null, ly = null, lgrab = null, lTarget = null;

  // ── Preload Image Assets ──
  async function preloadAssets() {
    const promises = PROJECTS.map(p => {
      if (!p.previewImg) return Promise.resolve();
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => { loadedImages[p.id] = img; resolve(); };
        img.onerror = () => { resolve(); };
        img.src = p.previewImg;
      });
    });
    await Promise.all(promises);
  }

  // ── Natural White Architectural Paper & Editorial Canvas Generator ──
  function renderAllSpreads() {
    const W = 1760;
    const H = 1120;
    pageUrls = [];

    PROJECTS.forEach((proj, pIdx) => {
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      const ctx = c.getContext('2d');

      // 1. Pristine Natural White Architectural Paper (Warm Vellum Tone)
      const bgGrad = ctx.createLinearGradient(0, 0, W, H);
      bgGrad.addColorStop(0, '#ffffff');
      bgGrad.addColorStop(0.35, '#fafaf7');
      bgGrad.addColorStop(0.7, '#f7f6f2');
      bgGrad.addColorStop(1, '#f4f3ec');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Delicate studio illumination wash (soft warm highlights, never muddy)
      const washGrad = ctx.createRadialGradient(W / 2, H / 2, 80, W / 2, H / 2, W * 0.75);
      washGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      washGrad.addColorStop(0.55, 'rgba(255, 255, 255, 0.4)');
      washGrad.addColorStop(1, 'rgba(238, 235, 228, 0.25)');
      ctx.fillStyle = washGrad;
      ctx.fillRect(0, 0, W, H);

      // Fine Editorial Architectural Ruling & Framing Borders
      drawNaturalPageBorders(ctx, 42, 42, 838, 1078);      // Left page
      drawNaturalPageBorders(ctx, 882, 42, 1678, 1078);    // Right page

      // Center Book Binding Crease & Natural Shadow
      const spineGrad = ctx.createLinearGradient(830, 0, 930, 0);
      spineGrad.addColorStop(0, 'rgba(20, 18, 16, 0)');
      spineGrad.addColorStop(0.38, 'rgba(20, 18, 16, 0.08)');
      spineGrad.addColorStop(0.5, 'rgba(20, 18, 16, 0.28)');
      spineGrad.addColorStop(0.62, 'rgba(20, 18, 16, 0.08)');
      spineGrad.addColorStop(1, 'rgba(20, 18, 16, 0)');
      ctx.fillStyle = spineGrad;
      ctx.fillRect(830, 0, 100, H);

      // Spine Stitches (Warm Ochre Linen Thread)
      for (let y = 80; y < H - 70; y += 72) {
        ctx.fillStyle = 'rgba(180, 130, 75, 0.4)';
        ctx.fillRect(879, y, 2, 16);
        ctx.fillStyle = '#b4824b';
        ctx.beginPath();
        ctx.arc(880, y + 8, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── LEFT PAGE: Editorial Story & Technical Pedigree ──
      drawNaturalLeftPage(ctx, proj, pIdx);

      // ── RIGHT PAGE: UI Screenshot / Visual Schematic ──
      drawNaturalRightPage(ctx, proj, pIdx);

      pageUrls.push(c.toDataURL('image/jpeg', 0.94));
    });
  }

  function drawNaturalPageBorders(ctx, x1, y1, x2, y2) {
    // Outer hairline
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.09)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);

    // Inner subtle guide
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.04)';
    ctx.strokeRect(x1 + 6, y1 + 6, (x2 - x1) - 12, (y2 - y1) - 12);

    // Minimalist corner crop marks
    const bLen = 14;
    ctx.strokeStyle = 'rgba(180, 130, 75, 0.7)';
    ctx.lineWidth = 1.5;

    // Top-Left
    ctx.beginPath(); ctx.moveTo(x1, y1 + bLen); ctx.lineTo(x1, y1); ctx.lineTo(x1 + bLen, y1); ctx.stroke();
    // Top-Right
    ctx.beginPath(); ctx.moveTo(x2 - bLen, y1); ctx.lineTo(x2, y1); ctx.lineTo(x2, y1 + bLen); ctx.stroke();
    // Bottom-Left
    ctx.beginPath(); ctx.moveTo(x1, y2 - bLen); ctx.lineTo(x1, y2); ctx.lineTo(x1 + bLen, y2); ctx.stroke();
    // Bottom-Right
    ctx.beginPath(); ctx.moveTo(x2 - bLen, y2); ctx.lineTo(x2, y2); ctx.lineTo(x2, y2 - bLen); ctx.stroke();
  }

  function drawNaturalLeftPage(ctx, proj, pIdx) {
    const leftMargin = 85;
    const contentW = 710;

    // Header Kicker
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText(`FOLIO ${proj.number} // ${proj.category}`, leftMargin, 100);

    // Huge Watermark Number (Instrument Serif)
    ctx.font = '400 140px "Instrument Serif", Georgia, serif';
    ctx.fillStyle = 'rgba(28, 25, 23, 0.045)';
    ctx.textAlign = 'right';
    ctx.fillText(proj.number, leftMargin + contentW, 204);
    ctx.textAlign = 'left';

    // Lovely Project Title (Instrument Serif)
    ctx.font = '400 54px "Instrument Serif", Georgia, serif';
    ctx.fillStyle = '#1c1917';
    ctx.fillText(proj.title, leftMargin, 172);

    // Subtitle (Newsreader Italic)
    ctx.font = 'italic 400 20px "Newsreader", Georgia, serif';
    ctx.fillStyle = '#57534e';
    wrapText(ctx, proj.subtitle, leftMargin, 214, contentW, 27);

    // Meta Badge Container Pill (Dates, Role, and Dynamic Status Badge)
    const metaY = 280;
    ctx.fillStyle = 'rgba(28, 25, 23, 0.035)';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.10)';
    ctx.lineWidth = 1;
    roundRect(ctx, leftMargin, metaY, contentW, 38, 6, true, true);

    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText(`TIMELINE: ${proj.dates}`, leftMargin + 16, metaY + 24);

    ctx.fillStyle = '#292524';
    ctx.fillText(`ROLE: ${proj.role}`, leftMargin + 270, metaY + 24);

    // Dynamic Status Badge (Right-aligned inside container - GUARANTEED NEVER OVERFLOWS CONTAINER!)
    drawStatusBadge(ctx, leftMargin + contentW, metaY + 7, proj.statusBadge);

    // Fine Divider Rule
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.10)';
    ctx.beginPath();
    ctx.moveTo(leftMargin, metaY + 56);
    ctx.lineTo(leftMargin + contentW, metaY + 56);
    ctx.stroke();

    // Section 1: Editorial Overview (Newsreader)
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// ARCHITECTURAL OVERVIEW & PROBLEM STATEMENT', leftMargin, metaY + 86);

    let curY = metaY + 118;
    ctx.font = '400 17.5px "Newsreader", Georgia, serif';
    ctx.fillStyle = '#292524';

    proj.descParagraphs.forEach((pText) => {
      curY = wrapText(ctx, pText, leftMargin, curY, contentW, 28);
      curY += 16;
    });

    // Section 2: Key Telemetry & Invariants
    const mBoxY = 745;
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// VERIFIED SYSTEM BENCHMARKS', leftMargin, mBoxY - 14);

    const mBoxW = (contentW - 24) / 3;
    proj.metrics.forEach((m, i) => {
      const bx = leftMargin + i * (mBoxW + 12);
      const by = mBoxY;

      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.12)';
      roundRect(ctx, bx, by, mBoxW, 94, 8, true, true);

      // Earth accent bar
      ctx.fillStyle = '#b4824b';
      ctx.fillRect(bx + 14, by + 16, 26, 3);

      // Scaled value to guarantee perfect fitting
      fitText(ctx, m.val, mBoxW - 28, 30, '"Instrument Serif", Georgia, serif');
      ctx.fillStyle = '#1c1917';
      ctx.fillText(m.val, bx + 14, by + 56);

      ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
      ctx.fillStyle = '#78716c';
      ctx.fillText(m.label, bx + 14, by + 78);
    });

    // Left Page Footer
    ctx.font = '500 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = 'rgba(28, 25, 23, 0.42)';
    ctx.fillText('PRATHAMESH PATEL // FOLIO EDITION 2026', leftMargin, 1025);
    ctx.fillText('HIGH-FREQUENCY SPATIAL LAB • ARCHIVE VOL. 01', leftMargin, 1045);
  }

  // Dynamic helper: measures text and right-aligns badge inside the container
  function drawStatusBadge(ctx, containerRightX, by, text) {
    ctx.font = '700 10px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    const tW = ctx.measureText(text).width;
    const bW = tW + 28;
    const bH = 24;
    const bx = containerRightX - bW - 12; // Pinned with 12px padding inside right boundary

    ctx.fillStyle = 'rgba(42, 157, 143, 0.12)';
    ctx.strokeStyle = '#2a9d8f';
    ctx.lineWidth = 1;
    roundRect(ctx, bx, by, bW, bH, 100, true, true);

    ctx.fillStyle = '#2a9d8f';
    ctx.beginPath();
    ctx.arc(bx + 11, by + bH / 2, 3.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#1b635a';
    ctx.fillText(text, bx + 20, by + 16);
  }

  // Auto-fit font size for metric boxes
  function fitText(ctx, text, maxWidth, startFontSize, fontFace) {
    let size = startFontSize;
    ctx.font = `${size}px ${fontFace}`;
    while (ctx.measureText(text).width > maxWidth && size > 14) {
      size -= 1;
      ctx.font = `${size}px ${fontFace}`;
    }
    return size;
  }

  function drawNaturalRightPage(ctx, proj, pIdx) {
    const rx = 930;
    const rw = 745;
    const ry = 95;
    const rh = 905;

    // Right Header
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// ARCHITECTURAL SCHEMATIC & PRODUCTION OVERVIEW', rx, 80);

    // Frame Outer Box (Clean Natural Drawing Board)
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.14)';
    ctx.lineWidth = 1.2;
    roundRect(ctx, rx, ry, rw, rh, 10, true, true);

    // Header titlebar
    ctx.fillStyle = '#f8f7f4';
    roundRect(ctx, rx, ry, rw, 40, 10, true, false);
    ctx.fillRect(rx, ry + 20, rw, 20);

    ctx.strokeStyle = 'rgba(28, 25, 23, 0.10)';
    ctx.beginPath();
    ctx.moveTo(rx, ry + 40);
    ctx.lineTo(rx + rw, ry + 40);
    ctx.stroke();

    // Window Dots
    ctx.fillStyle = '#e07a5f';
    ctx.beginPath(); ctx.arc(rx + 22, ry + 20, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#e9c46a';
    ctx.beginPath(); ctx.arc(rx + 38, ry + 20, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#2a9d8f';
    ctx.beginPath(); ctx.arc(rx + 54, ry + 20, 5, 0, Math.PI * 2); ctx.fill();

    // Window Title
    ctx.font = '500 11.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#57534e';
    ctx.fillText(`console@prathamesh:~/${proj.id}$ --spec`, rx + 80, ry + 24);

    // Status Pill in Titlebar
    const statusText = 'VERIFIED PRODUCTION SPEC';
    ctx.font = '700 9.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    const stW = ctx.measureText(statusText).width;
    const stX = rx + rw - stW - 32;

    ctx.fillStyle = 'rgba(42, 157, 143, 0.12)';
    ctx.strokeStyle = '#2a9d8f';
    roundRect(ctx, stX, ry + 9, stW + 22, 22, 100, true, true);

    ctx.fillStyle = '#2a9d8f';
    ctx.beginPath(); ctx.arc(stX + 8, ry + 20, 3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#1e685f';
    ctx.fillText(statusText, stX + 15, ry + 24);

    // ── SPECIFIC RIGHT PAGE CONTENT ──
    if (proj.schematicType === 'insightforge_custom') {
      drawInsightForgeCustomPage(ctx, rx + 24, ry + 56, rw - 48, rh - 80, proj);
    } else if (proj.schematicType === 'careerplus') {
      drawCareerPlusNatural(ctx, rx + 24, ry + 60, rw - 48, rh - 160);
    } else if (proj.schematicType === 'aircanvas') {
      drawAirCanvasNatural(ctx, rx + 24, ry + 60, rw - 48, rh - 160);
    } else if (proj.schematicType === 'netflix') {
      drawNetflixNatural(ctx, rx + 24, ry + 60, rw - 48, rh - 160);
    } else if (proj.schematicType === 'orbit') {
      drawOrbitNatural(ctx, rx + 24, ry + 60, rw - 48, rh - 160);
    }

    // Call-to-action button placeholder for Orbit or other projects
    if (proj.liveUrl) {
      const btnY = ry + rh - 76;
      ctx.fillStyle = '#2a9d8f';
      ctx.strokeStyle = '#1e685f';
      ctx.lineWidth = 1.5;
      roundRect(ctx, rx + 24, btnY, rw - 48, 50, 8, true, true);

      ctx.font = '700 12.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ LAUNCH LIVE CONTROL TOWER & INTERACTIVE DEMO ↗', rx + rw / 2, btnY + 31);
      ctx.textAlign = 'left';
    }

    // Right Page Footer
    ctx.font = '500 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = 'rgba(28, 25, 23, 0.42)';
    ctx.fillText(`PAGE 0${pIdx + 1} OF 05 // SPECIFICATION AUDIT COMPLETE`, rx + 24, 1030);
  }

  // ── InsightForge: AI Generated Website Photo + Categorized Tech Stack ──
  function drawInsightForgeCustomPage(ctx, sx, sy, sw, sh, proj) {
    // 1. Header above image
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// ENTERPRISE ANALYTICS DASHBOARD INTERFACE', sx, sy + 14);

    // 2. AI Generated UI Mockup Image
    const imgY = sy + 28;
    const imgW = sw;
    const imgH = 370;

    const img = loadedImages[proj.id];
    if (img) {
      ctx.shadowColor = 'rgba(28, 25, 23, 0.16)';
      ctx.shadowBlur = 16;
      ctx.shadowOffsetY = 6;

      ctx.save();
      ctx.beginPath();
      roundRect(ctx, sx, imgY, imgW, imgH, 8, false, false);
      ctx.clip();
      ctx.drawImage(img, sx, imgY, imgW, imgH);
      ctx.restore();

      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      ctx.strokeStyle = 'rgba(28, 25, 23, 0.14)';
      ctx.lineWidth = 1;
      roundRect(ctx, sx, imgY, imgW, imgH, 8, false, true);
    } else {
      ctx.fillStyle = '#faf9f6';
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.14)';
      roundRect(ctx, sx, imgY, imgW, imgH, 8, true, true);
      ctx.font = 'italic 16px "Newsreader", serif';
      ctx.fillStyle = '#78716c';
      ctx.textAlign = 'center';
      ctx.fillText('InsightForge Dashboard Preview Rendering...', sx + imgW / 2, imgY + imgH / 2);
      ctx.textAlign = 'left';
    }

    // Image Caption
    ctx.font = 'italic 13.5px "Newsreader", Georgia, serif';
    ctx.fillStyle = '#57534e';
    ctx.fillText(proj.previewCaption, sx + 4, imgY + imgH + 22);

    // 3. Categorized Tech Stack Grid
    const techStartY = imgY + imgH + 52;
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// COMPLETE TECHNOLOGICAL ARSENAL & RUNTIME INFRASTRUCTURE', sx, techStartY);

    const techBoxY = techStartY + 16;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.12)';
    roundRect(ctx, sx, techBoxY, sw, 305, 8, true, true);

    let catY = techBoxY + 30;
    proj.techCategories.forEach((cat, idx) => {
      // Category pill / header
      ctx.font = '700 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
      ctx.fillStyle = '#b4824b';
      ctx.fillText(`0${idx + 1} // ${cat.category.toUpperCase()}`, sx + 18, catY);

      // Stack details
      ctx.font = '400 14.5px "Newsreader", Georgia, serif';
      ctx.fillStyle = '#1c1917';
      wrapText(ctx, cat.stack, sx + 18, catY + 22, sw - 36, 22);

      catY += 68;

      if (idx < proj.techCategories.length - 1) {
        ctx.strokeStyle = 'rgba(28, 25, 23, 0.08)';
        ctx.beginPath();
        ctx.moveTo(sx + 18, catY - 14);
        ctx.lineTo(sx + sw - 18, catY - 14);
        ctx.stroke();
      }
    });
  }

  // ── Natural Drawing: CareerPlus ──
  function drawCareerPlusNatural(ctx, sx, sy, sw, sh) {
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// ATS RESUME EVALUATION & VIDEO SENTIMENT GAUGING', sx, sy + 14);

    // Circular ATS Match Gauge
    const gaugeX = sx + 120;
    const gaugeY = sy + 140;
    const gaugeR = 70;

    ctx.strokeStyle = 'rgba(28, 25, 23, 0.08)';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(gaugeX, gaugeY, gaugeR, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#2a9d8f';
    ctx.beginPath();
    ctx.arc(gaugeX, gaugeY, gaugeR, -Math.PI / 2, Math.PI * 1.38);
    ctx.stroke();

    ctx.font = '400 38px "Instrument Serif", Georgia, serif';
    ctx.fillStyle = '#1c1917';
    ctx.textAlign = 'center';
    ctx.fillText('94.2%', gaugeX, gaugeY + 8);
    ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#2a9d8f';
    ctx.fillText('ATS FIT SCORE', gaugeX, gaugeY + 28);
    ctx.textAlign = 'left';

    // Candidate Extraction Card
    const cCardX = sx + 245;
    const cCardW = sw - 245;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.12)';
    roundRect(ctx, cCardX, sy + 58, cCardW, 168, 6, true, true);

    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('DOC: FullStack_AI_Engineer_CV.pdf', cCardX + 16, sy + 88);

    ctx.font = 'italic 14px "Newsreader", Georgia, serif';
    ctx.fillStyle = '#57534e';
    ctx.fillText('Vector Cosine Match vs Senior AI Role: 0.942 / 1.000', cCardX + 16, sy + 112);

    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#1c1917';
    ctx.fillText('EXTRACTED COMPETENCIES (42 TOTAL):', cCardX + 16, sy + 142);
    ctx.font = '400 13.5px "Newsreader", Georgia, serif';
    ctx.fillStyle = '#292524';
    ctx.fillText('React, Node.js, FastAPI, MediaPipe, Three.js, Docker, WebSockets, Python', cCardX + 16, sy + 166);
    ctx.fillStyle = '#2a9d8f';
    ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillText('✓ Top 1% Percentile Verified Candidate', cCardX + 16, sy + 200);

    // Audio & Facial Sentiment Waveform HUD
    const waveY = sy + 265;
    ctx.fillStyle = '#faf9f6';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.10)';
    roundRect(ctx, sx, waveY, sw, 270, 6, true, true);

    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// REAL-TIME FACIAL SENTIMENT & CADENCE TELEMETRY', sx + 16, waveY + 30);

    for (let i = 0; i < 44; i++) {
      const bx = sx + 28 + i * (sw - 56) / 44;
      const bH = Math.sin(i * 0.35) * 45 + Math.cos(i * 0.7) * 25 + 50;
      ctx.fillStyle = i % 2 === 0 ? '#2a9d8f' : '#b4824b';
      ctx.fillRect(bx, waveY + 150 - bH / 2, 6, bH);
    }

    ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#2a9d8f';
    ctx.fillText('CONFIDENCE CADENCE: 96.8% • JITTER: 0.02ms • STRIPE RECURRING BILLING: ACTIVE', sx + 16, waveY + 242);
  }

  // ── Natural Drawing: AirCanvas ──
  function drawAirCanvasNatural(ctx, sx, sy, sw, sh) {
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// MEDIAPIPE HANDS 21-JOINT SKELETAL TOPOGRAPHY (60 FPS CV)', sx, sy + 14);

    const canY = sy + 40;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.12)';
    roundRect(ctx, sx, canY, sw, 510, 8, true, true);

    const joints = [
      { x: 0.50, y: 0.85 }, // 0: Wrist
      { x: 0.42, y: 0.75 }, { x: 0.36, y: 0.65 }, { x: 0.32, y: 0.55 }, { x: 0.30, y: 0.45 },
      { x: 0.45, y: 0.58 }, { x: 0.44, y: 0.44 }, { x: 0.43, y: 0.33 }, { x: 0.42, y: 0.22 },
      { x: 0.51, y: 0.56 }, { x: 0.51, y: 0.42 }, { x: 0.51, y: 0.30 }, { x: 0.51, y: 0.18 },
      { x: 0.57, y: 0.58 }, { x: 0.58, y: 0.46 }, { x: 0.59, y: 0.35 }, { x: 0.60, y: 0.25 },
      { x: 0.63, y: 0.62 }, { x: 0.65, y: 0.52 }, { x: 0.67, y: 0.44 }, { x: 0.69, y: 0.36 }
    ];

    const cx = sx + sw * 0.45;
    const cy = canY + 230;
    const scale = 360;

    const bones = [
      [0,1],[1,2],[2,3],[3,4],
      [0,5],[5,6],[6,7],[7,8],
      [0,9],[9,10],[10,11],[11,12],
      [0,13],[13,14],[14,15],[15,16],
      [0,17],[17,18],[18,19],[19,20],
      [5,9],[9,13],[13,17]
    ];

    ctx.strokeStyle = 'rgba(180, 130, 75, 0.45)';
    ctx.lineWidth = 3;
    bones.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(cx + (joints[a].x - 0.5) * scale, cy + (joints[a].y - 0.5) * scale);
      ctx.lineTo(cx + (joints[b].x - 0.5) * scale, cy + (joints[b].y - 0.5) * scale);
      ctx.stroke();
    });

    // Pinch Vector
    const p1x = cx + (joints[4].x - 0.5) * scale;
    const p1y = cy + (joints[4].y - 0.5) * scale;
    const p2x = cx + (joints[8].x - 0.5) * scale;
    const p2y = cy + (joints[8].y - 0.5) * scale;

    ctx.strokeStyle = '#e07a5f';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Callout Box
    ctx.fillStyle = 'rgba(224, 122, 95, 0.12)';
    ctx.strokeStyle = '#e07a5f';
    roundRect(ctx, p2x + 15, p2y - 25, 230, 48, 6, true, true);
    ctx.font = '700 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b84a32';
    ctx.fillText('PINCH DETECTED (DIST: 0.038)', p2x + 25, p2y - 6);
    ctx.fillStyle = '#1c1917';
    ctx.fillText('DRAWING STROKE BUFFER ACTIVE', p2x + 25, p2y + 12);

    joints.forEach((j, i) => {
      const jx = cx + (j.x - 0.5) * scale;
      const jy = cy + (j.y - 0.5) * scale;
      ctx.fillStyle = (i === 4 || i === 8) ? '#e07a5f' : '#2a9d8f';
      ctx.beginPath();
      ctx.arc(jx, jy, (i === 4 || i === 8) ? 6.5 : 4.5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.strokeStyle = '#2a9d8f';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(sx + 80, canY + 440);
    ctx.bezierCurveTo(sx + 180, canY + 380, sx + 280, canY + 480, sx + 380, canY + 410);
    ctx.stroke();

    ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#2a9d8f';
    ctx.fillText('KALMANN FILTER: 98.4% JITTER ELIMINATED • 60.0 FPS LOCKED IN-BROWSER', sx + 20, canY + 490);
  }

  // ── Natural Drawing: Netflix Global EDA ──
  function drawNetflixNatural(ctx, sx, sy, sw, sh) {
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// GLOBAL CATALOG DISTRIBUTION & STRATEGIC CONTENT EDA', sx, sy + 14);

    const barY = sy + 50;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.12)';
    roundRect(ctx, sx, barY, sw, 230, 6, true, true);

    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#1c1917';
    ctx.fillText('TOP PRODUCTION HUBS & CONTENT TYPES (MOVIES VS TV SHOWS)', sx + 18, barY + 28);

    const categories = [
      { name: 'United States', movies: 72, tv: 28 },
      { name: 'India (Bollywood)', movies: 88, tv: 12 },
      { name: 'United Kingdom', movies: 54, tv: 46 },
      { name: 'South Korea (K-Drama)', movies: 32, tv: 68 },
      { name: 'Japan (Anime)', movies: 40, tv: 60 }
    ];

    categories.forEach((cat, idx) => {
      const cy = barY + 58 + idx * 32;
      ctx.font = '500 11.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
      ctx.fillStyle = '#44403c';
      ctx.fillText(cat.name, sx + 18, cy + 12);

      const barStartX = sx + 215;
      const maxBW = sw - 280;

      ctx.fillStyle = '#e07a5f';
      ctx.fillRect(barStartX, cy, (cat.movies / 100) * maxBW, 16);

      ctx.fillStyle = '#2a9d8f';
      ctx.fillRect(barStartX + (cat.movies / 100) * maxBW, cy, (cat.tv / 100) * maxBW, 16);
    });

    const curveY = barY + 255;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.12)';
    roundRect(ctx, sx, curveY, sw, 240, 6, true, true);

    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// CATALOG ACQUISITION DENSITY VELOCITY (2010 – 2025)', sx + 18, curveY + 28);

    ctx.strokeStyle = '#b4824b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sx + 30, curveY + 190);
    ctx.bezierCurveTo(sx + 180, curveY + 185, sx + 320, curveY + 65, sx + sw - 60, curveY + 110);
    ctx.stroke();

    ctx.fillStyle = 'rgba(180, 130, 75, 0.10)';
    ctx.lineTo(sx + sw - 60, curveY + 190);
    ctx.lineTo(sx + 30, curveY + 190);
    ctx.fill();

    ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#2a9d8f';
    ctx.fillText('EXECUTIVE INSIGHT: Q4 HOLIDAY SURGE YIELDS +42% RETENTION ACROSS REGIONS', sx + 18, curveY + 215);
  }

  // ── Natural Drawing: ORBIT Control Tower ──
  function drawOrbitNatural(ctx, sx, sy, sw, sh) {
    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#2a9d8f';
    ctx.fillText('// ORBIT — 3D SPATIAL LINEAGE & 6-AGENT COGNITIVE LOOP', sx, sy + 14);

    const mapY = sy + 38;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(42, 157, 143, 0.25)';
    roundRect(ctx, sx, mapY, sw, 250, 8, true, true);

    const nodes = [
      { x: 0.14, y: 0.35, tier: 'Bronze API Stream', status: '#2a9d8f' },
      { x: 0.22, y: 0.70, tier: 'Bronze Transact', status: '#2a9d8f' },
      { x: 0.44, y: 0.28, tier: 'Silver Staging', status: '#2a9d8f' },
      { x: 0.48, y: 0.58, tier: 'Quarantine Sandbox', status: '#e9c46a' },
      { x: 0.75, y: 0.32, tier: 'Gold Rev Mart', status: '#2a9d8f' },
      { x: 0.82, y: 0.72, tier: 'Executive KPI DAG', status: '#2a9d8f' }
    ];

    ctx.strokeStyle = 'rgba(42, 157, 143, 0.35)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx + sw * nodes[0].x, mapY + 250 * nodes[0].y);
    ctx.lineTo(sx + sw * nodes[2].x, mapY + 250 * nodes[2].y);
    ctx.lineTo(sx + sw * nodes[4].x, mapY + 250 * nodes[4].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(sx + sw * nodes[1].x, mapY + 250 * nodes[1].y);
    ctx.lineTo(sx + sw * nodes[3].x, mapY + 250 * nodes[3].y);
    ctx.lineTo(sx + sw * nodes[5].x, mapY + 250 * nodes[5].y);
    ctx.stroke();

    nodes.forEach(n => {
      const nx = sx + sw * n.x;
      const ny = mapY + 250 * n.y;

      ctx.fillStyle = n.status;
      ctx.beginPath();
      ctx.arc(nx, ny, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = n.status;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(nx, ny, 13, 0, Math.PI * 2);
      ctx.stroke();

      ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
      ctx.fillStyle = '#1c1917';
      ctx.fillText(n.tier, nx - 35, ny + 28);
    });

    const crewY = mapY + 270;
    ctx.fillStyle = '#faf9f6';
    ctx.strokeStyle = 'rgba(28, 25, 23, 0.12)';
    roundRect(ctx, sx, crewY, sw, 220, 6, true, true);

    ctx.font = '600 11px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#b4824b';
    ctx.fillText('// 6-AGENT AUTONOMOUS RECOVERY LOOP (LANGGRAPH + CLAUDE + PGVECTOR)', sx + 18, crewY + 28);

    const crew = [
      { name: 'SENTINEL', role: '400ms Drift Alert' },
      { name: 'DIAGNOSTICIAN', role: 'pgvector Match' },
      { name: 'SURGEON', role: 'SQL Sandbox Patch' },
      { name: 'AUDITOR', role: 'Invariant 100%' },
      { name: 'SCRIBE', role: 'Auto Postmortem' },
      { name: 'STRATEGIST', role: '$18,450 Saved' }
    ];

    const cw = (sw - 60) / 6;
    crew.forEach((c, idx) => {
      const cx = sx + 16 + idx * (cw + 6);
      const cy = crewY + 48;

      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = 'rgba(42, 157, 143, 0.35)';
      roundRect(ctx, cx, cy, cw, 100, 6, true, true);

      ctx.font = '700 10px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
      ctx.fillStyle = '#2a9d8f';
      ctx.fillText(c.name, cx + 6, cy + 26);

      ctx.font = '400 10px "Newsreader", Georgia, serif';
      ctx.fillStyle = '#57534e';
      ctx.fillText(c.role, cx + 6, cy + 54);

      if (idx < 5) {
        ctx.strokeStyle = '#2a9d8f';
        ctx.beginPath();
        ctx.moveTo(cx + cw, cy + 45);
        ctx.lineTo(cx + cw + 5, cy + 45);
        ctx.stroke();
      }
    });

    ctx.font = '600 10.5px "Plus Jakarta Sans", "Space Grotesk", sans-serif';
    ctx.fillStyle = '#2a9d8f';
    ctx.fillText('✓ INCIDENT RESOLVED IN 4.8 SECONDS • ZERO TRANSACTION LOSS • RECOVERY VERIFIED', sx + 18, crewY + 195);
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, curY);
    return curY;
  }

  function roundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  // ── 3D Book Engine ──
  function el(t, c) {
    const e = document.createElement(t);
    if (c) e.className = c;
    return e;
  }

  function imgEl(i, side) {
    const im = new Image();
    im.className = 'sb-half-img ' + side;
    im.draggable = false;
    im.alt = PROJECTS[i].title;
    im.src = pageUrls[i];
    return im;
  }

  function halfEl(pos, i) {
    const d = el('div', 'sb-half ' + pos);
    d.appendChild(imgEl(i, pos));
    d.appendChild(el('div', 'gutter-shade ' + pos));
    return d;
  }

  function buildCurl(dir, from, to) {
    strips = [];
    const c = el('div', 'curl ' + dir);
    c.style.setProperty('--n', N);
    c.style.setProperty('--span', SPAN);
    let host = c;

    for (let i = 0; i < N; i++) {
      const s = el('div', 'strip');
      s.style.setProperty('--i', i);
      const gut = 'calc(var(--bw) * 0.5)';
      const sw = 'calc(var(--bw) * ' + SPAN + ' / ' + N + ')';
      const A = 'calc(-1 * (' + gut + ' + ' + i + ' * ' + sw + '))';
      const B = 'calc(' + (i + 1) + ' * ' + sw + ' - ' + gut + ')';

      const f = el('div', 'face front'), b = el('div', 'face back');
      const dress = (e, url, px) => {
        e.style.backgroundImage = 'url(' + url + ')';
        e.style.backgroundPositionX = px;
      };

      dress(f, pageUrls[from], dir === 'next' ? A : B);
      dress(b, pageUrls[to], dir === 'next' ? B : A);

      f.appendChild(el('div', 'sh'));
      f.appendChild(el('div', 'gl'));
      b.appendChild(el('div', 'sh'));
      b.appendChild(el('div', 'gl'));

      s.appendChild(f);
      s.appendChild(b);
      if (i === N - 1) s.classList.add('edge');
      host.appendChild(s);
      host = s;
      strips.push(s);
    }
    return c;
  }

  function applyTurn(t) {
    const th = Math.PI * t;
    const beta = BETA * Math.sin(Math.PI * t);
    const D = 180 / Math.PI;
    const tt = th + beta, td = 2 * beta / N;

    sb3d.style.setProperty('--tt', (tt * D).toFixed(2) + 'deg');
    sb3d.style.setProperty('--td', (td * D).toFixed(3) + 'deg');
    sb3d.style.setProperty('--shade', Math.sin(Math.PI * t).toFixed(3));
    fadeCaption(t);

    for (let i = 0; i < strips.length; i++) {
      const l1 = Math.abs(Math.cos(tt - i * td));
      const l2 = Math.abs(Math.cos(tt - (i + 1) * td));
      const st = strips[i].style;
      st.setProperty('--lit', l1.toFixed(3));
      st.setProperty('--a1', ((1 - l1) * 0.65).toFixed(3));
      st.setProperty('--a2', ((1 - l2) * 0.65).toFixed(3));
    }
  }

  function paint() {
    book.textContent = '';
    const proj = PROJECTS[idx];

    if (!turn) {
      const f = el('div', 'sb-full');
      const im = new Image();
      im.src = pageUrls[idx];
      im.alt = proj.title;
      im.draggable = false;
      f.appendChild(im);

      // Interactive Action Layer on top of Right Page (Only if liveUrl or simCmd exists)
      if (proj.liveUrl || proj.simCmd) {
        const overlay = el('div', 'sb-interactive-overlay');
        if (proj.liveUrl) {
          const liveBtn = el('a', 'book-cta-btn live-link');
          liveBtn.href = proj.liveUrl;
          liveBtn.target = '_blank';
          liveBtn.rel = 'noopener';
          liveBtn.innerHTML = '<span class="btn-dot"></span><span>LAUNCH LIVE CONTROL TOWER &nearr;</span>';
          overlay.appendChild(liveBtn);
        }

        if (proj.simCmd) {
          const simBtn = el('button', 'book-cta-btn sim-trigger');
          simBtn.dataset.sim = proj.simCmd;
          simBtn.innerHTML = `<span>▶ ${proj.simLabel}</span>`;
          simBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            triggerSimulator(proj.simCmd);
          });
          overlay.appendChild(simBtn);
        }

        f.appendChild(overlay);
      }

      book.appendChild(f);
      sb3d.style.setProperty('--shade', '0');
    } else {
      const next = turn.dir === 'next';
      book.appendChild(halfEl('left', next ? turn.from : turn.to));
      book.appendChild(halfEl('right', next ? turn.to : turn.from));
      book.appendChild(buildCurl(turn.dir, turn.from, turn.to));
      applyTurn(turn.t);
    }

    // Hit Zones for intuitive page turning
    const a = el('button', 'sb-zone sb-prev');
    const b = el('button', 'sb-zone sb-next');
    a.setAttribute('aria-label', 'Previous project page');
    b.setAttribute('aria-label', 'Next project page');
    book.appendChild(a);
    book.appendChild(b);

    layout();
    caption();
    marks();

    if (typeof syncZoomLayer === 'function') syncZoomLayer();
    if (typeof placeLoupe === 'function') placeLoupe();
  }

  function triggerSimulator(cmd) {
    const simSection = document.getElementById('simulator');
    if (simSection) {
      simSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      if (typeof window.runPortfolioSimulation === 'function') {
        window.runPortfolioSimulation(cmd);
      } else {
        const simBtn = document.querySelector(`.sim-pill[data-cmd="${cmd}"]`);
        if (simBtn) simBtn.click();
      }
    }, 450);
  }

  function caption() {
    capBox.textContent = '';
    capOut = capIn = null;
    if (turn) {
      capOut = el('p', 'sb-caption live');
      capOut.textContent = `${PROJECTS[turn.from].number} • ${PROJECTS[turn.from].title}`;
      capBox.appendChild(capOut);

      capIn = el('p', 'sb-caption live');
      capIn.textContent = `${PROJECTS[turn.to].number} • ${PROJECTS[turn.to].title}`;
      capBox.appendChild(capIn);

      fadeCaption(turn.t);
    } else {
      const p = el('p', 'sb-caption');
      p.innerHTML = `<span class="cap-num">${PROJECTS[idx].number}</span> • <span class="cap-title">${PROJECTS[idx].title}</span> <span class="cap-sub">(${PROJECTS[idx].subtitle})</span>`;
      capBox.appendChild(p);
    }
  }

  let capOut = null, capIn = null;
  function fadeCaption(t) {
    if (!capOut || !capIn) return;
    const out = 1 - Math.max(0, Math.min(1, (t - 0.10) / 0.28));
    const inn = Math.max(0, Math.min(1, (t - 0.56) / 0.30));
    capOut.style.opacity = out.toFixed(3);
    capIn.style.opacity = inn.toFixed(3);
  }

  function layout() {
    sb3d.style.setProperty('--bw', book.clientWidth + 'px');
  }

  // ── Physics Spring Loop ──
  function animateTo(target, onDone, stiff, damp) {
    spring = { kind: 'spring', v: 0, target: target, done: onDone, k: stiff || 160, c: damp || 24 };
    kick();
  }

  function tick(now) {
    raf = null;
    const dt = Math.min(0.032, (now - lastTime) / 1000 || 0.016);
    lastTime = now;

    if (spring && turn) {
      const s = spring;
      const x = turn.t - s.target;
      s.v += (-s.k * x - s.c * s.v) * dt;
      turn.t += s.v * dt;
      if (Math.abs(turn.t - s.target) < 0.002 && Math.abs(s.v) < 0.02) {
        turn.t = s.target;
        spring = null;
        applyTurn(turn.t);
        const d = s.done;
        d && d();
      } else {
        applyTurn(turn.t);
      }
    }

    viewSpring();
    const lmoved = loupeEase();
    if ((spring || viewActive || lmoved) && raf === null) {
      raf = requestAnimationFrame(tick);
    }
  }

  function kick() {
    if (raf === null) {
      lastTime = performance.now();
      raf = requestAnimationFrame(tick);
    }
  }

  // ── 3D View Tilt & Zoom ──
  function applyView() {
    sb3d.style.setProperty('--rx', view.rx.toFixed(2) + 'deg');
    sb3d.style.setProperty('--ry', view.ry.toFixed(2) + 'deg');
    sb3d.style.setProperty('--zoom', view.z.toFixed(3));
    if (view.z !== lastZ) {
      lastZ = view.z;
      if (typeof placeLoupe === 'function') placeLoupe();
    }
  }

  function viewSpring() {
    const e = 0.14;
    let moved = false;
    for (const [k, t] of [['rx', 'trx'], ['ry', 'try_'], ['z', 'tz']]) {
      const d = view[t] - view[k];
      if (Math.abs(d) > 0.0006) {
        view[k] += d * e;
        moved = true;
      } else {
        view[k] = view[t];
      }
    }
    if (moved) applyView();
    viewActive = moved;
    return moved;
  }

  function setView(rx, ry, z) {
    view.trx = Math.max(-TILT_X, Math.min(TILT_X, rx));
    view.try_ = Math.max(-TILT_Y, Math.min(TILT_Y, ry));
    view.tz = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));
    viewActive = true;
    kick();
    syncZoom();
  }

  function tiltTo(cx, cy) {
    if (drag) return;
    const r = book.getBoundingClientRect();
    if (!r.width) return;
    const nx = Math.max(-1, Math.min(1, (cx - (r.left + r.width / 2)) / (r.width * 0.62)));
    const ny = Math.max(-1, Math.min(1, (cy - (r.top + r.height / 2)) / (r.height * 0.9)));
    setView(-ny * TILT_X, nx * TILT_Y, view.tz);
  }

  // ── Pointer Dragging & Page Flipping ──
  function hideHint() {
    if (hint) hint.classList.add('gone');
  }

  function startTurn(dir, t) {
    spring = null;
    if (turn) {
      idx = turn.to;
      turn = null;
    }
    if (typeof shoveLoupe === 'function') shoveLoupe(dir);
    const from = idx;
    turn = { dir: dir, from: from, to: dir === 'next' ? (from + 1) % M : (from - 1 + M) % M, t: t || 0 };
    playFlipAudio();
    paint();
  }

  function commit() {
    if (!turn) return;
    animateTo(1, () => {
      idx = turn.to;
      turn = null;
      paint();
    }, 175, 26);
    kick();
  }

  function cancel() {
    if (!turn) return;
    animateTo(0, () => {
      turn = null;
      paint();
    }, 150, 24);
    kick();
  }

  function step(dir) {
    if (turn) {
      idx = turn.to;
      turn = null;
    }
    startTurn(dir, 0);
    commit();
  }

  function goTo(i) {
    if (i === idx) return;
    if (turn) {
      idx = turn.to;
      turn = null;
    }
    const fwd = (i - idx + M) % M;
    const back = (idx - i + M) % M;
    if (Math.min(fwd, back) === 1) {
      step(fwd === 1 ? 'next' : 'prev');
      return;
    }
    idx = i;
    playFlipAudio();
    paint();
  }

  // ── Tactile Instrument Loupe & Magnifier ──
  function loupeSize() {
    return Math.round(Math.max(170, Math.min(265, book.clientWidth * 0.24)));
  }

  function bookBox() {
    return { x: 0, y: 0, w: book.clientWidth, h: book.clientHeight };
  }

  function restLoupe() {
    const b = bookBox();
    lx = b.x + b.w * 0.88;
    ly = b.y + b.h * 0.85;
    placeLoupe();
  }

  function syncZoomLayer() {
    zoomInner.textContent = '';
    for (const c of book.children) {
      if (c.classList.contains('sb-zone')) continue;
      zoomInner.appendChild(c.cloneNode(true));
    }
  }

  function placeLoupe() {
    if (lx === null) return;
    const B = bookBox(), bw = B.w, bh = B.h;
    if (!bw) return;

    const R = loupeSize() / 2;
    const bez = R * 2 * 0.058;

    loupe.style.setProperty('--lr', R * 2 + 'px');
    loupe.style.transform = 'translate3d(' + (lx - R).toFixed(1) + 'px,' + (ly - R).toFixed(1) + 'px,0)';
    if (loupeOn) loupe.classList.add('on');

    const z = view.z, cx = bw / 2, cy = bh / 2;
    const x0 = cx + (bw * 0.05 - cx) * z, x1 = cx + (bw * 0.95 - cx) * z;
    const y0 = cy + (bh * 0.05 - cy) * z, y1 = cy + (bh * 0.95 - cy) * z;

    const nx = Math.max(x0, Math.min(lx, x1));
    const ny = Math.max(y0, Math.min(ly, y1));
    const inside = (lx > x0 && lx < x1 && ly > y0 && ly < y1)
      ? Math.min(lx - x0, x1 - lx, ly - y0, y1 - ly)
      : -Math.hypot(lx - nx, ly - ny);

    const k = Math.max(0, Math.min(1, (inside + R * 0.3) / (R * 0.55)));
    zoomWrap.style.opacity = (loupeOn ? k : 0).toFixed(3);
    if (k <= 0.002) return;

    const r = (R - bez).toFixed(1);
    const mask = 'radial-gradient(circle ' + r + 'px at ' + lx.toFixed(1) + 'px ' + ly.toFixed(1) + 'px, #000 calc(100% - 1px), transparent 100%)';
    zoomWrap.style.webkitMaskImage = mask;
    zoomWrap.style.maskImage = mask;

    const px = cx + (lx - cx) / z;
    const py = cy + (ly - cy) / z;
    const s = MAG * z;
    zoomInner.style.transform = 'translate(' + (lx - px * s).toFixed(1) + 'px,' + (ly - py * s).toFixed(1) + 'px) scale(' + s.toFixed(4) + ')';
  }

  function shoveLoupe(dir) {
    if (!loupeOn || lx === null || lgrab) return;
    const b = bookBox();
    const nx = (b.w / 2 + (lx - b.x - b.w / 2) / view.z) / b.w;
    const ny = (b.h / 2 + (ly - b.y - b.h / 2) / view.z) / b.h;
    if (nx < 0.02 || nx > 0.98 || ny < 0.05 || ny > 0.95) return;
    lTarget = { x: b.x + b.w * (dir === 'next' ? 0.12 : 0.88), y: b.y + b.h * 0.85 };
    kick();
  }

  function loupeEase() {
    if (!lTarget) return false;
    if (lgrab) { lTarget = null; return false; }
    const dx = lTarget.x - lx, dy = lTarget.y - ly;
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
      lx = lTarget.x; ly = lTarget.y; lTarget = null;
      placeLoupe();
      return false;
    }
    lx += dx * 0.17;
    ly += dy * 0.17;
    placeLoupe();
    return true;
  }

  // ── Audio Feedback ──
  function playFlipAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!window.__folioAudio) window.__folioAudio = new AudioCtx();
      const ctx = window.__folioAudio;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(170, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + 0.24);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);

      const bufSize = Math.floor(ctx.sampleRate * 0.2);
      const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const out = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) out[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = buf;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(380, now + 0.2);
      const nGain = ctx.createGain();
      nGain.gain.setValueAtTime(0.07, now);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      noise.connect(filter);
      filter.connect(nGain);
      nGain.connect(ctx.destination);
      noise.start(now);
    } catch(e) {}
  }

  function syncZoom() {
    if (zRead) zRead.textContent = Math.round(view.tz * 100) + '%';
    if (zOutBtn) zOutBtn.disabled = view.tz <= ZOOM_MIN + 0.001;
    if (zInBtn) zInBtn.disabled = view.tz >= ZOOM_MAX - 0.001;
  }

  function marks() {
    const cur = turn ? turn.to : idx;
    if (plateList) {
      plateList.querySelectorAll('.plate-btn').forEach((b, i) => {
        b.setAttribute('aria-current', i === cur ? 'true' : 'false');
      });
    }
    if (pbCounter) {
      pbCounter.textContent = `${String(cur + 1).padStart(2, '0')} / 05`;
    }
  }

  // ── Init & Event Wiring ──
  async function initBook() {
    wrap = document.getElementById('sbWrap');
    stage = document.getElementById('sbStage');
    sb3d = document.getElementById('sb3d');
    book = document.getElementById('sbBook');
    capBox = document.getElementById('sbCaptions');
    hint = document.getElementById('sbHint');
    plateList = document.getElementById('plateList');
    pbCounter = document.getElementById('pbCounter');

    loupe = document.getElementById('loupe');
    loupeLens = document.getElementById('loupeLens');
    zoomWrap = document.getElementById('zoomWrap');
    zoomInner = document.getElementById('zoomInner');
    zRead = document.getElementById('zRead');
    loupeBtn = document.getElementById('loupeBtn');
    zInBtn = document.getElementById('zIn');
    zOutBtn = document.getElementById('zOut');

    if (!book || !sb3d || !wrap) return;

    // Preload Generated UI image and wait for Google Fonts
    await preloadAssets();
    try {
      if (document.fonts) {
        await Promise.allSettled([
          document.fonts.load('400 54px "Instrument Serif"'),
          document.fonts.load('italic 400 20px "Newsreader"'),
          document.fonts.load('400 17.5px "Newsreader"'),
          document.fonts.load('600 11px "Plus Jakarta Sans"'),
          document.fonts.ready
        ]);
      }
    } catch (e) {}

    // Render Natural White Architectural Paper Canvas Spreads
    renderAllSpreads();

    // Populate Plate Directory List (5 Projects) with Instrument Serif
    if (plateList) {
      plateList.innerHTML = '';
      PROJECTS.forEach((p, i) => {
        const li = el('li', 'plate-item');
        const b = el('button', 'plate-btn');
        b.innerHTML = `
          <span class="pl-num">${p.number}</span>
          <span class="pl-content">
            <span class="pl-title">${p.title}</span>
            <span class="pl-sub">${p.subtitle}</span>
          </span>
          <span class="pl-meta">${p.liveUrl ? '<span class="live-pill">LIVE ↗</span>' : p.dates}</span>
        `;
        b.onclick = () => {
          goTo(i);
          wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
        li.appendChild(b);
        plateList.appendChild(li);
      });
    }

    // Controls
    const leftBtn = document.getElementById('sbLeft');
    const rightBtn = document.getElementById('sbRight');
    if (leftBtn) leftBtn.onclick = () => step('prev');
    if (rightBtn) rightBtn.onclick = () => step('next');

    // Pointer Stage Drag
    stage.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('.book-cta-btn')) return;
      const onBook = e.target.closest('.sb-zone');
      stage.setPointerCapture(e.pointerId);
      hideHint();
      if (!onBook) return;
      const r = book.getBoundingClientRect();
      const dir = (e.clientX - r.left) / r.width > 0.5 ? 'next' : 'prev';
      startTurn(dir, 0);
      drag = { dir: dir, x0: e.clientX, w: r.width, moved: 0, vel: 0, tPrev: performance.now() };
    });

    stage.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x0;
      drag.moved = Math.max(drag.moved, Math.abs(dx));
      const raw = (drag.dir === 'next' ? -dx : dx) / (drag.w * 0.62);
      const t = Math.max(0, Math.min(1, raw));
      const now = performance.now();
      drag.vel = (t - (turn ? turn.t : 0)) / Math.max(0.001, (now - drag.tPrev) / 1000);
      drag.tPrev = now;
      if (turn) {
        turn.t = t;
        applyTurn(t);
      }
    });

    function endDrag(e) {
      if (!drag) return;
      const d = drag;
      drag = null;
      if (!turn) return;
      if (d.moved < 6) {
        commit();
        return;
      }
      const go = turn.t > 0.42 || d.vel > 1.1;
      if (go) commit();
      else cancel();
    }

    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    // 3D Tilt across Stage
    addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      tiltTo(e.clientX, e.clientY);
    }, { passive: true });

    addEventListener('pointerout', (e) => {
      if (!e.relatedTarget) setView(0, 0, view.tz);
    });

    // Double-click stage to reset zoom
    stage.addEventListener('dblclick', () => setView(view.trx, view.try_, 1.0));

    // Keyboard navigation
    addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      e.preventDefault();
      hideHint();
      step(e.key === 'ArrowRight' ? 'next' : 'prev');
    });

    // Loupe Pointer Events
    if (loupe) {
      loupe.addEventListener('pointerdown', (e) => {
        if (!loupeOn || e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        lTarget = null;
        lgrab = { cx: e.clientX, cy: e.clientY, lx0: lx, ly0: ly };
        loupe.classList.add('held');
        loupe.setPointerCapture(e.pointerId);
        hideHint();
      });

      loupe.addEventListener('pointermove', (e) => {
        if (!lgrab) return;
        const b = bookBox(), R = loupeSize() / 2;
        lx = Math.max(b.x - R * 0.7, Math.min(b.x + b.w + R * 0.7, lgrab.lx0 + (e.clientX - lgrab.cx)));
        ly = Math.max(b.y - R * 0.7, Math.min(b.y + b.h + R * 1.0, lgrab.ly0 + (e.clientY - lgrab.cy)));
        placeLoupe();
      });

      function dropLoupe() {
        lgrab = null;
        loupe.classList.remove('held');
      }

      loupe.addEventListener('pointerup', dropLoupe);
      loupe.addEventListener('pointercancel', dropLoupe);
    }

    if (loupeBtn) {
      loupeBtn.onclick = () => {
        loupeOn = !loupeOn;
        loupeBtn.setAttribute('aria-pressed', String(loupeOn));
        loupe.classList.toggle('on', loupeOn);
        if (loupeOn && lx === null) restLoupe();
      };
    }

    if (zInBtn) {
      zInBtn.onclick = () => {
        setView(view.trx, view.try_, view.tz * 1.15);
        hideHint();
      };
    }

    if (zOutBtn) {
      zOutBtn.onclick = () => {
        setView(view.trx, view.try_, view.tz / 1.15);
        hideHint();
      };
    }

    addEventListener('resize', () => {
      layout();
      lx = null;
      restLoupe();
    });

    // Initial Render
    paint();
    applyView();
    syncZoom();
    restLoupe();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBook);
  } else {
    initBook();
  }

})();
