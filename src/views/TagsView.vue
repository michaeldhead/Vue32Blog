<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";
import CardTagView from "@/components/cardTagView.vue";
import { useSystem } from "@/composables/useSystem";

const { myTags } = storeToRefs(useBlogStore());
const { getMyTags } = useBlogStore();

useSystem().changeTitle("Tags");
getMyTags();
</script>

<template>
  <section class="section mt-6">
    <div class="container">
      <div class="is-size-5 has-text-left">Tags</div>
      <hr />
      <div class="columns is-tablet is-multiline mt-4">
        <CardTagView v-for="(tag, i) in myTags" :key="i" :tag="tag" />
      </div>
    </div>
  </section>
</template>
