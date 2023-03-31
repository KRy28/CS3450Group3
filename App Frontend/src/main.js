import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/default.css'

// Vue.component('VueSlider', VueSlider)

//import VCalendar from 'v-calendar';

// import 'v-calendar/lib/v-calendar.min.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
