import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="bg-blue-500"> {/* 🔵 Color de prueba para el contenedor del logo */}
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="max-w-[198px] lg:max-w-[198px] h-[34px] sm:h-[34px] bg-green-500 p-1"> {/* 🟢 Color de prueba para el figure */}
          <Image src={mainLogo} alt="Fascinante Digital" className="dark:invert w-full h-full object-contain bg-yellow-500" /> {/* 🟡 Color de prueba para la imagen */}
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
