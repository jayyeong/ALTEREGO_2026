import React from "react";

const runwayImages = [
  "/2025/runway/Kuad_fashionshow_0.jpg",
  "/2025/runway/Kuad_fashionshow_1.jpg",
  "/2025/runway/Kuad_fashionshow_2.jpg",
  "/2025/runway/Kuad_fashionshow_3.jpg",
  "/2025/runway/Kuad_fashionshow_4.jpg",
  "/2025/runway/Kuad_fashionshow_5.jpg",
  "/2025/runway/Kuad_fashionshow_6.jpg",
  "/2025/runway/Kuad_fashionshow_7.jpg",
  "/2025/runway/Kuad_fashionshow_8.jpg",
  "/2025/runway/Kuad_fashionshow_9.jpg",
  "/2025/runway/Kuad_fashionshow_10.jpg",
  "/2025/runway/Kuad_fashionshow_11.jpg",
  "/2025/runway/Kuad_fashionshow_12.jpg",
  "/2025/runway/Kuad_fashionshow_13.jpg",
  "/2025/runway/Kuad_fashionshow_14.jpg",
  "/2025/runway/Kuad_fashionshow_15.jpg",
  "/2025/runway/Kuad_fashionshow_16.jpg",
  "/2025/runway/Kuad_fashionshow_17.jpg",
  "/2025/runway/Kuad_fashionshow_18.jpg",
  "/2025/runway/Kuad_fashionshow_19.jpg",
  "/2025/runway/Kuad_fashionshow_20.jpg",
  "/2025/runway/Kuad_fashionshow_21.jpg",
  "/2025/runway/Kuad_fashionshow_22.jpg",
  "/2025/runway/Kuad_fashionshow_23.jpg",
  "/2025/runway/Kuad_fashionshow_24.jpg",
  "/2025/runway/Kuad_fashionshow_25.jpg",
  "/2025/runway/Kuad_fashionshow_26.jpg",
  "/2025/runway/Kuad_fashionshow_27.jpg",
  "/2025/runway/Kuad_fashionshow_28.jpg",
  "/2025/runway/Kuad_fashionshow_29.jpg",
  "/2025/runway/Kuad_fashionshow_30.jpg",
  "/2025/runway/Kuad_fashionshow_31.jpg",
  "/2025/runway/Kuad_fashionshow_32.jpg",
  "/2025/runway/Kuad_fashionshow_33.jpg",
  "/2025/runway/Kuad_fashionshow_34.jpg",
  "/2025/runway/Kuad_fashionshow_35.jpg",
  "/2025/runway/Kuad_fashionshow_36.jpg",
  "/2025/runway/Kuad_fashionshow_37.jpg",

  "/2025/runway/Kuad_fashionshow_39.jpg",
  "/2025/runway/Kuad_fashionshow_40.jpg",
  "/2025/runway/Kuad_fashionshow_41.jpg",
  "/2025/runway/Kuad_fashionshow_42.jpg",
  "/2025/runway/Kuad_fashionshow_43.jpg",
  "/2025/runway/Kuad_fashionshow_44.jpg",
  "/2025/runway/Kuad_fashionshow_45.jpg",
  "/2025/runway/Kuad_fashionshow_46.jpg",
  "/2025/runway/Kuad_fashionshow_47.jpg",
  "/2025/runway/Kuad_fashionshow_48.jpg",
  "/2025/runway/Kuad_fashionshow_49.jpg",
  "/2025/runway/Kuad_fashionshow_50.jpg",
  "/2025/runway/Kuad_fashionshow_51.jpg",
  "/2025/runway/Kuad_fashionshow_52.jpg",

  "/2025/runway/Kuad_fashionshow_54.jpg",
  "/2025/runway/Kuad_fashionshow_55.jpg",
  "/2025/runway/Kuad_fashionshow_56.jpg",
  "/2025/runway/Kuad_fashionshow_57.jpg",
  "/2025/runway/Kuad_fashionshow_58.jpg",
  "/2025/runway/Kuad_fashionshow_59.jpg",
  "/2025/runway/Kuad_fashionshow_60.jpg",
  "/2025/runway/Kuad_fashionshow_61.jpg",
  "/2025/runway/Kuad_fashionshow_62.jpg",
  "/2025/runway/Kuad_fashionshow_63.jpg",
  "/2025/runway/Kuad_fashionshow_64.jpg",
  "/2025/runway/Kuad_fashionshow_65.jpg",
  "/2025/runway/Kuad_fashionshow_66.jpg",
  "/2025/runway/Kuad_fashionshow_67.jpg",
  "/2025/runway/Kuad_fashionshow_68.jpg",
  "/2025/runway/Kuad_fashionshow_69.jpg",
  "/2025/runway/Kuad_fashionshow_70.jpg",
  "/2025/runway/Kuad_fashionshow_71.jpg",

  "/2025/runway/Kuad_fashionshow_73.jpg",
  "/2025/runway/Kuad_fashionshow_74.jpg",
  "/2025/runway/Kuad_fashionshow_75.jpg",
  "/2025/runway/Kuad_fashionshow_76.jpg",
  "/2025/runway/Kuad_fashionshow_77.jpg",
  "/2025/runway/Kuad_fashionshow_78.jpg",
  "/2025/runway/Kuad_fashionshow_79.jpg",
  "/2025/runway/Kuad_fashionshow_80.jpg",
  "/2025/runway/Kuad_fashionshow_81.jpg",
  "/2025/runway/Kuad_fashionshow_82.jpg",
  "/2025/runway/Kuad_fashionshow_83.jpg",
  "/2025/runway/Kuad_fashionshow_84.jpg",
  "/2025/runway/Kuad_fashionshow_85.jpg",
  "/2025/runway/Kuad_fashionshow_86.jpg",
  "/2025/runway/Kuad_fashionshow_87.jpg",
  "/2025/runway/Kuad_fashionshow_88.jpg",

  "/2025/runway/Kuad_fashionshow_90.jpg",
  "/2025/runway/Kuad_fashionshow_91.jpg",
  "/2025/runway/Kuad_fashionshow_92.jpg",
  "/2025/runway/Kuad_fashionshow_93.jpg",
  "/2025/runway/Kuad_fashionshow_94.jpg",
  "/2025/runway/Kuad_fashionshow_95.jpg",
  "/2025/runway/Kuad_fashionshow_96.jpg",
  "/2025/runway/Kuad_fashionshow_97.jpg",
  "/2025/runway/Kuad_fashionshow_98.jpg",
  "/2025/runway/Kuad_fashionshow_99.jpg",
  "/2025/runway/Kuad_fashionshow_100.jpg",
  "/2025/runway/Kuad_fashionshow_101.jpg",
  "/2025/runway/Kuad_fashionshow_102.jpg",
  "/2025/runway/Kuad_fashionshow_103.jpg",
  "/2025/runway/Kuad_fashionshow_104.jpg",
  "/2025/runway/Kuad_fashionshow_105.jpg",
  "/2025/runway/Kuad_fashionshow_106.jpg",
  "/2025/runway/Kuad_fashionshow_107.jpg",
];

export default function Runway() {
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-10 space-y-12">
      {/* video (2개 중 1개만 남김) */}
      <div className="w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/I6ZhuIJTGug"
          title="RUNWAY"
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      {/* images grid (scroll) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {runwayImages.map((src, idx) => (
          <div key={idx} className="w-full">
            <img
              src={src}
              alt={`Runway ${idx + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}