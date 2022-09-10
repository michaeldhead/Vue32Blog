<script setup>
import { ref, computed } from "vue";
import { marked } from "marked";
import prism from "prismjs"; // needed for the Code Block created in the markdown

import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.js"; // required for the following plugins
import "prismjs/plugins/toolbar/prism-toolbar.css"; // required for the following plugins
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"; // show copy button
import "prismjs/plugins/custom-class/prism-custom-class"; // To avoid style issues with Bulma
prism.plugins.customClass.map({ number: "prism-number", tag: "prism-tag" });

//marked Options => https://marked.js.org/using_advanced#options
marked.use({
  highlight: function (code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

const markDown = ref("");

const props = defineProps({
  /**
   * Location of the markdown (.md) file.
   * The location needs to be from the Public folder.
   */
  fileLocation: {
    type: String,
    default: "/data/config/blank.md",
  },
  /**
   * Show line numbering on the left side of the code when displayed in the markdown
   */
  useNumbers: {
    type: Boolean,
    default: false,
  },
});

const getMarkdownData = async () => {
  await fetch(props.fileLocation)
    .then((response) => response.text())
    .then((data) => (markDown.value = data));
  prism.highlightAll();
};

const mdToHtml = computed(() => {
  if (markDown.value) {
    const mdhtml = marked.parse(markDown.value);
    return mdhtml;
  } else {
    return "Loading...";
  }
});

getMarkdownData();
</script>

<template>
  <div class="content">
    <div
      v-if="useNumbers"
      class="line-numbers language-markup"
      v-html="mdToHtml"
    ></div>
    <div v-else v-html="mdToHtml"></div>
  </div>
</template>

<style>
/* Apply a style to the Code Block created by marked    */
@import "@/assets/prism-coy.css";
</style>
