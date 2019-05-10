import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antAnchorInk = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  &::before {
    position: relative;
    display: block;
    width: 2px;
    height: 100%;
    margin: 0 auto;
    background-color: #e8e8e8;
    content: ' ';
  }
`;

export const antAnchorInkBall = css`
  position: absolute;
  left: 50%;
  display: none;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border: 2px solid #1890ff;
  border-radius: 8px;
  transform: translateX(-50%);
  transition: top 0.3s ease-in-out;

  &.visible {
    display: inline-block;
  }
`;

export const antAnchor = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  padding-left: 2px;

  &.fixed .${antAnchorInk} .${antAnchorInkBall} {
    display: none;
  }
`;

export const antAnchorLink = css`
  padding: 7px 0 7px 16px;
  line-height: 1.143;

  & & {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const antAnchorLinkTitle = css`
  position: relative;
  display: block;
  margin-bottom: 6px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s;

  &:only-child {
    margin-bottom: 0;
  }
`;

export const antAnchorLinkActive = css`
  & > .${antAnchorLinkTitle} {
    color: #1890ff;
  }
`;

export const antAnchorWrapper = css`
  margin-left: -4px;
  padding-left: 4px;
  overflow: auto;
  background-color: #fff;
`;
