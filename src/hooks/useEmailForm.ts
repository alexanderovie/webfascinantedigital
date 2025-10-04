'use client';

import { useState } from 'react';
import { ContactFormData, AuditFormData } from '@/lib/email';

export interface UseEmailFormOptions {
  endpoint: string;
  onSuccess?: (data: Record<string, unknown>) => void;
  onError?: (error: string) => void;
}

export const useEmailForm = ({ endpoint, onSuccess, onError }: UseEmailFormOptions) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: Record<string, unknown> | ContactFormData | AuditFormData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setIsSuccess(true);
      onSuccess?.(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError(null);
    setIsLoading(false);
  };

  return {
    submitForm,
    isLoading,
    isSuccess,
    error,
    resetForm,
  };
};
