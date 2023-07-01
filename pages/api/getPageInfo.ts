import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";

export async function getPageInfo() {
  const query = `*[_type == "pageInfo"][0]`;

  const pageInfo: PageInfo = await sanityClient.fetch(query);

  return pageInfo;
}
