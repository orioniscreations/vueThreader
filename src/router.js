import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login.vue";
import Chat from "@/views/chat.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },

    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({
            name: "Login"
          });
        }
      }
    }
  ]
});
