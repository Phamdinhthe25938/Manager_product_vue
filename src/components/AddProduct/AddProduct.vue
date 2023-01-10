<template>
    <div class="manager_product">
      <h4>Add product</h4>
        <div class="form-group">
          <label for="email">Name: </label>
          <input type="text" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="pwd">Price: </label>
          <input type="text" class="form-control" id="pwd">
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </div>
</template>

<script>
export default {
  name: "AddProduct",
};
</script>

<style scoped></style>
