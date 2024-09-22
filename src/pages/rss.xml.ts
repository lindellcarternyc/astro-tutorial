import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context: {site: string}) {
  return rss({
    title: "My Astro Blog",
    description: "A blog about web development using Astro",
    site:context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
  })
}