import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //使用路由
import '@/styles/index.scss' //加载全局样式

createApp(App).use(router).mount('#app')
