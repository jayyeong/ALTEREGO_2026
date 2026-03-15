import React from 'react';
import { useParams } from 'react-router-dom';
import members from '../data/members.json';
import { Mail, Instagram } from 'lucide-react';

const PortfolioPage = () => {
  const { portfolioUrl } = useParams();

  // 모든 멤버를 하나의 배열로 평탄화
  const allMembers = members.flatMap(team => team.members);
  const member = allMembers.find(m => m.portfolioUrl === portfolioUrl);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">해당 멤버를 찾을 수 없습니다.</p>
      </div>
    );
  }

  /* ---------- 미디어 소스 선택 ---------- */
  const mediaItems = member.slides?.length ? member.slides : member.brochureImages?.map(src => ({
    type: 'image',
    src,
  })) || [];

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-8 md:py-10">
      {/* 프로필 영역 */}
      <section className="flex items-start md:items-end md:justify-end gap-4 md:gap-2">
        <div className="w-[150px] sm:w-[170px] md:w-[320px] flex-shrink-0 pt-1 md:pb-1">
          <h1 className="text-base md:text-xl font-semibold leading-tight">
            {member.name}
          </h1>
          <p className="text-sm md:text-base text-black/80 mt-1">{member.englishName}</p>

          {(member.email || member.instagram) && (
            <div className="mt-5 md:mt-4 space-y-2 text-xs md:text-sm">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-start gap-2 text-black hover:no-underline"
                >
                  <Mail size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span className="whitespace-nowrap">{member.email}</span>
                </a>
              )}

              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-black hover:no-underline break-all"
                >
                  <Instagram size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span>{member.instagram}</span>
                </a>
              )}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0 flex justify-end md:flex-none">
          <div className="w-full max-w-[180px] md:w-[320px] md:max-w-[320px]">
            <div className="aspect-[3/4] bg-white">
              <img
                src={require(`../${member.profileImageUrl}`)}
                alt={`${member.name} profile`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 영역: 텍스트 왼쪽, 작품 이미지 오른쪽(세로 나열) */}
      <section className="mt-20 md:mt-24 flex items-start gap-4 md:gap-10">
        <div className="w-[150px] sm:w-[170px] md:w-[320px] flex-shrink-0 pt-1">
          {member.projectTitle && (
            <h2 className="text-sm md:text-2xl font-bold leading-snug break-words">
              {member.projectTitle}
            </h2>
          )}
          {member.description && (
            <p className="mt-3 md:mt-4 text-xs md:text-sm whitespace-pre-line leading-relaxed text-black/85">
              {member.description}
            </p>
          )}
        </div>

        <div className="flex-1 min-w-0">
          {mediaItems.length ? (
            mediaItems.map((item, idx) => (
              <div key={`${item.type}-${idx}`} className="w-full">
                {item.type === 'image' ? (
                  <img
                    src={require(`../${item.src}`)}
                    alt={`작품 이미지 ${idx + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-[3/4]">
                    <iframe
                      title={`iframe-${idx}`}
                      src={item.src}
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-sm text-black/70">표시할 작품 이미지가 없습니다.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
