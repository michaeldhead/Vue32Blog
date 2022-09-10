<script setup>
import NothingHere from "@/components/NothingHere.vue";
import { useSystem } from "@/composables/useSystem";

useSystem.changeTitle("Lost");
</script>

<template>
  <section class="section mt-6">
    <div class="container">
      <div>
        <NothingHere nothingText="I'm not the page you are looking for..." />
      </div>
    </div>
  </section>
</template>
