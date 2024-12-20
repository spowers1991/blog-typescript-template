import Link from 'next/link';
import { FC } from 'react'; 
import Meta from "@/components/seo/Meta";

const NotFound: FC = () => {

  const metadata = [''] as Object;

  return (
    <Meta metadata={metadata}>
      <main className="font-inter bg-[#f4f4f4] overflow-hidden pt-20">
        <div className="text-center font-inter mx-auto container my-16 md:my-24 px-6 xl:px-0 mt-[50px] duration-500">
          <h2 className="!text-black text-3xl sm:text-4xl md:text-5xl font-bold z-20 mb-12 md:mb-20 leading-[1.1] md:leading-[1]">
            <span className="text-[#434bed] underline">404</span> - Page Not Found
          </h2>
          <Link href="/" className="relative bg-[#434bed] hover:bg-black duration-150 py-3 px-5 text-white rounded-full uppercase text-[11px] sm:text-xs font-[500] tracking-[1px]">
            Back to the homepage
          </Link>
        </div>
      </main>
    </Meta>
  );
};

export default NotFound;
