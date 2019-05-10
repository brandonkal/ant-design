import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antBtnCircle = css`
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 16px;
  border-radius: 50%;

  &.${antBtnLg} {
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 18px;
    border-radius: 50%;
  }

  &.${antBtnSm} {
    width: 24px;
    height: 24px;
    padding: 0;
    font-size: 14px;
    border-radius: 50%;
  }
`;

export const antBtnCircleOutline = css`
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 16px;
  border-radius: 50%;

  &.${antBtnLg} {
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 18px;
    border-radius: 50%;
  }

  &.${antBtnSm} {
    width: 24px;
    height: 24px;
    padding: 0;
    font-size: 14px;
    border-radius: 50%;
  }
`;

export const antBtnGroup = css`& .${antBtnPrimary}:not(:first-child):not(:last-child) {
  border-right-color: #40a9ff;
  border-left-color: #40a9ff;
}

& .${antBtnPrimary}:not(:first-child):not(:last-child):disabled {
  border-color: #d9d9d9;
}

& .${antBtnPrimary}:first-child:not(:last-child) {
  border-right-color: #40a9ff;
}

& .${antBtnPrimary}:first-child:not(:last-child)[disabled] {
  border-right-color: #d9d9d9;
}

& .${antBtnPrimary}:last-child:not(:first-child), & .${antBtnPrimary} + .${antBtnPrimary} {
  border-left-color: #40a9ff;
}

& .${antBtnPrimary}:last-child:not(:first-child)[disabled], & .${antBtnPrimary} + .${antBtnPrimary}[disabled] {
  border-left-color: #d9d9d9;
}


  position: relative;
  display: inline-block;


& > .${antBtn}, & > span > .${antBtn} {
  position: relative;
}

& > .${antBtn}:hover, & > span > .${antBtn}:hover, & > .${antBtn}:focus, & > span > .${antBtn}:focus, & > .${antBtn}:active, & > span > .${antBtn}:active, & > .${antBtn}.active, & > span > .${antBtn}.active {
  z-index: 2;
}

& > .${antBtn}:disabled, & > span > .${antBtn}:disabled {
  z-index: 0;
}

& .${antBtn} + .${antBtn}, & span + .${antBtn}, & .${antBtn} + span, & > span + span, & + .${antBtn}, & + & {
  margin-left: -1px;
}

& .${antBtnPrimary} + .${antBtn}:not(.${antBtnPrimary}):not([disabled]) {
  border-left-color: transparent;
}

& .${antBtn} {
  border-radius: 0;
}

& > .${antBtn}:first-child, & > span:first-child > .${antBtn} {
  margin-left: 0;
}

& > .${antBtn}:only-child {
  border-radius: 4px;
}

& > span:only-child > .${antBtn} {
  border-radius: 4px;
}

& > .${antBtn}:first-child:not(:last-child), & > span:first-child:not(:last-child) > .${antBtn} {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

& > .${antBtn}:last-child:not(:first-child), & > span:last-child:not(:first-child) > .${antBtn} {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

& > & {
  float: left;
}

& > &:not(:first-child):not(:last-child) > .${antBtn} {
  border-radius: 0;
}

& > &:first-child:not(:last-child) > .${antBtn}:last-child {
  padding-right: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

& > &:last-child:not(:first-child) > .${antBtn}:first-child {
  padding-left: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

`;

