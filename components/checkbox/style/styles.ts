import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes antCheckboxEffect {
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

export const antCheckboxInner = css`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  border-collapse: separate;
  transition: all 0.3s;

  &::after {
    position: absolute;
    top: 50%;
    left: 21%;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0) translate(-50%, -50%);
    opacity: 0;
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    content: ' ';
  }
`;

export const antCheckbox = css`
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
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;

  &:hover .${antCheckboxInner} {
    border-color: #1890ff;
  }

  &:hover::after {
    visibility: visible;
  }

  & + span {
    padding-right: 8px;
    padding-left: 8px;
  }
`;

export const antCheckboxChecked = css`
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    animation: antCheckboxEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    content: '';
  }

  & .${antCheckboxInner}::after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    content: ' ';
  }

  & .${antCheckboxInner} {
    background-color: #1890ff;
    border-color: #1890ff;
  }
`;

export const antCheckboxInput = css`
  &:focus + .${antCheckboxInner} {
    border-color: #1890ff;
  }

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`;

export const antCheckboxDisabled = css`
  cursor: not-allowed;

  &.${antCheckboxChecked} .${antCheckboxInner}::after {
    border-color: rgba(0, 0, 0, 0.25);
    animation-name: none;
  }

  & .${antCheckboxInput} {
    cursor: not-allowed;
  }

  & .${antCheckboxInner} {
    background-color: #f5f5f5;
    border-color: #d9d9d9 !important;
  }

  & .${antCheckboxInner}::after {
    border-color: #f5f5f5;
    border-collapse: separate;
    animation-name: none;
  }

  & + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const antCheckboxGroup = css`
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
`;

export const antCheckboxGroupItem = css`
  display: inline-block;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  & + & {
    margin-left: 0;
  }
`;

export const antCheckboxIndeterminate = css`
  & .${antCheckboxInner} {
    background-color: #fff;
    border-color: #d9d9d9;
  }

  & .${antCheckboxInner}::after {
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border: 0;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    content: ' ';
  }

  &.${antCheckboxDisabled} .${antCheckboxInner}::after {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: rgba(0, 0, 0, 0.25);
  }
`;

export const antCheckboxWrapper = css`
  &:hover .${antCheckboxInner} {
    border-color: #1890ff;
  }

  &:hover .${antCheckbox}::after {
    visibility: visible;
  }

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
  cursor: pointer;

  & + & {
    margin-left: 8px;
  }

  & + span {
    padding-right: 8px;
    padding-left: 8px;
  }
`;
