import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { AnimationMixer, Euler, Vector3 } from 'three';

function Monke(props) {
  const gltf = useLoader(GLTFLoader, '/monkey/scene.gltf');
  const scene = useRef();

  const mixer = useMemo(() => {
    if (!gltf.animations.length) {
      return;
    }

    const _mixer = new AnimationMixer(gltf.scene);
    const action = _mixer.clipAction(gltf.animations[0]);
    action.play();
    return _mixer;
  }, [gltf]);

  useFrame((state, delta) => {
    scene.current.rotation.y += delta;
    mixer?.update(delta);
  });

  return <primitive ref={scene} object={gltf.scene} scale={0.01} />;
}

const startTransform = {
  position: new Vector3(0, 2, 2),
  rotation: new Euler(-Math.PI / 4, 0, 0),
};
export default function Model({ className }) {
  const [transform, setTransform] = useState(startTransform);

  useEffect(() => {
    const onScroll = (event) => {
      const amount = ((window?.scrollY || 0) * Math.PI) / window.innerHeight;

      const position = startTransform.position.clone();
      position.applyEuler(new Euler(amount, 0, 0));

      const rotation = startTransform.rotation.clone();
      rotation.x += amount;

      setTransform({
        position,
        rotation,
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Canvas className={className}>
      <PerspectiveCamera
        makeDefault
        rotation={transform.rotation.toArray()}
        position={transform.position.toArray()}
      />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <Monke />
          <Environment preset='forest' />
        </group>
      </Suspense>
    </Canvas>
  );
}
