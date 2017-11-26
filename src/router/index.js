import Vue from "vue";
import Router from "vue-router";
import routerLazy from "@/utils/routerLazy";

Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    name: "Pay",
    component: routerLazy("pay/Pay")
  },
  {
    path: "/PayResult",
    name: "PayResult",
    component: routerLazy("payResult/PayResult")
  }
  ]
});