export const antBtn = css`
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;

  & > .anticon {
    line-height: 1;
  }

  &,
  &:active,
  &:focus {
    outline: 0;
  }

  &:not([disabled]):hover {
    text-decoration: none;
  }

  &:not([disabled]):active {
    outline: 0;
    box-shadow: none;
  }

  &.disabled,
  &[disabled] {
    cursor: not-allowed;
  }

  &.disabled > *,
  &[disabled] > * {
    pointer-events: none;
  }

  & > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover,
  &:focus {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }

  &:hover > a:only-child,
  &:focus > a:only-child {
    color: currentColor;
  }

  &:hover > a:only-child::after,
  &:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:active,
  &.active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
  }

  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.disabled,
  &[disabled],
  &.disabled:hover,
  &[disabled]:hover,
  &.disabled:focus,
  &[disabled]:focus,
  &.disabled:active,
  &[disabled]:active,
  &.disabled.active,
  &[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.disabled > a:only-child,
  &[disabled] > a:only-child,
  &.disabled:hover > a:only-child,
  &[disabled]:hover > a:only-child,
  &.disabled:focus > a:only-child,
  &[disabled]:focus > a:only-child,
  &.disabled:active > a:only-child,
  &[disabled]:active > a:only-child,
  &.disabled.active > a:only-child,
  &[disabled].active > a:only-child {
    color: currentColor;
  }

  &.disabled > a:only-child::after,
  &[disabled] > a:only-child::after,
  &.disabled:hover > a:only-child::after,
  &[disabled]:hover > a:only-child::after,
  &.disabled:focus > a:only-child::after,
  &[disabled]:focus > a:only-child::after,
  &.disabled:active > a:only-child::after,
  &[disabled]:active > a:only-child::after,
  &.disabled.active > a:only-child::after,
  &[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    text-decoration: none;
    background: #fff;
  }

  & > i,
  & > span {
    display: inline-block;
    pointer-events: none;
  }

  &::before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    display: none;
    background: #fff;
    border-radius: inherit;
    opacity: 0.35;
    transition: opacity 0.2s;
    content: '';
    pointer-events: none;
  }

  & .anticon {
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .anticon.anticon-plus > svg,
  & .anticon.anticon-minus > svg {
    shape-rendering: optimizeSpeed;
  }

  &.ant-btn-loading {
    position: relative;
    pointer-events: none;
  }

  &.ant-btn-loading::before {
    display: block;
  }

  &.ant-btn-loading:not(.${antBtnCircle}):not(.${antBtnCircleOutline}):not(.ant-btn-icon-only) {
    padding-left: 29px;
  }

  &.ant-btn-loading:not(.${antBtnCircle}):not(.${antBtnCircleOutline}):not(.ant-btn-icon-only)
    .anticon:not(:last-child) {
    margin-left: -14px;
  }

  & + .${antBtnGroup} {
    margin-left: -1px;
  }

  &:not(.${antBtnCircle}):not(.${antBtnCircleOutline}).ant-btn-icon-only {
    padding-right: 8px;
    padding-left: 8px;
  }

  &:focus > span,
  &:active > span {
    position: relative;
  }

  & > .anticon + span,
  & > span + .anticon {
    margin-left: 8px;
  }

  &:empty {
    vertical-align: top;
  }

  a& {
    line-height: 30px;
  }
`;

