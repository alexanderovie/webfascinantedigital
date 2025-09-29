import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="w-[153px] h-[34px] md:w-[162px] md:h-[36px] lg:w-[171px] lg:h-[38px]">
          <Image src={mainLogo} alt="Fascinante Digital" className="dark:invert w-full h-full object-contain" />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
