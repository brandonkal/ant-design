import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antInputNumberHandlerWrap = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 100%;
  background: #fff;
  border-left: 1px solid #d9d9d9;
  border-radius: 0 4px 4px 0;
  opacity: 0;
  transition: opacity 0.24s linear 0.1s;

  &
    .${antInputNumberHandler}
    .${antInputNumberHandlerUpInner},
    &
    .${antInputNumberHandler}
    .${antInputNumberHandlerDownInner} {
    display: inline-block;
    font-size: 12px;
    font-size: 7px \\9;
    transform: scale(0.58333333) rotate(0deg);
    min-width: auto;
    margin-right: 0;
  }

  :root
    &
    .${antInputNumberHandler}
    .${antInputNumberHandlerUpInner},
    :root
    &
    .${antInputNumberHandler}
    .${antInputNumberHandlerDownInner} {
    font-size: 12px;
  }

  &:hover .${antInputNumberHandler} {
    height: 40%;
  }
`;

export const antInputNumber = css`
  box-sizing: border-box;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  transition: all 0.3s;
  display: inline-block;
  width: 90px;
  margin: 0;
  padding: 0;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

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

  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  &:hover .${antInputNumberHandlerWrap} {
    opacity: 1;
  }
`;

export const antInputNumberInput = css`
  width: 100%;
  height: 30px;
  padding: 0 11px;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  outline: 0;
  transition: all 0.3s linear;
  -moz-appearance: textfield;

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

export const antInputNumberDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 1;

  &:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 1;

  &:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  & .${antInputNumberInput} {
    cursor: not-allowed;
  }

  & .${antInputNumberHandlerWrap} {
    display: none;
  }
`;

export const antInputNumberFocused = css`
  border-color: #40a9ff;
  border-right-width: 1px !important;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
`;

export const antInputNumberHandlerUpInner = css`
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 4px;
  width: 12px;
  height: 12px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 12px;
  transition: all 0.1s linear;
  user-select: none;

  & > * {
    line-height: 1;
  }

  & svg {
    display: inline-block;
  }

  &::before {
    display: none;
  }

  & .ant-input-number-handler-up-inner-icon,
  & .ant-input-number-handler-down-inner-icon {
    display: block;
  }

  top: 50%;
  margin-top: -5px;
  text-align: center;
`;

export const antInputNumberHandlerDownInner = css`
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 4px;
  width: 12px;
  height: 12px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 12px;
  transition: all 0.1s linear;
  user-select: none;

  & > * {
    line-height: 1;
  }

  & svg {
    display: inline-block;
  }

  &::before {
    display: none;
  }

  & .ant-input-number-handler-up-inner-icon,
  & .ant-input-number-handler-down-inner-icon {
    display: block;
  }

  top: 50%;
  margin-top: -6px;
  text-align: center;
`;

export const antInputNumberHandler = css`
  position: relative;
  display: block;
  width: 100%;
  height: 50%;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.45);
  font-weight: bold;
  line-height: 0;
  text-align: center;
  transition: all 0.1s linear;

  &:active {
    background: #f4f4f4;
  }

  &:hover .${antInputNumberHandlerUpInner}, &:hover .${antInputNumberHandlerDownInner} {
    color: #40a9ff;
  }
`;

export const antInputNumberHandlerDown = css`
  top: 0;
  border-top: 1px solid #d9d9d9;
  cursor: pointer;

  &:hover {
    height: 60% !important;
  }
`;

export const antInputNumberHandlerDownDisabled = css`
  cursor: not-allowed;

  &:hover .${antInputNumberHandlerDownInner} {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antInputNumberHandlerUp = css`
  cursor: pointer;

  &:hover {
    height: 60% !important;
  }
`;

export const antInputNumberHandlerUpDisabled = css`
  cursor: not-allowed;

  &:hover .${antInputNumberHandlerUpInner} {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antInputNumberLg = css`
  height: 40px;
  padding: 6px 11px;
  font-size: 16px;

  padding: 0;
  font-size: 16px;

  & input {
    height: 38px;
  }
`;

export const antInputNumberSm = css`
  height: 24px;
  padding: 1px 7px;

  padding: 0;

  & input {
    height: 22px;
    padding: 0 7px;
  }
`;
