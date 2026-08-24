import { z } from "zod";
declare const socialSchema: z.ZodObject<{
    platform: z.ZodEnum<{
        github: "github";
        linkedin: "linkedin";
        twitter: "twitter";
        bluesky: "bluesky";
        dribbble: "dribbble";
        behance: "behance";
        youtube: "youtube";
        website: "website";
        other: "other";
    }>;
    url: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const profileSchema: z.ZodObject<{
    fullName: z.ZodString;
    headline: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    phone: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    avatarUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    resumeUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    resumeFilename: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
}, z.core.$strip>;
declare const experienceSchema: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodString;
    company: z.ZodString;
    companyUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    location: z.ZodOptional<z.ZodString>;
    range: z.ZodObject<{
        start: z.ZodString;
        end: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        current: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    summary: z.ZodOptional<z.ZodString>;
    highlights: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
declare const projectSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    liveUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    repoUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    featured: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const skillSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    category: z.ZodOptional<z.ZodString>;
    level: z.ZodOptional<z.ZodEnum<{
        beginner: "beginner";
        intermediate: "intermediate";
        advanced: "advanced";
        expert: "expert";
    }>>;
}, z.core.$strip>;
declare const educationSchema: z.ZodObject<{
    id: z.ZodString;
    institution: z.ZodString;
    degree: z.ZodOptional<z.ZodString>;
    fieldOfStudy: z.ZodOptional<z.ZodString>;
    range: z.ZodOptional<z.ZodObject<{
        start: z.ZodString;
        end: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        current: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    summary: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const themeSchema: z.ZodObject<{
    accentColor: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    mode: z.ZodOptional<z.ZodEnum<{
        light: "light";
        dark: "dark";
        system: "system";
    }>>;
}, z.core.$strip>;
declare const seoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    ogImageUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
}, z.core.$strip>;
export declare const portfolioDataSchema: z.ZodObject<{
    profile: z.ZodObject<{
        fullName: z.ZodString;
        headline: z.ZodOptional<z.ZodString>;
        bio: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        phone: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        avatarUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        resumeUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        resumeFilename: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    }, z.core.$strip>;
    socials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        platform: z.ZodEnum<{
            github: "github";
            linkedin: "linkedin";
            twitter: "twitter";
            bluesky: "bluesky";
            dribbble: "dribbble";
            behance: "behance";
            youtube: "youtube";
            website: "website";
            other: "other";
        }>;
        url: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    experience: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        role: z.ZodString;
        company: z.ZodString;
        companyUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        location: z.ZodOptional<z.ZodString>;
        range: z.ZodObject<{
            start: z.ZodString;
            end: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
            current: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
        summary: z.ZodOptional<z.ZodString>;
        highlights: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    projects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        liveUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        repoUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        featured: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    skills: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        category: z.ZodOptional<z.ZodString>;
        level: z.ZodOptional<z.ZodEnum<{
            beginner: "beginner";
            intermediate: "intermediate";
            advanced: "advanced";
            expert: "expert";
        }>>;
    }, z.core.$strip>>>;
    education: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        institution: z.ZodString;
        degree: z.ZodOptional<z.ZodString>;
        fieldOfStudy: z.ZodOptional<z.ZodString>;
        range: z.ZodOptional<z.ZodObject<{
            start: z.ZodString;
            end: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
            current: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        summary: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    theme: z.ZodOptional<z.ZodObject<{
        accentColor: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
        mode: z.ZodOptional<z.ZodEnum<{
            light: "light";
            dark: "dark";
            system: "system";
        }>>;
    }, z.core.$strip>>;
    seo: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        ogImageUrl: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>, z.ZodTransform<string | undefined, string>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
export declare const PORTFOLIO_SECTIONS: readonly ["profile", "socials", "experience", "projects", "skills", "education"];
export type PortfolioSection = (typeof PORTFOLIO_SECTIONS)[number];
export {};
