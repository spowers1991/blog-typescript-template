import React from 'react';
import Link from 'next/link';
import { useSettings } from '@/lib/storyblok/settings/SettingsContext';
import { GlobalSettings } from '@/lib/storyblok/settings/types/GlobalSettings'; 
import { Story } from '@/lib/storyblok/stories/types/Story';
import { useStories } from '@/lib/storyblok/stories/StoriesContext';
import { getStoriesByIds } from '@/lib/storyblok/stories/helpers/getStoriesByIds';

const Header: React.FC = () => {
  const { globalSettings } = useSettings() as { globalSettings: GlobalSettings }; 
  const { stories } = useStories();

  const StoryblokMenuItems = 
    getStoriesByIds(
      stories as Story[], 
      globalSettings?.content?.menu as any[]
    )
  ;

  return (
    <header className='flex items-center w-full h-12'>

      <div className='container flex items-center mx-auto px-6'>
        <div>
          <Link href="/">
              Image here
          </Link>
        </div>

        <nav className='flex gap-3 ml-auto'>
          {StoryblokMenuItems?.map((item, index) => (
            <Link key={index} href={item?.full_slug as string}>
              {item?.name}
            </Link>
          ))}
        </nav>
        
      </div>

    </header>
  );
};

export default Header;

   
