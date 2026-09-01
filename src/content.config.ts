import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['print-quality', 'calibration', 'materials']),
    pageType: z.enum(['guide', 'how-to', 'troubleshooting', 'comparison', 'reference']),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    relatedSlugs: z.array(z.string()).default([]),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

const pillars = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pillars' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),
  }),
});

export const collections = { articles, pillars };
