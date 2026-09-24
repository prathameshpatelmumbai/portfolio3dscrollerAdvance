/* ═══════════════════════════════════════════════════════════════════════════
   PRATHAMESH PATEL — THREE.JS 3D GLB AVATAR LAB (DRACO OPTIMIZED)
   - TinyGLB CDN Integration (3.16MB Draco + WebP Compressed)
   - Real-time DRACOLoader WASM Geometry Decompression
   - Studio 3-Point PBR Lighting, Soft Shadow Mapping & OrbitControls
   - Dual Viewer Engine: Native Three.js + Embedded TinyGLB Mode
   ═══════════════════════════════════════════════════════════════════════════ */

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

(function() {
  'use strict';

  const container = document.getElementById('canvas3d-container');
  const loadingIndicator = document.getElementById('model-loading-indicator');
  const loadingText = document.getElementById('model-loading-text');

  // Control Buttons
  const toggleWireframeBtn = document.getElementById('toggle-wireframe');
  const toggleAutospinBtn = document.getElementById('toggle-autospin');
  const toggleLightBtn = document.getElementById('toggle-light');
  const resetCameraBtn = document.getElementById('reset-camera');

  if (!container) return;

  // Scene & Camera
  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 1.35, 3.2);

  // WebGL Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.maxDistance = 6.5;
  controls.minDistance = 1.0;
  controls.maxPolarAngle = Math.PI / 1.72;
  controls.target.set(0, 0.95, 0);

  // Studio Lighting System
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xf0f9ff, 2.6);
  keyLight.position.set(3, 4, 3);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
  fillLight.position.set(-3, 2, -1);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xf59e0b, 2.2);
  rimLight.position.set(0, 3, -3.5);
  scene.add(rimLight);

  // State
  let model = null;
  let isWireframe = false;
  let isAutoSpin = true;
  let currentLightingMode = 0;
  const initialCamPos = new THREE.Vector3(0, 1.35, 3.2);
  const initialTarget = new THREE.Vector3(0, 0.95, 0);

  // View Mode Switcher Elements
  const studioBtn = document.getElementById('view-mode-studio');
  const tinyglbBtn = document.getElementById('view-mode-tinyglb');
  const studioCanvasContainer = document.getElementById('canvas3d-container');
  const tinyglbIframeContainer = document.getElementById('tinyglb-iframe-container');
  const tinyglbIframe = document.getElementById('tinyglb-iframe');
  const studioHud = document.getElementById('studio-hud');

  if (studioBtn && tinyglbBtn) {
    studioBtn.addEventListener('click', () => {
      studioBtn.classList.add('active');
      tinyglbBtn.classList.remove('active');
      if (studioCanvasContainer) studioCanvasContainer.style.display = 'block';
      if (studioHud) studioHud.style.display = 'flex';
      if (tinyglbIframeContainer) tinyglbIframeContainer.style.display = 'none';
      if (controls) controls.update();
    });

    tinyglbBtn.addEventListener('click', () => {
      tinyglbBtn.classList.add('active');
      studioBtn.classList.remove('active');
      if (studioCanvasContainer) studioCanvasContainer.style.display = 'none';
      if (studioHud) studioHud.style.display = 'none';
      if (tinyglbIframeContainer) {
        tinyglbIframeContainer.style.display = 'block';
        if (tinyglbIframe && (!tinyglbIframe.src || tinyglbIframe.src === 'about:blank')) {
          tinyglbIframe.src = tinyglbIframe.dataset.src || 'https://viewer.tinyglb.com/3111259274e54b63b2ca8e4dae2b0d48';
        }
      }
    });
  }

  // Configure high-performance DRACOLoader for tinyglb compressed mesh
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

  // Configure GLTFLoader
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  // Load the 3.16MB Draco optimized model (Local identical mirror of tinyglb asset)
  // Fallback to remote TinyGLB CDN if local asset is missing
  const localDracoUrl = 'assets/models/avatar.glb';
  const remoteTinyglbUrl = 'https://cdn.tinyglb.com/models/bf36b16754c34ef394b7a30a0001abf9.glb';

  function loadModel(url, isFallback = false) {
    loadingText.textContent = isFallback ? 'STREAMING REMOTE TINYGLB CDN...' : 'DECODING 3D AVATAR (3.16MB DRACO)...';

    loader.load(
      url,
      (gltf) => {
        model = gltf.scene;

        // Auto-center and normalize scale
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const targetHeight = 2.1;
        const scale = targetHeight / (maxDim || 1);
        model.scale.setScalar(scale);

        model.position.x = -center.x * scale;
        model.position.y = -box.min.y * scale;
        model.position.z = -center.z * scale;

        // Traverse and enhance materials
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.roughness = 0.55;
              child.material.metalness = 0.15;
              child.material.needsUpdate = true;
            }
          }
        });

        scene.add(model);
        loadingIndicator.classList.add('loaded');
        controls.target.set(0, 1.0, 0);
        controls.update();
        console.log('3D Avatar loaded successfully from:', url);
      },
      (xhr) => {
        if (xhr.lengthComputable && xhr.total > 0) {
          const pct = Math.round((xhr.loaded / xhr.total) * 100);
          const loadedMb = (xhr.loaded / (1024 * 1024)).toFixed(1);
          const totalMb = (xhr.total / (1024 * 1024)).toFixed(1);
          loadingText.textContent = `DECODING 3D AVATAR: ${loadedMb}MB / ${totalMb}MB (${pct}%)`;
        } else {
          const mb = (xhr.loaded / (1024 * 1024)).toFixed(1);
          loadingText.textContent = `DECODING 3D ASSET: ${mb} MB...`;
        }
      },
      (error) => {
        console.warn('Error loading asset from:', url, error);
        if (!isFallback) {
          loadModel(remoteTinyglbUrl, true);
        } else {
          loadingText.textContent = '3D MODEL READY (OPEN VIEWER DIRECTLY)';
          createGeometricAvatarFallback();
        }
      }
    );
  }

  loadModel(localDracoUrl);

  function createGeometricAvatarFallback() {
    const group = new THREE.Group();
    const headGeo = new THREE.DodecahedronGeometry(0.55, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.8,
      roughness: 0.2
    });
    const mesh = new THREE.Mesh(headGeo, mat);
    mesh.position.y = 1.2;
    group.add(mesh);
    scene.add(group);
    model = group;
    loadingIndicator.classList.add('loaded');
  }

  // HUD Controls
  if (toggleWireframeBtn) {
    toggleWireframeBtn.addEventListener('click', () => {
      if (!model) return;
      isWireframe = !isWireframe;
      toggleWireframeBtn.classList.toggle('active', isWireframe);
      model.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.wireframe = isWireframe;
        }
      });
    });
  }

  if (toggleAutospinBtn) {
    toggleAutospinBtn.addEventListener('click', () => {
      isAutoSpin = !isAutoSpin;
      toggleAutospinBtn.classList.toggle('active', isAutoSpin);
    });
  }

  if (toggleLightBtn) {
    toggleLightBtn.addEventListener('click', () => {
      currentLightingMode = (currentLightingMode + 1) % 3;
      if (currentLightingMode === 0) {
        toggleLightBtn.textContent = 'STUDIO KEY';
        keyLight.color.setHex(0xf0f9ff);
        fillLight.color.setHex(0x38bdf8);
        rimLight.color.setHex(0xf59e0b);
      } else if (currentLightingMode === 1) {
        toggleLightBtn.textContent = 'CYBER CYAN';
        keyLight.color.setHex(0x06b6d4);
        fillLight.color.setHex(0x8b5cf6);
        rimLight.color.setHex(0x38bdf8);
      } else {
        toggleLightBtn.textContent = 'WARM GOLD';
        keyLight.color.setHex(0xfde68a);
        fillLight.color.setHex(0xf59e0b);
        rimLight.color.setHex(0xffffff);
      }
    });
  }

  if (resetCameraBtn) {
    resetCameraBtn.addEventListener('click', () => {
      camera.position.copy(initialCamPos);
      controls.target.copy(initialTarget);
      controls.update();
    });
  }

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    if (model && isAutoSpin) {
      model.rotation.y += 0.005;
      model.position.y = (model.position.y || 0) + Math.sin(elapsedTime * 1.5) * 0.0003;
    }

    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  // Resize Handling
  window.addEventListener('resize', () => {
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

})();
