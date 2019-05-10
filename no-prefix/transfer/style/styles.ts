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

    @keyframes transferHighlightIn {
        0% {
            background: #bae7ff;
        }

        100% {
            background: transparent;
        }
    }
`;

export const antTransfer = css`
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
`;

export const antTransferOperation = css`
  display: inline-block;
  margin: 0 8px;
  overflow: hidden;
  vertical-align: middle;

  & .ant-btn {
    display: block;
  }

  & .ant-btn:first-child {
    margin-bottom: 4px;
  }

  & .ant-btn .anticon {
    font-size: 12px;
  }
`;

export const antTransferList = css`
  position: relative;
  display: inline-block;
  width: 180px;
  height: 200px;
  padding-top: 40px;
  vertical-align: middle;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const antTransferListBodyWithSearch = css`
  padding-top: 56px;

  & .${antTransferListBodyNotFound} {
    margin-top: 16px;
  }
`;

export const antTransferListBodySearchWrapper = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px;
`;

export const antTransferCustomizeList = css`
  display: flex;

  & .${antTransferOperation} {
    flex: none;
    align-self: center;
  }

  & .${antTransferList} {
    flex: auto;
    width: auto;
    height: auto;
    min-height: 200px;
  }

  & .${antTransferListBodyWithSearch} {
    padding-top: 0;
  }

  & .${antTransferListBodySearchWrapper} {
    position: relative;
    padding-bottom: 0;
  }

  & .ant-transfer-list-body-customize-wrapper {
    padding: 12px;
  }

  & .ant-table-wrapper .ant-table-small {
    border: 0;
    border-radius: 0;
  }

  &
    .ant-table-wrapper
    .ant-table-small
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th {
    background: #fafafa;
  }

  & .ant-table-wrapper .ant-table-small > .ant-table-content .ant-table-row:last-child td {
    border-bottom: 1px solid #e8e8e8;
  }

  & .ant-table-wrapper .ant-table-small .ant-table-body {
    margin: 0;
  }

  & .ant-table-wrapper .ant-table-pagination.ant-pagination {
    margin: 16px 0 4px;
  }
`;

export const antTransferDisabled = css`
  & .${antTransferList} {
    background: #f5f5f5;
  }
`;

export const antTransferListBody = css`
  position: relative;
  height: 100%;
  font-size: 14px;
`;

export const antTransferListBodyNotFound = css`
  position: absolute;
  top: 50%;
  width: 100%;
  padding-top: 0;
  color: rgba(0, 0, 0, 0.25);
  text-align: center;
  transform: translateY(-50%);
`;

export const antTransferListContent = css`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style: none;

  & > .LazyLoad {
    animation: transferHighlightIn 1s;
  }
`;

export const antTransferListContentItemDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
`;

export const antTransferListContentItem = css`
  min-height: 32px;
  padding: 6px 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s;

  & > span {
    padding-right: 0;
  }

  &:not(.${antTransferListContentItemDisabled}):hover {
    background-color: #e6f7ff;
    cursor: pointer;
  }
`;

export const antTransferListFooter = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
`;

export const antTransferListHeader = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 12px 9px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
`;

export const antTransferListHeaderTitle = css`
  position: absolute;
  right: 12px;
`;

export const antTransferListSearch = css`
  padding: 0 8px;
`;

export const antTransferListSearchAction = css`
  position: absolute;
  top: 12px;
  right: 12px;
  bottom: 12px;
  width: 28px;
  color: rgba(0, 0, 0, 0.25);
  line-height: 32px;
  text-align: center;

  & .anticon {
    color: rgba(0, 0, 0, 0.25);
    transition: all 0.3s;
  }

  & .anticon:hover {
    color: rgba(0, 0, 0, 0.45);
  }

  span& {
    pointer-events: none;
  }
`;

export const antTransferListWithFooter = css`
  padding-bottom: 34px;
`;
