# Vue32Blog

Vue32Blog is a simple Blog app written in Vue 3.2. It utilizes `Composition API`, `Pinia`, `Vite`, `Axios`, `Bulma`, `Marked`, and `Prismjs`.

There are several purposes for Vue32Blog. I wanted to have a simple blog web site, I wanted to write something in the latest Vue framework (When I did this: Vue 3.2), and I did not want to use an external database. Vue32Blog does all of that.

## Composition API, Pinia, and Vite 

These are the most current and up to date options to use when creating this Vue application. I did **not** want to use `Options API`, `Vuex`, and `WebPack`. When searching the internet for "Vue...", most of the results are either Vue 2 (Options API and Vuex) or Vue 3.0 (Options API or early Composition API and Vuex). Very little is actually Vue 3.2 (with Composition API and Pinia). When trying to learn Vue, this makes it difficult to understand how to use it in the code we want to write.

## Axios, Bulma, Marked, PrismJS

* Axios - When we start to get more complex back-end API calls, Axios is what we will want to use, so let's start now. See [Axios](https://axios-http.com/)
* Bulma - "Modern CSS framework that just works." See [Bulma](https://bulma.io/)
* Marked - A fast, light-weight markdown compiler. See [Marked](https://marked.js.org/)
* PrismJS - Prism is a lightweight, extensible syntax highlighter. See [Prismjs](https://prismjs.com/)

## Data
The data is stored in the public folder as static `.JSON` files. When we create a new blog post, we only need to upload the changed `blogs.json` and the new `newmarkdown.md` file. If we use Firebase as our host and when we are ready to publish, we only have to run the commands:

```javascript
 > npm run build
 > firebase deploy --only hosting
```

Here is the complete data structue:

![](/data/markdowns/DataFileStructure.png)

Let's take a look at this structure in more detail

* Data/Config - The JSON data files (blogs, info, links) and the markdown files for the About and Tools page
* Data/Images - The header images that are displayed when the blogs are listed for the user to see
* Data/Markdowns - The blogs are located here. They are written in markdown


## Download
[GitHub - Vue32Blog](https://github.com/michaeldhead/Vue32Blog)

## Live Demo
[Working Blog](https://blog.theheadfamily.com/)

## Code Examples

#### Pinia
We are structuring Pinia in the Compostion API. Doing it this way, things are much easier to follow throughout the app. When writing a Pinia Store, just remember:
- state: becomes ref()s
- getters: becomes computed()s
- actions: become function()s

For example, this a partial code from the `blogStore.js`
```js
import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useBlogStore = defineStore("blogStore", () => {
  //  ** state ** //
  const myInfo = ref([]);

  // ** actions ** //
  /**
   * Returns the Info data from the public/data/config/info.json file
   */
  async function getMyInfo() {
    try {
      if (myInfo.value.length < 1) {
        await axios
          .get("/data/config/info.json")
          .then((response) => (myInfo.value = response.data.info));
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  // The objects we want available here
  return { myInfo, getMyInfo };
});
```

#### Composables (Mixin Replacement)
We are using `Composables` in this app. It was not needed, but it is a good idea to see a composable in action. This is the `useSystem.js`

```js
import { computed } from "vue";
import { useBlogStore } from "@/stores/blogStore";

export function useSystem() {
  const { myInfo } = useBlogStore();

  const pageTitle = computed(() => {
    return myInfo.blogTitle;
  });

  const changeTitle = (title) => {
    document.title = `${pageTitle.value} - ${title}`;
  };

  return { changeTitle };
}

```

#### Components
An example of a componentand how it is used: 

`theFooterBar.vue`

```js
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
```

`App.vue`
```js
<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "@/components/theNavBar.vue";
import TheFooterBar from "@/components/theFooterBar.vue";
</script>

<template>
  <header>
    <TheNavBar />
  </header>
  <RouterView />
  <TheFooterBar />
</template>
```

#### Markdown
To display the markdown files in the app, we use [Marked](https://marked.js.org/) and [Prismjs](https://prismjs.com/). There is a post about how to use them here: [Markdown Highlighting](https://blog.theheadfamily.com/blog/blog3) and the download for the project is [Vue32-Markdown](https://github.com/michaeldhead/vue32-markdown)

### Other Examples
#### router.beforeEach
This will be called before the router loads the next page. the `async` and `await` will allow the `getMyInfo` to get the data needed. 

`router/index.js`
```js
router.beforeEach(async () => {
  const { getMyInfo } = useBlogStore();
  await getMyInfo();
});
```

The above code is really for when the user reloads or goes directly to a page from a bookmark they created. To make sure we are not having to load the data each time, we can check to see if the dataset has already been loaded with `if (myInfo.value.length < 1)`. If this statement is true, meaning the object is empty, then get the data.

`blogStore.js`
```js
async function getMyInfo() {
    try {
      if (myInfo.value.length < 1) {
        await axios
          .get("/data/config/info.json")
          .then((response) => (myInfo.value = response.data.info));
      }
    } catch (error) {
      console.log(error);
    }
  }
```


## Install and run Vue32Blog
#### Install
```javascript
npm install
```

#### Compile and Hot-Reload for Development

```javascript
npm run dev
```

#### Compile and Minify for Production

```javascript
npm run build
```

#### Deploy to FireBase
```javascript
firebase deploy --only hosting
```


