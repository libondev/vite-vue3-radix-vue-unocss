// import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { defineConfig, presetMini } from 'unocss';

export default defineConfig({
  presets: [
    presetMini({
      variablePrefix: '',
    }),
  ],

  transformers: [
    // @apply text-center my-0 font-medium ↓
    // margin-top: 0rem; margin-bottom: 0rem; text-align: center; font-weight: 500;
    // transformerDirectives(),

    // hover:(bg-gray-400 font-medium) font-(light mono) ↓
    // hover:bg-gray-400 hover:font-medium font-light font-mono
    transformerVariantGroup(),
  ],
});
