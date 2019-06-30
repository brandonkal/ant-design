import { css } from '@emotion/core';

export const global = css``;

export const antRate = css`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: 'tnum';
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #fadb14;
  font-size: 20px;
  line-height: unset;
  list-style: none;
  outline: none;
`;

export const antRateStar = css`
  position: relative;
  display: inline-block;
  margin: 0;
  margin-right: 8px;
  padding: 0;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;

  & > div:focus {
    outline: 0;
  }

  & > div:hover,
  & > div:focus {
    transform: scale(1.1);
  }
`;

export const antRateDisabled = css`
  & .${antRateStar} {
    cursor: default;
  }

  & .${antRateStar}:hover {
    transform: scale(1);
  }
`;

export const antRateStarFirst = css`
  color: #e8e8e8;
  transition: all 0.3s;
  user-select: none;

  & .anticon {
    vertical-align: middle;
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
`;

export const antRateStarSecond = css`
  color: #e8e8e8;
  transition: all 0.3s;
  user-select: none;

  & .anticon {
    vertical-align: middle;
  }
`;

export const antRateStarFull = css`
  & .${antRateStarSecond} {
    color: inherit;
  }
`;

export const antRateStarHalf = css`
  & .${antRateStarFirst}, & .${antRateStarSecond} {
    opacity: 1;
  }

  & .${antRateStarFirst} {
    color: inherit;
  }
`;

export const antRateText = css`
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
`;
