<template>
  <h4>Add product</h4>
  <form action="/action_page.php">
    <div class="form-group">
      <label for="email">Name: </label>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="form-group">
      <label for="pwd">Price: </label>
      <input type="password" class="form-control" id="pwd">
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>

<script>
export default {
  name: "AddProduct",
};
</script>

<style scoped></style>
