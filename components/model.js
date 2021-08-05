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
    <Suspense
      fallback={
        <div className='w-screen h-screen flex items-center justify-center'>
          <div className='h-20 w-20'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='spinner'
              className='animate-spin'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z'
              ></path>
            </svg>
          </div>
        </div>
      }
    >
      <Canvas className={className}>
        <PerspectiveCamera
          makeDefault
          rotation={transform.rotation.toArray()}
          position={transform.position.toArray()}
        />
        <group position={[0, -1, 0]}>
          <Monke />
          <Environment preset='forest' />
        </group>
      </Canvas>
    </Suspense>
  );
}
