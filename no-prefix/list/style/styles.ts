import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antListVertical = css`
  & .${antListItem} {
    align-items: initial;
  }

  & .ant-list-item-main {
    display: block;
    flex: 1;
  }

  & .ant-list-item-extra {
    margin-left: 40px;
  }

  & .${antListItemMeta} {
    margin-bottom: 16px;
  }

  & .${antListItemMetaTitle} {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    line-height: 24px;
  }

  & .${antListItemAction} {
    margin-top: 16px;
    margin-left: auto;
  }

  & .${antListItemAction} > li {
    padding: 0 16px;
  }

  & .${antListItemAction} > li:first-child {
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    & .ant-list-item-extra {
      margin-left: 24px;
    }
  }

  @media screen and (max-width: 576px) {
    & .${antListItem} {
      flex-wrap: wrap-reverse;
    }

    & .ant-list-item-main {
      min-width: 220px;
    }

    & .ant-list-item-extra {
      margin: auto auto 16px;
    }
  }
`;

export const antListItemNoFlex = css`
  display: block;
`;

export const antListItemAction = css`
  flex: 0 0 auto;
  margin-left: 48px;
  padding: 0;
  font-size: 0;
  list-style: none;

  & > li {
    position: relative;
    display: inline-block;
    padding: 0 8px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
  }

  & > li:first-child {
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    & {
      margin-left: 24px;
    }
  }

  @media screen and (max-width: 576px) {
    & {
      margin-left: 12px;
    }
  }
`;

export const antList = css`
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

  & * {
    outline: none;
  }

  &:not(.${antListVertical}) .${antListItemNoFlex} .${antListItemAction} {
    float: right;
  }
`;

export const antListHeader = css`
  background: transparent;

  padding-top: 12px;
  padding-bottom: 12px;
`;

export const antListFooter = css`
  background: transparent;

  padding-top: 12px;
  padding-bottom: 12px;
`;

export const antListItem = css`
  display: flex;
  align-items: center;
  padding: 12px 0;

  @media screen and (max-width: 576px) {
    & {
      flex-wrap: wrap;
    }
  }
`;

export const antListPagination = css`
  margin-top: 24px;
  text-align: right;
`;

export const antListSm = css`
  & .${antListItem} {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const antListLg = css`
  & .${antListItem} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const antListBordered = css`
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  & .${antListHeader} {
    padding-right: 24px;
    padding-left: 24px;
  }

  & .${antListFooter} {
    padding-right: 24px;
    padding-left: 24px;
  }

  & .${antListItem} {
    padding-right: 24px;
    padding-left: 24px;
    border-bottom: 1px solid #e8e8e8;
  }

  & .${antListPagination} {
    margin: 16px 24px;
  }

  &.${antListSm} .${antListItem} {
    padding-right: 16px;
    padding-left: 16px;
  }

  &.${antListSm} .${antListHeader}, &.${antListSm} .${antListFooter} {
    padding: 8px 16px;
  }

  &.${antListLg} .${antListHeader}, &.${antListLg} .${antListFooter} {
    padding: 16px 24px;
  }
`;

export const antListEmpty = css`
  padding: 16px 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  text-align: center;
`;

export const antListEmptyText = css`
  padding: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  text-align: center;
`;

export const antListGrid = css`
  & .${antListItem} {
    display: block;
    max-width: 100%;
    margin-bottom: 16px;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const antListItemActionSplit = css`
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 14px;
  margin-top: -7px;
  background-color: #e8e8e8;
`;

export const antListItemContent = css`
  color: rgba(0, 0, 0, 0.65);
`;

export const antListItemMeta = css`
  display: flex;
  flex: 1;
  align-items: flex-start;
  font-size: 0;
`;

export const antListItemMetaAvatar = css`
  margin-right: 16px;
`;

export const antListItemMetaContent = css`
  flex: 1 0;
`;

export const antListItemMetaDescription = css`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 22px;
`;

export const antListItemMetaTitle = css`
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 22px;

  & > a {
    color: rgba(0, 0, 0, 0.65);
    transition: all 0.3s;
  }

  & > a:hover {
    color: #1890ff;
  }
`;

export const antListItems = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const antListLoading = css`
  & .ant-list-spin-nested-loading {
    min-height: 32px;
  }
`;

export const antListMore = css`
  margin-top: 12px;
  text-align: center;

  & button {
    padding-right: 32px;
    padding-left: 32px;
  }
`;

export const antListSomethingAfterLastItem = css`
  & .ant-spin-container > .${antListItems} > .${antListItem}:last-child {
    border-bottom: 1px solid #e8e8e8;
  }
`;

export const antListSpin = css`
  min-height: 40px;
  text-align: center;
`;

export const antListSplit = css`
  & .${antListItem} {
    border-bottom: 1px solid #e8e8e8;
  }

  & .${antListItem}:last-child {
    border-bottom: none;
  }

  & .${antListHeader} {
    border-bottom: 1px solid #e8e8e8;
  }
`;
