/**
 * Convierte texto a Title Case (estilo título)
 * Aplica las reglas estándar de capitalización para títulos
 */
export function toTitleCase(str: string): string {
  // Palabras menores que NO van en mayúscula (excepto al inicio)
  const minorWords = [
    'a', 'an', 'the',
    'and', 'or', 'but', 'nor', 'for', 'yet', 'so',
    'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'shall'
  ];

  return str
    .toLowerCase()
    .split(' ')
    .map((word, index, array) => {
      // Primera y última palabra siempre en mayúscula
      if (index === 0 || index === array.length - 1) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      
      // Palabras principales en mayúscula
      if (!minorWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      
      // Palabras menores en minúscula
      return word;
    })
    .join(' ');
}

/**
 * Hook para aplicar Title Case automáticamente
 */
export function useTitleCase(text: string): string {
  return toTitleCase(text);
}

/**
 * Aplica Title Case a un objeto con propiedades de texto
 * Útil para títulos, botones, etc.
 */
export function applyTitleCaseToObject<T extends Record<string, unknown>>(obj: T): T {
  const result = { ...obj } as T;
  
  // Propiedades comunes que contienen texto
  const textProperties = ['title', 'heading', 'text', 'label', 'buttonText', 'ctaText', 'badgeText'];
  
  textProperties.forEach(prop => {
    if (result[prop] && typeof result[prop] === 'string') {
      (result as Record<string, unknown>)[prop] = toTitleCase(result[prop] as string);
    }
  });
  
  return result;
}

/**
 * Aplica Title Case a un array de objetos
 */
export function applyTitleCaseToArray<T extends Record<string, unknown>>(arr: T[]): T[] {
  return arr.map(item => applyTitleCaseToObject(item));
}
