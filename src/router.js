import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import {redirectLink} from './scripts/api/shorten-api';


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:code',
      component: App,
      name: 'redirect',
      beforeEnter: async (to, from, next) => {
        if (to.params.code) {
          const res = await redirectLink(to.params.code)
          if (res.message){

            to.hash = res
          }else{
            window.location.href = res.original_url;
          }
        }
        next()
        return false
      },
    }
  ],
})
