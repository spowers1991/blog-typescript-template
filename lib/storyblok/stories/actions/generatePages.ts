import { GetStaticPaths } from "next";
import { getStoryblokApi } from "@storyblok/react";

// Generates pages from Storyblok
export const getStaticPaths: GetStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/");
  
  const paths: { params: { slug: string[] } }[] = [];

  Object.keys(data.links).forEach((linkKey) => {
    const link = data.links[linkKey];

    // Skip folders and the "home" page
    if (link.is_folder || link.slug === "home") {
      return;
    }

    // Skip the "settings" page
    if (link.slug !== "settings") {
      const slug = link.slug;
      const splittedSlug = slug.split("/");

      paths.push({ params: { slug: splittedSlug } });
    }
  });

  return {
    paths,
    fallback: false, 
  };
};
