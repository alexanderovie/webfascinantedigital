import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="max-w-[198px] lg:max-w-[198px] sm:max-w-[150px] max-w-[120px]">
          <Image src={mainLogo} alt="Fascinante Digital" className="dark:invert w-full h-auto" />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
