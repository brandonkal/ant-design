import { css } from '@emotion/core';

export const global = css`
  @keyframes antRadioEffect {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }

    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
`;

export const antRadioInner = css`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: solid;
  border-width: 1px;
  border-radius: 100px;
  transition: all 0.3s;

  &::after {
    position: absolute;
    top: 3px;
    left: 3px;
    display: table;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border-top: 0;
    border-left: 0;
    border-radius: 8px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: ' ';
  }
`;

export const antRadio = css`
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
  line-height: 1;
  white-space: nowrap;
  vertical-align: sub;
  outline: none;
  cursor: pointer;

  &:hover .${antRadioInner} {
    border-color: #1890ff;
  }

  &:hover::after {
    visibility: visible;
  }

  span& + * {
    padding-right: 8px;
    padding-left: 8px;
  }

  @supports (-moz-appearance: meterbar) and (background-blend-mode: difference, normal) {
    & {
      vertical-align: text-bottom;
    }
  }
`;

export const antRadioButtonWrapper = css`
  position: relative;
  display: inline-block;
  height: 32px;
  margin: 0;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 30px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  border-left: 0;
  cursor: pointer;
  transition: color 0.3s, background 0.3s, border-color 0.3s;

  & a {
    color: rgba(0, 0, 0, 0.65);
  }

  & > .ant-radio-button {
    display: block;
    width: 0;
    height: 0;
    margin-left: 0;
  }

  &:not(:first-child)::before {
    position: absolute;
    top: 0;
    left: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: #d9d9d9;
    content: '';
  }

  &:first-child {
    border-left: 1px solid #d9d9d9;
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }

  &:first-child:last-child {
    border-radius: 4px;
  }

  &:hover {
    position: relative;
    color: #1890ff;
  }

  &:focus-within {
    outline: 3px solid rgba(24, 144, 255, 0.06);
  }

  & .${antRadioInner}, & input[type='checkbox'],
  & input[type='radio'] {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
`;

export const antRadioButtonWrapperChecked = css`
  z-index: 1;
  color: #1890ff;
  background: #fff;
  border-color: #1890ff;
  box-shadow: -1px 0 0 0 #1890ff;

  &::before {
    background-color: #1890ff !important;
    opacity: 0.1;
  }

  &:first-child {
    border-color: #1890ff;
    box-shadow: none !important;
  }

  &:hover {
    color: #40a9ff;
    border-color: #40a9ff;
    box-shadow: -1px 0 0 0 #40a9ff;
  }

  &:active {
    color: #096dd9;
    border-color: #096dd9;
    box-shadow: -1px 0 0 0 #096dd9;
  }

  &:focus-within {
    outline: 3px solid rgba(24, 144, 255, 0.06);
  }
`;

export const antRadioButtonWrapperDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;

  &:first-child,
  &:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }

  &:first-child {
    border-left-color: #d9d9d9;
  }

  &.${antRadioButtonWrapperChecked} {
    color: #fff;
    background-color: #e6e6e6;
    border-color: #d9d9d9;
    box-shadow: none;
  }
`;

export const antRadioChecked = css`
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 50%;
    visibility: hidden;
    animation: antRadioEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    content: '';
  }

  & .${antRadioInner} {
    border-color: #1890ff;
  }

  & .${antRadioInner}::after {
    transform: scale(1);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
`;

export const antRadioInput = css`
  &:focus + .${antRadioInner} {
    border-color: #1890ff;
  }

  &:focus + .${antRadioInner} {
    box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.08);
  }

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
`;

export const antRadioDisabled = css`
  & .${antRadioInner} {
    background-color: #f5f5f5;
    border-color: #d9d9d9 !important;
    cursor: not-allowed;
  }

  & .${antRadioInner}::after {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & .${antRadioInput} {
    cursor: not-allowed;
  }

  & + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const antRadioGroup = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
  line-height: unset;
`;

export const antRadioGroupLarge = css`
  & .${antRadioButtonWrapper} {
    height: 40px;
    font-size: 16px;
    line-height: 38px;
  }
`;

export const antRadioGroupSmall = css`
  & .${antRadioButtonWrapper} {
    height: 24px;
    padding: 0 7px;
    line-height: 22px;
  }
`;

export const antRadioGroupSolid = css`& .${antRadioButtonWrapperChecked}:not(.${antRadioButtonWrapperDisabled}) {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
}

& .${antRadioButtonWrapperChecked}:not(.${antRadioButtonWrapperDisabled}):hover {
  color: #fff;
  background: #40a9ff;
  border-color: #40a9ff;
}

& .${antRadioButtonWrapperChecked}:not(.${antRadioButtonWrapperDisabled}):active {
  color: #fff;
  background: #096dd9;
  border-color: #096dd9;
}

& .${antRadioButtonWrapperChecked}:not(.${antRadioButtonWrapperDisabled}):focus-within {
  outline: 3px solid rgba(24, 144, 255, 0.06);
}

`;

export const antRadioWrapper = css`
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
  margin-right: 8px;
  white-space: nowrap;
  cursor: pointer;

  &:hover .${antRadio} {
    border-color: #1890ff;
  }

  &:hover .${antRadio}::after {
    visibility: visible;
  }
`;
