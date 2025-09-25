import { ReactNode } from 'react';
import { toTitleCase } from '@/utils/titleCase';

interface TitleCaseTextProps {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Componente que aplica Title Case automáticamente al texto
 * Útil para encabezados, botones y cualquier texto que necesite capitalización
 */
const TitleCaseText = ({ children, className = '', as: Component = 'span' }: TitleCaseTextProps) => {
  // Si children es string, aplicar Title Case
  if (typeof children === 'string') {
    return <Component className={className}>{toTitleCase(children)}</Component>;
  }
  
  // Si children es ReactNode, renderizar tal como está
  return <Component className={className}>{children}</Component>;
};

export default TitleCaseText;
