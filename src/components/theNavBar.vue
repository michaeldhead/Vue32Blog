<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogStore";
import { ref } from "vue";

const { myInfo } = storeToRefs(useBlogStore());

const isBurgerOpen = ref(false);

function openBurgerMenu() {
  isBurgerOpen.value = !isBurgerOpen.value;
}
</script>

<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item is-size-3">
        {{ myInfo.blogTitle }}
      </RouterLink>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBlogMenu"
        active-class="is-active"
        @click="openBurgerMenu"
        :class="{ 'is-active': isBurgerOpen }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBlogMenu"
      class="navbar-menu"
      :class="{ 'is-active': isBurgerOpen }"
    >
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <div class="navbar-item">
          <RouterLink
            @click="isBurgerOpen = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Home
          </RouterLink>
          <RouterLink
            @click="isBurgerOpen = false"
            to="/blogs"
            class="navbar-item"
            active-class="is-active"
          >
            Blogs
          </RouterLink>
          <RouterLink
            @click="isBurgerOpen = false"
            to="/links"
            class="navbar-item"
            active-class="is-active"
          >
            Links
          </RouterLink>
          <RouterLink
            @click="isBurgerOpen = false"
            to="/tags"
            class="navbar-item"
            active-class="is-active"
          >
            Tags
          </RouterLink>
          <RouterLink
            @click="isBurgerOpen = false"
            to="/tools"
            class="navbar-item"
            active-class="is-active"
          >
            Tools
          </RouterLink>
          <RouterLink
            @click="isBurgerOpen = false"
            to="/about"
            class="navbar-item"
            active-class="is-active"
          >
            About
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
