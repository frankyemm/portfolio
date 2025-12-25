import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
    title: string;
    slug: string;
    excerpt: string;
    techStack: string[];
    confidential: boolean;
    category: string;
}

export interface Project {
    frontmatter: ProjectFrontmatter;
    content: string;
}

export function getAllProjects(): Project[] {
    // Ensure the directory exists
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjects = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                frontmatter: data as ProjectFrontmatter,
                content,
            };
        });

    return allProjects;
}

export function getProjectBySlug(slug: string): Project | null {
    if (!fs.existsSync(projectsDirectory)) {
        return null;
    }

    const fileNames = fs.readdirSync(projectsDirectory);

    for (const fileName of fileNames) {
        if (!fileName.endsWith(".md")) continue;

        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        if (data.slug === slug) {
            return {
                frontmatter: data as ProjectFrontmatter,
                content,
            };
        }
    }

    return null;
}

export function getAllProjectSlugs(): string[] {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const slugs: string[] = [];

    for (const fileName of fileNames) {
        if (!fileName.endsWith(".md")) continue;

        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        if (data.slug) {
            slugs.push(data.slug);
        }
    }

    return slugs;
}
