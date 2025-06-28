import Image from "next/image";
import { Metadata } from "next";
import Head from "next/head";

type Props = {
  datos: {
    titulo: string;
    descripcion: string;
    imagenOg: string;
    url: string;
  };
};

export async function getServerSideProps() {
  // Aquí puedes hacer fetch a APIs, DB, etc.
  const datos = {
    titulo: "Mi página SSR en Next.js",
    descripcion: "Esta página se renderiza desde el servidor con metadatos.",
    imagenOg:
      "https://vlbdporkjtogegumkgnk.supabase.co/storage/v1/object/public/images/0.905759224396649.png?cache=false&t=1751067134469", // Debe ser una URL absoluta
    url: "https://tusitio.com/ejemplo",
  };

  return {
    props: { datos }, // Se pasa como props al componente
  };
}

// Generar metadata dinámicamente para cada artículo
// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {

//   // Obtener dimensiones de la imagen

//   // Detectar el tipo MIME de la imagen dinámicamente

//   // Generar múltiples variantes de la imagen
//   //const imageVariants = generateImageVariants(article.image_url);

//   // Crear objetos de imagen con dimensiones dinámicas y tipo MIME correcto
//   const ogImages = [{
//     'https://vlbdporkjtogegumkgnk.supabase.co/storage/v1/object/public/images/0.905759224396649.png?cache=false&t=1751067134469',
//     width: 1200,
//     height: 740,
//     alt: 'NextJS',
//     type: 'image/png',
//     secureUrl: 'https://vlbdporkjtogegumkgnk.supabase.co/storage/v1/object/public/images/0.905759224396649.png?cache=false&t=1751067134469',
//   }];

//   return {
//     title: ` - NExtJS Test`,
//     description: 'NExtJS description',
//     openGraph: {
//       title: 'Title next',
//       description: 'description NExt',
//       siteName: 'Alternativa Socialista',
//       images: ogImages,
//       locale: 'es_CL',
//       type: 'article',
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },

//     other: {
//       // Metadatos adicionales para WhatsApp y otros bots con dimensiones dinámicas y tipo MIME correcto
//       'og:image:secure_url': 'https://vlbdporkjtogegumkgnk.supabase.co/storage/v1/object/public/images/0.905759224396649.png?cache=false&t=1751067134469',
//       'og:image:width': 1200,
//       'og:image:height': 740,
//       'og:image:type': 'iage/png',
//     },
//   };
// }

export default function Home({ datos }: Props) {
  return (
    <>
      <Head>
        <title>{datos.titulo}</title>
        <meta name="description" content={datos.descripcion} />

        {/* Open Graph para compartir en redes */}
        <meta property="og:title" content={datos.titulo} />
        <meta property="og:description" content={datos.descripcion} />
        <meta property="og:image" content={datos.imagenOg} />
        <meta property="og:url" content={datos.url} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
