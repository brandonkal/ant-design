import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antAvatar = css`
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
  display: inline-block;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;

  &.ant-avatar-icon {
    font-size: 18px;
  }

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const antAvatarImage = css`
  background: transparent;
`;

export const antAvatarLg = css`
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;

  &.ant-avatar-icon {
    font-size: 24px;
  }
`;

export const antAvatarLgString = css`
  position: absolute;
  left: 50%;
  transform-origin: 0 center;
`;

export const antAvatarSm = css`
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;

  &.ant-avatar-icon {
    font-size: 14px;
  }
`;

export const antAvatarSmString = css`
  position: absolute;
  left: 50%;
  transform-origin: 0 center;
`;

export const antAvatarSquare = css`
  border-radius: 4px;
`;

export const antAvatarString = css`
  position: absolute;
  left: 50%;
  transform-origin: 0 center;
`;
