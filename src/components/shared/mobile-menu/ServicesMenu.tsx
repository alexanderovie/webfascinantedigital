import { servicesMegaMenuColumns } from '@/data/header';
import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const ServicesMenu = () => {
  return (
    <MobileMenuItem id="services" title="Servicios" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/services"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Todos los Servicios
          </Link>
        </li>
        {servicesMegaMenuColumns.map((column) =>
          column.items.map((service, index) => (
            <li key={service.id}>
              <Link
                href={service.href}
                className={`text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200 ${
                  index < column.items.length - 1 ? 'border-b border-stroke-4 dark:border-stroke-6' : ''
                }`}>
                {service.label}
              </Link>
            </li>
          )),
        )}
      </ul>
    </MobileMenuItem>
  );
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;
