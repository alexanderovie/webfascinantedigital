'use client';

import { useEmailForm } from '@/hooks/useEmailForm';
import Image from 'next/image';
import { useState } from 'react';
import auditImage from '../../../public/images/home-page-33/audit-image.webp';
import RevealAnimation from '../animation/RevealAnimation';

const Audit = () => {
  const [showForm, setShowForm] = useState(false);
  const { submitForm, isLoading, isSuccess, error } = useEmailForm({
    endpoint: 'audit',
    onSuccess: () => {
      setShowForm(false);
    },
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      website: formData.get('website') as string,
      currentChallenges: formData.get('challenges') as string,
      goals: formData.get('goals') as string,
    };
    await submitForm(data);
  };

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-x-[165px]">
            <div className="space-y-14">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="text-secondary dark:text-accent">
                    Solicita tu Auditoría Gratuita y recibe un Plan Claro
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60">
                    Expertos en marketing digital para latinos en EE.UU., con estrategias claras y datos que generan
                    impacto.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div>
                  {!showForm ? (
                    <button
                      onClick={() => setShowForm(true)}
                      className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md">
                      Solicitar Auditoría Gratuita
                    </button>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre completo"
                          required
                          className="input-field"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="input-field"
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Teléfono"
                          className="input-field"
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="Empresa"
                          className="input-field"
                        />
                      </div>
                      <input
                        type="url"
                        name="website"
                        placeholder="Sitio web (opcional)"
                        className="input-field w-full"
                      />
                      <textarea
                        name="challenges"
                        placeholder="¿Cuáles son tus principales desafíos digitales?"
                        rows={3}
                        className="input-field w-full"
                      />
                      <textarea
                        name="goals"
                        placeholder="¿Qué objetivos quieres lograr?"
                        rows={3}
                        className="input-field w-full"
                      />

                      {error && (
                        <div className="text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                          {error}
                        </div>
                      )}

                      {isSuccess && (
                        <div className="text-green-600 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                          ¡Solicitud enviada! Te contactaremos pronto.
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md flex-1 disabled:opacity-50">
                          {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="btn btn-outline btn-md">
                          Cancelar
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="bg-[#D9D9D9] rounded-2xl overflow-hidden">
                <Image src={auditImage} alt="audit image" className="size-full object-cover" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Audit;
