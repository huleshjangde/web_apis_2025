import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const h = 'dsaas';
const had = 'dsaas';
const hd = 'dsaas';
