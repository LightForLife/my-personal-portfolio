import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";

export async function getExperience() {
  const query = `*[_type == "experience"] {
    ...,
    technologies[]->
  }`;

  const experiences: Experience[] = await sanityClient.fetch(query);

  return experiences;
}
