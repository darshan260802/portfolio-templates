import { z } from "zod";
declare const socialSchema: z.ZodObject<{
    platform: z.ZodEnum<["github", "linkedin", "twitter", "bluesky", "dribbble", "behance", "youtube", "website", "other"]>;
    url: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    platform: "github" | "linkedin" | "twitter" | "bluesky" | "dribbble" | "behance" | "youtube" | "website" | "other";
    url: string;
    label?: string | undefined;
}, {
    platform: "github" | "linkedin" | "twitter" | "bluesky" | "dribbble" | "behance" | "youtube" | "website" | "other";
    url: string;
    label?: string | undefined;
}>;
declare const profileSchema: z.ZodObject<{
    fullName: z.ZodString;
    headline: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    phone: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    avatarUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    resumeUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    resumeFilename: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    headline?: string | undefined;
    bio?: string | undefined;
    location?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatarUrl?: string | undefined;
    resumeUrl?: string | undefined;
    resumeFilename?: string | undefined;
}, {
    fullName: string;
    headline?: string | undefined;
    bio?: string | undefined;
    location?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatarUrl?: string | undefined;
    resumeUrl?: string | undefined;
    resumeFilename?: string | undefined;
}>;
declare const experienceSchema: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodString;
    company: z.ZodString;
    companyUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    location: z.ZodOptional<z.ZodString>;
    range: z.ZodObject<{
        start: z.ZodString;
        end: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        current: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    }, {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    }>;
    summary: z.ZodOptional<z.ZodString>;
    highlights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: string;
    company: string;
    range: {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    };
    location?: string | undefined;
    companyUrl?: string | undefined;
    summary?: string | undefined;
    highlights?: string[] | undefined;
}, {
    id: string;
    role: string;
    company: string;
    range: {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    };
    location?: string | undefined;
    companyUrl?: string | undefined;
    summary?: string | undefined;
    highlights?: string[] | undefined;
}>;
export declare const portfolioLinkSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    url: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    url: string;
    label: string;
    id: string;
}, {
    url: string;
    label: string;
    id: string;
}>;
declare const projectSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    liveUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    repoUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        url: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        label: string;
        id: string;
    }, {
        url: string;
        label: string;
        id: string;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    featured: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    description?: string | undefined;
    imageUrl?: string | undefined;
    liveUrl?: string | undefined;
    repoUrl?: string | undefined;
    links?: {
        url: string;
        label: string;
        id: string;
    }[] | undefined;
    tags?: string[] | undefined;
    featured?: boolean | undefined;
}, {
    id: string;
    title: string;
    description?: string | undefined;
    imageUrl?: string | undefined;
    liveUrl?: string | undefined;
    repoUrl?: string | undefined;
    links?: {
        url: string;
        label: string;
        id: string;
    }[] | undefined;
    tags?: string[] | undefined;
    featured?: boolean | undefined;
}>;
declare const skillSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    category: z.ZodOptional<z.ZodString>;
    level: z.ZodOptional<z.ZodEnum<["beginner", "intermediate", "advanced", "expert"]>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    category?: string | undefined;
    level?: "beginner" | "intermediate" | "advanced" | "expert" | undefined;
}, {
    id: string;
    name: string;
    category?: string | undefined;
    level?: "beginner" | "intermediate" | "advanced" | "expert" | undefined;
}>;
declare const educationSchema: z.ZodObject<{
    id: z.ZodString;
    institution: z.ZodString;
    degree: z.ZodOptional<z.ZodString>;
    fieldOfStudy: z.ZodOptional<z.ZodString>;
    range: z.ZodOptional<z.ZodObject<{
        start: z.ZodString;
        end: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        current: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    }, {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    }>>;
    summary: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    institution: string;
    range?: {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    } | undefined;
    summary?: string | undefined;
    degree?: string | undefined;
    fieldOfStudy?: string | undefined;
}, {
    id: string;
    institution: string;
    range?: {
        start: string;
        end?: string | undefined;
        current?: boolean | undefined;
    } | undefined;
    summary?: string | undefined;
    degree?: string | undefined;
    fieldOfStudy?: string | undefined;
}>;
declare const achievementSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    issuer: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    description: z.ZodOptional<z.ZodString>;
    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        url: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        label: string;
        id: string;
    }, {
        url: string;
        label: string;
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    date?: string | undefined;
    description?: string | undefined;
    links?: {
        url: string;
        label: string;
        id: string;
    }[] | undefined;
    issuer?: string | undefined;
}, {
    id: string;
    title: string;
    date?: string | undefined;
    description?: string | undefined;
    links?: {
        url: string;
        label: string;
        id: string;
    }[] | undefined;
    issuer?: string | undefined;
}>;
declare const customSectionSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        url: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        label: string;
        id: string;
    }, {
        url: string;
        label: string;
        id: string;
    }>, "many">>;
    visible: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    links?: {
        url: string;
        label: string;
        id: string;
    }[] | undefined;
    content?: string | undefined;
    visible?: boolean | undefined;
}, {
    id: string;
    title: string;
    links?: {
        url: string;
        label: string;
        id: string;
    }[] | undefined;
    content?: string | undefined;
    visible?: boolean | undefined;
}>;
declare const themeSchema: z.ZodObject<{
    accentColor: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    mode: z.ZodOptional<z.ZodEnum<["light", "dark", "system"]>>;
}, "strip", z.ZodTypeAny, {
    accentColor?: string | undefined;
    mode?: "light" | "dark" | "system" | undefined;
}, {
    accentColor?: string | undefined;
    mode?: "light" | "dark" | "system" | undefined;
}>;
declare const seoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    ogImageUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | undefined;
    ogImageUrl?: string | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
    ogImageUrl?: string | undefined;
}>;
export declare const portfolioDataSchema: z.ZodObject<{
    profile: z.ZodObject<{
        fullName: z.ZodString;
        headline: z.ZodOptional<z.ZodString>;
        bio: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        phone: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        avatarUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        resumeUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        resumeFilename: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    }, "strip", z.ZodTypeAny, {
        fullName: string;
        headline?: string | undefined;
        bio?: string | undefined;
        location?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        avatarUrl?: string | undefined;
        resumeUrl?: string | undefined;
        resumeFilename?: string | undefined;
    }, {
        fullName: string;
        headline?: string | undefined;
        bio?: string | undefined;
        location?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        avatarUrl?: string | undefined;
        resumeUrl?: string | undefined;
        resumeFilename?: string | undefined;
    }>;
    socials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        platform: z.ZodEnum<["github", "linkedin", "twitter", "bluesky", "dribbble", "behance", "youtube", "website", "other"]>;
        url: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        platform: "github" | "linkedin" | "twitter" | "bluesky" | "dribbble" | "behance" | "youtube" | "website" | "other";
        url: string;
        label?: string | undefined;
    }, {
        platform: "github" | "linkedin" | "twitter" | "bluesky" | "dribbble" | "behance" | "youtube" | "website" | "other";
        url: string;
        label?: string | undefined;
    }>, "many">>;
    experience: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        role: z.ZodString;
        company: z.ZodString;
        companyUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        location: z.ZodOptional<z.ZodString>;
        range: z.ZodObject<{
            start: z.ZodString;
            end: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
            current: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        }, {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        }>;
        summary: z.ZodOptional<z.ZodString>;
        highlights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        role: string;
        company: string;
        range: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        };
        location?: string | undefined;
        companyUrl?: string | undefined;
        summary?: string | undefined;
        highlights?: string[] | undefined;
    }, {
        id: string;
        role: string;
        company: string;
        range: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        };
        location?: string | undefined;
        companyUrl?: string | undefined;
        summary?: string | undefined;
        highlights?: string[] | undefined;
    }>, "many">>;
    projects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        liveUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        repoUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            url: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            label: string;
            id: string;
        }, {
            url: string;
            label: string;
            id: string;
        }>, "many">>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        featured: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
        liveUrl?: string | undefined;
        repoUrl?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        tags?: string[] | undefined;
        featured?: boolean | undefined;
    }, {
        id: string;
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
        liveUrl?: string | undefined;
        repoUrl?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        tags?: string[] | undefined;
        featured?: boolean | undefined;
    }>, "many">>;
    skills: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        category: z.ZodOptional<z.ZodString>;
        level: z.ZodOptional<z.ZodEnum<["beginner", "intermediate", "advanced", "expert"]>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        category?: string | undefined;
        level?: "beginner" | "intermediate" | "advanced" | "expert" | undefined;
    }, {
        id: string;
        name: string;
        category?: string | undefined;
        level?: "beginner" | "intermediate" | "advanced" | "expert" | undefined;
    }>, "many">>;
    education: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        institution: z.ZodString;
        degree: z.ZodOptional<z.ZodString>;
        fieldOfStudy: z.ZodOptional<z.ZodString>;
        range: z.ZodOptional<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
            current: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        }, {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        }>>;
        summary: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        institution: string;
        range?: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        } | undefined;
        summary?: string | undefined;
        degree?: string | undefined;
        fieldOfStudy?: string | undefined;
    }, {
        id: string;
        institution: string;
        range?: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        } | undefined;
        summary?: string | undefined;
        degree?: string | undefined;
        fieldOfStudy?: string | undefined;
    }>, "many">>;
    achievements: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        issuer: z.ZodOptional<z.ZodString>;
        date: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        description: z.ZodOptional<z.ZodString>;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            url: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            label: string;
            id: string;
        }, {
            url: string;
            label: string;
            id: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string;
        date?: string | undefined;
        description?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        issuer?: string | undefined;
    }, {
        id: string;
        title: string;
        date?: string | undefined;
        description?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        issuer?: string | undefined;
    }>, "many">>;
    customSections: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        content: z.ZodOptional<z.ZodString>;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            url: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            label: string;
            id: string;
        }, {
            url: string;
            label: string;
            id: string;
        }>, "many">>;
        visible: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        content?: string | undefined;
        visible?: boolean | undefined;
    }, {
        id: string;
        title: string;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        content?: string | undefined;
        visible?: boolean | undefined;
    }>, "many">>;
    theme: z.ZodOptional<z.ZodObject<{
        accentColor: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
        mode: z.ZodOptional<z.ZodEnum<["light", "dark", "system"]>>;
    }, "strip", z.ZodTypeAny, {
        accentColor?: string | undefined;
        mode?: "light" | "dark" | "system" | undefined;
    }, {
        accentColor?: string | undefined;
        mode?: "light" | "dark" | "system" | undefined;
    }>>;
    seo: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        ogImageUrl: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>, string | undefined, string>>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        description?: string | undefined;
        ogImageUrl?: string | undefined;
    }, {
        title?: string | undefined;
        description?: string | undefined;
        ogImageUrl?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    profile: {
        fullName: string;
        headline?: string | undefined;
        bio?: string | undefined;
        location?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        avatarUrl?: string | undefined;
        resumeUrl?: string | undefined;
        resumeFilename?: string | undefined;
    };
    socials?: {
        platform: "github" | "linkedin" | "twitter" | "bluesky" | "dribbble" | "behance" | "youtube" | "website" | "other";
        url: string;
        label?: string | undefined;
    }[] | undefined;
    experience?: {
        id: string;
        role: string;
        company: string;
        range: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        };
        location?: string | undefined;
        companyUrl?: string | undefined;
        summary?: string | undefined;
        highlights?: string[] | undefined;
    }[] | undefined;
    projects?: {
        id: string;
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
        liveUrl?: string | undefined;
        repoUrl?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        tags?: string[] | undefined;
        featured?: boolean | undefined;
    }[] | undefined;
    skills?: {
        id: string;
        name: string;
        category?: string | undefined;
        level?: "beginner" | "intermediate" | "advanced" | "expert" | undefined;
    }[] | undefined;
    education?: {
        id: string;
        institution: string;
        range?: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        } | undefined;
        summary?: string | undefined;
        degree?: string | undefined;
        fieldOfStudy?: string | undefined;
    }[] | undefined;
    achievements?: {
        id: string;
        title: string;
        date?: string | undefined;
        description?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        issuer?: string | undefined;
    }[] | undefined;
    customSections?: {
        id: string;
        title: string;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        content?: string | undefined;
        visible?: boolean | undefined;
    }[] | undefined;
    theme?: {
        accentColor?: string | undefined;
        mode?: "light" | "dark" | "system" | undefined;
    } | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
        ogImageUrl?: string | undefined;
    } | undefined;
}, {
    profile: {
        fullName: string;
        headline?: string | undefined;
        bio?: string | undefined;
        location?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        avatarUrl?: string | undefined;
        resumeUrl?: string | undefined;
        resumeFilename?: string | undefined;
    };
    socials?: {
        platform: "github" | "linkedin" | "twitter" | "bluesky" | "dribbble" | "behance" | "youtube" | "website" | "other";
        url: string;
        label?: string | undefined;
    }[] | undefined;
    experience?: {
        id: string;
        role: string;
        company: string;
        range: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        };
        location?: string | undefined;
        companyUrl?: string | undefined;
        summary?: string | undefined;
        highlights?: string[] | undefined;
    }[] | undefined;
    projects?: {
        id: string;
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
        liveUrl?: string | undefined;
        repoUrl?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        tags?: string[] | undefined;
        featured?: boolean | undefined;
    }[] | undefined;
    skills?: {
        id: string;
        name: string;
        category?: string | undefined;
        level?: "beginner" | "intermediate" | "advanced" | "expert" | undefined;
    }[] | undefined;
    education?: {
        id: string;
        institution: string;
        range?: {
            start: string;
            end?: string | undefined;
            current?: boolean | undefined;
        } | undefined;
        summary?: string | undefined;
        degree?: string | undefined;
        fieldOfStudy?: string | undefined;
    }[] | undefined;
    achievements?: {
        id: string;
        title: string;
        date?: string | undefined;
        description?: string | undefined;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        issuer?: string | undefined;
    }[] | undefined;
    customSections?: {
        id: string;
        title: string;
        links?: {
            url: string;
            label: string;
            id: string;
        }[] | undefined;
        content?: string | undefined;
        visible?: boolean | undefined;
    }[] | undefined;
    theme?: {
        accentColor?: string | undefined;
        mode?: "light" | "dark" | "system" | undefined;
    } | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
        ogImageUrl?: string | undefined;
    } | undefined;
}>;
export type PortfolioLink = z.infer<typeof portfolioLinkSchema>;
export type Achievement = z.infer<typeof achievementSchema>;
export type CustomSection = z.infer<typeof customSectionSchema>;
export type PortfolioData = z.infer<typeof portfolioDataSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Social = z.infer<typeof socialSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Theme = z.infer<typeof themeSchema>;
export type Seo = z.infer<typeof seoSchema>;
/** A minimal, valid PortfolioData used for empty states and template previews. */
export declare const emptyPortfolioData: PortfolioData;
/** Section keys a template can declare support for via its manifest. */
export declare const PORTFOLIO_SECTIONS: readonly ["profile", "socials", "experience", "projects", "skills", "education", "achievements", "customSections"];
export type PortfolioSection = (typeof PORTFOLIO_SECTIONS)[number];
export {};
