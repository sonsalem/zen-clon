import React from "react";
import { Users, Target, Building2, Award } from "lucide-react";

export const FEATURES_DATA = [
  {
    icon: <Award />,
    title: "خبرة موثوقة",
    description: "أكثر من 15 عاماً في تقديم أفضل المنتجات الإلكترونية للعملاء",
  },
  {
    icon: <Users />,
    title: "فريق دعم محترف",
    description: "فريق متخصص جاهز لمساعدتك في كل خطوة",
  },
  {
    icon: <Building2 />,
    title: "منتجات متنوعة",
    description: "تشكيلة واسعة من الإلكترونيات لتلبية جميع احتياجاتك",
  },
  {
    icon: <Target />,
    title: "جودة مضمونة",
    description: "نقدّم منتجات أصلية من أفضل العلامات التجارية وبأعلى جودة",
  },
];

const About = () => {
  return (
    <section className="py-20 overflow-x-hidden">
      <div className="relative container mx-auto px-4">
        <div className="head mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            عن زين التنموية
          </h2>
          <p className="text-gray-600 max-w-[1000px] mx-auto font-medium leading-relaxed">
            شركة زين التنموية هي شركة رائدة في مجال المقاولات والتطوير في
            المملكة العربية السعودية. نحن نفخر بتقديم خدمات عالية الجودة وحلول
            مبتكرة لعملائنا، مع التركيز على الاستدامة والتميز في كل مشروع بفضل
            فريقنا المتخصص وخبرتنا الواسعة، نلتزم بتطبيق أحدث التقنيات والمواد
            المستدامة لضمان تحقيق نتائج فعالة ومستدامة. كما نحرص على بناء شراكات
            قوية مع عملائنا وموردينا لضمان تنفيذ المشاريع بكفاءة عالية، مما يسهم
            في دعم رؤية المملكة 2030 وتعزيز التنمية العمرانية والاقتصادية.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
    </section>
  );
};

export default About;
