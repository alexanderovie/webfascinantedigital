import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¡Gracias por tu Consulta!',
  description: 'Tu consulta estratégica con Fascinante Digital ha sido agendada exitosamente. Te contactaremos pronto.',
  alternates: {
    canonical: '/gracias',
  },
};

const GraciasPage = () => {
  return (
    <>
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7 pt-20 min-h-screen flex items-center justify-center">
        <div className="main-container py-14 md:py-16 lg:py-20 text-center">
          <h1 className="text-heading-1 text-secondary dark:text-accent mb-4">¡Gracias por tu Consulta!</h1>
          <p className="text-secondary/60 max-w-2xl mx-auto mb-8">
            Tu consulta estratégica con Fascinante Digital ha sido agendada exitosamente.
            <br />
            Revisa tu correo electrónico para los detalles de la confirmación.
          </p>
          <Link href="/" className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md">
            Volver a la página de inicio
          </Link>
        </div>
      </main>
      <FooterThree />
    </>
  );
};

export default GraciasPage;
