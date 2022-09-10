# Introduction

#### This template should help get you started developing with Vue 3, Pinia, and Vite.

- Vue 3 - Defaults to Pinia, Vite and Composition API
- Composition API - Replaces the Options API from Vue 2
- Pinia - Replaces Vuex. Pinia is Vuex v.5
- Vite - Replaces webpack

Composition API is easier to follow and more intuitive in it's usage. There is less coding and the ability to group everything for a particular "need" together (instead of being spread thoughout the Script section).

Pinia is similar to Composition API, in its flow and usage. `Mutations` are no longer used, as `Actions` can be called directly.

Vite is faster for development and production. The biggest change for the developer is the initial startup of the `dev server`. 
- To start the server you now type `npm run dev`.
- By default the server will run on `localhost:3000`. you can change this by editing the `vite.config.js` and add `port` and/or `host` to a `server` section:

```js
server: {
    port: 8081,
    host: '192.168.25.32'
  },
```

## What is Composition API?
Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options. It is an umbrella term that covers the following APIs:

- [Reactivity API](https://vuejs.org/api/reactivity-core.html), e.g. `ref()` and `reactive()`, that allows us to directly create reactive state, computed state, and watchers.

- [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle.html), e.g. `onMounted()` and `onUnmounted()`, that allow us to programmatically hook into the component lifecycle.

- [Dependency Injection](https://vuejs.org/api/composition-api-dependency-injection.html), i.e. `provide()` and `inject()`, that allow us to leverage Vue's dependency injection system while using Reactivity APIs.

Composition API is a built-in feature of Vue 3, and is currently available to Vue 2 via the officially maintained @vue/composition-api plugin. In Vue 3, it is also primarily used together with the `<script setup> syntax in Single-File Components`. 


`NOTE: Older examples of Composition API show export default, setup() and return {}. These are not needed in the latest version`
```javascript
<script> // older Comp API
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count
    }
  }
}
</script>
 ```
This can now be written
```js
<script setup> // newer Comp API
import { ref } from 'vue'

  const count = ref(0)
  // automatically exposed to template and other options API hooks
}
</script>
```


## What is Pinia
Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple `export const state = reactive({})`. This is true for single page applications but exposes your application to security vulnerabilities if it is server side rendered. But even in small single page applications, you get a lot from using Pinia:

- Devtools support
- A timeline to track actions, mutations
- Stores appear in components where they are used
- Time travel and easier debugging
- Hot module replacement
- Modify your stores without reloading your page
- Keep any existing state while developing
- Plugins: extend Pinia features with plugins
- Proper TypeScript support or autocompletion for JS users
- Server Side Rendering Support

Pinia started out as an exploration of what the next iteration of Vuex could look like, incorporating many ideas from core team discussions for Vuex 5. Eventually, they realized that Pinia already implements most of what they wanted in Vuex 5, and decided to make it the new recommendation instead.

Compared to Vuex, Pinia provides a simpler API with less ceremony, offers Composition-API-style APIs, and most importantly, has solid type inference support when used with TypeScript.

See [Pinia Reference](https://pinia.vuejs.org/introduction.html).

## What is Vite
Vite (French word for "quick", pronounced like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its Plugin API and JavaScript API with full typing support.
```js
Vue 2 - CLI - uses the prefix of VUE_APP in the .env files
  VUE_APP_FORGOTPASSWORD=https://chameleonsuite-beta.com:444/login
and 'process.' in <script>
  forgotPasswordLink: process.env.VUE_APP_FORGOTPASSWORD,

Vue 3 - VITE - uses the prefix of VITE in the .env files
  VITE_FORGOTPASSWORD=https://chameleonsuite-beta.com:444/login
and 'import.meta.' in <script setup>
  const forgotPasswordLink = import.meta.env.VITE_FORGOTPASSWORD
```
 

### Install is the same
```js
npm install
```

### Compile and Hot-Reload for Development

```js
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


