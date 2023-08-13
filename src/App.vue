<script setup>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
