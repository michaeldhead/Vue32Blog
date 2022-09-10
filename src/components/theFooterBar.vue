<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";

const { myInfo } = storeToRefs(useBlogStore());

</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <h3>{{ myInfo.blogTitle }}</h3>
      <p>
        <i>{{ myInfo.description }}</i>
      </p>
      <br />
      <p>&copy; {{ myInfo.blogStartYear }} {{ myInfo.name }}.&nbsp;</p>
    </div>
  </footer>
</template>
