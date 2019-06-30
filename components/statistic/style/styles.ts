import { css } from '@emotion/core';

export const global = css``;

export const antStatistic = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
`;

export const antStatisticContent = css`
  font-size: 24px;
  font-family: Tahoma, 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export const antStatisticContentPrefix = css`
  display: inline-block;

  margin-right: 4px;
`;

export const antStatisticContentSuffix = css`
  display: inline-block;

  margin-left: 4px;
  font-size: 16px;
`;

export const antStatisticContentValueDecimal = css`
  font-size: 16px;
`;

export const antStatisticTitle = css`
  margin-bottom: 4px;
  font-size: 14px;
`;
