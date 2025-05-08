import React from "react";
import ImageView from "../ImageView";
import { Users, Target, Building2, Award } from "lucide-react";

export const FEATURES_DATA = [
  {
    icon: <Award />,
    title: "خبرة واسعة",
    description: "أكثر من 15 عاماً من الخبرة في مجال المقاولات والتطوير",
  },
  {
    icon: <Users />,

    title: "فريق محترف",
    description: "نخبة من المهندسين والفنيين المؤهلين لتنفيذ مشاريعكم",
  },
  {
    icon: <Building2 />,

    title: "مشاريع متنوعة",
    description: "تنفيذ مئات المشاريع السكنية والتجارية بنجاح",
  },
  {
    icon: <Target />,
    title: "جودة عالية",
    description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا",
  },
];

const About = () => {
  return (
    <section className="py-32 overflow-x-hidden">
      <div className="relative container mx-auto px-4">
        <div className="flex lg:items-center flex-col lg:flex-row gap-16 lg:gap-8">
          <div className="lg:w-1/2 flex-grow">
            <ImageView src="/about.avif" reverseRotate={true} />
          </div>
          <div className="lg:w-1/2 flex-grow">
            <div className="head mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                عن زين التنموية
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                شركة زين التنموية هي شركة رائدة في مجال المقاولات والتطوير في
                المملكة العربية السعودية. نحن نفخر بتقديم خدمات عالية الجودة
                وحلول مبتكرة لعملائنا، مع التركيز على الاستدامة والتميز في كل
                مشروع بفضل فريقنا المتخصص وخبرتنا الواسعة، نلتزم بتطبيق أحدث
                التقنيات والمواد المستدامة لضمان تحقيق نتائج فعالة ومستدامة. كما
                نحرص على بناء شراكات قوية مع عملائنا وموردينا لضمان تنفيذ
                المشاريع بكفاءة عالية، مما يسهم في دعم رؤية المملكة 2030 وتعزيز
                التنمية العمرانية والاقتصادية.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES_DATA.map((fet) => (
                <div
                  className="bg-white px-8 py-4 rounded-md flex flex-col gap-2"
                  key={fet.title}
                >
                  <div className="mx-auto w-[48px] h-[48px] bg-second-300 rounded-full grid place-items-center text-main">
                    {fet.icon}
                  </div>
                  <h3 className="text-lg text-center font-bold text-gray-800">
                    {fet.title}
                  </h3>
                  <p className="text-sm text-center text-gray-600">
                    {fet.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
