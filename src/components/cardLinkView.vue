<script setup>
const props = defineProps({
  /**
   * The value to group the cards together
   */
  link: {},
});
</script>

<template>
  <div class="column is-one-third">
    <a :href="link.link" target="_blank" class="w-full">
      <div class="card">
        <div class="card-content has-text-left">
          <div class="content">
            <div class="blog-card-tag is-size-4">
              {{ link.title }}
              <div class="is-size-5">
                {{ link.desc }}
              </div>
              <div class="is-size-7">
                {{ link.link }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
