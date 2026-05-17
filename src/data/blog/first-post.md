---
author: na
pubDatetime: 2023-11-11T22:07:00Z
title: Trying to create my own post
postSlug: first-post
featured: false
draft: true
tags:
  - testing
  - reference
description: Sample md so I have a reference when making my own posts
---

## Sample Table

| Property           | Description                                                                     | Remark                                        |
| ------------------ | ------------------------------------------------------------------------------- | --------------------------------------------- |
| **_title_**        | Title of the post. (h1)                                                         | required<sup>\*</sup>                         |
| **_description_**  | Description of the post. Used in post excerpt and site description of the post. | required<sup>\*</sup>                         |
| **_pubDatetime_**  | Published datetime in ISO 8601 format.                                          | required<sup>\*</sup>                         |
| **_author_**       | Author of the post.                                                             | default = SITE.author                         |
| **_postSlug_**     | Slug for the post. Will automatically be slugified.                             | default = slugified title                     |
| **_featured_**     | Whether or not display this post in featured section of home page               | default = false                               |
| **_draft_**        | Mark this post 'unpublished'.                                                   | default = false                               |
| **_tags_**         | Related keywords for this post. Written in array yaml format.                   | default = others                              |
| **_ogImage_**      | OG image of the post. Useful for social media sharing and SEO.                  | default = SITE.ogImage or generated OG image  |
| **_canonicalURL_** | Canonical URL (absolute), in case the article already exists on other source.   | default = `Astro.site` + `Astro.url.pathname` |

## Sample link

Link to [somewhere](https://theuselessweb.com/)

## How to highlight words

Highlighting some `words` - need a backtick for that

## Inserting code blocks

Some code blocks

```ts
// src/content/config.ts
export const blogSchema = z.object({
  // ---
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default(["others"]), // replace "others" with whatever you want
  // ---
});
```

```python
print("Hello World")
```

## Adding a table of contents

```md
---
# some frontmatter
---

Here are some recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

<!-- the rest of the post -->
```

## Inserting an image

```md
![something](@/assets/images/example.jpg)

<!-- OR -->

![something](../../assets/images/example.jpg)

<!-- Using img tag or Image component won't work ❌ -->
<img src="@assets/images/example.jpg" alt="something">
<!-- ^^ This is wrong -->
```

```md
![image](@/assets/images/AstroPaper-v3.png)
src\assets\images\AstroPaper-v3.png
```


::aplayer{name="Song Name" artist="Artist" url="../../assets/piano/25-12-21.mp3" cover="../../assets/images/AstroPaper-v3.png"}