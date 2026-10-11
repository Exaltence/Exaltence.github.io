import { defineConfig } from 'eslint/config';
import ngrx from '@ngrx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default defineConfig([
  ...baseConfig,
  {
    files: ['**/*.ts'],
    extends: [...ngrx.configs.signals, ...ngrx.configs.operators],
  },
]);
