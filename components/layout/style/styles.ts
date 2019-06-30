import { css } from '@emotion/core';

export const global = css``;

export const antLayoutContent = css`
  flex: auto;

  min-height: 0;
`;

export const antLayout = css`
  display: flex;
  flex: auto;
  flex-direction: column;

  min-height: 0;
  background: #f0f2f5;

  &,
  & * {
    box-sizing: border-box;
  }

  &.ant-layout-has-sider {
    flex-direction: row;
  }

  &.ant-layout-has-sider > &,
  &.ant-layout-has-sider > .${antLayoutContent} {
    overflow-x: hidden;
  }
`;

export const antLayoutFooter = css`
  flex: 0 0 auto;

  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  background: #f0f2f5;
`;

export const antLayoutHeader = css`
  flex: 0 0 auto;

  height: 64px;
  padding: 0 50px;
  line-height: 64px;
  background: #001529;
`;

export const antLayoutSider = css`
  position: relative;

  min-width: 0;
  background: #001529;
  transition: all 0.2s;
`;

export const antLayoutSiderChildren = css`
  height: 100%;
  margin-top: -0.1px;
  padding-top: 0.1px;
`;

export const antLayoutSiderHasTrigger = css`
  padding-bottom: 48px;
`;

export const antLayoutSiderTrigger = css`
  position: fixed;
  bottom: 0;
  z-index: 1;
  height: 48px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  background: #002140;
  cursor: pointer;
  transition: all 0.2s;
`;

export const antLayoutSiderZeroWidthTrigger = css`
  position: absolute;
  top: 64px;
  right: -36px;
  width: 36px;
  height: 42px;
  color: #fff;
  font-size: 18px;
  line-height: 42px;
  text-align: center;
  background: #001529;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #192c3e;
  }
`;

export const antLayoutSiderLight = css`
  background: #fff;

  & .${antLayoutSiderTrigger} {
    color: rgba(0, 0, 0, 0.65);
    background: #fff;
  }

  & .${antLayoutSiderZeroWidthTrigger} {
    color: rgba(0, 0, 0, 0.65);
    background: #fff;
  }
`;

export const antLayoutSiderRight = css`
  order: 1;
`;

export const antLayoutSiderZeroWidth = css`
  & > * {
    overflow: hidden;
  }
`;

export const antLayoutSiderZeroWidthTriggerRight = css`
  left: -36px;
`;
