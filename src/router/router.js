import AddProduct from "../components/AddProduct/AddProduct.vue";
import EditProduct from "../components/EditProduct/EditProduct.vue";
import ListProduct from "../components/ListProduct/ListProduct.vue";
import ItemDetail from "../common/ItemDetail.vue";
import ItemDelete from "../common/ItemDelete.vue";
import Login from "../common/Login.vue";
import urlPath from "../constans/path/urlPath";
import { createRouter, createWebHistory } from "vue-router";

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
      {
      path: "/addProduct",
      name: "AddProduct",
      component: AddProduct,
    },
    {
      path: "/editProduct",
      name: "EditProduct",
      component: EditProduct,
    },
    {
      path: "/list",
      name: "ListProduct",
      component: ListProduct,
      children: [{
        path: "itemDetail",
        name: "ItemDetail",
        component: ItemDetail
      },
      {
        path: "itemDelete",
        name: "ItemDelete",
        component: ItemDelete,
      }
      ]
    }
  ]
});

export default router;
