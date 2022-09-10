<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  /**
   * The value to group the cards together
   */
  tag: {},
});
</script>

<template>
  <div class="column is-one-third">
    <RouterLink :to="`/tags/${tag.name}`">
      <div class="card">
        <div class="card-content has-text-left">
          <div class="content">
            <div class="blog-card-tag is-size-6">
              {{ tag.name }}
              <div class="is-size-7">
                {{ tag.posts.length }} post{{
                  `${tag.posts.length !== 1 ? "s" : ""}`
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
}
.blog-card-tag {
  position: absolute;
  bottom: 5px;
}
</style>
