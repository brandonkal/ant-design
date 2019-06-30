import { css } from '@emotion/core';

export const global = css`
  @keyframes antSpinMove {
    to {
      opacity: 1;
    }
  }

  @keyframes antRotate {
    to {
      transform: rotate(405deg);
    }
  }
`;

export const antSpin = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  display: none;
  color: #1890ff;
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);

  &.ant-spin-show-text .ant-spin-text {
    display: block;
  }
`;

export const antSpinBlur = css`
  clear: both;
  overflow: hidden;
  opacity: 0.5;
  user-select: none;
  pointer-events: none;

  &::after {
    opacity: 0.4;
    pointer-events: auto;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    & {
      background: #fff;
      opacity: 0.5;
    }
  }
`;

export const antSpinContainer = css`
  position: relative;
  transition: opacity 0.3s;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: none \\9;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    transition: all 0.3s;
    content: '';
    pointer-events: none;
  }
`;

export const antSpinDot = css`
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 20px;
  height: 20px;
`;

export const antSpinDotItem = css`
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #1890ff;
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;

  &:nth-child(1) {
    top: 0;
    left: 0;
  }

  &:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
  }

  &:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
  }
`;

export const antSpinDotSpin = css`
  transform: rotate(45deg);
  animation: antRotate 1.2s infinite linear;
`;

export const antSpinLg = css`
  & .${antSpinDot} {
    font-size: 32px;
    width: 32px;
    height: 32px;
  }

  & .${antSpinDot} i {
    width: 14px;
    height: 14px;
  }
`;

export const antSpinSm = css`
  & .${antSpinDot} {
    font-size: 14px;
    width: 14px;
    height: 14px;
  }

  & .${antSpinDot} i {
    width: 6px;
    height: 6px;
  }
`;

export const antSpinNestedLoading = css`
  position: relative;

  & > div > .${antSpin} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
  }

  & > div > .${antSpin} .${antSpinDot} {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -10px;
  }

  & > div > .${antSpin} .ant-spin-text {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-top: 5px;
    text-shadow: 0 1px 2px #fff;
  }

  & > div > .${antSpin}.ant-spin-show-text .${antSpinDot} {
    margin-top: -20px;
  }

  & > div > .${antSpinSm} .${antSpinDot} {
    margin: -7px;
  }

  & > div > .${antSpinSm} .ant-spin-text {
    padding-top: 2px;
  }

  & > div > .${antSpinSm}.ant-spin-show-text .${antSpinDot} {
    margin-top: -17px;
  }

  & > div > .${antSpinLg} .${antSpinDot} {
    margin: -16px;
  }

  & > div > .${antSpinLg} .ant-spin-text {
    padding-top: 11px;
  }

  & > div > .${antSpinLg}.ant-spin-show-text .${antSpinDot} {
    margin-top: -26px;
  }
`;

export const antSpinSpinning = css`
  position: static;
  display: inline-block;
  opacity: 1;
`;

export const antSpinTip = css`
  color: rgba(0, 0, 0, 0.45);
`;
