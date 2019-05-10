import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes antAlertSlideUpIn {
        0% {
            transform: scaleY(0);
            transform-origin: 0% 0%;
            opacity: 0;
        }

        100% {
            transform: scaleY(1);
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    @keyframes antAlertSlideUpOut {
        0% {
            transform: scaleY(1);
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            transform: scaleY(0);
            transform-origin: 0% 0%;
            opacity: 0;
        }
    }
`;

export const antAlert = css`
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
  padding: 8px 15px 8px 37px;
  border-radius: 4px;

  &.ant-alert-no-icon {
    padding: 8px 15px;
  }

  &.ant-alert-closable {
    padding-right: 30px;
  }

  &.ant-alert-close {
    height: 0 !important;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    transform-origin: 50% 0;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
`;

export const antAlertBanner = css`
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
`;

export const antAlertCloseIcon = css`
  position: absolute;
  top: 8px;
  right: 16px;
  overflow: hidden;
  font-size: 12px;
  line-height: 22px;
  cursor: pointer;

  & .anticon-close {
    color: rgba(0, 0, 0, 0.45);
    transition: color 0.3s;
  }

  & .anticon-close:hover {
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const antAlertCloseText = css`
  position: absolute;
  right: 16px;
`;

export const antAlertDescription = css`
  display: none;
  font-size: 14px;
  line-height: 22px;
`;

export const antAlertIcon = css`
  position: absolute;
  top: 11.5px;
  left: 16px;
`;

export const antAlertError = css`
  background-color: #fff1f0;
  border: 1px solid #ffa39e;

  & .${antAlertIcon} {
    color: #f5222d;
  }
`;

export const antAlertInfo = css`
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;

  & .${antAlertIcon} {
    color: #1890ff;
  }
`;

export const antAlertSlideUpLeave = css`
  animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  animation-fill-mode: both;
`;

export const antAlertSuccess = css`
  background-color: #f6ffed;
  border: 1px solid #b7eb8f;

  & .${antAlertIcon} {
    color: #52c41a;
  }
`;

export const antAlertWarning = css`
  background-color: #fffbe6;
  border: 1px solid #ffe58f;

  & .${antAlertIcon} {
    color: #faad14;
  }
`;

export const antAlertWithDescription = css`
  position: relative;
  padding: 15px 15px 15px 64px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5;
  border-radius: 4px;

  &.ant-alert-no-icon {
    padding: 15px;
  }

  & .${antAlertIcon} {
    position: absolute;
    top: 16px;
    left: 24px;
    font-size: 24px;
  }

  & .${antAlertCloseIcon} {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 14px;
    cursor: pointer;
  }

  & .ant-alert-message {
    display: block;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
  }

  & .${antAlertDescription} {
    display: block;
  }
`;
