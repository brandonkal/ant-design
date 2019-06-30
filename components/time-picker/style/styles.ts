import { css } from '@emotion/core';

export const global = css``;

export const antTimePickerClear = css`
  position: absolute;
  top: 50%;
  right: 11px;
  z-index: 1;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  color: rgba(0, 0, 0, 0.25);
  line-height: 14px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;

  & .ant-time-picker-clock-icon {
    display: block;
    color: rgba(0, 0, 0, 0.25);
    line-height: 1;
  }

  z-index: 2;
  background: #fff;
  opacity: 0;
  pointer-events: none;

  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const antTimePicker = css`
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
  width: 128px;
  outline: none;
  cursor: text;
  transition: opacity 0.3s;

  &:hover .${antTimePickerClear} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const antTimePickerIcon = css`
  position: absolute;
  top: 50%;
  right: 11px;
  z-index: 1;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  color: rgba(0, 0, 0, 0.25);
  line-height: 14px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;

  & .ant-time-picker-clock-icon {
    display: block;
    color: rgba(0, 0, 0, 0.25);
    line-height: 1;
  }
`;

export const antTimePickerInput = css`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;

  &::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #bfbfbf;
  }

  &::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  &:focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  &[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  textarea& {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }

  &[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  &[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
`;

export const antTimePickerInputDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 1;

  &:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
`;

export const antTimePickerInputLg = css`
  height: 40px;
  padding: 6px 11px;
  font-size: 16px;
`;

export const antTimePickerInputSm = css`
  height: 24px;
  padding: 1px 7px;
`;

export const antTimePickerLarge = css`
  & .${antTimePickerInput} {
    height: 40px;
    padding: 6px 11px;
    font-size: 16px;
  }
`;

export const antTimePickerOpen = css`
  opacity: 0;
`;

export const antTimePickerPanel = css`
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
  z-index: 1050;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';

  &.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-topLeft,
  &.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-topRight,
  &.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-topLeft,
  &.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-topRight {
    animation-name: antSlideDownIn;
  }

  &.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-bottomLeft,
  &.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-bottomRight,
  &.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-bottomLeft,
  &.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-bottomRight {
    animation-name: antSlideUpIn;
  }

  &.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-topLeft,
  &.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-topRight {
    animation-name: antSlideDownOut;
  }

  &.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-bottomLeft,
  &.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-bottomRight {
    animation-name: antSlideUpOut;
  }
`;

export const antTimePickerPanelAddon = css`
  padding: 8px;
  border-top: 1px solid #e8e8e8;
`;

export const antTimePickerPanelCombobox = css`
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }
`;

export const antTimePickerPanelInner = css`
  position: relative;
  left: -2px;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const antTimePickerPanelInput = css`
  width: 100%;
  max-width: 154px;
  margin: 0;
  padding: 0;
  line-height: normal;
  border: 0;
  outline: 0;
  cursor: auto;

  &::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #bfbfbf;
  }

  &::-webkit-input-placeholder {
    color: #bfbfbf;
  }
`;

export const antTimePickerPanelInputInvalid = css`
  border-color: #f5222d;
`;

export const antTimePickerPanelInputWrap = css`
  position: relative;
  box-sizing: border-box;
  padding: 7px 2px 7px 12px;
  border-bottom: 1px solid #e8e8e8;
`;

export const antTimePickerPanelNarrow = css`
  & .${antTimePickerPanelInputWrap} {
    max-width: 112px;
  }
`;

export const antTimePickerPanelSelect = css`
  position: relative;
  float: left;
  box-sizing: border-box;
  width: 56px;
  max-height: 192px;
  overflow: hidden;
  font-size: 14px;
  border-left: 1px solid #e8e8e8;

  &:hover {
    overflow-y: auto;
  }

  &:first-child {
    margin-left: 0;
    border-left: 0;
  }

  &:last-child {
    border-right: 0;
  }

  &:only-child {
    width: 100%;
  }

  & ul {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0 0 160px;
    list-style: none;
  }

  & li {
    box-sizing: content-box;
    width: 100%;
    height: 32px;
    margin: 0;
    padding: 0 0 0 12px;
    line-height: 32px;
    text-align: left;
    list-style: none;
    cursor: pointer;
    transition: background 0.3s;
    user-select: none;
  }

  & li:hover {
    background: #e6f7ff;
  }
`;

export const antTimePickerPanelSelectOptionDisabled = css`
  li& {
    color: rgba(0, 0, 0, 0.25);
  }

  li&:hover {
    background: transparent;
    cursor: not-allowed;
  }
`;

export const antTimePickerPanelSelectOptionSelected = css`
  li& {
    font-weight: bold;
    background: #f5f5f5;
  }

  li&:hover {
    background: #f5f5f5;
  }
`;

export const antTimePickerSmall = css`
  & .${antTimePickerInput} {
    height: 24px;
    padding: 1px 7px;
  }

  & .${antTimePickerIcon}, & .${antTimePickerClear} {
    right: 7px;
  }
`;
