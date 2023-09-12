import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function RotatingShape() {
  const meshRef = useRef();
  const [rotation, setRotation] = React.useState(0);

  useFrame(() => {
    // 매 프레임마다 회전 각도를 업데이트
    //렌더링을 지정한 초마다 실행하는 
    setRotation(rotation + 0.01);
    // mesh를 회전
    meshRef.current.rotation.x = rotation;
    meshRef.current.rotation.y = rotation;
  });

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color={0x00ff00} /> 
      </mesh>


      <OrbitControls />
    </>
  );
}

function App() {
  return (
    <div style={{ height: '100vh',  background: 'black' }}> {/* 페이지의 높이를 전체 뷰포트 높이로 설정 */}
      <Canvas>
        <perspectiveCamera fov={75} near={0.1} far={1000} position={[0, 0, 5]} />

        <ambientLight />
        <pointLight position={[20, 20, 20]} />

        <RotatingShape />
      </Canvas>
    </div>
  );
}

export default App;
