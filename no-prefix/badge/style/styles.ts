import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes antStatusProcessing {
        0% {
            transform: scale(0.8);
            opacity: 0.5;
        }

        100% {
            transform: scale(2.4);
            opacity: 0;
        }
    }

    @keyframes antZoomBadgeIn {
        0% {
            transform: scale(0) translate(50%, -50%);
            opacity: 0;
        }

        100% {
            transform: scale(1) translate(50%, -50%);
        }
    }

    @keyframes antZoomBadgeOut {
        0% {
            transform: scale(1) translate(50%, -50%);
        }

        100% {
            transform: scale(0) translate(50%, -50%);
            opacity: 0;
        }
    }
`;

export const antBadge = css`
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
  display: inline-block;
  color: unset;
  line-height: 1;

  & .ant-scroll-number-custom-component {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0%;
  }
`;

export const antBadgeCount = css`
  z-index: 10;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  background: #f5222d;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #fff;

  & a,
  & a:hover {
    color: #fff;
  }

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
`;

export const antBadgeDot = css`
  z-index: 10;
  width: 6px;
  height: 6px;
  background: #f5222d;
  border-radius: 100%;
  box-shadow: 0 0 0 1px #fff;

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
`;

export const antBadgeMultipleWords = css`
  padding: 0 8px;
`;

export const antBadgeStatus = css`
  line-height: inherit;
  vertical-align: baseline;
`;

export const antScrollNumber = css`
  overflow: hidden;
`;

export const antBadgeNotAWrapper = css`
  &:not(.${antBadgeStatus}) {
    vertical-align: middle;
  }

  & .${antScrollNumber} {
    position: relative;
    top: auto;
    display: block;
  }

  & .${antBadgeCount} {
    transform: none;
  }
`;

export const antBadgeStatusBlue = css`
  background: #1890ff;
`;

export const antBadgeStatusCyan = css`
  background: #13c2c2;
`;

export const antBadgeStatusDefault = css`
  background-color: #d9d9d9;
`;

export const antBadgeStatusDot = css`
  position: relative;
  top: -1px;
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: middle;
  border-radius: 50%;
`;

export const antBadgeStatusError = css`
  background-color: #f5222d;
`;

export const antBadgeStatusGeekblue = css`
  background: #2f54eb;
`;

export const antBadgeStatusGold = css`
  background: #faad14;
`;

export const antBadgeStatusGreen = css`
  background: #52c41a;
`;

export const antBadgeStatusLime = css`
  background: #a0d911;
`;

export const antBadgeStatusMagenta = css`
  background: #eb2f96;
`;

export const antBadgeStatusOrange = css`
  background: #fa8c16;
`;

export const antBadgeStatusPink = css`
  background: #eb2f96;
`;

export const antBadgeStatusProcessing = css`
  position: relative;
  background-color: #1890ff;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 50%;
    animation: antStatusProcessing 1.2s infinite ease-in-out;
    content: '';
  }
`;

export const antBadgeStatusPurple = css`
  background: #722ed1;
`;

export const antBadgeStatusRed = css`
  background: #f5222d;
`;

export const antBadgeStatusSuccess = css`
  background-color: #52c41a;
`;

export const antBadgeStatusText = css`
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
`;

export const antBadgeStatusVolcano = css`
  background: #fa541c;
`;

export const antBadgeStatusWarning = css`
  background-color: #faad14;
`;

export const antBadgeStatusYellow = css`
  background: #fadb14;
`;

export const antBadgeZoomAppear = css`
  animation: antZoomBadgeIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  animation-fill-mode: both;
`;

export const antBadgeZoomEnter = css`
  animation: antZoomBadgeIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  animation-fill-mode: both;
`;

export const antBadgeZoomLeave = css`
  animation: antZoomBadgeOut 0.3s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  animation-fill-mode: both;
`;

export const antScrollNumberOnly = css`
  display: inline-block;
  height: 20px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  & > p {
    height: 20px;
    margin: 0;
  }
`;

export const antScrollNumberSymbol = css`
  vertical-align: top;
`;
