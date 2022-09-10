<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";
import CardBlogView from "@/components/cardBlogView.vue";
import { useSystem } from "@/composables/useSystem";

const { myBlogs } = storeToRefs(useBlogStore());
const { getMyBlogs } = useBlogStore();

getMyBlogs();
useSystem().changeTitle("Blogs");
</script>

<template>
  <section class="section mt-6">
    <div class="container">
      <div class="is-size-5 has-text-left">Blogs</div>
      <hr />
      <div class="columns is-tablet is-multiline mt-4">
        <CardBlogView v-for="(blog, i) in myBlogs" :key="i" :blog="blog" />
      </div>
    </div>
  </section>
</template>
