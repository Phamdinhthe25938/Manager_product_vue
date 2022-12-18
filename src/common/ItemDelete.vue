<template>
  <table style="background: #F44336;min-width: 100%;height: 100px">
    <tr>
      <th>Name</th>
      <th>Gmail</th>
      <th>Address</th>
      <th>Telephone</th>
    </tr>
    <tr>
      <td>{{name}}</td>
      <td>{{gmail}}</td>
      <td>{{address}}</td>
      <td>{{telephone}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ItemDelete",
  props: {
    name: null,
    gmail: null,
    address: null,
    telephone: null
  }
}
</script>

<style scoped>

</style>