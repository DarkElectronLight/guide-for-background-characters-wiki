import type { CollectionEntry, CollectionKey } from "astro:content";
import postFilter from "./postFilter";
import post from "./og-templates/post";

const getTitleSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        a.data.title.toLowerCase().localeCompare(b.data.title.toLowerCase())
    );
};

export default getTitleSortedPosts;
