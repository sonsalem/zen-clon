import React from "react";
import ImageView from "../ImageView";
import Badge from "../Badge";
import { Star, Award, Shield } from "lucide-react";
import Button from "../Button";

export const STATS_DATA = [
  {
    value: "15+",
    label: "سنوات خبرة",
  },
  {
    value: "500+",
    label: "مشروع منجز",
  },
  {
    value: "50+",
    label: "شريك نجاح",
  },
  {
    value: "100%",
    label: "رضا العملاء",
  },
];

const Landing = () => {
  return (
    <section className="landing relative py-32 overflow-x-hidden">
      <div className="absolute h-full inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#0057b7"
                  strokeWidth="0.5"
                ></path>
              </pattern>
              <pattern
                id="dots-pattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="#f59e0b"></circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
            <rect width="100%" height="100%" fill="url(#dots-pattern)"></rect>
          </svg>
        </div>
      </div>
      <div className="relative container mx-auto px-4">
        <div className="flex lg:items-center flex-col-reverse lg:flex-row gap-16 lg:gap-8">
          <div className="lg:w-1/2 flex-grow flex flex-col gap-8">
            <div className="mx-auto w-fit lg:mx-0">
              <Badge
                text="الشريك الأمثل لمشاريع المستقبل"
                icon={<Star size={18} />}
                bg="light"
              />
            </div>
            <div className="titles">
              <h1 className="text-4xl font-medium text-main md:text-6xl text-center lg:text-start">
                زين التنموية
              </h1>
              <h1 className="text-4xl font-medium md:text-6xl text-center lg:text-start">
                الشريك الأمثل لمشاريع المستقبل
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 text-center lg:text-start font-medium">
              شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية.
              نقدم التميز في خدمات المقاولات والصيانة والخدمات المتخصصة
            </p>
            <div className="flex gap-4 items-center justify-center lg:justify-start flex-wrap">
              <div className="transition-all duration-500 hover:-translate-y-3">
                <Badge
                  text="خبرة أكثر من 15 عام"
                  icon={<Award size={18} className="text-main" />}
                />
              </div>
              <div className="transition-all duration-500 hover:-translate-y-3">
                <Badge
                  text="ضمان الجودة في كل مشروع"
                  icon={<Shield size={18} className="text-main" />}
                />
              </div>
              <div className="transition-all duration-500 hover:-translate-y-3">
                <Badge
                  text="فريق من المهندسين المحترفين"
                  icon={<Star size={18} className="text-main" />}
                />
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center lg:justify-start flex-wrap">
              <Button text="مشاريعنا" cc="!px-8" />
              <Button text="تواصل معنا" color="black" cc="!px-8" />
            </div>
          </div>
          <div className="lg:w-1/2 flex-grow">
            <ImageView src="/landing.avif" />
            <div className="flex justify-around gap-4 mt-8 relative">
              {STATS_DATA.map((state, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="text-main text-3xl font-medium">
                    {state.value}
                  </div>
                  <div className="font-medium text-gray-500">{state.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
