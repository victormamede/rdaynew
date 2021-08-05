import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Model from '../components/model';

function Page() {
  return (
    <>
      <div className='fixed inset-0'>
        <Model />
      </div>

      <div className='container mx-auto text-xl text-center'>
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
