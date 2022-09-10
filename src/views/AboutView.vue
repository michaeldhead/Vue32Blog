<script setup>
import MarkdownToHtml from "@/components/markdownToHtml.vue";
import { useSystem } from "@/composables/useSystem";

useSystem().changeTitle("About");
</script>

<template>
  <section class="section mt-6">
    <div class="container">
      <div class="is-size-5 has-text-left">About Me</div>
      <hr />
      <div class="columns is-mobile is-centered">
        <div class="column is-two-thirds">
          <MarkdownToHtml fileLocation="/data/config/about.md" />
        </div>
      </div>
    </div>
  </section>
</template>
