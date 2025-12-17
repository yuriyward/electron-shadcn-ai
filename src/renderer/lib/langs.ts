/**
 * Supported language definitions
 */
import type { Language } from '@/renderer/lib/language';

export default [
  {
    key: 'en',
    nativeName: 'English',
    prefix: 'EN-US',
  },
  {
    key: 'pt-BR',
    nativeName: 'Português (Brasil)',
    prefix: 'PT-BR',
  },
] as const satisfies Language[];