export const antBtnPrimary = css`
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  & > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }

  &:hover > a:only-child,
  &:focus > a:only-child {
    color: currentColor;
  }

  &:hover > a:only-child::after,
  &:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:active,
  &.active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
  }

  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.disabled,
  &[disabled],
  &.disabled:hover,
  &[disabled]:hover,
  &.disabled:focus,
  &[disabled]:focus,
  &.disabled:active,
  &[disabled]:active,
  &.disabled.active,
  &[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.disabled > a:only-child,
  &[disabled] > a:only-child,
  &.disabled:hover > a:only-child,
  &[disabled]:hover > a:only-child,
  &.disabled:focus > a:only-child,
  &[disabled]:focus > a:only-child,
  &.disabled:active > a:only-child,
  &[disabled]:active > a:only-child,
  &.disabled.active > a:only-child,
  &[disabled].active > a:only-child {
    color: currentColor;
  }

  &.disabled > a:only-child::after,
  &[disabled] > a:only-child::after,
  &.disabled:hover > a:only-child::after,
  &[disabled]:hover > a:only-child::after,
  &.disabled:focus > a:only-child::after,
  &[disabled]:focus > a:only-child::after,
  &.disabled:active > a:only-child::after,
  &[disabled]:active > a:only-child::after,
  &.disabled.active > a:only-child::after,
  &[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnPrimaryDisabled = css`
  &,
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & > a:only-child,
  &:hover > a:only-child,
  &:focus > a:only-child,
  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after,
  &:hover > a:only-child::after,
  &:focus > a:only-child::after,
  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnDanger = css`
  color: #f5222d;
  background-color: #f5f5f5;
  border-color: #d9d9d9;

  & > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
  }

  &:hover > a:only-child {
    color: currentColor;
  }

  &:hover > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:focus {
    color: #ff4d4f;
    background-color: #fff;
    border-color: #ff4d4f;
  }

  &:focus > a:only-child {
    color: currentColor;
  }

  &:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:active,
  &.active {
    color: #fff;
    background-color: #cf1322;
    border-color: #cf1322;
  }

  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.disabled,
  &[disabled],
  &.disabled:hover,
  &[disabled]:hover,
  &.disabled:focus,
  &[disabled]:focus,
  &.disabled:active,
  &[disabled]:active,
  &.disabled.active,
  &[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.disabled > a:only-child,
  &[disabled] > a:only-child,
  &.disabled:hover > a:only-child,
  &[disabled]:hover > a:only-child,
  &.disabled:focus > a:only-child,
  &[disabled]:focus > a:only-child,
  &.disabled:active > a:only-child,
  &[disabled]:active > a:only-child,
  &.disabled.active > a:only-child,
  &[disabled].active > a:only-child {
    color: currentColor;
  }

  &.disabled > a:only-child::after,
  &[disabled] > a:only-child::after,
  &.disabled:hover > a:only-child::after,
  &[disabled]:hover > a:only-child::after,
  &.disabled:focus > a:only-child::after,
  &[disabled]:focus > a:only-child::after,
  &.disabled:active > a:only-child::after,
  &[disabled]:active > a:only-child::after,
  &.disabled.active > a:only-child::after,
  &[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnDangerDisabled = css`
  &,
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & > a:only-child,
  &:hover > a:only-child,
  &:focus > a:only-child,
  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after,
  &:hover > a:only-child::after,
  &:focus > a:only-child::after,
  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnLink = css`
  color: #1890ff;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;

  & > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover,
  &:focus {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff;
  }

  &:hover > a:only-child,
  &:focus > a:only-child {
    color: currentColor;
  }

  &:hover > a:only-child::after,
  &:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:active,
  &.active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9;
  }

  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.disabled,
  &[disabled],
  &.disabled:hover,
  &[disabled]:hover,
  &.disabled:focus,
  &[disabled]:focus,
  &.disabled:active,
  &[disabled]:active,
  &.disabled.active,
  &[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.disabled > a:only-child,
  &[disabled] > a:only-child,
  &.disabled:hover > a:only-child,
  &[disabled]:hover > a:only-child,
  &.disabled:focus > a:only-child,
  &[disabled]:focus > a:only-child,
  &.disabled:active > a:only-child,
  &[disabled]:active > a:only-child,
  &.disabled.active > a:only-child,
  &[disabled].active > a:only-child {
    color: currentColor;
  }

  &.disabled > a:only-child::after,
  &[disabled] > a:only-child::after,
  &.disabled:hover > a:only-child::after,
  &[disabled]:hover > a:only-child::after,
  &.disabled:focus > a:only-child::after,
  &[disabled]:focus > a:only-child::after,
  &.disabled:active > a:only-child::after,
  &[disabled]:active > a:only-child::after,
  &.disabled.active > a:only-child::after,
  &[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover,
  &:focus,
  &:active {
    border-color: transparent;
  }

  &.disabled,
  &[disabled],
  &.disabled:hover,
  &[disabled]:hover,
  &.disabled:focus,
  &[disabled]:focus,
  &.disabled:active,
  &[disabled]:active,
  &.disabled.active,
  &[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none;
  }

  &.disabled > a:only-child,
  &[disabled] > a:only-child,
  &.disabled:hover > a:only-child,
  &[disabled]:hover > a:only-child,
  &.disabled:focus > a:only-child,
  &[disabled]:focus > a:only-child,
  &.disabled:active > a:only-child,
  &[disabled]:active > a:only-child,
  &.disabled.active > a:only-child,
  &[disabled].active > a:only-child {
    color: currentColor;
  }

  &.disabled > a:only-child::after,
  &[disabled] > a:only-child::after,
  &.disabled:hover > a:only-child::after,
  &[disabled]:hover > a:only-child::after,
  &.disabled:focus > a:only-child::after,
  &[disabled]:focus > a:only-child::after,
  &.disabled:active > a:only-child::after,
  &[disabled]:active > a:only-child::after,
  &.disabled.active > a:only-child::after,
  &[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnLinkDisabled = css`
  &,
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & > a:only-child,
  &:hover > a:only-child,
  &:focus > a:only-child,
  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after,
  &:hover > a:only-child::after,
  &:focus > a:only-child::after,
  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &,
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: rgba(0, 0, 0, 0.25);
    background-color: transparent;
    border-color: transparent;
    text-shadow: none;
    box-shadow: none;
  }

  & > a:only-child,
  &:hover > a:only-child,
  &:focus > a:only-child,
  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after,
  &:hover > a:only-child::after,
  &:focus > a:only-child::after,
  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnBackgroundGhost = css`
  color: #fff;
  background: transparent !important;
  border-color: #fff;

  &.${antBtnPrimary} {
    color: #1890ff;
    background-color: transparent;
    border-color: #1890ff;
    text-shadow: none;
  }

  &.${antBtnPrimary} > a:only-child {
    color: currentColor;
  }

  &.${antBtnPrimary} > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnPrimary}:hover, &.${antBtnPrimary}:focus {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff;
  }

  &.${antBtnPrimary}:hover > a:only-child,
  &.${antBtnPrimary}:focus > a:only-child {
    color: currentColor;
  }

  &.${antBtnPrimary}:hover > a:only-child::after,
  &.${antBtnPrimary}:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnPrimary}:active, &.${antBtnPrimary}.active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9;
  }

  &.${antBtnPrimary}:active > a:only-child,
  &.${antBtnPrimary}.active > a:only-child {
    color: currentColor;
  }

  &.${antBtnPrimary}:active > a:only-child::after,
  &.${antBtnPrimary}.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnPrimaryDisabled},
    &.${antBtnPrimary}.disabled,
    &.${antBtnPrimary}[disabled],
    &.${antBtnPrimaryDisabled}:hover,
    &.${antBtnPrimary}.disabled:hover,
    &.${antBtnPrimary}[disabled]:hover,
    &.${antBtnPrimaryDisabled}:focus,
    &.${antBtnPrimary}.disabled:focus,
    &.${antBtnPrimary}[disabled]:focus,
    &.${antBtnPrimaryDisabled}:active,
    &.${antBtnPrimary}.disabled:active,
    &.${antBtnPrimary}[disabled]:active,
    &.${antBtnPrimaryDisabled}.active,
    &.${antBtnPrimary}.disabled.active,
    &.${antBtnPrimary}[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.${antBtnPrimaryDisabled} > a:only-child,
  &.${antBtnPrimary}.disabled > a:only-child,
  &.${antBtnPrimary}[disabled] > a:only-child,
  &.${antBtnPrimaryDisabled}:hover > a:only-child,
  &.${antBtnPrimary}.disabled:hover > a:only-child,
  &.${antBtnPrimary}[disabled]:hover > a:only-child,
  &.${antBtnPrimaryDisabled}:focus > a:only-child,
  &.${antBtnPrimary}.disabled:focus > a:only-child,
  &.${antBtnPrimary}[disabled]:focus > a:only-child,
  &.${antBtnPrimaryDisabled}:active > a:only-child,
  &.${antBtnPrimary}.disabled:active > a:only-child,
  &.${antBtnPrimary}[disabled]:active > a:only-child,
  &.${antBtnPrimaryDisabled}.active > a:only-child,
  &.${antBtnPrimary}.disabled.active > a:only-child,
  &.${antBtnPrimary}[disabled].active > a:only-child {
    color: currentColor;
  }

  &.${antBtnPrimaryDisabled} > a:only-child::after,
  &.${antBtnPrimary}.disabled > a:only-child::after,
  &.${antBtnPrimary}[disabled] > a:only-child::after,
  &.${antBtnPrimaryDisabled}:hover > a:only-child::after,
  &.${antBtnPrimary}.disabled:hover > a:only-child::after,
  &.${antBtnPrimary}[disabled]:hover > a:only-child::after,
  &.${antBtnPrimaryDisabled}:focus > a:only-child::after,
  &.${antBtnPrimary}.disabled:focus > a:only-child::after,
  &.${antBtnPrimary}[disabled]:focus > a:only-child::after,
  &.${antBtnPrimaryDisabled}:active > a:only-child::after,
  &.${antBtnPrimary}.disabled:active > a:only-child::after,
  &.${antBtnPrimary}[disabled]:active > a:only-child::after,
  &.${antBtnPrimaryDisabled}.active > a:only-child::after,
  &.${antBtnPrimary}.disabled.active > a:only-child::after,
  &.${antBtnPrimary}[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnDanger} {
    color: #f5222d;
    background-color: transparent;
    border-color: #f5222d;
    text-shadow: none;
  }

  &.${antBtnDanger} > a:only-child {
    color: currentColor;
  }

  &.${antBtnDanger} > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnDanger}:hover, &.${antBtnDanger}:focus {
    color: #ff4d4f;
    background-color: transparent;
    border-color: #ff4d4f;
  }

  &.${antBtnDanger}:hover > a:only-child,
  &.${antBtnDanger}:focus > a:only-child {
    color: currentColor;
  }

  &.${antBtnDanger}:hover > a:only-child::after,
  &.${antBtnDanger}:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnDanger}:active, &.${antBtnDanger}.active {
    color: #cf1322;
    background-color: transparent;
    border-color: #cf1322;
  }

  &.${antBtnDanger}:active > a:only-child,
  &.${antBtnDanger}.active > a:only-child {
    color: currentColor;
  }

  &.${antBtnDanger}:active > a:only-child::after,
  &.${antBtnDanger}.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnDangerDisabled},
    &.${antBtnDanger}.disabled,
    &.${antBtnDanger}[disabled],
    &.${antBtnDangerDisabled}:hover,
    &.${antBtnDanger}.disabled:hover,
    &.${antBtnDanger}[disabled]:hover,
    &.${antBtnDangerDisabled}:focus,
    &.${antBtnDanger}.disabled:focus,
    &.${antBtnDanger}[disabled]:focus,
    &.${antBtnDangerDisabled}:active,
    &.${antBtnDanger}.disabled:active,
    &.${antBtnDanger}[disabled]:active,
    &.${antBtnDangerDisabled}.active,
    &.${antBtnDanger}.disabled.active,
    &.${antBtnDanger}[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.${antBtnDangerDisabled} > a:only-child,
  &.${antBtnDanger}.disabled > a:only-child,
  &.${antBtnDanger}[disabled] > a:only-child,
  &.${antBtnDangerDisabled}:hover > a:only-child,
  &.${antBtnDanger}.disabled:hover > a:only-child,
  &.${antBtnDanger}[disabled]:hover > a:only-child,
  &.${antBtnDangerDisabled}:focus > a:only-child,
  &.${antBtnDanger}.disabled:focus > a:only-child,
  &.${antBtnDanger}[disabled]:focus > a:only-child,
  &.${antBtnDangerDisabled}:active > a:only-child,
  &.${antBtnDanger}.disabled:active > a:only-child,
  &.${antBtnDanger}[disabled]:active > a:only-child,
  &.${antBtnDangerDisabled}.active > a:only-child,
  &.${antBtnDanger}.disabled.active > a:only-child,
  &.${antBtnDanger}[disabled].active > a:only-child {
    color: currentColor;
  }

  &.${antBtnDangerDisabled} > a:only-child::after,
  &.${antBtnDanger}.disabled > a:only-child::after,
  &.${antBtnDanger}[disabled] > a:only-child::after,
  &.${antBtnDangerDisabled}:hover > a:only-child::after,
  &.${antBtnDanger}.disabled:hover > a:only-child::after,
  &.${antBtnDanger}[disabled]:hover > a:only-child::after,
  &.${antBtnDangerDisabled}:focus > a:only-child::after,
  &.${antBtnDanger}.disabled:focus > a:only-child::after,
  &.${antBtnDanger}[disabled]:focus > a:only-child::after,
  &.${antBtnDangerDisabled}:active > a:only-child::after,
  &.${antBtnDanger}.disabled:active > a:only-child::after,
  &.${antBtnDanger}[disabled]:active > a:only-child::after,
  &.${antBtnDangerDisabled}.active > a:only-child::after,
  &.${antBtnDanger}.disabled.active > a:only-child::after,
  &.${antBtnDanger}[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnLink} {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    text-shadow: none;
    color: #fff;
  }

  &.${antBtnLink} > a:only-child {
    color: currentColor;
  }

  &.${antBtnLink} > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnLink}:hover, &.${antBtnLink}:focus {
    color: #40a9ff;
    background-color: transparent;
    border-color: transparent;
  }

  &.${antBtnLink}:hover > a:only-child,
  &.${antBtnLink}:focus > a:only-child {
    color: currentColor;
  }

  &.${antBtnLink}:hover > a:only-child::after,
  &.${antBtnLink}:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnLink}:active, &.${antBtnLink}.active {
    color: #096dd9;
    background-color: transparent;
    border-color: transparent;
  }

  &.${antBtnLink}:active > a:only-child,
  &.${antBtnLink}.active > a:only-child {
    color: currentColor;
  }

  &.${antBtnLink}:active > a:only-child::after,
  &.${antBtnLink}.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.${antBtnLinkDisabled},
    &.${antBtnLink}.disabled,
    &.${antBtnLink}[disabled],
    &.${antBtnLinkDisabled}:hover,
    &.${antBtnLink}.disabled:hover,
    &.${antBtnLink}[disabled]:hover,
    &.${antBtnLinkDisabled}:focus,
    &.${antBtnLink}.disabled:focus,
    &.${antBtnLink}[disabled]:focus,
    &.${antBtnLinkDisabled}:active,
    &.${antBtnLink}.disabled:active,
    &.${antBtnLink}[disabled]:active,
    &.${antBtnLinkDisabled}.active,
    &.${antBtnLink}.disabled.active,
    &.${antBtnLink}[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.${antBtnLinkDisabled} > a:only-child,
  &.${antBtnLink}.disabled > a:only-child,
  &.${antBtnLink}[disabled] > a:only-child,
  &.${antBtnLinkDisabled}:hover > a:only-child,
  &.${antBtnLink}.disabled:hover > a:only-child,
  &.${antBtnLink}[disabled]:hover > a:only-child,
  &.${antBtnLinkDisabled}:focus > a:only-child,
  &.${antBtnLink}.disabled:focus > a:only-child,
  &.${antBtnLink}[disabled]:focus > a:only-child,
  &.${antBtnLinkDisabled}:active > a:only-child,
  &.${antBtnLink}.disabled:active > a:only-child,
  &.${antBtnLink}[disabled]:active > a:only-child,
  &.${antBtnLinkDisabled}.active > a:only-child,
  &.${antBtnLink}.disabled.active > a:only-child,
  &.${antBtnLink}[disabled].active > a:only-child {
    color: currentColor;
  }

  &.${antBtnLinkDisabled} > a:only-child::after,
  &.${antBtnLink}.disabled > a:only-child::after,
  &.${antBtnLink}[disabled] > a:only-child::after,
  &.${antBtnLinkDisabled}:hover > a:only-child::after,
  &.${antBtnLink}.disabled:hover > a:only-child::after,
  &.${antBtnLink}[disabled]:hover > a:only-child::after,
  &.${antBtnLinkDisabled}:focus > a:only-child::after,
  &.${antBtnLink}.disabled:focus > a:only-child::after,
  &.${antBtnLink}[disabled]:focus > a:only-child::after,
  &.${antBtnLinkDisabled}:active > a:only-child::after,
  &.${antBtnLink}.disabled:active > a:only-child::after,
  &.${antBtnLink}[disabled]:active > a:only-child::after,
  &.${antBtnLinkDisabled}.active > a:only-child::after,
  &.${antBtnLink}.disabled.active > a:only-child::after,
  &.${antBtnLink}[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnBlock = css`
  width: 100%;
