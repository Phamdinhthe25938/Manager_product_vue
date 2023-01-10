<template>
  <EasyDataTable
      v-model:items-selected="itemsSelected"
      :headers="header"
      :items="items"
  >

  </EasyDataTable>

</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
  name:'ListProduct',
  components: { Multiselect },
  data() {
    return {
      itemsSelected: [],
       header : [
         { text: "Name", value: "name" },
         { text: "Height (cm)", value: "height", sortable: true },
         { text: "Weight (kg)", value: "weight", sortable: true },
         { text: "Age", value: "age", sortable: true }
       ],
       items : [

       ]
    }
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>