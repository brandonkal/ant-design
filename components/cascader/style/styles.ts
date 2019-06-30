import { css } from '@emotion/core';

export const global = css``;

export const antCascader = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
`;

export const antCascaderInput = css`
  &.ant-input {
    position: relative;
    width: 100%;
    background-color: transparent !important;
    cursor: pointer;
  }
`;

export const antCascaderMenu = css`
  display: inline-block;
  min-width: 111px;
  height: 180px;
  margin: 0;
  padding: 0;
  overflow: auto;
  vertical-align: top;
  list-style: none;
  border-right: 1px solid #e8e8e8;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    margin-right: -1px;
    border-right-color: transparent;
    border-radius: 0 4px 4px 0;
  }

  &:only-child {
    border-radius: 4px;
  }
`;

export const antCascaderMenuItem = css`
  padding: 5px 12px;
  line-height: 22px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6f7ff;
  }

  & .ant-cascader-menu-item-keyword {
    color: #f5222d;
  }
`;

export const antCascaderMenuItemDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;

  &:hover {
    background: transparent;
  }
`;

export const antCascaderMenuItemActive = css`
  &:not(.${antCascaderMenuItemDisabled}),
  &:not(.${antCascaderMenuItemDisabled}):hover {
    font-weight: 600;
    background: #f5f5f5;
  }
`;

export const antCascaderMenuItemExpand = css`
  position: relative;
  padding-right: 24px;

  & .ant-cascader-menu-item-expand-icon,
  & .ant-cascader-menu-item-loading-icon {
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
    position: absolute;
    right: 12px;
    color: rgba(0, 0, 0, 0.45);
  }

  :root & .ant-cascader-menu-item-expand-icon,
  :root & .ant-cascader-menu-item-loading-icon {
    font-size: 12px;
  }
`;

export const antCascaderMenus = css`
  position: absolute;
  z-index: 1050;
  font-size: 14px;
  white-space: nowrap;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  & ul,
  & ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-bottomLeft,
  &.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-bottomLeft {
    animation-name: antSlideUpIn;
  }

  &.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-topLeft,
  &.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-topLeft {
    animation-name: antSlideDownIn;
  }

  &.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-bottomLeft {
    animation-name: antSlideUpOut;
  }

  &.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-topLeft {
    animation-name: antSlideDownOut;
  }
`;

export const antCascaderMenusEmpty = css`
  display: none;
`;

export const antCascaderMenusHidden = css`
  display: none;
`;

export const antCascaderPickerClear = css`
  position: absolute;
  top: 50%;
  right: 12px;
  z-index: 2;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 12px;
  background: #fff;
  cursor: pointer;
  opacity: 0;
  transition: color 0.3s ease, opacity 0.15s ease;

  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const antCascaderPicker = css`
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
  background-color: #fff;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;

  &:focus .${antCascaderInput} {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &:hover .${antCascaderPickerClear} {
    opacity: 1;
  }
`;

export const antCascaderPickerArrow = css`
  position: absolute;
  top: 50%;
  right: 12px;
  z-index: 1;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 12px;
  transition: transform 0.2s;

  &.ant-cascader-picker-arrow-expand {
    transform: rotate(180deg);
  }
`;

export const antCascaderPickerDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  cursor: not-allowed;

  & .${antCascaderInput} {
    cursor: not-allowed;
  }
`;

export const antCascaderPickerLabel = css`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 20px;
  margin-top: -10px;
  padding: 0 12px;
  overflow: hidden;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const antCascaderPickerShowSearch = css`
  & .${antCascaderInput}.ant-input {
    position: relative;
  }

  &.ant-cascader-picker-focused {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antCascaderPickerSmall = css`
  & .${antCascaderPickerClear}, & .${antCascaderPickerArrow} {
    right: 8px;
  }
`;

export const antCascaderPickerWithValue = css`
  & .${antCascaderPickerLabel} {
    color: transparent;
  }
`;
