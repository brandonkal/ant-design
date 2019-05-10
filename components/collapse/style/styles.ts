import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antCollapseItem = css`
  &:last-child > .${antCollapseContent} {
    border-radius: 0 0 4px 4px;
  }
`;

export const antCollapse = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 4px;

  & > .${antCollapseItem} {
    border-bottom: 1px solid #d9d9d9;
  }

  & > .${antCollapseItem}:last-child, & > .${antCollapseItem}:last-child > .ant-collapse-header {
    border-radius: 0 0 4px 4px;
  }

  & > .${antCollapseItem} > .ant-collapse-header {
    position: relative;
    padding: 12px 16px;
    padding-left: 40px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 22px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & > .${antCollapseItem} > .ant-collapse-header .ant-collapse-arrow {
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
    top: 50%;
    left: 16px;
    display: inline-block;
    margin-top: 2px;
    font-size: 12px;
    line-height: 46px;
    transform: translateY(-50%);
  }

  & > .${antCollapseItem} > .ant-collapse-header .ant-collapse-arrow > * {
    line-height: 1;
  }

  & > .${antCollapseItem} > .ant-collapse-header .ant-collapse-arrow svg {
    display: inline-block;
  }

  & > .${antCollapseItem} > .ant-collapse-header .ant-collapse-arrow::before {
    display: none;
  }

  &
    > .${antCollapseItem}
    > .ant-collapse-header
    .ant-collapse-arrow
    &
    > .${antCollapseItem}
    > .ant-collapse-header
    .ant-collapse-arrow-icon {
    display: block;
  }

  & > .${antCollapseItem} > .ant-collapse-header .ant-collapse-arrow svg {
    transition: transform 0.24s;
  }

  & > .${antCollapseItem} > .ant-collapse-header .ant-collapse-extra {
    float: right;
  }

  & > .${antCollapseItem} > .ant-collapse-header:focus {
    outline: none;
  }

  & > .${antCollapseItem}.ant-collapse-no-arrow > .ant-collapse-header {
    padding-left: 12px;
  }

  & .ant-collapse-item-disabled > .ant-collapse-header,
  & .ant-collapse-item-disabled > .ant-collapse-header > .arrow {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const antCollapseAnimActive = css`
  transition: height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const antCollapseContent = css`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-top: 1px solid #d9d9d9;

  & > .ant-collapse-content-box {
    padding: 16px;
  }
`;

export const antCollapseBorderless = css`
  background-color: #fff;
  border: 0;

  & > .${antCollapseItem} {
    border-bottom: 1px solid #d9d9d9;
  }

  & > .${antCollapseItem}:last-child, & > .${antCollapseItem}:last-child .ant-collapse-header {
    border-radius: 0;
  }

  & > .${antCollapseItem} > .${antCollapseContent} {
    background-color: transparent;
    border-top: 0;
  }

  & > .${antCollapseItem} > .${antCollapseContent} > .ant-collapse-content-box {
    padding-top: 4px;
  }
`;

export const antCollapseContentInactive = css`
  display: none;
`;

export const antCollapseIconPositionRight = css`
  & > .${antCollapseItem} > .ant-collapse-header {
    padding: 12px 16px;
    padding-right: 40px;
  }

  & > .${antCollapseItem} > .ant-collapse-header .ant-collapse-arrow {
    right: 16px;
    left: initial;
  }
`;
