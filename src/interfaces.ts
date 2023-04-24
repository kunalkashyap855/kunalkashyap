export interface skill {
    name: string;
    logo_url: string;
    category: string;
}

export interface university {
    name: string;
    program: string;
    coursework: Array<string>;
    image: string;
}

export interface workplace {
    company: string;
    position: string;
    timeline: string;
    work: Array<string>;
}

export interface project {
    title: string;
    description: string;
    github: string;
    technologies: Array<string>;
    imageUrl: string;
}