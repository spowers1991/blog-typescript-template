import { Story } from "../types/Story";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { getStoryblokApi } from "@storyblok/react";

interface StaticProps {
  story: Story; 
  key: string | false;
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context: GetStaticPropsContext) => {
  const slug = context.params && context.params.slug ? (Array.isArray(context.params.slug) ? context.params.slug.join("/") : context.params.slug) : "home";

  const sbParams = { version: "draft" }; 

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams as any);

  return {
    props: {
      story: data ? data.story : false,
      key: data && data.story ? data.story.id : false,
    },
    revalidate: 20, 
  };
};
