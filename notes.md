# To Dos

## 2023-12-09: Saturday, December 09, 2023

1. [ ] Sort blog posts by reverse date - most recent first
2. [ ] Add site map (WCAG2.2 - 2.4.5 - Multiple ways)
3. [ ] Add skip to site map link in header

### Resources

#### Sorting posts

[markdejong.org: I've rebuilt my site in Astro](https://markdejong.org/blog/astro)

[folder where the blog pages and slug is generated](https://github.com/GingerKiwi/gingerkiwi-2024/tree/dev-2023-12-09/src/pages/blog)

[content config.ts GitHub for today's branch](https://github.com/GingerKiwi/gingerkiwi-2024/blob/dev-2023-12-09/src/content/config.ts)

#### Site map

- [WCAG 2.2, 2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html)
- [Astro Site Map. Astro docs](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

If time / if I feel like it one or more of:

- [ ] Set up function for draft = true/false
- [ ] Tag pages
- [ ] Cards for blog posts

___

## 2023-12-04: Monday, December 04, 2023

- [x] figure out why LinkNav works for desktop but not tablet breakpoint
- [x] figure out why Header centers on desktop (not desired) but not on tablet (desired)
- [x] Fix extra menu showing in mobile - again!


---
import { getCollection } from "astro:content";
import Layout from "../../components/Layout.astro";

const posts = (await getCollection("project"))
  .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
  .reverse();
---

<ul>
    {posts.map(p => <li>{post.data.title}</li>)}
</ul>