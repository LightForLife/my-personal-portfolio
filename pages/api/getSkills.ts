import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

export async function getSkills() {
  const query = `*[_type == "skill"]`;

  const skills: Skill[] = await sanityClient.fetch(query);

  return skills;
}
