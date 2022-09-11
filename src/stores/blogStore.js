import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useBlogStore = defineStore("blogStore", () => {
  //  ** state ** //
  const myInfo = ref([]);
  const myBlogs = ref([]);
  const myBlog = ref([]);
  const myTags = ref([]);
  const myTag = ref([]);
  const myLinks = ref([]);

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

  /**
   * Returns the Link data from the public/data/config/links.json file
   */
  async function getMyLinks() {
    try {
      if (myLinks.value.length < 1) {
        await axios
          .get("/data/config/links.json")
          .then((response) => (myLinks.value = response.data.links));
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Returns the Blogs data from the public/data/config/blogs.json file
   */
  async function getMyBlogs() {
    try {
      if (myBlogs.value.length < 1) {
        await axios
          .get("/data/config/blogs.json")
          .then((response) => (myBlogs.value = response.data.blogs.reverse()));
      }
      if (import.meta.env.PROD) {
        filteredBlogs();
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Only display "Live" blogs in Production
   */
  const filteredBlogs = () => {
    let tmpBlogs = myBlogs.value;
    tmpBlogs = tmpBlogs.filter((item) => {
      return item.live;
    });
    myBlogs.value = tmpBlogs;
  };

  /**
   * Returns the requested Blog from the public/data/config/blogs.json file
   * @param {String} id blogs.id from public/data/config/blogs.json file
   */
  async function getMyBlog(id) {
    try {
      if (myBlogs.value.length < 1) {
        await this.getMyBlogs();
      }
      const curPostIdx = myBlogs.value.findIndex((blog) => blog.id === id);
      if (curPostIdx >= 0) {
        myBlog.value = myBlogs.value[curPostIdx];
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Returns the Tags from the public/data/config/blogs.json file
   */
  async function getMyTags() {
    try {
      if (myTags.value.length < 1) {
        if (myBlogs.value.length < 1) {
          await this.getMyBlogs();
        }
        const tags = [];
        const tblogs = myBlogs.value;
        for (var i = 0; i < tblogs.length; i++) {
          for (var j = 0; j < tblogs[i].tags.length; j++) {
            let index = -1;
            for (var k = 0; k < tags.length; k++) {
              if (tags[k].name === tblogs[i].tags[j]) {
                index = k;
                break;
              }
            }
            if (index === -1) {
              tags.push({
                name: tblogs[i].tags[j],
                posts: [tblogs[i]],
              });
            } else {
              tags[index].posts.push(tblogs[i]);
            }
          }
        }
        myTags.value = tags.sort(sortFunction);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function sortFunction(a, b) {
    if (a.name === b.name) {
      return 0;
    } else {
      return a.name < b.name ? -1 : 1;
    }
  }

  /**
   * Returns the requested Blogs based on the Tag requested
   * @param {String} tagName
   */
  async function getMyTag(tagName) {
    try {
      if (myBlogs.value.length < 1) {
        await this.getMyBlogs();
      }
      const tags = [];
      for (var i = 0; i < myBlogs.value.length; i++) {
        myBlogs.value[i].tags.findIndex((element) => {
          if (element.includes(tagName)) {
            tags.push(myBlogs.value[i]);
          }
        });
      }
      myTag.value = tags;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    myInfo,
    myBlogs,
    myBlog,
    myTags,
    myTag,
    myLinks,
    getMyInfo,
    getMyLinks,
    getMyBlogs,
    getMyBlog,
    getMyTags,
    getMyTag,
  };
});
