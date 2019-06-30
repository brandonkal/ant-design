import { css } from '@emotion/core';

export const global = css``;

export const antModal = css`
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
  top: 100px;
  width: auto;
  margin: 0 auto;
  padding-bottom: 24px;

  &.zoom-enter,
  &.zoom-appear {
    transform: none;
    opacity: 0;
    animation-duration: 0.3s;
    user-select: none;
  }

  @media (max-width: 767px) {
    & {
      max-width: calc(100vw - 16px);
      margin: 8px auto;
    }
  }
`;

export const antModalBody = css`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
`;

export const antModalCentered = css`
  text-align: center;

  &::before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: '';
  }

  & .${antModal} {
    top: 0;
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    & .${antModal} {
      flex: 1;
    }
  }
`;

export const antModalClose = css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;

  &:focus,
  &:hover {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
  }
`;

export const antModalCloseX = css`
  display: block;
  width: 56px;
  height: 56px;
  font-size: 16px;
  font-style: normal;
  line-height: 56px;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
`;

export const antModalHeader = css`
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 4px 4px 0 0;
`;

export const antModalConfirm = css`
  & .${antModalHeader} {
    display: none;
  }

  & .${antModalClose} {
    display: none;
  }

  & .${antModalBody} {
    padding: 32px 32px 24px;
  }

  & .ant-modal-confirm-btns {
    float: right;
    margin-top: 24px;
  }

  & .ant-modal-confirm-btns button + button {
    margin-bottom: 0;
    margin-left: 8px;
  }
`;

export const antModalConfirmBody = css`
  & .ant-modal-confirm-title {
    display: block;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
  }

  & .ant-modal-confirm-content {
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }

  & > .anticon {
    float: left;
    margin-right: 16px;
    font-size: 22px;
  }

  & > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {
    margin-left: 38px;
  }
`;

export const antModalConfirmBodyWrapper = css`
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

export const antModalConfirmConfirm = css`
  & .${antModalConfirmBody} > .anticon {
    color: #faad14;
  }
`;

export const antModalConfirmError = css`
  & .${antModalConfirmBody} > .anticon {
    color: #f5222d;
  }
`;

export const antModalConfirmInfo = css`
  & .${antModalConfirmBody} > .anticon {
    color: #1890ff;
  }
`;

export const antModalConfirmSuccess = css`
  & .${antModalConfirmBody} > .anticon {
    color: #52c41a;
  }
`;

export const antModalConfirmWarning = css`
  & .${antModalConfirmBody} > .anticon {
    color: #faad14;
  }
`;

export const antModalContent = css`
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const antModalFooter = css`
  padding: 10px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;

  & button + button {
    margin-bottom: 0;
    margin-left: 8px;
  }
`;

export const antModalMask = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  filter: alpha(opacity=50);
`;

export const antModalMaskHidden = css`
  display: none;
`;

export const antModalOpen = css`
  overflow: hidden;
`;

export const antModalTitle = css`
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  word-wrap: break-word;
`;

export const antModalWrap = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  -webkit-overflow-scrolling: touch;
`;
