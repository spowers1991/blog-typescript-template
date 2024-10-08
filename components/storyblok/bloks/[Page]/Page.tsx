import React from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface PageProps {
  blok: {
    _uid: string;
    body: any[];
  };
}

const Page: React.FC<PageProps> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>

    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    
  </main>
);

export default Page;
