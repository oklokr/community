import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import { Button, message } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './route'

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(Button)
app.mount('#app')

app.config.globalProperties.$message = message;