<template>
   <div class="manager_product">
     <h4>Edit product</h4>
       <div class="form-group">
         <label for="email">Name: </label>
         <input type="text" v-model="email" class="form-control" id="email">
       </div>
       <div class="form-group">
         <label for="pwd">Price: </label>
         <input type="text" v-model="price" class="form-control" id="pwd">
       </div>
       <button type="submit" class="btn btn-primary">Save</button>
   </div>
</template>

<script>
export default {
  name: "EditProduct",
  data() {
    return {
      email : null,
      price : null
    }
  }
};
</script>

<style scoped></style>
