import dynamic from "next/dynamic";

import { ProjectProvider } from "./projects/ProjectContext";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
interface ExtendedMetadata extends Metadata {
  additionalMetaTags?: { name: string; content: string }[];
  structuredData?: { [key: string]: any };
}
export const metadata: ExtendedMetadata = {
  title: "Shadi Al Milhem | شادي الملحم - Web Developer Portfolio",
  description:
    "Shadi Al Milhem (شادي الملحم) - Full Stack Web Developer and Software Engineer Portfolio. Expertise in Next.js, UI/UX, and responsive design.",
  keywords: [
    "Shadi Al Milhem",
    "شادي الملحم",
    "Shadi Almelhem",
    "Shadi Al Melhem",
    "شادي اياد الملحم",
    "shadi al milhem",
    "web developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "software engineer",
    "portfolio",
    "Next.js",
    "UI/UX",
    "web design",
    "responsive design",
    "SEO",
    "open source",
  ],
  icons: { icon: "/icon.ico" },
  creator: "Shadi Al Milhem",
  openGraph: {
    title: "Shadi Al Milhem (شادي الملحم) - Web Developer Portfolio",
    description:
      "Full Stack Web Developer and Software Engineer specializing in Next.js, UI/UX, and responsive design.",
    url: "https://shadialmilhem.com",
    images: [
      {
        url: "https://shadialmilhem.com/SH-logo.png",
        alt: "Shadi Al Milhem Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadi Al Milhem (شادي الملحم) - Web Developer",
    description: "Full Stack Web Developer and Software Engineer Portfolio",
    images: ["https://shadialmilhem.com/SH-logo.png"],
  },
  additionalMetaTags: [
    {
      name: "author",
      content: "Shadi Al Milhem",
    },
    {
      name: "language",
      content: "English",
    },
  ],
  alternates: {
    canonical: "https://shadialmilhem.com",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shadi Al Milhem",
    alternateName: "شادي الملحم",
    url: "https://shadialmilhem.com/",
    jobTitle: "Full Stack Web Developer",
    description:
      "Shadi Al Milhem is a Full Stack Web Developer and Software Engineer specializing in Next.js, UI/UX, and responsive design.",
    image: "https://shadialmilhem.com/SH-logo.png",
    sameAs: [
      "https://github.com/shadi-almilhem",
      "https://www.linkedin.com/in/shadi-al-milhem",
      "https://x.com/shadi_m02",
    ],
    skills: [
      "Next.js",
      "UI/UX Design",
      "Responsive Web Design",
      "SEO",
      "Full Stack Development",
    ],
  },
};

const DynamicHero = dynamic(() => import("./Hero"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  ),
});
const DynamicProject = dynamic(() => import("./Projects"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
});
const DynamicServices = dynamic(() => import("./Services"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
});
const DynamicAboutMe = dynamic(() => import("./AboutMe"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  ),
});
const DynamicStack = dynamic(() => import("./Stacks"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  ),
});
const DynamicRotationGlow = dynamic(
  () => import("@/components/ui/RotatingGlow"),
  {
    loading: () => (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>
    ),
  },
);
export default function Home() {
  return (
    <ProjectProvider>
      <main className="  flex w-full  flex-col items-center justify-between gap-28 ">
        <DynamicHero />
        <DynamicProject />
        <DynamicServices />
        <DynamicAboutMe />
        <DynamicStack />

        <DynamicRotationGlow />
      </main>
    </ProjectProvider>
  );
}
