import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import ItemButtons from '../components/ItemButtons';
import closeIcon from '../icons/close.svg';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
// import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import React, { useState } from 'react';

type StoreItemPreviewProps = {
  id: number;
  name: string;
  price: number;
  paths: { highQuality: string[]; lowQuality: string[] };
  desc: string;
  closeMenu: () => void;
};

export default function StoreItemPreview({
  id,
  name,
  price,
  paths,
  desc,
  closeMenu
}: StoreItemPreviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return createPortal(
    <div
      onMouseDown={(e) => {
        if (e.currentTarget !== e.target) return true;
        closeMenu();
      }}
      className="flex backdrop-blur-sm bg-opacity-60 bg-white justify-center items-center fixed top-0 w-full h-full z-20"
    >
      <div className="preview-scrollbar flex flex-col min-w-[20rem] w-1/2 max-w-xl h-5/6 bg-primary-200 p-4 shadow-md overflow-y-scroll">
        <button onClick={closeMenu} className="ml-auto mb-4">
          <img
            src={closeIcon}
            width="16"
            height="16"
            alt=""
            className="select-none"
          />
        </button>
        <div className="GALLERY max-h-[320px] bg-primary-300 rounded-lg">
          <div className="hidden lg:flex">
            <div className="flex-shrink-0 w-28 h-80">
              <Swiper
                style={
                  {
                    '--swiper-theme-color': '#78716c'
                  } as React.CSSProperties
                }
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                direction={'vertical'}
                onSlideChange={(e) => setCurrentSlide(e.realIndex)}
                className="h-full"
              >
                {paths.lowQuality.map((path, index) => {
                  const Image = swipeOnClickWrapper(
                    <img
                      src={path}
                      alt={name + ' ' + index}
                      onClick={() => {}}
                      className={
                        'cursor-pointer h-full w-full object-contain select-none transition-colors duration-200 bg-primary-500 hover:bg-primary-500' +
                        (index !== currentSlide
                          ? ' bg-transparent hover:bg-primary-400'
                          : '')
                      }
                    />,
                    index
                  );

                  return (
                    <SwiperSlide key={path}>
                      <Image />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="max-h-[320px] w-full">
              <img
                src={paths.lowQuality[currentSlide]}
                alt={name}
                className="max-h-[320px] w-full object-contain select-none"
              />
            </div>
          </div>
          <Swiper
            style={
              {
                '--swiper-theme-color': '#78716c'
              } as React.CSSProperties
            }
            modules={[Navigation, Pagination, A11y]}
            navigation={true}
            pagination={{ clickable: false, dynamicBullets: true }}
            loop={true}
            className="max-h-[320px] lg:hidden"
          >
            {paths.lowQuality.map((path, index) => (
              <SwiperSlide key={index}>
                <img
                  src={path}
                  alt={name}
                  className="select-none max-h-[320px] w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-4 flex flex-col justify-between items-center lg:flex-row">
          <div className="font-bold text-lg pb-1">{name}</div>
          <div className="">{formatCurrency(price)}</div>
        </div>
        <div className="w-full uppercase font-bold text-center mb-6">
          {quantity === 0 ? (
            <ItemButtons
              id={id}
              type="add"
              className="w-full py-2 transition-colors duration-200 rounded-md bg-primary-400 hover:bg-primary-600 hover:text-primary-200"
            />
          ) : (
            <ItemButtons id={id} className="mx-auto" />
          )}
        </div>
        <div className="italic text-justify">{desc}</div>
      </div>
    </div>,
    document.getElementById('pop-up')!
  );
}

const swipeOnClickWrapper = (Child: JSX.Element, index: number) => {
  return (props: JSX.IntrinsicAttributes) => {
    const swiper = useSwiper();

    const clickHandler = () => {
      if (swiper.realIndex === 0 && index === 3) return swiper.slidePrev();
      if (swiper.realIndex === 3 && index === 0) return swiper.slideNext();
      if (swiper.realIndex - index > 0) {
        return swiper.slidePrev();
      }
      if (swiper.realIndex - index === 0) return;
      return swiper.slideNext();
    };

    return React.cloneElement(Child, {
      ...props,
      onClick: clickHandler
    });
  };
};
