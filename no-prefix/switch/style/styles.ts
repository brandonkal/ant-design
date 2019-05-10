import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes AntSwitchSmallLoadingCircle {
        0% {
            transform: rotate(0deg) scale(0.66667);
            transform-origin: 50% 50%;
        }

        100% {
            transform: rotate(360deg) scale(0.66667);
            transform-origin: 50% 50%;
        }
    }
`;

export const antSwitchDisabled = css`
  cursor: not-allowed;
  opacity: 0.4;

  & * {
    cursor: not-allowed;
  }

  &::before,
  &::after {
    cursor: not-allowed;
  }
`;

export const antSwitch = css`
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
  box-sizing: border-box;
  min-width: 44px;
  height: 22px;
  line-height: 20px;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.36s;
  user-select: none;

  &::after {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 18px;
    cursor: pointer;
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: ' ';
  }

  &::after {
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }

  &:not(.${antSwitchDisabled}):active::before,
  &:not(.${antSwitchDisabled}):active::after {
    width: 24px;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &:focus:hover {
    box-shadow: none;
  }
`;

export const antSwitchLoading = css`
  & .${antSwitchLoadingIcon} {
    display: inline-block;
    color: rgba(0, 0, 0, 0.65);
  }

  cursor: not-allowed;
  opacity: 0.4;

  & * {
    cursor: not-allowed;
  }

  &::before,
  &::after {
    cursor: not-allowed;
  }
`;

export const antSwitchLoadingIcon = css`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  content: ' ';

  z-index: 1;
  display: none;
  font-size: 12px;
  background: transparent;

  & svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

export const antSwitchInner = css`
  display: block;
  margin-right: 6px;
  margin-left: 24px;
  color: #fff;
  font-size: 12px;
`;

export const antSwitchChecked = css`
  &.${antSwitchLoading} .${antSwitchLoadingIcon} {
    color: #1890ff;
  }

  background-color: #1890ff;

  & .${antSwitchInner} {
    margin-right: 24px;
    margin-left: 6px;
  }

  &::after {
    left: 100%;
    margin-left: -1px;
    transform: translateX(-100%);
  }

  & .${antSwitchLoadingIcon} {
    left: 100%;
    margin-left: -19px;
  }
`;

export const antSwitchSmall = css`
  min-width: 28px;
  height: 16px;
  line-height: 14px;

  & .${antSwitchInner} {
    margin-right: 3px;
    margin-left: 18px;
    font-size: 12px;
  }

  &::after {
    width: 12px;
    height: 12px;
  }

  &:active::before,
  &:active::after {
    width: 16px;
  }

  & .${antSwitchLoadingIcon} {
    width: 12px;
    height: 12px;
  }

  &.${antSwitchChecked} .${antSwitchInner} {
    margin-right: 18px;
    margin-left: 3px;
  }

  &.${antSwitchChecked} .${antSwitchLoadingIcon} {
    left: 100%;
    margin-left: -13px;
  }

  &.${antSwitchLoading} .${antSwitchLoadingIcon} {
    font-weight: bold;
    transform: scale(0.66667);
  }
`;
