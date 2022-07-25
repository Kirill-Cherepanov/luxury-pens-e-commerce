import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import ItemButtons from '../components/ItemButtons';
import closeIcon from '../icons/close.svg';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useState } from 'react';

type StoreItemPreviewProps = {
  id: number;
  name: string;
  price: number;
  paths: string[];
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

  const SwipeOnClickWrapper = swipeOnClickWrapper(<p>Please work</p>, 1);

  return createPortal(
    <div
      onMouseDown={(e) => {
        if (e.currentTarget !== e.target) return true;
        closeMenu();
      }}
      className="flex backdrop-blur-sm bg-transparent-white justify-center items-center fixed top-0 w-full h-full z-20"
    >
      <div className="flex flex-col min-w-[20rem] w-1/2 max-w-xl h-5/6 bg-slate-400 p-4 shadow-md overflow-y-scroll">
        <button onClick={closeMenu} className="ml-auto mb-4">
          <img src={closeIcon} width="16" height="16" alt="" />
        </button>
        <div className="GALLERY max-h-[320px] mb-2 bg-slate-500">
          <div className="hidden lg:flex">
            <div className="flex-shrink-0 w-28 h-80">
              <Swiper
                style={
                  {
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff'
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
                {paths.map((path, index) => {
                  const Image = swipeOnClickWrapper(
                    <img
                      src={path}
                      alt={name + ' ' + index}
                      onClick={() => {}}
                      className="h-full w-full object-contain select-none"
                    />,
                    index
                  );

                  return (
                    <SwiperSlide
                      key={path}
                      className={
                        `bg-slate-300` +
                        (index === currentSlide ? 'bg-slate-400' : '')
                      }
                    >
                      <Image />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="max-h-[320px] w-full">
              <img
                src={paths[currentSlide]}
                alt={name}
                className="max-h-[320px] w-full object-contain"
              />
            </div>
          </div>
          <Swiper
            style={
              {
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff'
              } as React.CSSProperties
            }
            modules={[Navigation, Pagination, A11y]}
            navigation={true}
            pagination={{ clickable: false, dynamicBullets: true }}
            loop={true}
            className="lg:hidden"
          >
            {paths.map((path, index) => (
              <SwiperSlide key={index}>
                <img src={path} alt={name} className="select-none" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="font-bold text-lg">{name}</div>
        <div className="font-bold text-lg pb-4 border-b border-slate-800">
          {formatCurrency(price)}
        </div>
        <div className="py-4">
          {quantity === 0 ? (
            <ItemButtons id={id} type="add" />
          ) : (
            <ItemButtons id={id} />
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
