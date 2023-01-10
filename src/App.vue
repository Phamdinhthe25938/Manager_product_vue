<template>
  <div id="app" class="h-100 overflow-auto w-100">
    <div  class="d-flex justify-content-center">
      <sidebar v-if="showSidebar"></sidebar>
      <div class="w-100 overflow-auto">
        <header-vue v-if="showHeader">
        </header-vue>
        <router-view style="margin: auto;"/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./common/Header.vue";
import Sidebar from "@/common/Sidebar.vue";
import Footer from "./common/Footer.vue";
import AddProduct from "./components/AddProduct/AddProduct.vue";
import Login from "@/common/Login.vue";
import UrlPath from "./constans/path/urlPath";
export default {
  name: "App",
  mounted() {

  },
  data: function () {
    return {
       showHeader: false,
       showSidebar: false
    }
  },
  components: {
    "header-vue": Header,
    "footer-vue": Footer,
    "add-product": AddProduct,
    "login": Login,
    "sidebar": Sidebar,
  },
  watch: {
    $route: {
      handler: function (to, from) {
        const vm = this
        vm.toggleSidebarHeader(to.fullPath)
      }
    }
  },
  methods: {
    toggleSidebarHeader: function (path) {
      const vm = this
      if (localStorage.getItem('username') === null) {
        vm.showHeader = false
        vm.showSidebar= false
      } else {
        vm.showHeader = path !== UrlPath.LOGIN;
        vm.showSidebar = path !== UrlPath.LOGIN;
      }
    }
  }
}

</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.container-xl {
  width: 100vh !important;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
