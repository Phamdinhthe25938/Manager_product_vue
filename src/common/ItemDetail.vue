<template>
  <table style="background: aqua;min-width: 100%;height: 100px">
    <tr>
      <th><button @click="clickMe"></button></th>
      <th>Gmail</th>
      <th>Address</th>
      <th>Telephone</th>
    </tr>
    <tr>
      <td>{{ t1 }}</td>
      <td>{{ t2 }}</td>
      <td>{{ address }}</td>
      <td>{{ telephone }}</td>
    </tr>
  </table>

</template>
<script >
// import { onMounted, onBeforeMount, onBeforeUnmount, onUnmounted ,} from "vue";
export default {
  name: "ItemDetail",
  // setup() {
  //   onMounted(() => {
  //     const vm = this
  //   }),
  // },
  mounted() {
    let vm = this
    vm.name = "11111"
    vm.gmail = "33333"
    vm.address = "66666"
    vm.telephone = "9999"
  },
  props: {
    t1: 333,
    t2: null,
  },
  data: function (){
    return {
      name: 'ItemDetail',
      gmail: 'ItemDetail',
      address: 'ItemDetail',
      telephone: 'telephone'
    }
  },
  methods: {
    clickMe: function () {
      const vm = this
      vm.$emit('clickDelete')
    }
  }
}
</script>

<style scoped>

</style>