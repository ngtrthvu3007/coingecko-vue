<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p class="error-message">Sorry, the requested page does not exist.</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}

.error-message {
  color: red;
}
</style>
