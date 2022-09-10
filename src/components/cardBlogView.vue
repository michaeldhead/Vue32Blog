<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  /**
   * The value to group the cards together
   */
  blog: {},
  /**
   * The cover to use on the card.
   * This allows the images to be loaded faster as the page is created
   */
  cover: null,
});

const imageFile = computed(() => "/data/images/" + props.blog.cover);
</script>

<template>
  <div class="column is-one-third">
    <RouterLink :to="`/blog/${blog.id}`">
      <div class="card">
        <div class="card-image">
          <figure class="image is-2by1">
            <img :src="imageFile" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content has-text-left">
          <div class="content">
            <div class="mb-3">
              <b>{{ blog.title }}</b>
            </div>
            <div class="is-size-7 mb-3">
              {{ blog.date[0] }}/{{ blog.date[1] }}/{{ blog.date[2] }}
            </div>
            <div class="mb-6">
              {{ blog.des }}
            </div>

            <div class="blog-card-tag is-size-7">
              <b
                :key="i"
                v-for="(tag, i) in blog.tags"
                style="margin-right: 10px"
              >
                {{ tag }}
              </b>
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
  bottom: 20px;
}
</style>
