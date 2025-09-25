# 📝 Guía de Title Case - Fascinante Digital

## 🎯 **¿Qué es Title Case?**

Title Case es un estilo de capitalización donde solo ciertas palabras llevan mayúscula inicial, siguiendo reglas profesionales estándar.

## 📋 **Reglas de Title Case**

### ✅ **Palabras que SIEMPRE van en mayúscula:**
- **Primera palabra** del título
- **Última palabra** del título
- **Palabras principales** (nouns, verbs, adjectives, adverbs)

### ❌ **Palabras que NO van en mayúscula (excepto al inicio):**
- **Artículos:** a, an, the
- **Conjunciones:** and, or, but, nor, for, yet, so
- **Preposiciones:** in, on, at, to, for, of, with, by, from, up, about, into, through, during
- **Palabras auxiliares:** is, are, was, were, be, been, being, have, has, had, do, does, did, will, would, could, should, may, might, must, can, shall

## 🔧 **Cómo usar las utilidades**

### **1. Función básica:**
```typescript
import { toTitleCase } from '@/utils/titleCase';

const title = toTitleCase("reach out to our support team for help");
// Resultado: "Reach Out to Our Support Team for Help"
```

### **2. Hook personalizado:**
```typescript
import { useTitleCase } from '@/utils/titleCase';

const MyComponent = () => {
  const title = useTitleCase("get started today");
  return <h1>{title}</h1>; // "Get Started Today"
};
```

### **3. Componente automático:**
```typescript
import TitleCaseText from '@/components/ui/TitleCaseText';

const MyComponent = () => {
  return (
    <TitleCaseText as="h2" className="text-xl">
      ready to grow smarter?
    </TitleCaseText>
    // Resultado: "Ready to Grow Smarter?"
  );
};
```

### **4. Para objetos y arrays:**
```typescript
import { applyTitleCaseToObject, applyTitleCaseToArray } from '@/utils/titleCase';

const buttonData = {
  title: "get started",
  text: "click here to begin"
};

const processedData = applyTitleCaseToObject(buttonData);
// Resultado: { title: "Get Started", text: "Click Here to Begin" }
```

## 🎨 **Ejemplos de uso correcto**

### **Encabezados:**
- ✅ "Fuel Your Growth with Data-Driven Digital Marketing"
- ✅ "Reach Out to Our Support Team for Help"
- ✅ "Get a Free Audit with a Personalized Plan"

### **Botones:**
- ✅ "Get Started"
- ✅ "Book Your Free Strategy Call"
- ✅ "Learn About Our Approach"
- ✅ "Contact Us"

### **Badges:**
- ✅ "Get Started"
- ✅ "Let's Start"
- ✅ "Services Overview"

## 🚀 **Para el futuro**

Cuando crees nuevos componentes:

1. **Usa el componente `TitleCaseText`** para texto que necesite capitalización
2. **Aplica `toTitleCase()`** a strings dinámicos
3. **Usa `applyTitleCaseToObject()`** para datos de API
4. **Mantén consistencia** en todo el sitio

## 📝 **Checklist de Title Case**

- [ ] Primera palabra en mayúscula
- [ ] Última palabra en mayúscula
- [ ] Palabras principales en mayúscula
- [ ] Palabras menores en minúscula
- [ ] Consistencia en todo el sitio
- [ ] Aplicado a encabezados
- [ ] Aplicado a botones
- [ ] Aplicado a badges

---

**¡Mantén la consistencia profesional en todo el sitio!** 🎯
