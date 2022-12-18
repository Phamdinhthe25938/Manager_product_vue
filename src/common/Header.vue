<template>
  <div class="table-title">
    <div class="row d-flex justify-content-between" >
      <div class="col-sm-6">
        <h2>Manage <b>Employees</b></h2>
      </div>
      <div>
          <button type="button" @click="changeRouter(menuItem.list)" class="btn btn-default" style="background: aqua">List</button>
          <button type="button" @click="changeRouter(menuItem.add)"  class="btn btn-primary">Add</button>
          <button type="button" @click="changeRouter(menuItem.edit)" class="btn btn-success">Edit</button>
      </div>
<!--      <div class="col-sm-6">-->
<!--        <a-->
<!--            href="#addEmployeeModal"-->
<!--            class="btn btn-success"-->
<!--            data-toggle="modal"-->
<!--        ><i class="material-icons">&#xE147;</i>-->
<!--          <span>Add New Employee</span></a-->
<!--        >-->
<!--        <a-->
<!--            href="#deleteEmployeeModal"-->
<!--            class="btn btn-danger"-->
<!--            data-toggle="modal"-->
<!--        ><i class="material-icons">&#xE15C;</i> <span>Delete</span></a-->
<!--        >-->
<!--      </div>-->
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
