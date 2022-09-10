<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "@/components/theNavBar.vue";
import TheFooterBar from "@/components/theFooterBar.vue";
import { useBlogStore } from "@/stores/blogStore";

const { getMyBlogs } = useBlogStore();

getMyBlogs();
</script>

<template>
  <header>
    <TheNavBar />
  </header>
  <RouterView />
  <TheFooterBar />
</template>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
