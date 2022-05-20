import ElementPlus from 'element-plus' //全局引入element-plus
import 'element-plus/dist/index.css'
import { App } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'// 配置中文

export default {
  install(app: App) {
    app.use(ElementPlus, {
      locale: zhCn,
    })
  },
}
