import { sanityClient } from "@/sanity";
import { Social } from "@/typings";

export async function getSocials() {
  const query = `*[_type == "social"]`;

  const socials: Social[] = await sanityClient.fetch(query);

  return socials;
}
