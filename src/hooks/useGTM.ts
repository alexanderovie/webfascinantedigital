/**
 * Hook para Google Tag Manager
 * Permite enviar eventos personalizados a GTM
 */

declare global {
  interface Window {
    dataLayer: GTMEvent[];
    gtag: (...args: unknown[]) => void;
  }
}

// ✅ Tipos modernos para eventos GTM
interface GTMEvent {
  event: string;
  [key: string]: unknown;
}

interface PageViewEvent extends GTMEvent {
  event: 'page_view';
  page_path: string;
  page_title?: string;
}

interface ConversionEvent extends GTMEvent {
  event: 'conversion';
  conversion_type: string;
  value?: number;
  currency?: string;
}

export const useGTM = () => {
  const pushToDataLayer = (event: GTMEvent) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      try {
        window.dataLayer.push(event);
      } catch (error) {
        console.warn('GTM: Error pushing to dataLayer:', error);
      }
    }
  };

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    pushToDataLayer({
      event: eventName,
      ...parameters,
    });
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    const event: PageViewEvent = {
      event: 'page_view',
      page_path: pagePath,
      page_title: pageTitle,
    };
    pushToDataLayer(event);
  };

  const trackConversion = (conversionType: string, value?: number, currency = 'USD') => {
    const event: ConversionEvent = {
      event: 'conversion',
      conversion_type: conversionType,
      value: value,
      currency: currency,
    };
    pushToDataLayer(event);
  };

  const trackContactForm = (formType: string) => {
    pushToDataLayer({
      event: 'form_submit',
      form_type: formType,
      page_location: window.location.href,
    });
  };

  const trackServiceClick = (serviceName: string, serviceCategory: string) => {
    pushToDataLayer({
      event: 'service_click',
      service_name: serviceName,
      service_category: serviceCategory,
      page_location: window.location.href,
    });
  };

  return {
    pushToDataLayer,
    trackEvent,
    trackPageView,
    trackConversion,
    trackContactForm,
    trackServiceClick,
  };
};

export default useGTM;