`;

export const antBtnLg = css`
  height: 40px;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 4px;

  a& {
    line-height: 38px;
  }
`;

export const antBtnSm = css`
  height: 24px;
  padding: 0 7px;
  font-size: 14px;
  border-radius: 4px;

  &.ant-btn-loading:not(.${antBtnCircle}):not(.${antBtnCircleOutline}):not(.ant-btn-icon-only) {
    padding-left: 24px;
  }

  &.ant-btn-loading:not(.${antBtnCircle}):not(.${antBtnCircleOutline}):not(.ant-btn-icon-only)
    .anticon {
    margin-left: -17px;
  }

  a& {
    line-height: 22px;
  }
`;

export const antBtnDashed = css`
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;

  & > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover,
  &:focus {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }

  &:hover > a:only-child,
  &:focus > a:only-child {
    color: currentColor;
  }

  &:hover > a:only-child::after,
  &:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:active,
  &.active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
  }

  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.disabled,
  &[disabled],
  &.disabled:hover,
  &[disabled]:hover,
  &.disabled:focus,
  &[disabled]:focus,
  &.disabled:active,
  &[disabled]:active,
  &.disabled.active,
  &[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.disabled > a:only-child,
  &[disabled] > a:only-child,
  &.disabled:hover > a:only-child,
  &[disabled]:hover > a:only-child,
  &.disabled:focus > a:only-child,
  &[disabled]:focus > a:only-child,
  &.disabled:active > a:only-child,
  &[disabled]:active > a:only-child,
  &.disabled.active > a:only-child,
  &[disabled].active > a:only-child {
    color: currentColor;
  }

  &.disabled > a:only-child::after,
  &[disabled] > a:only-child::after,
  &.disabled:hover > a:only-child::after,
  &[disabled]:hover > a:only-child::after,
  &.disabled:focus > a:only-child::after,
  &[disabled]:focus > a:only-child::after,
  &.disabled:active > a:only-child::after,
  &[disabled]:active > a:only-child::after,
  &.disabled.active > a:only-child::after,
  &[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnDashedDisabled = css`
  &,
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & > a:only-child,
  &:hover > a:only-child,
  &:focus > a:only-child,
  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after,
  &:hover > a:only-child::after,
  &:focus > a:only-child::after,
  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnDisabled = css`
  &,
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & > a:only-child,
  &:hover > a:only-child,
  &:focus > a:only-child,
  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after,
  &:hover > a:only-child::after,
  &:focus > a:only-child::after,
  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnGhost = css`
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border-color: #d9d9d9;

  & > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:hover,
  &:focus {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff;
  }

  &:hover > a:only-child,
  &:focus > a:only-child {
    color: currentColor;
  }

  &:hover > a:only-child::after,
  &:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &:active,
  &.active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9;
  }

  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  &.disabled,
  &[disabled],
  &.disabled:hover,
  &[disabled]:hover,
  &.disabled:focus,
  &[disabled]:focus,
  &.disabled:active,
  &[disabled]:active,
  &.disabled.active,
  &[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &.disabled > a:only-child,
  &[disabled] > a:only-child,
  &.disabled:hover > a:only-child,
  &[disabled]:hover > a:only-child,
  &.disabled:focus > a:only-child,
  &[disabled]:focus > a:only-child,
  &.disabled:active > a:only-child,
  &[disabled]:active > a:only-child,
  &.disabled.active > a:only-child,
  &[disabled].active > a:only-child {
    color: currentColor;
  }

  &.disabled > a:only-child::after,
  &[disabled] > a:only-child::after,
  &.disabled:hover > a:only-child::after,
  &[disabled]:hover > a:only-child::after,
  &.disabled:focus > a:only-child::after,
  &[disabled]:focus > a:only-child::after,
  &.disabled:active > a:only-child::after,
  &[disabled]:active > a:only-child::after,
  &.disabled.active > a:only-child::after,
  &[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnGhostDisabled = css`
  &,
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & > a:only-child,
  &:hover > a:only-child,
  &:focus > a:only-child,
  &:active > a:only-child,
  &.active > a:only-child {
    color: currentColor;
  }

  & > a:only-child::after,
  &:hover > a:only-child::after,
  &:focus > a:only-child::after,
  &:active > a:only-child::after,
  &.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antBtnGroupLg = css`
  & > .${antBtn}, & > span > .${antBtn} {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 0;
    line-height: 38px;
  }
`;

export const antBtnGroupSm = css`
  & > .${antBtn}, & > span > .${antBtn} {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 0;
    line-height: 22px;
  }

  & > .${antBtn} > .anticon,
  & > span > .${antBtn} > .anticon {
    font-size: 14px;
  }

  & > .${antBtn}:only-child {
    border-radius: 4px;
  }

  & > span:only-child > .${antBtn} {
    border-radius: 4px;
  }

  & > .${antBtn}:first-child:not(:last-child),
  & > span:first-child:not(:last-child) > .${antBtn} {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & > .${antBtn}:last-child:not(:first-child),
  & > span:last-child:not(:first-child) > .${antBtn} {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const antBtnRound = css`
  height: 32px;
  padding: 0 16px;
  font-size: 16px;
  border-radius: 32px;

  &.${antBtnLg} {
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    border-radius: 40px;
  }

  &.${antBtnSm} {
    height: 24px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 24px;
  }
`;

export const antBtnTwoChineseChars = css`
  &::first-letter {
    letter-spacing: 0.34em;
  }

  & > *:not(.anticon) {
    margin-right: -0.34em;
    letter-spacing: 0.34em;
  }
`;
