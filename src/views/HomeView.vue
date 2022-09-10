<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";
import { useSystem } from "@/composables/useSystem";
import CardBlogView from "@/components/cardBlogView.vue";

const { myInfo, myBlogs } = storeToRefs(useBlogStore());
const { getMyBlogs } = useBlogStore();

useSystem().changeTitle("Home");
getMyBlogs();
</script>

<template>
  <section class="section mt-5">
    <div class="container">
      <div>
        <img class="is-rounded" src="/data/config/WorkFromHome.png" />
      </div>
      <div class="is-size-1 mb-4">{{ myInfo.name }}</div>
      <div class="is-size-5 mb-4">{{ myInfo.username }}</div>
      <div class="is-size-5 mb-6">{{ myInfo.description }}</div>
      <div class="is-size-4 mb-5 has-text-left">Latest Blogs</div>
      <hr />
      <div class="columns is-tablet is-multiline mt-4">
        <!-- Limit the main page to only display the latest 6 blogs -->
        <CardBlogView
          v-for="(blog, i) in myBlogs.slice(Math.max(myBlogs.length - 6, 0))"
          :key="i"
          :blog="blog"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  max-width: 300px;
  max-height: 300px;
}
</style>
