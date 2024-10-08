import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Metadata } from '@/lib/seo/types/Metadata'; 

interface MetaProps {
  children: ReactNode;
  metadata: Metadata; 
}

const Meta: React.FC<MetaProps> = ({ children, metadata }) => {
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
        <meta name="robots" content={metadata?.no_index} />
        <meta property="og:title" content={metadata?.title} />
        <meta property="og:description" content={metadata?.description} />
        <meta httpEquiv="content-language" content="en" />
        <meta name="google-site-verification" content="xn5gDdTmBFv8xc-84JrKaLI_sR-kkS-Ve73_rY1Kico" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
