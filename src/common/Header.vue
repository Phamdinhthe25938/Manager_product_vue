<template>
  <div class="table-title" style="margin: 0 !important;">
    <div class="row d-flex justify-content-between" >
      <div class="col-sm-6">
        <h2>Manage <b>Employees</b></h2>
      </div>
      <div>
          <button type="button" @click="changeRouter(menuItem.list)" class="btn btn-default" style="background: aqua">List</button>
          <button type="button" @click="changeRouter(menuItem.add)"  class="btn btn-primary">Add</button>
          <button type="button" @click="changeRouter(menuItem.edit)" class="btn btn-success">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import urlPath from "../constans/path/urlPath";
export default {
  name: "Header",
  data: function () {
    return {
      menuItem : {
        list : urlPath.LIST_PRODUCT,
        edit : urlPath.EDIT_PRODUCT,
        add : urlPath.ADD_PRODUCT
      }
    }
  },
  methods: {
    changeRouter: function (url) {
      const vm = this
      if (vm.$route.fullPath !== url) {
        vm.$router.push(url)
      }
    }
  }
};
</script>

<style scoped></style>
