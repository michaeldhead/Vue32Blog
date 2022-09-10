<script setup>
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { useBlogStore } from "@/stores/blogStore";
import MarkdownToHtml from "@/components/markdownToHtml.vue";
import { useSystem } from "@/composables/useSystem";

const { myInfo, myBlog } = storeToRefs(useBlogStore());
const { getMyBlog } = useBlogStore();

const props = defineProps({
  /**
   * id comes from the Router
   */
  id: null,
});

getMyBlog(props.id);
useSystem().changeTitle(props.id);

const myMdFile = ref("/data/markdowns/" + props.id + ".md");
const myImageFile = computed(() => "/data/images/" + myBlog.value.cover);
const myBlogDate = computed(() => {
  if (myBlog.value.date) {
    return (
      myBlog.value.date[0] +
      "/" +
      myBlog.value.date[1] +
      "/" +
      myBlog.value.date[2]
    );
  } else {
    return myBlog.value.date;
  }
});
</script>

<template>
  <section class="section mt-4">
    <div class="container">
      <figure class="image is-2by1">
        <img :src="myImageFile" />
      </figure>
      <div class="is-size-3 mt-6">{{ myBlog.title }}</div>
      <div class="is-size-7 mt-3 mb-3">
        Posted on: {{ myBlogDate }}
        <!-- {{ myBlog.date[0] }}/{{ myBlog.date[1] }}/{{ myBlog.date[2] }} -->
      </div>
      <div class="center">
        <span class="margin">
          {{ myInfo.username }}
        </span>
      </div>
      <hr />
      <div class="columns is-tablet">
        <div class="column is-three-fifths is-offset-one-fifth has-text-left">
          <MarkdownToHtml
            :useNumbers="myBlog.useNumbers"
            :fileLocation="myMdFile"
          />
        </div>
      </div>
    </div>
  </section>
</template>
