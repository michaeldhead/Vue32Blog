<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";

const { myInfo } = storeToRefs(useBlogStore());

const props = defineProps({
  /**
   * This will override the Info.json "nothing" value
   */
  nothingText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section class="section is-medium">
    <div class="container">
      <div v-if="nothingText" class="is-size-3 mt-6">
        {{ nothingText }}
      </div>
      <div v-else class="is-size-3 mt-6">
        {{ myInfo.nothing }}
      </div>
      <hr />
    </div>
  </section>
</template>
