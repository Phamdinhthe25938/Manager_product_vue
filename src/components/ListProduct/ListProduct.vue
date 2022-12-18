<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th>
                <span class="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label for="selectAll"></label>
                </span>
      </th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
                <span class="custom-checkbox">
                  <input
                      type="checkbox"
                      id="checkbox1"
                      name="options[]"
                      value="1"
                  />
                  <label for="checkbox1"></label>
                </span>
      </td>
      <td>
        <router-link to="/list/itemDetail"
         :t1="t1"
         :t2="t2"
         @click="clickMe"
        >
          <i class="material-icons" data-toggle="tooltip" title="Edit"
          >&#xE254;
          </i>
        </router-link>
        <router-link to="/list/itemDelete"
          @click="clickDelete(t1)"
        >
          <i class="material-icons"
             data-toggle="tooltip"
             title="Delete"
          >&#xE872;
          </i>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
  <router-view  @clickDelete="clickDelete(t1)">

  </router-view>
</template>

<script>
import ItemDetail from "../../common/ItemDetail.vue";
import ItemDelete from "../../common/ItemDelete.vue";
export default {
  name: "ListProduct",
  components: {
    "item-detail": ItemDetail,
    "item-delete": ItemDelete
  },
  mounted() {
    const vm = this
    vm.t1= "2"
    vm.t2 = "3"
  },
  data: function () {
    return {
      t1: null,
      t2: null,
      isEdit: false,
      detail: false,
      data: null
    }
  },
  methods: {
    clickMe: function () {
      const vm = this
      vm.t1 = 'hello'
      vm.t2 = 'pham dinh the'
    },
    clickDelete: function (a) {
      console.log(a)
      let b = a;
      b = 'the'
      console.log(b)
      console.log(a)
      const vm = this
      vm.data = "2222"
      document.getElementById("selectAll").checked = true
    }
  },
};
</script>

<style scoped></style>
