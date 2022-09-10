<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";
import CardBlogView from "@/components/cardBlogView.vue";
import { useSystem } from "@/composables/useSystem";

const { myTag } = storeToRefs(useBlogStore());
const { getMyTag } = useBlogStore();

const props = defineProps({
  /**
   * tagName comes from the Router
   */
  tagName: null,
});

getMyTag(props.tagName);
useSystem().changeTitle(props.tagName);
</script>

<template>
  <section class="section mt-6">
    <div class="container">
      <div class="is-size-5 has-text-left">Tag: {{ tagName }}</div>
      <hr />
      <div class="columns is-tablet is-multiline mt-4">
        <CardBlogView
          v-for="(blog, i) in myTag"
          :key="i"
          :blog="blog"
          :cover="blog.cover"
        />
      </div>
    </div>
  </section>
</template>
