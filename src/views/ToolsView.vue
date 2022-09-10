<script setup>
import MarkdownToHtml from "@/components/markdownToHtml.vue";
import { useSystem } from "@/composables/useSystem";

useSystem().changeTitle("Tools");
</script>

<template>
  <section class="section mt-6">
    <div class="container">
      <div class="is-size-5 has-text-left">Tools</div>
      <hr />
      <div class="columns is-mobile is-centered">
        <div class="column is-two-thirds has-text-left">
          <MarkdownToHtml fileLocation="/data/config/tools.md" />
        </div>
      </div>
    </div>
  </section>
</template>
