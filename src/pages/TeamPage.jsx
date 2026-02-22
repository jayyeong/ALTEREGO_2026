// src/pages/TeamPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import teams from "../data/teams.json";
import membersData from "../data/members.json";

const TeamPage = () => {
  const { teamId } = useParams();

  const team = teams.find((t) => t.id === teamId);
  if (!team) {
    return <div className="text-center py-20">팀 정보를 찾을 수 없습니다.</div>;
  }

  const teamMembersEntry = membersData.find(
    (t) => t.teamPageUrl.toLowerCase() === teamId
  );
  const members = teamMembersEntry ? teamMembersEntry.members : [];

  const calculatePaddingTop = () => (3500 / 2333) * 100;

  return (
    <div className="w-full px-4 lg:px-12 py-10">
      <div className="grid grid-cols-10 gap-x-10">
        {/* 좌측 공백 */}
        <div className="hidden lg:block lg:col-span-2" />

        {/* 우측 컨텐츠 */}
        <div className="col-span-10 lg:col-span-8">
          {/* 1) 포스터 + 팀명/설명 */}
          <section className="flex flex-col md:flex-row md:justify-end md:items-end gap-6 md:gap-0">
            {/* 텍스트: 포스터 바로 왼쪽 + 폭 제한 */}
            <div className="order-2 md:order-1 md:pr-0 md:mr-6 md:w-[320px] md:flex-shrink-0">
              <h2 className="text-base text-right font-medium mb-3">{team.name}</h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-black/80">
                {team.description}
              </p>
            </div>

            {/* 포스터: 원하는 크기로(여기서 조절) */}
            <div className="order-1 md:order-2 w-full md:w-[440px]">
              <div className="w-full aspect-[3/4] bg-white overflow-hidden">
                <img
                  src={team.poster}
                  alt={team.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* 2) 티저 영상 */}
          <section className="mt-16">
            <div className="w-full aspect-video border border-black/20 bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${team.youtubeId}`}
                title={`${team.name} Teaser`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </section>

          {/* 3) 팀 구성원 */}
          <section className="mt-16">
            <h3 className="text-base font-semibold mb-6">TEAM {team.name}</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {members.map((member) => (
                <Link
                  key={member.name}
                  to={`/portfolio/${member.portfolioUrl}`}
                  className="block group"
                >
                  <div
                    className="bg-white relative overflow-hidden"
                    style={{ paddingTop: `${calculatePaddingTop()}%` }}
                  >
                    <img
                      src={require(`../${member.profileImageUrl}`)}
                      alt={member.name}
                      loading="lazy"
                      className="absolute top-0 left-0 w-full h-full object-contain"
                    />
                  </div>

                  <div className="mt-2 text-sm group-hover:opacity-70 transition">
                    {member.name}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;