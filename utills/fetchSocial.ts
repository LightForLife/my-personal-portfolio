// import { Social } from "../typings";

// export const fetchSocial = async () => {
//   const res = await fetch(`http://localhost:3000/api/getSocials`);
//   // console.log(process.env.NEXT_PUBLIC_BASE_URL);
//   console.log(res);

//   const data = await res.json();
//   console.log(data);
//   const socials: Social[] = data.socials;

//   console.log("fetching", socials);

//   return socials;
// };

// fetchSocial();

import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
export const fetchSocials = async () => {
  const query = groq`*[_type == "social"]`;
  const res = await sanityClient.fetch(query);
  return res;
};
