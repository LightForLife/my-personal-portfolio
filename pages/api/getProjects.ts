import { sanityClient } from "@/sanity";
import { Project } from "@/typings";

export async function getProjects() {
  const query = `*[_type == "project"] {
    ...,
    technologies[]->
  }`;

  const projects: Project[] = await sanityClient.fetch(query);

  return projects;
}
