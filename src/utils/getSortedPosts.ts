import type { CollectionEntry, CollectionKey } from "astro:content";
import postFilter from "./postFilter";
import post from "./og-templates/post";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

// const getSortedPostsMusic = (posts: CollectionEntry<"music">[]) => {
//   return posts
//     .filter(postFilterMusic)
//     .sort(
//       (a, b) =>
//         Math.floor(
//           new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
//         ) -
//         Math.floor(
//           new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
//         )
//     );
// };

// const getSortedPosts = (postType: string, posts: any) => {
//   // posts = posts as CollectionEntry<"blog">[];
//   let postTypeLocal = <CollectionKey>postType;
//   let postsClass = <CollectionEntry<typeof postTypeLocal>[]>posts;
//   return postsClass
//     .filter(postFilter(postType))
//     .sort(
//       (a, b) =>
//         Math.floor(
//           new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
//         ) -
//         Math.floor(
//           new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
//         )
//     );
// };

// const getSortedPostsArt = (posts: CollectionEntry<"art">[]) => {
//   return posts
//     .filter(postFilterArt)
//     .sort(
//       (a, b) =>
//         Math.floor(
//           new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
//         ) -
//         Math.floor(
//           new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
//         )
//     );
// };

// const getSortedPostsWriting = (posts: CollectionEntry<"writing">[]) => {
//   return posts
//     .filter(postFilterWriting)
//     .sort(
//       (a, b) =>
//         Math.floor(
//           new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
//         ) -
//         Math.floor(
//           new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
//         )
//     );
// };

export default getSortedPosts;
// export { getSortedPostsMusic, getSortedPostsArt, getSortedPostsWriting };