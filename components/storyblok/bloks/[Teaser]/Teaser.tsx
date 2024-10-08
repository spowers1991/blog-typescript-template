import React from 'react';
import { storyblokEditable } from "@storyblok/react";

interface TeaserProps {
  blok: any; 
}

const Teaser: React.FC<TeaserProps> = ({ blok }) => {

  const bgColor = blok.red_bg === true ? 'bg-red-100' : 'bg-slate-100';

  return (
    <div className={`my-3 ${bgColor}`} {...storyblokEditable(blok)}>
      <div className={`container mx-auto px-6 py-24`}>
        <h2>
          {blok.headline}
        </h2>
      </div>
    </div>
  )
};

export default Teaser;
