import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import router from 'unplugin-vue-router/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss(),
    router({
      extensions: ['.vue'],
      routesFolder: 'src/views',
    }),
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
  ],
});
