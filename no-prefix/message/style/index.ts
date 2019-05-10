import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes MessageMoveOut {
        0% {
            max-height: 150px;
            padding: 8px;
            opacity: 1;
        }

        100% {
            max-height: 0;
            padding: 0;
            opacity: 0;
        }
    }
`;

export const antMessage = css`
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
  top: 16px;
  left: 0;
  z-index: 1010;
  width: 100%;
  pointer-events: none;

  & .anticon {
    position: relative;
    top: 1px;
    margin-right: 8px;
    font-size: 16px;
  }
`;

export const antMessageError = css`
  & .anticon {
    color: #f5222d;
  }
`;

export const antMessageInfo = css`
  & .anticon {
    color: #1890ff;
  }
`;

export const antMessageLoading = css`
  & .anticon {
    color: #1890ff;
  }
`;

export const antMessageNotice = css`
  padding: 8px;
  text-align: center;

  &:first-child {
    margin-top: -8px;
  }

  &.move-up-leave.move-up-leave-active {
    overflow: hidden;
    animation-name: MessageMoveOut;
    animation-duration: 0.3s;
  }
`;

export const antMessageNoticeContent = css`
  display: inline-block;
  padding: 10px 16px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: all;
`;

export const antMessageSuccess = css`
  & .anticon {
    color: #52c41a;
  }
`;

export const antMessageWarning = css`
  & .anticon {
    color: #faad14;
  }
`;
