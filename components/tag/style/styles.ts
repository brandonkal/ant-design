import { css } from '@emotion/core';

export const global = css``;

export const antTag = css`
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
  height: auto;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: default;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);

  &:hover {
    opacity: 0.85;
  }

  &,
  & a,
  & a:hover {
    color: rgba(0, 0, 0, 0.65);
  }

  & > a:first-child:last-child {
    display: inline-block;
    margin: 0 -8px;
    padding: 0 8px;
  }

  & .anticon-close {
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
    margin-left: 3px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }

  :root & .anticon-close {
    font-size: 12px;
  }

  & .anticon-close:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`;

export const antTagBlue = css`
  color: #1890ff;
  background: #e6f7ff;
  border-color: #91d5ff;
`;

export const antTagBlueInverse = css`
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
`;

export const antTagCheckableChecked = css`
  color: #fff;

  background-color: #1890ff;
`;

export const antTagCheckable = css`
  background-color: transparent;
  border-color: transparent;

  &:not(.${antTagCheckableChecked}):hover {
    color: #1890ff;
  }

  &:active {
    color: #fff;
  }

  &:active {
    background-color: #096dd9;
  }
`;

export const antTagCyan = css`
  color: #13c2c2;
  background: #e6fffb;
  border-color: #87e8de;
`;

export const antTagCyanInverse = css`
  color: #fff;
  background: #13c2c2;
  border-color: #13c2c2;
`;

export const antTagGeekblue = css`
  color: #2f54eb;
  background: #f0f5ff;
  border-color: #adc6ff;
`;

export const antTagGeekblueInverse = css`
  color: #fff;
  background: #2f54eb;
  border-color: #2f54eb;
`;

export const antTagGold = css`
  color: #faad14;
  background: #fffbe6;
  border-color: #ffe58f;
`;

export const antTagGoldInverse = css`
  color: #fff;
  background: #faad14;
  border-color: #faad14;
`;

export const antTagGreen = css`
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;
`;

export const antTagGreenInverse = css`
  color: #fff;
  background: #52c41a;
  border-color: #52c41a;
`;

export const antTagHasColor = css`
  border-color: transparent;

  &,
  & a,
  & a:hover,
  & .anticon-close,
  & .anticon-close:hover {
    color: #fff;
  }
`;

export const antTagHidden = css`
  display: none;
`;

export const antTagLime = css`
  color: #a0d911;
  background: #fcffe6;
  border-color: #eaff8f;
`;

export const antTagLimeInverse = css`
  color: #fff;
  background: #a0d911;
  border-color: #a0d911;
`;

export const antTagMagenta = css`
  color: #eb2f96;
  background: #fff0f6;
  border-color: #ffadd2;
`;

export const antTagMagentaInverse = css`
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
`;

export const antTagOrange = css`
  color: #fa8c16;
  background: #fff7e6;
  border-color: #ffd591;
`;

export const antTagOrangeInverse = css`
  color: #fff;
  background: #fa8c16;
  border-color: #fa8c16;
`;

export const antTagPink = css`
  color: #eb2f96;
  background: #fff0f6;
  border-color: #ffadd2;
`;

export const antTagPinkInverse = css`
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
`;

export const antTagPurple = css`
  color: #722ed1;
  background: #f9f0ff;
  border-color: #d3adf7;
`;

export const antTagPurpleInverse = css`
  color: #fff;
  background: #722ed1;
  border-color: #722ed1;
`;

export const antTagRed = css`
  color: #f5222d;
  background: #fff1f0;
  border-color: #ffa39e;
`;

export const antTagRedInverse = css`
  color: #fff;
  background: #f5222d;
  border-color: #f5222d;
`;

export const antTagVolcano = css`
  color: #fa541c;
  background: #fff2e8;
  border-color: #ffbb96;
`;

export const antTagVolcanoInverse = css`
  color: #fff;
  background: #fa541c;
  border-color: #fa541c;
`;

export const antTagYellow = css`
  color: #fadb14;
  background: #feffe6;
  border-color: #fffb8f;
`;

export const antTagYellowInverse = css`
  color: #fff;
  background: #fadb14;
  border-color: #fadb14;
`;
