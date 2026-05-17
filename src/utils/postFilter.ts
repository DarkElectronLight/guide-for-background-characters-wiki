import type { CollectionEntry, CollectionKey } from "astro:content";
import { SITE } from "@/config";
import post from "./og-templates/post";

// export function postFilter(postType: string) {
//   const postFilter = ({ data }: CollectionEntry<postType>) => {
//     const isPublishTimePassed =
//       Date.now() >
//       new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
//     return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
//   };
//   return postFilter;
// }

// const postFilter = ({ data }: CollectionKey) => {
//   const isPublishTimePassed =
//     Date.now() >
//     new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
//   return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
// };

// const postFilter = (postType: string, data: any) => {
//   let postTypeLocal = <CollectionKey>"blog";
//   let dataLocal = <CollectionEntry<typeof postTypeLocal>>data;
//   const isPublishTimePassed =
//     Date.now() >
//     new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
//   return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
// };

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

// const postFilterMusic = ({ data }: CollectionEntry<"music">) => {
//   const isPublishTimePassed =
//     Date.now() >
//     new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
//   return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
// };

// const postFilterArt = ({ data }: CollectionEntry<"art">) => {
//   const isPublishTimePassed =
//     Date.now() >
//     new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
//   return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
// };

// const postFilterWriting = ({ data }: CollectionEntry<"writing">) => {
//   const isPublishTimePassed =
//     Date.now() >
//     new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
//   return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
// };


export default postFilter;
// export {postFilterMusic, postFilterArt, postFilterWriting};
