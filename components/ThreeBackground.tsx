'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Particles ──
    const particleCount = 1800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const cyan = new THREE.Color('#00d4c8');
    const white = new THREE.Color('#ffffff');
    const blue = new THREE.Color('#0ea5e9');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      sizes[i] = Math.random() * 1.8 + 0.4;
      const mix = Math.random();
      const col = mix < 0.5 ? cyan.clone().lerp(blue, mix * 2)
                            : cyan.clone().lerp(white, (mix - 0.5) * 2);
      colors[i * 3]     = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3));
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes,     1));

    const mat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // ── Floating torus rings ──
    const rings: THREE.Mesh[] = [];
    const ringColors = [0x00d4c8, 0x0ea5e9, 0x38bdf8];
    for (let i = 0; i < 4; i++) {
      const torusGeo = new THREE.TorusGeometry(
        5 + i * 3.5,
        0.04,
        8,
        100
      );
      const torusMat = new THREE.MeshBasicMaterial({
        color: ringColors[i % 3],
        transparent: true,
        opacity: 0.12 + i * 0.04,
        wireframe: false,
      });
      const torus = new THREE.Mesh(torusGeo, torusMat);
      torus.rotation.x = Math.random() * Math.PI;
      torus.rotation.y = Math.random() * Math.PI;
      torus.userData = {
        speedX: (Math.random() - 0.5) * 0.003,
        speedY: (Math.random() - 0.5) * 0.003,
        speedZ: (Math.random() - 0.5) * 0.002,
      };
      scene.add(torus);
      rings.push(torus);
    }

    // ── Connection lines (sparse) ──
    const linePositions = [];
    const lineCount = 60;
    for (let i = 0; i < lineCount; i++) {
      const x1 = (Math.random() - 0.5) * 80;
      const y1 = (Math.random() - 0.5) * 80;
      const z1 = (Math.random() - 0.5) * 30;
      linePositions.push(x1, y1, z1, x1 + (Math.random()-0.5)*8, y1 + (Math.random()-0.5)*8, z1);
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x00d4c8, transparent: true, opacity: 0.07 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // ── Mouse parallax ──
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Resize ──
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── Animate ──
    let frame: number;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles.rotation.y = t * 0.018;
      particles.rotation.x = t * 0.007;

      camera.position.x += (mouse.x * 4 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 4 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      rings.forEach((r) => {
        r.rotation.x += r.userData.speedX;
        r.rotation.y += r.userData.speedY;
        r.rotation.z += r.userData.speedZ;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}