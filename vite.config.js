import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})








// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import fs from 'fs';

// export default defineConfig({
//   server: {
//     https: {
//       key: fs.readFileSync('localhost+2-key.pem'),
//       cert: fs.readFileSync('localhost+2.pem'),
//     },
//     host: true,  // This will allow access on your local network
//   },
//   plugins: [react()],
// });



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import fs from 'fs';

// export default defineConfig({
//   server: {
//     https: {
//       key: fs.readFileSync('localhost+2-key.pem'),
//       cert: fs.readFileSync('localhost+2.pem'),
//     },
//     host: true,  // This will allow access on your local network
//     proxy: {
//       '/api': {
//         target: 'https://scanbot.io',
//         changeOrigin: true,  // Avoid host checking issues
//         rewrite: (path) => path.replace(/^\/api/, ''),  // Remove '/api' from the request URL
//         secure: false,  // If the target uses HTTPS and you have issues, try setting this to false
//       },
//     },
//   },
//   plugins: [react()],
// });







// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   server: {
//     // Remove https configuration for HTTP
//     host: true,  // This will allow access on your local network
//     proxy: {
//       '/api': {
//         target: 'https://scanbot.io',
//         changeOrigin: true,  // Avoid host checking issues
//         rewrite: (path) => path.replace(/^\/api/, ''),  // Remove '/api' from the request URL
//         secure: false,  // If the target uses HTTPS and you have issues, try setting this to false
//       },
//     },
//   },
//   plugins: [react()],
// });



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://scanbot.io/wp-json/upc/v1', // Target the API
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the path
//       },
//     },
//   },
// });
