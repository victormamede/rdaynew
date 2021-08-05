import Head from 'next/head';
import Model from '../components/model';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página ultra secreta da dark web</title>
        <meta name='description' content='Jamais entre nesse site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
            Se o macaco está dançando tanto só pode significar uma coisa...
          </h2>
        </Section>
      </div>
    </div>
  );
}

function Section({ children }) {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div>{children}</div>
    </div>
  );
}
