import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes antdDrawerFadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 0.3;
        }
    }
`;

export const antDrawerContent = css`
  position: relative;
  z-index: 1;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
`;

export const antDrawerOpen = css`
  transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
`;

export const antDrawerMask = css`
  position: fixed;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 0;
  filter: alpha(opacity=50);
  transition: opacity 0.3s linear, height 0s ease 0.3s;
`;

export const antDrawer = css`
  position: fixed;
  z-index: 1000;
  width: 0%;
  height: 100%;

  & > * {
    transition: transform 0.3s cubic-bezier(0.9, 0, 0.3, 0.7),
      box-shadow 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);
  }

  & .${antDrawerContent} {
    width: 100%;
    height: 100%;
  }

  &.${antDrawerOpen} .${antDrawerMask} {
    height: 100%;
    opacity: 0.3;
    transition: none;
    animation: antdDrawerFadeIn 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }
`;

export const antDrawerBody = css`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
`;

export const antDrawerContentWrapper = css`
  position: fixed;
`;

export const antDrawerBottom = css`
  left: 0;
  width: 100%;
  height: 0%;

  & .${antDrawerContentWrapper} {
    width: 100%;
  }

  &.${antDrawerOpen} {
    height: 100%;
  }

  &.${antDrawerOpen}.no-mask {
    height: 0%;
  }

  bottom: 0;

  & .${antDrawerContentWrapper} {
    bottom: 0;
  }

  &.${antDrawerOpen} .${antDrawerContentWrapper} {
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const antDrawerClose = css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  display: block;
  width: 56px;
  height: 56px;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  line-height: 56px;
  text-align: center;
  text-transform: none;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;
  text-rendering: auto;

  &:focus,
  &:hover {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
  }
`;

export const antDrawerHeader = css`
  position: relative;
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
`;

export const antDrawerHeaderNoTitle = css`
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
`;

export const antDrawerLeft = css`
  top: 0;
  width: 0%;
  height: 100%;

  & .${antDrawerContentWrapper} {
    height: 100%;
  }

  &.${antDrawerOpen} {
    width: 100%;
  }

  &.${antDrawerOpen}.no-mask {
    width: 0%;
  }

  &.${antDrawerOpen} .${antDrawerContentWrapper} {
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  }
`;

export const antDrawerOpenContent = css`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const antDrawerRight = css`
  top: 0;
  width: 0%;
  height: 100%;

  & .${antDrawerContentWrapper} {
    height: 100%;
  }

  &.${antDrawerOpen} {
    width: 100%;
  }

  &.${antDrawerOpen}.no-mask {
    width: 0%;
  }

  right: 0;

  & .${antDrawerContentWrapper} {
    right: 0;
  }

  &.${antDrawerOpen} .${antDrawerContentWrapper} {
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  }
`;

export const antDrawerTitle = css`
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export const antDrawerTop = css`
  left: 0;
  width: 100%;
  height: 0%;

  & .${antDrawerContentWrapper} {
    width: 100%;
  }

  &.${antDrawerOpen} {
    height: 100%;
  }

  &.${antDrawerOpen}.no-mask {
    height: 0%;
  }

  top: 0;

  &.${antDrawerOpen} .${antDrawerContentWrapper} {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;
