import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antDivider = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  background: #e8e8e8;

  position: relative;
  top: -0.06em;
  display: inline-block;
  width: 1px;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
`;

export const antDividerDashed = css`
  background: none;
  border-top: 1px dashed #e8e8e8;
`;

export const antDividerInnerText = css`
  display: inline-block;
  padding: 0 24px;
`;

export const antDividerHorizontal = css`
  display: block;
  clear: both;
  width: 100%;
  min-width: 100%;
  height: 1px;
  margin: 24px 0;

  &.ant-divider-with-text,
  &.ant-divider-with-text-left,
  &.ant-divider-with-text-right {
    display: table;
    margin: 16px 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    background: transparent;
  }

  &.ant-divider-with-text::before,
  &.ant-divider-with-text-left::before,
  &.ant-divider-with-text-right::before,
  &.ant-divider-with-text::after,
  &.ant-divider-with-text-left::after,
  &.ant-divider-with-text-right::after {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 50%;
    border-top: 1px solid #e8e8e8;
    transform: translateY(50%);
    content: '';
  }

  &.ant-divider-with-text-left
    .${antDividerInnerText},
    &.ant-divider-with-text-right
    .${antDividerInnerText} {
    display: inline-block;
    padding: 0 10px;
  }

  &.ant-divider-with-text-left::before {
    top: 50%;
    width: 5%;
  }

  &.ant-divider-with-text-left::after {
    top: 50%;
    width: 95%;
  }

  &.ant-divider-with-text-right::before {
    top: 50%;
    width: 95%;
  }

  &.ant-divider-with-text-right::after {
    top: 50%;
    width: 5%;
  }

  &.ant-divider-with-text.${antDividerDashed},
    &.ant-divider-with-text-left.${antDividerDashed},
    &.ant-divider-with-text-right.${antDividerDashed} {
    border-top: 0;
  }

  &.ant-divider-with-text.${antDividerDashed}::before,
    &.ant-divider-with-text-left.${antDividerDashed}::before,
    &.ant-divider-with-text-right.${antDividerDashed}::before,
    &.ant-divider-with-text.${antDividerDashed}::after,
    &.ant-divider-with-text-left.${antDividerDashed}::after,
    &.ant-divider-with-text-right.${antDividerDashed}::after {
    border-style: dashed none none;
  }
`;

export const antDividerVertical = css`
  position: relative;
  top: -0.06em;
  display: inline-block;
  width: 1px;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
`;
