import React from "react";
import Badge from "../Badge";
import { Star, Award, Shield } from "lucide-react";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const swiperData = [
  {
    title1: "إلكترونيات حديثة",
    title2: "أفضل العروض التقنية في مكان واحد",
    description:
      "استكشف تشكيلتنا الواسعة من الأجهزة الذكية، السماعات، الإكسسوارات، والمزيد – بجودة عالية وأسعار منافسة.",
    badges: [
      {
        text: "توصيل سريع وآمن",
        icon: <Shield size={18} className="text-main" />,
      },
      {
        text: "منتجات أصلية 100%",
        icon: <Award size={18} className="text-main" />,
      },
      {
        text: "دعم فني متواصل",
        icon: <Star size={18} className="text-main" />,
      },
    ],
    image: "/slider-electronic-1.png",
  },
  {
    title1: "تسوق بذكاء",
    title2: "عروض لا تُفوت على الأجهزة الإلكترونية",
    description:
      "استفد من التخفيضات الحصرية على الهواتف الذكية، الأجهزة اللوحية، السماعات، والساعات الذكية.",
    badges: [
      {
        text: "خصومات حقيقية",
        icon: <Star size={18} className="text-main" />,
      },
      {
        text: "طرق دفع متعددة وآمنة",
        icon: <Shield size={18} className="text-main" />,
      },
      {
        text: "ضمان واسترجاع سهل",
        icon: <Award size={18} className="text-main" />,
      },
    ],
    image: "/slider-electronic-2.png",
  },
];

const Landing = () => {
  return (
    <section className="landing relative overflow-x-hidden ">
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
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full !py-32"
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex lg:items-center flex-col-reverse lg:flex-row gap-16 lg:gap-8">
                <div className="lg:w-1/2 flex-grow flex flex-col gap-8">
                  <div className="mx-auto w-fit lg:mx-0">
                    <Badge
                      text={item.title2}
                      icon={<Star size={18} />}
                      bg="light"
                    />
                  </div>
                  <div className="titles">
                    <h1 className="text-4xl font-medium text-main md:text-6xl text-center lg:text-start">
                      {item.title1}
                    </h1>
                    <h1 className="text-4xl font-medium md:text-6xl text-center lg:text-start">
                      {item.title2}
                    </h1>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 text-center lg:text-start font-medium">
                    {item.description}
                  </p>
                  <div className="flex gap-4 items-center justify-center lg:justify-start flex-wrap">
                    {item.badges.map((badge, i) => (
                      <div
                        key={i}
                        className="transition-all duration-500 hover:-translate-y-3"
                      >
                        <Badge text={badge.text} icon={badge.icon} />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 items-center justify-center lg:justify-start flex-wrap">
                    <Button text="مشاريعنا" cc="!px-8" />
                    <Button text="تواصل معنا" color="black" cc="!px-8" />
                  </div>
                </div>
                <div className="lg:w-1/2 flex-grow">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt="landing"
                      width={600}
                      height={400}
                      className="object-cover w-full rounded-md relative"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-second-100 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default Landing;

{
  /* <div className="flex justify-around gap-4 mt-8 relative">
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
</div> */
}
