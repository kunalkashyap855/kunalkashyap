export interface skill {
    name: string;
    logoUrl: string;
    group: string;
}

export interface project {
    title: string;
    description: string;
    github: string;
    technologies: Array<string>;
    imageUrl: string;
}