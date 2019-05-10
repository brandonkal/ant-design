import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    @keyframes ant-progress-active {
        0% {
            width: 0;
            opacity: 0.1;
        }

        20% {
            width: 0;
            opacity: 0.5;
        }

        100% {
            width: 100%;
            opacity: 0;
        }
    }
`;

export const antProgress = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
`;

export const antProgressBg = css`
  position: relative;
  background-color: #1890ff;
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
`;

export const antProgressInner = css`
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  background-color: #f5f5f5;
  border-radius: 100px;
`;

export const antProgressText = css`
  display: inline-block;
  width: 2em;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 1em;
  line-height: 1;
  white-space: nowrap;
  text-align: left;
  vertical-align: middle;
  word-break: normal;

  & .anticon {
    font-size: 14px;
  }
`;

export const antProgressStatusException = css`
  & .${antProgressBg} {
    background-color: #f5222d;
  }

  & .${antProgressText} {
    color: #f5222d;
  }

  & .${antProgressCirclePath} {
    stroke: #f5222d;
  }
`;

export const antProgressStatusSuccess = css`
  & .${antProgressBg} {
    background-color: #52c41a;
  }

  & .${antProgressText} {
    color: #52c41a;
  }

  & .${antProgressCirclePath} {
    stroke: #52c41a;
  }
`;

export const antProgressCircle = css`
  & .${antProgressInner} {
    position: relative;
    line-height: 1;
    background-color: transparent;
  }

  & .${antProgressText} {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1;
    white-space: normal;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  & .${antProgressText} .anticon {
    font-size: 1.16666667em;
  }

  &.${antProgressStatusException} .${antProgressText} {
    color: #f5222d;
  }

  &.${antProgressStatusSuccess} .${antProgressText} {
    color: #52c41a;
  }
`;

export const antProgressCirclePath = css`
  animation: ant-progress-appear 0.3s;
  stroke: #1890ff;
`;

export const antProgressCircleTrail = css`
  stroke: #f5f5f5;
`;

export const antProgressLine = css`
  position: relative;
  width: 100%;
  font-size: 14px;
`;

export const antProgressOuter = css`
  display: inline-block;
  width: 100%;
  margin-right: 0;
  padding-right: 0;
`;

export const antProgressShowInfo = css`
  & .${antProgressOuter} {
    margin-right: calc(-2em - 8px);
    padding-right: calc(2em + 8px);
  }
`;

export const antProgressSmall = css`
  &.${antProgressLine}, &.${antProgressLine} .${antProgressText} .anticon {
    font-size: 12px;
  }
`;

export const antProgressStatusActive = css`
  & .${antProgressBg}::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    border-radius: 10px;
    opacity: 0;
    animation: ant-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    content: '';
  }
`;

export const antProgressSuccessBg = css`
  position: relative;
  background-color: #1890ff;
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;

  position: absolute;
  top: 0;
  left: 0;
  background-color: #52c41a;
`;
