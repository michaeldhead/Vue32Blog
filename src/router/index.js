import { createRouter, createWebHistory } from "vue-router";
import { useBlogStore } from "@/stores/blogStore";

import {
  AboutView,
  HomeView,
  BlogView,
  BlogsView,
  LinksView,
  TagView,
  TagsView,
  ToolsView,
  NotFoundView,
} from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }; // always scroll to top
  },
  routes: [
    {
      path: "/",
      name: "homeView",
      component: HomeView,
    },
    {
      path: "/blogs",
      name: "blogsView",
      component: BlogsView,
    },
    {
      path: "/links",
      name: "linksView",
      component: LinksView,
    },
    {
      path: "/tags",
      name: "tagsView",
      component: TagsView,
    },
    {
      path: "/tools",
      name: "toolsView",
      component: ToolsView,
    },
    {
      path: "/about",
      name: "aboutView",
      component: AboutView,
    },
    {
      path: "/blog/:id",
      name: "blogView",
      component: BlogView,
      props: true,
    },
    {
      path: "/tags/:tagName",
      name: "tagView",
      component: TagView,
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

router.beforeEach(async () => {
  const { getMyInfo } = useBlogStore();
  await getMyInfo();
});

export default router;
