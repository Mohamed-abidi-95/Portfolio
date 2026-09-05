import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['AI/GenAI', 'Computer Vision', 'Full-Stack', 'Cybersecurity']),
    githubLink: z.string().optional(),
    demoLink: z.string().optional(),
    context: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'projects': projectCollection,
};
