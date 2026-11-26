import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from './lib/accent';

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    category: z.enum(categories),
    context: z.string(),
    period: z.string(),
    role: z.string().optional(),
    team: z.string().optional(),
    githubLink: z.string().optional(),
    demoLink: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'projects': projectCollection,
};
