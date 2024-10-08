// The default App component from Next.js
import App from 'next/app';
import { AppProps } from 'next/app';

// Data Types
import { Story } from '@/lib/storyblok/stories/types/Story';
import { GlobalSettings } from '@/lib/storyblok/settings/types/GlobalSettings';

// Storyblok API plugins
import { storyblokInit, apiPlugin } from '@storyblok/react';

// Context providers
import { SettingsProvider } from '@/lib/storyblok/settings/SettingsContext';
import { StoriesProvider } from '@/lib/storyblok/stories/StoriesContext';

// Requests
import getGlobalSettings from '@/lib/storyblok/settings/helpers/getGlobalSettings';
import getAllStories from '@/lib/storyblok/stories/helpers/getAllStories';

// CSS
import '@/css/globals.css';

// Core Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Storyblok Blok Components
import Page from '@/components/storyblok/bloks/[Page]/Page';
import Teaser from '@/components/storyblok/bloks/[Teaser]/Teaser';

// Storyblok Components to pass to the API ( technical_name | componentName )
const components = {
  page: Page,
  teaser: Teaser,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN || 'NULL',
  use: [apiPlugin],
  components,
});

interface NextAppProps extends AppProps {
  stories: Story[]; 
  globalSettings: GlobalSettings;
}

function NextApp({ Component, pageProps, stories, globalSettings }: NextAppProps) {
  return (
    <SettingsProvider initialSettings={globalSettings}>
      <StoriesProvider stories={stories}>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </StoriesProvider>
    </SettingsProvider>
  );
}

NextApp.getInitialProps = async (appContext : any) => {
 
  const appProps = await App.getInitialProps(appContext);

  const globalSettings = await getGlobalSettings();
  const stories = await getAllStories();

  return {
    ...appProps,
    stories,
    globalSettings,
  };
};

export default NextApp;
