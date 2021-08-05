import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Model from '../components/model';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Page() {
  return (
    <>
      <div className='fixed inset-0'>
        <Model />
      </div>

      <div className='fixed bottom-0 left-0 w-12 h-12 m-4 animate-bounce'>
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='chevron-down'
          className='svg-inline--fa fa-chevron-down fa-w-14'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'
          ></path>
        </svg>
      </div>

      <div className='container mx-auto text-xl text-center'>
        <Section></Section>
        <Section>
          <h1 className='font-bold text-4xl md:text-8xl mb-4'>
            Carambolas Amigo!
          </h1>
          <h2 className='font-bold text-3xl md:text-6xl mb-4'>
            Um macaco está dançando!
          </h2>
        </Section>
        <Section>
          <h2 className='text-3xl md:text-6xl mb-4'>
            Se o macaco está dançando tanto só pode significar uma coisa...
          </h2>
        </Section>
        <Section>
          <h2 className='text-3xl md:text-6xl mb-4'>
            ...hoje é seu fodendo aniversário
          </h2>
        </Section>
        <Section>
          <h2 className='text-3xl md:text-6xl mb-4'>
            Parabéns meu consacrated
          </h2>
        </Section>
        <Section>
          <Image
            width={966}
            height={1288}
            src='/ryan.jpg'
            alt='ryanzin'
            className='p-4'
          />
        </Section>
      </div>
    </>
  );
}

export default function Home() {
  // preload
  const [lights, setLights] = useState(false);

  if (lights) {
    return (
      <div>
        <Head>
          <title>Macaco dançarino</title>
        </Head>
        <Page />
      </div>
    );
  }

  return (
    <div className='h-screen bg-black'>
      <Head>
        <title>Página ultra secreta da dark web</title>
        <meta name='description' content='Jamais entre nesse site' />
      </Head>

      <div className='container mx-auto h-full text-white flex items-center justify-center flex-col md:flex-row'>
        <div>Por que está tão escuro nessa merda desse carai?</div>
        <Image
          src='/switch.png'
          width={550}
          height={550}
          alt='switch'
          className='cursor-pointer'
          onClick={() => setLights(true)}
        />
      </div>
    </div>
  );
}

function Section({ children }) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div>{children}</div>
    </div>
  );
}
