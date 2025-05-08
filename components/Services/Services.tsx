import Image from "next/image";
import React from "react";

export const SERVICES_DATA = [
  {
    title: "المقاولات",
    subtitle: "بناء وتجهيز",
    subServicesCount: 4,
    img: "serv-bg-1.webp",
    icon: "serv-1.webp",
  },
  {
    title: "الصيانة العامة",
    subtitle: "إصلاح وترميم",
    subServicesCount: 33,
    img: "serv-bg-2.webp",
    icon: "serv-2.webp",
  },
  {
    title: "التصميم",
    subtitle: "تصاميم مبتكرة",
    subServicesCount: 7,
    img: "serv-bg-3.webp",
    icon: "serv-3.webp",
  },
  {
    title: "التنظيف",
    subtitle: "تنظيف شامل",
    subServicesCount: 0,
    img: "serv-bg-4.webp",
    icon: "serv-4.webp",
  },
];

const Services = () => {
  return (
    <section className="mb-32 overflow-x-hidden">
      <div className="relative container mx-auto px-4">
        <div className="head text-center mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            خدماتنا المتميزة
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات المتخصصة لتلبية احتياجاتكم بأعلى
            معايير الجودة والاحترافية
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SERVICES_DATA.map((serv) => (
            <div
              className="box bg-white rounded-md overflow-hidden"
              key={serv.title}
            >
              {/* TOP */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={`/${serv.img}`}
                  alt={serv.title}
                  fill
                  objectFit="cover"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <Image
                    src={`/${serv.icon}`}
                    alt={serv.title}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              {/* BOTTOM */}
              <div className="p-4">
                <div className="flex justify-between items-center gap-4 mb-4">
                  <div className="rounded-full text-xs px-2 py-1 bg-second-300">
                    {serv.subServicesCount} خدمات فرعية
                  </div>
                  <h4 className="font-bold">{serv.title}</h4>
                </div>
                <h4 className="font-medium text-gray-600">{serv.subtitle}</h4>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
