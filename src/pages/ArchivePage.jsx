import React from 'react';

const archives = [
  { year: 2030, url: 'https://kuad-archive.com/2025/' },
  { year: 2029, url: 'https://kuad-archive.com/2025/' },
  { year: 2028, url: 'https://kuad-archive.com/2025/' },
  { year: 2027, url: 'https://kuad-archive.com/2025/' },
  { year: 2026, url: 'https://kuad-archive.com/2025/' },
  { year: 2025, url: 'https://kuad-archive.com/2025/' },
  { year: 2024, url: 'https://kuad-archive.com/2024/' },
];

const ArchivePage = () => {
  return (
    //오른쪽 정렬
    <div className="w-full flex justify-end px-16 py-20">
      
      <div className="w-full max-w-[1400px] text-right">
        <h1 className="text-4xl font-bold mb-16">ARCHIVE</h1>

        <div
          className="grid gap-12 
                     grid-cols-2 
                     sm:grid-cols-3 
                     md:grid-cols-4 
                     lg:grid-cols-5 
                     xl:grid-cols-6"
          style={{ direction: 'rtl' }}
        >
          {archives.map((archive) => (
            <a
              key={archive.year}
              href={archive.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ direction: 'ltr' }}
              className="block"
            >
              <div className="aspect-[3/4] border border-black flex items-center justify-center text-2xl font-semibold hover:bg-black hover:text-white transition-all duration-300">
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