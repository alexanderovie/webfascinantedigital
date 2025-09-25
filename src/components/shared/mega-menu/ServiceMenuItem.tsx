import { MegaMenuItem as MegaMenuItemType } from '@/data/header';
import Link from 'next/link';

interface ServiceMenuItemProps {
  item: MegaMenuItemType;
}

const ServiceMenuItem = ({ item }: ServiceMenuItemProps) => {
  return (
    <li>
      <Link
        href={item.href}
        className="text-secondary/60 dark:text-accent/60 dark:hover:text-accent hover:text-secondary text-tagline-1 font-normal transition-all duration-200 block py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
        <span>{item.label}</span>
      </Link>
    </li>
  );
};

export default ServiceMenuItem;
