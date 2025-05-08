import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const SERVICES_DATA = [
  {
    title: "كابلات",
    img: "cable.png",
  },
  {
    title: "شواحن",
    img: "charge.png",
  },
  {
    title: "سماعات أذن",
    img: "earphone.png",
  },
  {
    title: "هواتف ذكية",
    img: "smartphone.png",
  },
  {
    title: "ساعات ذكية",
    img: "smart-watch.png",
  },
  {
    title: "ساعات ذكية",
    img: "screen-protector.png",
  },
  {
    title: "كابلات",
    img: "cable.png",
  },
  {
    title: "شواحن",
    img: "charge.png",
  },
  {
    title: "سماعات أذن",
    img: "earphone.png",
  },
  {
    title: "هواتف ذكية",
    img: "smartphone.png",
  },
  {
    title: "ساعات ذكية",
    img: "smart-watch.png",
  },
  {
    title: "ساعات ذكية",
    img: "screen-protector.png",
  },
];

const Services = () => {
  return (
    <section className="mb-20 overflow-x-hidden">
      <div className="relative container mx-auto px-4">
        <div className="head text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">الفئات</h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            نقدم مجموعة متكاملة من الفئات لتلبية احتياجاتكم بأعلى معايير الجودة
            والاحترافية
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          className="!py-16"
        >
          {SERVICES_DATA.map((serv, i) => (
            <SwiperSlide key={i}>
              <div className="box overflow-hidden cursor-pointer hover:scale-105 relative hover:z-2 transition-all duration-500">
                {/* TOP */}
                <div className="relative h-60 overflow-hidden bg-white rounded-md shadow-md">
                  <Image
                    src={`/${serv.img}`}
                    alt={serv.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* BOTTOM */}
                <div className="p-4">
                  <h4 className="font-bold text-center">{serv.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
