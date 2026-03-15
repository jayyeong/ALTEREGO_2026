import React from 'react';

const archives = [
  { year: 2030, url: 'https://kuad-archive.com/2030/' },
  { year: 2029, url: 'https://kuad-archive.com/2029/' },
  { year: 2028, url: 'https://kuad-archive.com/2028/' },
  { year: 2027, url: 'https://kuad-archive.com/2027/' },
  { year: 2026, url: 'https://kuad-archive.com/2026/' },
  { year: 2025, url: 'https://kuad-archive.com/2025/' },
  { year: 2024, url: 'https://kuad-archive.com/2024/' },
];

const ArchivePage = () => {
  return (
    <div className="w-full flex justify-center px-8 md:px-36 py-12 md:py-12">
      
      <div className="w-full max-w-[1400px] text-left px-2 md:px-4 mx-auto">
        <h1 className="text-3xl md:text-4xl font-normal mb-10 md:mb-16 pb-10">ARCHIVE</h1>

        <div
          className="grid justify-items-start gap-x-12 gap-y-14 md:gap-x-14 md:gap-y-16 
                     grid-cols-2 
                     sm:grid-cols-3 
                     md:grid-cols-4 
                     lg:grid-cols-5 
                     xl:grid-cols-5"
          style={{ direction: 'ltr' }}
        >
          {archives.map((archive) => (
            <a
              key={archive.year}
              href={archive.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ direction: 'ltr' }}
              className="block w-full max-w-[140px] md:max-w-[165px]"
            >
              <div className="aspect-[3/4] border border-black flex items-center justify-center text-xl md:text-2xl font-medium md:font-semibold hover:bg-black hover:text-white transition-all duration-300">
                {archive.year}
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ArchivePage;
