import React from 'react';
import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";

interface Blok extends SbBlokData {
  _uid: string;
  body: any[]; 
}

interface PageProps {
  blok: Blok;
}

const Page: React.FC<PageProps> = ({ blok }) => (
  <main {...storyblokEditable(blok)} className={`font-inter bg-[#f4f4f4] overflow-hidden pt-20`}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
