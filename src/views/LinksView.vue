<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";
import CardLinkView from "@/components/cardLinkView.vue";
import { useSystem } from "@/composables/useSystem";

const { myLinks } = storeToRefs(useBlogStore());
const { getMyLinks } = useBlogStore();

useSystem().changeTitle("Links");
getMyLinks();
</script>

<template>
  <section class="section mt-6">
    <div class="container">
      <div class="is-size-5 has-text-left">Links</div>
      <hr />
      <div class="columns is-tablet is-multiline mt-4">
        <CardLinkView v-for="(link, i) in myLinks" :key="i" :link="link" />
      </div>
    </div>
  </section>
</template>
