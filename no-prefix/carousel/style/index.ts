import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const slickLoading = css`
  & .${antCarousel} .slick-track {
    visibility: hidden;
  }
`;

export const antCarousel = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';

  & .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  & .slick-list {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  & .slick-list:focus {
    outline: none;
  }

  & .slick-list.dragging {
    cursor: pointer;
  }

  & .slick-list .slick-slide {
    pointer-events: none;
  }

  & .slick-list .slick-slide.slick-active {
    pointer-events: auto;
  }

  & .slick-slider .slick-track,
  & .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  & .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
  }

  & .slick-track::before,
  & .slick-track::after {
    display: table;
    content: '';
  }

  & .slick-track::after {
    clear: both;
  }

  & .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir='rtl'] & .slick-slide {
    float: right;
  }

  & .slick-slide img {
    display: block;
  }

  & .slick-slide.${slickLoading} img {
    display: none;
  }

  & .slick-slide.dragging img {
    pointer-events: none;
  }

  & .slick-initialized .slick-slide {
    display: block;
  }

  & .${slickLoading} .slick-slide {
    visibility: hidden;
  }

  & .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  & .slick-arrow.slick-hidden {
    display: none;
  }

  & .slick-prev,
  & .slick-next {
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    padding: 0;
    color: transparent;
    font-size: 0;
    line-height: 0;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  & .slick-prev:hover,
  & .slick-next:hover,
  & .slick-prev:focus,
  & .slick-next:focus {
    color: transparent;
    background: transparent;
    outline: none;
  }

  & .slick-prev:hover::before,
  & .slick-next:hover::before,
  & .slick-prev:focus::before,
  & .slick-next:focus::before {
    opacity: 1;
  }

  & .slick-prev.slick-disabled::before,
  & .slick-next.slick-disabled::before {
    opacity: 0.25;
  }

  & .slick-prev {
    left: -25px;
  }

  & .slick-prev::before {
    content: '←';
  }

  & .slick-next {
    right: -25px;
  }

  & .slick-next::before {
    content: '→';
  }

  & .slick-dots {
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }

  & .slick-dots-bottom {
    bottom: 12px;
  }

  & .slick-dots-top {
    top: 12px;
  }

  & .slick-dots li {
    position: relative;
    display: inline-block;
    margin: 0 2px;
    padding: 0;
    text-align: center;
    vertical-align: top;
  }

  & .slick-dots li button {
    display: block;
    width: 16px;
    height: 3px;
    padding: 0;
    color: transparent;
    font-size: 0;
    background: #fff;
    border: 0;
    border-radius: 1px;
    outline: none;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.5s;
  }

  & .slick-dots li button:hover,
  & .slick-dots li button:focus {
    opacity: 0.75;
  }

  & .slick-dots li.slick-active button {
    width: 24px;
    background: #fff;
    opacity: 1;
  }

  & .slick-dots li.slick-active button:hover,
  & .slick-dots li.slick-active button:focus {
    opacity: 1;
  }
`;

export const antCarouselVertical = css`
  & .slick-dots {
    top: 50%;
    bottom: auto;
    width: 3px;
    height: auto;
    transform: translateY(-50%);
  }

  & .slick-dots-left {
    left: 12px;
  }

  & .slick-dots-right {
    right: 12px;
  }

  & .slick-dots li {
    margin: 0 2px;
    vertical-align: baseline;
  }

  & .slick-dots li button {
    width: 3px;
    height: 16px;
  }

  & .slick-dots li.slick-active button {
    width: 3px;
    height: 24px;
  }
`;
