import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antPageHeader = css`
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
  padding: 16px 24px;
  background: #fff;

  &.ant-page-header-has-footer {
    padding-bottom: 0;
  }

  & .ant-divider {
    height: 14px;
    margin: 0 12px;
  }

  & .ant-breadcrumb {
    margin-bottom: 12px;
  }
`;

export const antPageHeaderBack = css`
  display: inline-block;
  padding: 4px 0;
  font-size: 16px;
  line-height: 100%;
  cursor: pointer;
`;

export const antPageHeaderBackButton = css`
  color: #1890ff;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.65);

  &:focus,
  &:hover {
    color: #40a9ff;
  }

  &:active {
    color: #096dd9;
  }
`;

export const antPageHeaderContentView = css`
  padding-top: 12px;
`;

export const antPageHeaderFooter = css`
  margin: 0 -8px;
  padding-top: 24px;

  & .ant-tabs-bar {
    margin-bottom: 1px;
    border-bottom: 0;
  }

  & .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab {
    padding: 12px 8px;
    padding-top: 0;
  }
`;

export const antPageHeaderTitleView = css`
  display: inline-block;
`;

export const antPageHeaderTitleViewExtra = css`
  position: absolute;
  top: 16px;
  right: 24px;

  & > * {
    margin-right: 8px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export const antPageHeaderTitleViewSubTitle = css`
  display: inline-block;
  padding-right: 12px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.8;
`;

export const antPageHeaderTitleViewTags = css`
  display: inline-block;
  vertical-align: top;
`;

export const antPageHeaderTitleViewTitle = css`
  display: inline-block;
  padding-right: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  font-size: 16px;
  line-height: 1.4;
`;
