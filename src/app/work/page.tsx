import type { Metadata } from "next";
import { WorkPageClient } from "./client";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore projects built by Nexora — mobile apps, web platforms, digital products, and technical solutions.",
};

export default function WorkPage() {
  return <WorkPageClient projects={projects} />;
}
