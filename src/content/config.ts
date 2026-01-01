import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        techStack: z.array(z.string()),
        confidential: z.boolean(),
        category: z.string(),
    }),
});

export const collections = {
    projects: projectsCollection,
};
