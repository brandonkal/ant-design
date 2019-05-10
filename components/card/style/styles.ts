import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes card-loading {
        0%,
        100% {
            background-position: 0 50%;
        }

        50% {
            background-position: 100% 50%;
        }
    }
`;

export const antCard = css`
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
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;
`;

export const antCardActions = css`
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }

  & > li {
    float: left;
    margin: 12px 0;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
  }

  & > li > span {
    position: relative;
    display: inline-block;
    min-width: 32px;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  & > li > span:hover {
    color: #1890ff;
    transition: color 0.3s;
  }

  & > li > span > .anticon {
    font-size: 16px;
    line-height: 22px;
  }

  & > li > span a {
    display: inline-block;
    width: 100%;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;
  }

  & > li > span a:hover {
    color: #1890ff;
  }

  & > li:not(:last-child) {
    border-right: 1px solid #e8e8e8;
  }
`;

export const antCardBody = css`
  padding: 24px;
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

export const antCardBordered = css`
  border: 1px solid #e8e8e8;
`;

export const antCardLoading = css`
  overflow: hidden;

  & .${antCardBody} {
    user-select: none;
  }
`;

export const antCardContainGrid = css`
  &:not(.${antCardLoading}) .${antCardBody} {
    margin: -1px 0 0 -1px;
    padding: 0;
  }
`;

export const antCardHead = css`
  min-height: 48px;
  margin-bottom: -1px;
  padding: 0 24px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  background: transparent;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 2px 2px 0 0;
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }

  & .ant-tabs {
    clear: both;
    margin-bottom: -17px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: normal;
    font-size: 14px;
  }

  & .ant-tabs-bar {
    border-bottom: 1px solid #e8e8e8;
  }
`;

export const antCardHeadTitle = css`
  display: inline-block;
  flex: 1;
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const antCardExtra = css`
  float: right;
  margin-left: auto;
  padding: 16px 0;
  color: rgba(0, 0, 0, 0.65);
  font-weight: normal;
  font-size: 14px;
`;

export const antCardContainTabs = css`
  & > .${antCardHead} .${antCardHeadTitle} {
    min-height: 32px;
    padding-bottom: 0;
  }

  & .${antCardExtra} {
    padding-bottom: 0;
  }
`;

export const antCardCover = css`
  & > * {
    display: block;
    width: 100%;
  }

  & img {
    border-radius: 2px 2px 0 0;
  }
`;

export const antCardGrid = css`
  float: left;
  width: 33.33%;
  padding: 24px;
  border: 0;
  border-radius: 0;
  box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, 1px 0 0 0 #e8e8e8 inset,
    0 1px 0 0 #e8e8e8 inset;
  transition: all 0.3s;

  &:hover {
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const antCardHeadWrapper = css`
  display: flex;
  align-items: center;
`;

export const antCardHoverable = css`
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 0, 0, 0.09);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }
`;

export const antCardLoadingBlock = css`
  height: 14px;
  margin: 4px 0;
  background: linear-gradient(
    90deg,
    rgba(207, 216, 220, 0.2),
    rgba(207, 216, 220, 0.4),
    rgba(207, 216, 220, 0.2)
  );
  background-size: 600% 600%;
  border-radius: 2px;
  animation: card-loading 1.4s ease infinite;
`;

export const antCardLoadingContent = css`
  & p {
    margin: 0;
  }
`;

export const antCardMeta = css`
  margin: -4px 0;
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

export const antCardMetaAvatar = css`
  float: left;
  padding-right: 16px;
`;

export const antCardMetaDescription = css`
  color: rgba(0, 0, 0, 0.45);
`;

export const antCardMetaDetail = css`
  overflow: hidden;

  & > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const antCardMetaTitle = css`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const antCardSmall = css`
  & > .${antCardHead} {
    min-height: 36px;
    padding: 0 12px;
    font-size: 14px;
  }

  & > .${antCardHead} > .${antCardHeadWrapper} > .${antCardHeadTitle} {
    padding: 8px 0;
  }

  & > .${antCardHead} > .${antCardHeadWrapper} > .${antCardExtra} {
    padding: 8px 0;
    font-size: 14px;
  }

  & > .${antCardBody} {
    padding: 12px;
  }
`;

export const antCardTypeInner = css`
  & .${antCardHead} {
    padding: 0 24px;
    background: #fafafa;
  }

  & .${antCardHeadTitle} {
    padding: 12px 0;
    font-size: 14px;
  }

  & .${antCardBody} {
    padding: 16px 24px;
  }

  & .${antCardExtra} {
    padding: 13.5px 0;
  }
`;
