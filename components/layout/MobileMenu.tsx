import React from 'react';
import Link from 'next/link';
import { useSettings } from '@/lib/storyblok/settings/SettingsContext';
import { useRouter } from 'next/router';

interface MobileMenuProps {
  mobileMenuToggleState: 'open' | 'close'; 
  mobileMenuToggleCallback: (status: 'open' | 'close') => void; 
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenuToggleState, mobileMenuToggleCallback }) => {
  const { globalSettings } = useSettings();
  const router = useRouter();

  return (
    <div className={`${mobileMenuToggleState === 'open' ? 'translate-x-0' : 'translate-x-[100%]'} duration-300 top-0 left-0 z-20 fixed w-full h-full bg-white lg:hidden mx-auto font-inter px-6 xl:px-6`}>
      <div className="container lg:flex lg:justify-between lg:items-center py-6">
        <div onClick={() => mobileMenuToggleCallback('close')} className='absolute top-6 right-6'>
          Close Menu
        </div>
        <ul className="container flex flex-col lg:-mx-4 pt-32 mx-[auto] px-12">
          <li
            key={0}
            onClick={() => mobileMenuToggleCallback('close')}
            className={`font-semibold text-3xl mb-8 w-[fit-content] lg:mx-4 relative after:absolute after:h-[3px] after:left-0 after:bottom-0 after:bg-[#434bed] after:duration-150 hover:after:w-full ${(router.asPath === '/' || router.pathname === '/' || router.pathname === undefined) ? 'after:w-full' : 'after:w-0'}`}
          >
            <Link href="/">Home</Link>
          </li>
          {globalSettings?.content?.menu?.map((item, index) => (
            <li
              key={index + 1}
              onClick={() => mobileMenuToggleCallback('close')}
              className={`font-semibold text-3xl mb-8 w-[fit-content] lg:mx-4 relative after:absolute after:h-[3px] after:left-0 after:bottom-0 after:bg-[#434bed] after:duration-150 hover:after:w-full ${(router.asPath?.replace(/\//g, '') === item.link.cached_url?.replace(/\//g, '')) ? 'after:w-full' : 'after:w-0'}`}
            >
              <Link href={item.link.cached_url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
