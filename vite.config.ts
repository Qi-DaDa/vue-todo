import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 异步
const getAsyncInfo = () => {
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log('12345');
      res('AsyncInfo')
    }, 3000);
  })
}

export default defineConfig(async ({ command, mode }) => {
  const resInfo = await getAsyncInfo()
  console.log(command, mode, resInfo);
  return ({
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      }),
    ],
    server: {
      port: 2023,
      open: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      modules: {
        // css模块化 文件以.module.[css|less|scss]结尾
        generateScopedName: "qq_[local]_[hash:base64:5]",
        // hashPrefix: "prefix",
      },
      preprocessorOptions: {
        scss: {
          // element 样式
          additionalData: `
          @use "@/styles/element/index.scss" as *;
          `,
        },
      },
    },
  }
  )
})
