import React from "react";

const sections = [
  {
    key: "exhibition",
    title: "전시 안내",
    leftImg: "/2025/image/전시안내_모바일_1.jpg",
    rightImg: "/2025/image/전시안내_모바일_2.png",
    pcImg: "/2025/image/전시안내.png",
  },
  {
    key: "staffRoll",
    title: "팀 크레딧",
    leftImg: "/2025/image/팀크레딧_모바일_1.jpg",
    rightImg: "/2025/image/팀크레딧_모바일_2.jpg",
    pcImg: "/2025/image/팀크레딧.jpg",
  },
  {
    key: "location",
    title: "오시는 길",
    leftImg: "/2025/image/오시는길_모바일_1.jpg",
    rightImg: "/2025/image/오시는길_모바일_2.jpg",
    pcImg: "/2025/image/오시는길.jpg",
  },
];

const ShowInfo = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 px-4">
      {/* PC: pcImg만 섹션별로 아래로 쭉 */}
      <div className="hidden md:flex w-full flex-col items-center gap-10">
        {sections.map((s) => (
          <img
            key={s.key}
            src={s.pcImg}
            alt={`${s.title} 데스크탑`}
            loading="lazy"
            className="w-full max-w-[1100px] h-auto object-contain"
          />
        ))}
      </div>

      {/* Mobile: left/right를 섹션별로 아래로 쭉 */}
      <div className="md:hidden w-full flex flex-col items-center gap-10">
        {sections.map((s) => (
          <div key={s.key} className="w-full flex flex-col items-center gap-6">
            <img
              src={s.leftImg}
              alt={`${s.title} #1`}
              loading="lazy"
              className="w-full max-w-[640px] h-auto object-contain"
            />
            <img
              src={s.rightImg}
              alt={`${s.title} #2`}
              loading="lazy"
              className="w-full max-w-[640px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowInfo;
