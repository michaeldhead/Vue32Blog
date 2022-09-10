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
