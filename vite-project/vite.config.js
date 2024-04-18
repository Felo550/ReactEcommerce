import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     // Configura el esbuild loader para que reconozca los archivos .js como .jsx
//     loader: {
//       '.js': 'jsx'
//     }
//   }
// });
