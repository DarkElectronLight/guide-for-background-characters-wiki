import { defineCollection, z, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

// const blogSchema = z.object({
//       author: z.string().default(SITE.author),
//       pubDatetime: z.date(),
//       modDatetime: z.date().optional().nullable(),
//       title: z.string(),
//       featured: z.boolean().optional(),
//       draft: z.boolean().optional(),
//       tags: z.array(z.string()).default(["others"]),
//       description: z.string(),
//       canonicalURL: z.string().optional(),
//       hideEditPost: z.boolean().optional(),
//       timezone: z.string().optional() 
// });

export const BLOG_PATH = "src/data/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      postType: z.enum(["blog", "music", "art", "writing"]).default("blog"),
      enclosure: z.string().optional(),
      ogImage: image().or(z.string()).optional(),
      image: image().or(z.string()).optional(),
    }),
});

// export const MUSIC_PATH = "src/data/music";

// const music = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.md", base: `./${MUSIC_PATH}` }),
//   schema: ({ image }) =>
//     z.object({
//       author: z.string().default(SITE.author),
//       pubDatetime: z.date(),
//       modDatetime: z.date().optional().nullable(),
//       title: z.string(),
//       featured: z.boolean().optional(),
//       draft: z.boolean().optional(),
//       tags: z.array(z.string()).default(["others"]),
//       ogImage: image().or(z.string()).optional(),
//       description: z.string(),
//       canonicalURL: z.string().optional(),
//       hideEditPost: z.boolean().optional(),
//       timezone: z.string().optional(),
//       enclosure: z.string().optional(),
//     }),
// });

// export const ART_PATH = "src/data/art";

// const art = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.md", base: `./${ART_PATH}` }),
//   schema: ({ image }) =>
//     z.object({
//       author: z.string().default(SITE.author),
//       pubDatetime: z.date(),
//       modDatetime: z.date().optional().nullable(),
//       title: z.string(),
//       featured: z.boolean().optional(),
//       draft: z.boolean().optional(),
//       tags: z.array(z.string()).default(["others"]),
//       ogImage: image().or(z.string()).optional(),
//       description: z.string(),
//       canonicalURL: z.string().optional(),
//       hideEditPost: z.boolean().optional(),
//       timezone: z.string().optional(),
//       enclosure: z.string().optional(),
//     }),
// });

// export const WRITING_PATH = "src/data/writing";

// const writing = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.md", base: `./${WRITING_PATH}` }),
//   schema: ({ image }) =>
//     z.object({
//       author: z.string().default(SITE.author),
//       pubDatetime: z.date(),
//       modDatetime: z.date().optional().nullable(),
//       title: z.string(),
//       featured: z.boolean().optional(),
//       draft: z.boolean().optional(),
//       tags: z.array(z.string()).default(["others"]),
//       ogImage: image().or(z.string()).optional(),
//       description: z.string(),
//       canonicalURL: z.string().optional(),
//       hideEditPost: z.boolean().optional(),
//       timezone: z.string().optional(),
//       enclosure: z.string().optional(),
//     }),
// });

export const collections = { blog };

