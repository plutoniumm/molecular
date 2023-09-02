// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig( {
  server: {
    port: 3000
  },
  css: {
    // rgba-hex
    postcss: {
      plugins: [
        require( 'postcss-rgba-hex' )( {
          silent: true
        } )
      ]
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `[name].[ext]`
      }
    }
  },
  base: "/molecular"
} );