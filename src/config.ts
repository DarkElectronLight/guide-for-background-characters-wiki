export const SITE = {
  website: "https://darkelectronlight.github.io/gfbc-wiki-astro/", // replace this with your deployed domain
  author: "NA",
  desc: "A Fan Wiki for A Guide to Background Characters",
  title: "GFBC Wiki",
  ogImage: "logo.jpg",
  profile: "https://github.com/DarkElectronLight/",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/DarkElectronLight/gfbc-wiki-astro/edit/master/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/London", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
