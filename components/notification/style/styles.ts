import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes NotificationFadeIn {
        0% {
            left: 384px;
            opacity: 0;
        }

        100% {
            left: 0;
            opacity: 1;
        }
    }

    @keyframes NotificationLeftFadeIn {
        0% {
            right: 384px;
            opacity: 0;
        }

        100% {
            right: 0;
            opacity: 1;
        }
    }

    @keyframes NotificationFadeOut {
        0% {
            max-height: 150px;
            margin-bottom: 16px;
            padding-top: 16px 24px;
            padding-bottom: 16px 24px;
            opacity: 1;
        }

        100% {
            max-height: 0;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: 0;
            opacity: 0;
        }
    }
`;

export const antNotification = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  position: fixed;
  z-index: 1010;
  width: 384px;
  max-width: calc(100vw - 32px);
  margin-right: 24px;

  & .notification-fade-effect {
    animation-duration: 0.24s;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-fill-mode: both;
  }
`;

export const antNotificationFadeEnter = css`
  opacity: 0;
  animation-duration: 0.24s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-fill-mode: both;
  animation-play-state: paused;

  &.ant-notification-fade-enter-active {
    animation-name: NotificationFadeIn;
    animation-play-state: running;
  }
`;

export const antNotificationFadeAppear = css`
  opacity: 0;
  animation-duration: 0.24s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-fill-mode: both;
  animation-play-state: paused;

  &.ant-notification-fade-appear-active {
    animation-name: NotificationFadeIn;
    animation-play-state: running;
  }
`;

export const antNotificationBottomLeft = css`
  margin-right: 0;
  margin-left: 24px;

  &
    .${antNotificationFadeEnter}.ant-notification-fade-enter-active,
    &
    .${antNotificationFadeAppear}.ant-notification-fade-appear-active {
    animation-name: NotificationLeftFadeIn;
  }
`;

export const antNotificationCloseIcon = css`
  font-size: 14px;
  cursor: pointer;
`;

export const antNotificationFadeLeave = css`
  animation-duration: 0.24s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-fill-mode: both;
  animation-duration: 0.2s;
  animation-play-state: paused;

  &.ant-notification-fade-leave-active {
    animation-name: NotificationFadeOut;
    animation-play-state: running;
  }
`;

export const antNotificationNotice = css`
  position: relative;
  margin-bottom: 16px;
  padding: 16px 24px;
  overflow: hidden;
  line-height: 1.5;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const antNotificationNoticeBtn = css`
  float: right;
  margin-top: 16px;
`;

export const antNotificationNoticeMessage = css`
  display: inline-block;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  line-height: 24px;
`;

export const antNotificationNoticeClosable = css`
  & .${antNotificationNoticeMessage} {
    padding-right: 24px;
  }
`;

export const antNotificationNoticeClose = css`
  position: absolute;
  top: 16px;
  right: 22px;
  color: rgba(0, 0, 0, 0.45);
  outline: none;

  &:hover {
    color: rgba(0, 0, 0, 0.67);
  }
`;

export const antNotificationNoticeDescription = css`
  font-size: 14px;
`;

export const antNotificationNoticeMessageSingleLineAutoMargin = css`
  display: block;
  width: calc(384px - 24px * 2 - 24px - 48px - 100%);
  max-width: 4px;
  background-color: transparent;
  pointer-events: none;

  &::before {
    display: block;
    content: '';
  }
`;

export const antNotificationNoticeWithIcon = css`
  & .${antNotificationNoticeMessage} {
    margin-bottom: 4px;
    margin-left: 48px;
    font-size: 16px;
  }

  & .${antNotificationNoticeDescription} {
    margin-left: 48px;
    font-size: 14px;
  }
`;

export const antNotificationTopLeft = css`
  margin-right: 0;
  margin-left: 24px;

  &
    .${antNotificationFadeEnter}.ant-notification-fade-enter-active,
    &
    .${antNotificationFadeAppear}.ant-notification-fade-appear-active {
    animation-name: NotificationLeftFadeIn;
  }
`;

export const anticon = css`
  &.ant-notification-notice-icon {
    position: absolute;
    margin-left: 4px;
    font-size: 24px;
    line-height: 24px;
  }

  &.ant-notification-notice-icon-success {
    color: #52c41a;
  }

  &.ant-notification-notice-icon-info {
    color: #1890ff;
  }

  &.ant-notification-notice-icon-warning {
    color: #faad14;
  }

  &.ant-notification-notice-icon-error {
    color: #f5222d;
  }
`;
