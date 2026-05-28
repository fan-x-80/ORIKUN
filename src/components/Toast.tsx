import React, { useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function Toast() {
  const { toastMessage, toastVisible, hideToast } = useToast();

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible, hideToast]);

  if (!toastVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg border bg-white border-gold/30">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gold/10">
          <ShoppingCart className="w-4 h-4 text-gold" />
        </div>
        <span className="font-medium text-darkBrown">{toastMessage}</span>
        <button
          onClick={hideToast}
          className="ml-2 text-darkBrown/40 hover:text-darkBrown transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
