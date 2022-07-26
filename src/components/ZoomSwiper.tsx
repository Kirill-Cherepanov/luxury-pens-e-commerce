import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Zoom } from 'swiper';

import closeIcon from '../icons/close.svg';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

type ZoomSwiperProps = {
  closeFullScreen: () => void;
  paths: string[];
  name: string;
  startWith?: number;
};

type Position = { x: number; y: number };

export default function ZoomSwiper({
  closeFullScreen,
  paths,
  name,
  startWith = 0
}: ZoomSwiperProps) {
  const [zoomedPos, setZoomedPos] = useState<Position>({
    x: 0,
    y: 0
  });
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  return (
    <div className="absolute z-30 top-0 left-0 h-full w-full flex items-center justify-center">
      <div className="relative h-5/6 w-5/6">
        <button
          aria-label="Close fullscreen"
          className="absolute z-40 right-4 top-4"
          onClick={closeFullScreen}
        >
          <img
            src={closeIcon}
            width="24"
            height="24"
            alt=""
            className="select-none"
          />
        </button>
        {window.innerWidth < 640 ? (
          <Swiper
            className="MOBILE_SWIPER bg-primary-300 h-full w-full"
            style={
              {
                '--swiper-theme-color': '#78716c'
              } as React.CSSProperties
            }
            modules={[Zoom, Navigation, Pagination, A11y]}
            navigation={true}
            pagination={{ clickable: false, dynamicBullets: true }}
            zoom={true}
            loop={true}
            initialSlide={startWith}
          >
            {paths.map((path) => (
              <SwiperSlide key={path}>
                <div className="swiper-zoom-container">
                  <img
                    src={path}
                    alt={name}
                    className="select-none h-full w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            className="bg-primary-300 h-full w-full"
            style={
              {
                '--swiper-theme-color': '#78716c'
              } as React.CSSProperties
            }
            modules={[Navigation, Pagination, A11y]}
            navigation={true}
            pagination={{ clickable: false, dynamicBullets: true }}
            initialSlide={startWith}
          >
            {paths.map((path) => (
              <SwiperSlide key={path}>
                <div
                  className="h-full w-full overflow-hidden mx-auto"
                  onClick={(e) => {
                    setZoomedPos(getRelativeCursorPos(e));
                    setIsZoomedIn((isZoomedIn) => !isZoomedIn);
                  }}
                  onMouseMove={(e) => {
                    if (!isZoomedIn) return;

                    setZoomedPos(getRelativeCursorPos(e));
                  }}
                  onMouseLeave={() => setIsZoomedIn(false)}
                >
                  <img
                    src={path}
                    alt={name}
                    className={
                      ' object-contain select-none h-full w-full' +
                      (isZoomedIn
                        ? ` cursor-zoom-out scale-[250%]`
                        : ' cursor-zoom-in')
                    }
                    style={{
                      transformOrigin: !isZoomedIn
                        ? undefined
                        : `${zoomedPos.x}px ${zoomedPos.y}px`
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

const getRelativeCursorPos = (e: React.MouseEvent) => {
  const x =
    e.clientX - (e.currentTarget as HTMLDivElement).getBoundingClientRect().x;
  const y =
    e.clientY - (e.currentTarget as HTMLDivElement).getBoundingClientRect().y;

  return { x, y };
};
