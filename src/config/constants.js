/* eslint-disable import/prefer-default-export */
import { environment } from './environment';

const STORAGE_KEY = {
  development: 'flashcards-dev',
  production: 'flashcards',
};

export const FLASHCARDS_STORE_KEY = STORAGE_KEY[environment];
