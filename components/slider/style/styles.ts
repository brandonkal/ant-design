import { css } from '@emotion/core';

export const global = css``;

export const antSliderRail = css`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #f5f5f5;
  border-radius: 2px;
  transition: background-color 0.3s;
`;

export const antSliderTrack = css`
  position: absolute;
  height: 4px;
  background-color: #91d5ff;
  border-radius: 4px;
  transition: background-color 0.3s ease;
`;

export const antSliderHandle = css`
  position: absolute;
  width: 14px;
  height: 14px;
  margin-top: -5px;
  margin-left: -7px;
  background-color: #fff;
  border: solid 2px #91d5ff;
  border-radius: 50%;
  box-shadow: 0;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.6s,
    transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);

  &:focus {
    border-color: #46a6ff;
    outline: none;
    box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.2);
  }

  &.ant-tooltip-open {
    border-color: #1890ff;
  }
`;

export const antSlider = css`
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
  height: 12px;
  margin: 14px 6px 10px;
  padding: 4px 0;
  cursor: pointer;
  touch-action: none;

  &:hover .${antSliderRail} {
    background-color: #e1e1e1;
  }

  &:hover .${antSliderTrack} {
    background-color: #69c0ff;
  }

  &:hover .${antSliderHandle}:not(.ant-tooltip-open) {
    border-color: #69c0ff;
  }
`;

export const antSliderDot = css`
  position: absolute;
  top: -2px;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  background-color: #fff;
  border: 2px solid #e8e8e8;
  border-radius: 50%;
  cursor: pointer;

  &:first-child {
    margin-left: -4px;
  }

  &:last-child {
    margin-left: -4px;
  }
`;

export const antSliderMarkText = css`
  position: absolute;
  display: inline-block;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
`;

export const antSliderDisabled = css`
  cursor: not-allowed;

  & .${antSliderTrack} {
    background-color: rgba(0, 0, 0, 0.25) !important;
  }

  & .${antSliderHandle}, & .${antSliderDot} {
    background-color: #fff;
    border-color: rgba(0, 0, 0, 0.25) !important;
    box-shadow: none;
    cursor: not-allowed;
  }

  & .${antSliderMarkText}, & .${antSliderDot} {
    cursor: not-allowed !important;
  }
`;

export const antSliderDotActive = css`
  border-color: #8cc8ff;
`;

export const antSliderMark = css`
  position: absolute;
  top: 14px;
  left: 0;
  width: 100%;
  font-size: 14px;
`;

export const antSliderMarkTextActive = css`
  color: rgba(0, 0, 0, 0.65);
`;

export const antSliderStep = css`
  position: absolute;
  width: 100%;
  height: 4px;
  background: transparent;
`;

export const antSliderVertical = css`
  width: 12px;
  height: 100%;
  margin: 6px 10px;
  padding: 0 4px;

  & .${antSliderRail} {
    width: 4px;
    height: 100%;
  }

  & .${antSliderTrack} {
    width: 4px;
  }

  & .${antSliderHandle} {
    margin-bottom: -7px;
    margin-left: -5px;
  }

  & .${antSliderMark} {
    top: 0;
    left: 12px;
    width: 18px;
    height: 100%;
  }

  & .${antSliderMarkText} {
    left: 4px;
    white-space: nowrap;
  }

  & .${antSliderStep} {
    width: 4px;
    height: 100%;
  }

  & .${antSliderDot} {
    top: auto;
    left: 2px;
    margin-bottom: -4px;
  }
`;

export const antSliderWithMarks = css`
  margin-bottom: 28px;
`;
