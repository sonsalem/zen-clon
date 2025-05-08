import { Eye, GitCompareArrows, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

export const PRODUCTS = [
  {
    title: "Earbuds 2 – لاسلكية بصوت عالي الدقة",
    price: 155,
    oldPrice: 170,
    discount: "20% تخفيض",
    image: "/earbuds2-black.jpg",
  },
  {
    title: "AirPods Pro – الجيل الثاني من آبل",
    price: 170,
    oldPrice: 190,
    discount: "20% تخفيض",
    image: "/airpod-pro-black.jpg",
  },
  {
    title: "Galaxy S21 – 128GB إصدار 5G من سامسونج",
    price: 399,
    image: "/ss-s21.jpg",
  },
  {
    title: "Earbuds 2 – لاسلكية بصوت عالي الدقة",
    price: 155,
    oldPrice: 170,
    discount: "20% تخفيض",
    image: "/earbuds2-black.jpg",
  },
  {
    title: "AirPods Pro – الجيل الثاني من آبل",
    price: 170,
    oldPrice: 190,
    discount: "20% تخفيض",
    image: "/airpod-pro-black.jpg",
  },
  {
    title: "Galaxy S21 – 128GB إصدار 5G من سامسونج",
    price: 399,
    image: "/ss-s21.jpg",
  },
  {
    title: "Earbuds 2 – لاسلكية بصوت عالي الدقة",
    price: 155,
    oldPrice: 170,
    discount: "20% تخفيض",
    image: "/earbuds2-black.jpg",
  },
  {
    title: "AirPods Pro – الجيل الثاني من آبل",
    price: 170,
    oldPrice: 190,
    discount: "20% تخفيض",
    image: "/airpod-pro-black.jpg",
  },
  {
    title: "Galaxy S21 – 128GB إصدار 5G من سامسونج",
    price: 399,
    image: "/ss-s21.jpg",
  },
  {
    title: "Earbuds 2 – لاسلكية بصوت عالي الدقة",
    price: 155,
    oldPrice: 170,
    discount: "20% تخفيض",
    image: "/earbuds2-black.jpg",
  },
  {
    title: "AirPods Pro – الجيل الثاني من آبل",
    price: 170,
    oldPrice: 190,
    discount: "20% تخفيض",
    image: "/airpod-pro-black.jpg",
  },
  {
    title: "Galaxy S21 – 128GB إصدار 5G من سامسونج",
    price: 399,
    image: "/ss-s21.jpg",
  },
];

const Products = () => {
  return (
    <section className="mb-20 overflow-x-hidden">
      <div className="relative container mx-auto px-4">
        <div className="head text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">المنتجات</h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            اكتشف تشكيلتنا الواسعة من المنتجات المصممة لتلبية متطلباتكم بأعلى
            مستويات الجودة والكفاءة.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod, i) => (
            <div className="box bg-white rounded-lg py-4 relative" key={i}>
              {prod.discount && (
                <div className="bg-main rounded-full absolute top-4 right-4 z-20 px-2 text-sm">
                  {prod.discount}
                </div>
              )}
              {/* IMAGE */}
              <div className="image-product relative overflow-hidden">
                <div className="actions absolute left-4 md:-left-12 top-12 flex flex-col gap-4 transition-all duration-500">
                  <div className="action relative flex items-center gap-2 flex-row-reverse">
                    <div
                      className="icon w-[40px] h-[40px] grid place-items-center cursor-pointer bg-[#f5f5f5] rounded-full transition-all duration-300
                    hover:text-white hover:bg-black"
                    >
                      <ShoppingCart size={18} />
                    </div>
                    <span className="text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 translate-x-4 transition-all duration-300 relative">
                      اضافة الى السلة
                    </span>
                  </div>
                  <div className="action relative flex items-center gap-2 flex-row-reverse">
                    <div
                      className="icon w-[40px] h-[40px] grid place-items-center cursor-pointer bg-[#f5f5f5] rounded-full transition-all duration-300
                    hover:text-white hover:bg-black"
                    >
                      <Heart size={18} />
                    </div>
                    <span className="text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 translate-x-4 transition-all duration-300 relative">
                      اضافة الى المفضلة
                    </span>
                  </div>
                  <div className="action relative flex items-center gap-2 flex-row-reverse">
                    <div
                      className="icon w-[40px] h-[40px] grid place-items-center cursor-pointer bg-[#f5f5f5] rounded-full transition-all duration-300
                    hover:text-white hover:bg-black"
                    >
                      <Eye size={18} />
                    </div>
                    <span className="text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 translate-x-4 transition-all duration-300 relative">
                      مشاهدة سريغة
                    </span>
                  </div>
                  <div className="action relative flex items-center gap-2 flex-row-reverse">
                    <div
                      className="icon w-[40px] h-[40px] grid place-items-center cursor-pointer bg-[#f5f5f5] rounded-full transition-all duration-300
                    hover:text-white hover:bg-black"
                    >
                      <GitCompareArrows size={18} />
                    </div>
                    <span className="text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 translate-x-4 transition-all duration-300 relative">
                      مقارنة
                    </span>
                  </div>
                </div>
                <Image
                  src={prod.image}
                  alt={prod.title}
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              {/* TEXT */}
              <div className="px-4">
                <h2 className="text-center font-bold mb-3">{prod.title}</h2>
                <div className="flex items-center justify-center gap-4">
                  <div
                    className={` ${
                      prod.discount && "text-main"
                    } text-lg font-medium`}
                  >
                    ${prod.price}
                  </div>
                  {prod.discount && prod.oldPrice && (
                    <div className={`text-gray-300 line-through text-lg`}>
                      ${prod.price}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
