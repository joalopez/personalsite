import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Joaquín López'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    faqs: z
      .array(z.object({ pregunta: z.string(), respuesta: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
