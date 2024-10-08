export interface GlobalSettings {
  content: {
    site_title: string;
    menu?: Array<{
      label: string;
      link: {
        cached_url: string;
      };
    }>;
  };
}
  