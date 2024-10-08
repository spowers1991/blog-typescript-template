import { ISbStoryData } from "@storyblok/react";
import { Metadata } from "@/lib/seo/types/Metadata";

export type Story = ISbStoryData<{
  uuid: string;
  slug: string;
  content: {
    title: string;
    component: string;
    body: any[];
    meta_title?: Metadata["title"];
    meta_description?: Metadata["description"];
    meta_keywords?: Metadata["keywords"]; 
    meta_no_index?: Metadata["no_index"]; 
  };
}> | null; 
