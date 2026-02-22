import React, { useEffect, useState, useMemo } from "react";

const LookBook = () => {
  const [headerHeight, setHeaderHeight] = useState(
    window.innerWidth >= 1024 ? 190 : 52
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setHeaderHeight(width >= 1024 ? 190 : 52);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imagePaths = useMemo(
    () =>
      Array.from({ length: 252 }, (_, i) => {
        const suffix = i === 0 ? "" : `${i}`;
        return `/2025/lookbook/SOMA2025${suffix}.jpg`;
      }),
    []
  );

  return (
    //  스크롤은 body(페이지) 하나만 쓰게: overflow-y-auto / height 계산 제거
    <div className="w-full bg-white">
      {/* 헤더에 가려지지 않게 상단 패딩 */}
      <div
        className="mx-auto w-full max-w-[1140px] px-4 pb-10"
        style={{ paddingTop: `${headerHeight + 16}px` }} // +16은 여백(원하면 조절)
      >
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {imagePaths.map((src, i) => (
            <div key={i} className="w-full bg-gray-100">
              <img
                src={src}
                alt={`lookbook-${i + 1}`}
                className="w-full h-auto block object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookBook;