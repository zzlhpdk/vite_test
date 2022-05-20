import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path' //path模块是node.js内置的功能，但是node.js本身并不支持ts,解决方案：安装@types/node
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // define: {
  //   'process.env': {
  //     BASE_API: 'http://39.98.109.19:7788',// 主地址
  //   },
  // },
  resolve: {
    //路径别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // variables里面定义的变量不能被获取，所以要通过指定传递给 CSS 预处理器进行配置处理,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  //跨域
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://39.98.109.19:7788', //代理目标地址
        changeOrigin: true, //兼容基于名字的虚拟主机，代理服务会把orign修改为目标地址
        //路径重写，把api 替换成空
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
