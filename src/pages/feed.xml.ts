import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const posts = await getCollection('blog');
    return rss({
        title: "Ginger Kiwi: Liz McCready's blog and portfolio",
        description: "Ginger Kiwi: Exploring Web Development, Accessibility, and Design",
        site: context.site?toString() || "https://gingerkiwi.dev",
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/blog/${post.slug}`,
            content: post.body,
        })),
    });
}