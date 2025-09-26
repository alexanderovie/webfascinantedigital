/**
 * Hook para Google Tag Manager
 * Permite enviar eventos personalizados a GTM
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const useGTM = () => {
  const pushToDataLayer = (event: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(event);
    }
  };

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    pushToDataLayer({
      event: eventName,
      ...parameters,
    });
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    pushToDataLayer({
      event: 'page_view',
      page_path: pagePath,
      page_title: pageTitle,
    });
  };

  const trackConversion = (conversionType: string, value?: number, currency = 'USD') => {
    pushToDataLayer({
      event: 'conversion',
      conversion_type: conversionType,
      value: value,
      currency: currency,
    });
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
