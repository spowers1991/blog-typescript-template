import { Metadata } from "@/lib/seo/types/Metadata";
import { getMetaData } from '@/lib/seo/helpers/getMetaData';
import Meta from "@/components/seo/Meta";
import { Story } from "@/lib/storyblok/stories/types/Story";
import { StoryblokComponent} from "@storyblok/react";
import { GetStaticPropsContext } from 'next';
import { getStaticProps as getStoryStaticProps } from '@/lib/storyblok/stories/actions/generatePageData';
import NoStoriesError from '@/components/storyblok/messages/errors/NoStoriesError'

interface StoryProps {
  story: Story | false; 
  metadata: Metadata;
}

export default function Home({ story }: StoryProps) {

  if (!story) {
    <NoStoriesError />
    return
  }

  const metadata = getMetaData({ story });

  return (
    <Meta metadata={metadata}>
      <StoryblokComponent blok={story?.content} />
    </Meta>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getStoryStaticProps(context); 
}
