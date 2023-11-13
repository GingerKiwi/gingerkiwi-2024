import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    description: z.string().optional(),
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }).optional(),
    coverAlt: z.string().optional(),
  }),
});

// const blogCollection = defineCollection({
//   type: 'content',
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//     date: z.date(),
//     description: z.string().optional(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }).optional(),
//   }),
// });


export const collections = {
  blog: blogCollection,
};