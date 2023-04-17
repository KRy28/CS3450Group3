import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import axios from 'axios'
import store from './store';

axios.defaults.baseURL ='http://localhost:3000'

const app = createApp(App);

app.use(router);
app.use(store) 

app.mount("#app");

axios.get('/current/user', { withCredentials: true }).then(user => {
  store.dispatch('setUser', user.data)
})
.catch(() => {})
