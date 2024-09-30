import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), svgLoader()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/global.scss";`,
      },
    },
    // Source maps 설정을 추가하려면, 다음을 활성화합니다.
    // sourceMap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@'를 'src' 디렉토리로 설정
    },
  },
})
