import StoryblokClient from 'storyblok-js-client';

const storyblokClient = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

const getAllStories = async () => {
  try {
    const response = await storyblokClient.get('cdn/stories');
    return response.data.stories;
  } catch (error) {
    console.error('Error fetching stories:', error);
    return null;
  }
};

export default getAllStories;
