import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function RotatingShape() {
  const containerRef = useRef(); // containerRef를 초기화

    useEffect(() => {
    let scene, camera, renderer, cube;

    // Scene 생성
    scene = new THREE.Scene();

    // Camera 생성
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Cube 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Renderer 생성
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
    }

    // 회전 애니메이션 설정
    const animate = () => {
        requestAnimationFrame(animate);

      // 도형 회전
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

    // Clean-up 함수
    return () => {
        renderer.dispose();
        if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        }
    };
    }, []);

    return (
        <div ref={containerRef} />
      );
}

export default RotatingShape;
