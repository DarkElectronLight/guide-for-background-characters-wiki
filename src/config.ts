export const SITE = {
  website: "https:///ciradeli.github.io", // replace this with your deployed domain
  author: "NA",
  desc: "A Fan Wiki for A Guide to Background Characters",
  title: "guide-for-background-characters-wiki Wiki",
  ogImage: "logo.jpg",
  profile: "https://github.com//ciradeli",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/ciradeli/guide-for-background-characters-wiki/edit/master/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/London", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
