import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antStepsVertical = css`
  display: block;

  & .${antStepsItem} {
    display: block;
    overflow: visible;
  }

  & .${antStepsItemIcon} {
    float: left;
    margin-right: 16px;
  }

  & .${antStepsItemContent} {
    display: block;
    min-height: 48px;
    overflow: hidden;
  }

  & .${antStepsItemTitle} {
    line-height: 32px;
  }

  & .${antStepsItemDescription} {
    padding-bottom: 12px;
  }

  & > .${antStepsItem} > .${antStepsItemTail} {
    position: absolute;
    top: 0;
    left: 16px;
    width: 1px;
    height: 100%;
    padding: 38px 0 6px;
  }

  & > .${antStepsItem} > .${antStepsItemTail}::after {
    width: 1px;
    height: 100%;
  }

  & > .${antStepsItem}:not(:last-child) > .${antStepsItemTail} {
    display: block;
  }

  & > .${antStepsItem} > .${antStepsItemContent} > .${antStepsItemTitle}::after {
    display: none;
  }

  &.${antStepsSmall} .${antStepsItemTail} {
    position: absolute;
    top: 0;
    left: 12px;
    padding: 30px 0 6px;
  }

  &.${antStepsSmall} .${antStepsItemTitle} {
    line-height: 24px;
  }

  &.${antStepsDot} .${antStepsItemIcon} {
    margin-top: 8px;
    margin-left: 0;
  }

  &.${antStepsDot} .${antStepsItemTail} {
    top: 2px;
    left: -9px;
    margin: 0;
    padding: 22px 0 4px;
  }

  &.${antStepsDot} .${antStepsItem}:first-child .ant-steps-icon-dot {
    left: 0;
  }

  &.${antStepsDot} .${antStepsItemProcess} .ant-steps-icon-dot {
    left: -2px;
  }
`;

export const antStepsItemCustom = css`
  & .${antStepsItemIcon} {
    height: auto;
    background: none;
    border: 0;
  }

  & .${antStepsItemIcon} > .ant-steps-icon {
    top: 0;
    left: 0.5px;
    width: 32px;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
  }

  &.${antStepsItemProcess} .${antStepsItemIcon} > .ant-steps-icon {
    color: #1890ff;
  }
`;

export const antStepsItemIcon = css`
  display: inline-block;
  vertical-align: top;

  width: 32px;
  height: 32px;
  margin-right: 8px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 32px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  transition: background-color 0.3s, border-color 0.3s;

  & > .ant-steps-icon {
    position: relative;
    top: -1px;
    color: #1890ff;
    line-height: 1;
  }
`;

export const antSteps = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  display: flex;
  width: 100%;
  font-size: 0;

  &:not(.${antStepsVertical}) .${antStepsItemCustom} .${antStepsItemIcon} {
    width: auto;
  }
`;

export const antStepsItemTitle = css`
  position: relative;
  display: inline-block;
  padding-right: 16px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  line-height: 32px;

  &::after {
    position: absolute;
    top: 16px;
    left: 100%;
    display: block;
    width: 9999px;
    height: 1px;
    background: #e8e8e8;
    content: '';
  }
`;

export const antStepsItemTail = css`
  position: absolute;
  top: 12px;
  left: 0;
  width: 100%;
  padding: 0 10px;

  &::after {
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #e8e8e8;
    border-radius: 1px;
    transition: background 0.3s;
    content: '';
  }
`;

export const antStepsItem = css`
  position: relative;
  display: inline-block;
  flex: 1;
  overflow: hidden;
  vertical-align: top;

  &:last-child {
    flex: none;
  }

  &:last-child
    > .${antStepsItemTail},
    &:last-child
    > .${antStepsItemContent}
    > .${antStepsItemTitle}::after {
    display: none;
  }

  &.ant-steps-next-error .${antStepsItemTitle}::after {
    background: #f5222d;
  }
`;

export const antStepsItemContent = css`
  display: inline-block;
  vertical-align: top;
`;

export const antStepsItemProcess = css`
  & .${antStepsItemIcon} {
    background-color: #fff;
    border-color: #1890ff;
  }

  & .${antStepsItemIcon} > .ant-steps-icon {
    color: #1890ff;
  }

  & .${antStepsItemIcon} > .ant-steps-icon .ant-steps-icon-dot {
    background: #1890ff;
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle} {
    color: rgba(0, 0, 0, 0.85);
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle}::after {
    background-color: #e8e8e8;
  }

  & > .${antStepsItemContent} > .${antStepsItemDescription} {
    color: rgba(0, 0, 0, 0.65);
  }

  & > .${antStepsItemTail}::after {
    background-color: #e8e8e8;
  }

  & .${antStepsItemIcon} {
    background: #1890ff;
  }

  & .${antStepsItemIcon} > .ant-steps-icon {
    color: #fff;
  }

  & .${antStepsItemTitle} {
    font-weight: 500;
  }
`;

export const antStepsDot = css`
  & .${antStepsItemTitle} {
    line-height: 1.5;
  }

  & .${antStepsItemTail} {
    top: 2px;
    width: 100%;
    margin: 0 0 0 70px;
    padding: 0;
  }

  & .${antStepsItemTail}::after {
    width: calc(100% - 20px);
    height: 3px;
    margin-left: 12px;
  }

  & .${antStepsItem}:first-child .ant-steps-icon-dot {
    left: 2px;
  }

  & .${antStepsItemIcon} {
    width: 8px;
    height: 8px;
    margin-left: 67px;
    padding-right: 0;
    line-height: 8px;
    background: transparent;
    border: 0;
  }

  & .${antStepsItemIcon} .ant-steps-icon-dot {
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    transition: all 0.3s;
  }

  & .${antStepsItemIcon} .ant-steps-icon-dot::after {
    position: absolute;
    top: -12px;
    left: -26px;
    width: 60px;
    height: 32px;
    background: rgba(0, 0, 0, 0.001);
    content: '';
  }

  & .${antStepsItemContent} {
    width: 140px;
  }

  & .${antStepsItemProcess} .${antStepsItemIcon} {
    width: 10px;
    height: 10px;
    line-height: 10px;
  }

  & .${antStepsItemProcess} .${antStepsItemIcon} .ant-steps-icon-dot {
    top: -1px;
  }
`;

export const antStepsHorizontal = css`
  &:not(.${antStepsLabelVertical}) .${antStepsItem} {
    margin-right: 16px;
    white-space: nowrap;
  }

  &:not(.${antStepsLabelVertical}) .${antStepsItem}:last-child {
    margin-right: 0;
  }

  &:not(.${antStepsLabelVertical}) .${antStepsItem}:last-child .${antStepsItemTitle} {
    padding-right: 0;
  }

  &:not(.${antStepsLabelVertical}) .${antStepsItemTail} {
    display: none;
  }

  &:not(.${antStepsLabelVertical}) .${antStepsItemDescription} {
    max-width: 140px;
    white-space: normal;
  }

  @media (max-width: 480px) {
    &.ant-steps-label-horizontal {
      display: block;
    }

    &.ant-steps-label-horizontal .${antStepsItem} {
      display: block;
      overflow: visible;
    }

    &.ant-steps-label-horizontal .${antStepsItemIcon} {
      float: left;
      margin-right: 16px;
    }

    &.ant-steps-label-horizontal .${antStepsItemContent} {
      display: block;
      min-height: 48px;
      overflow: hidden;
    }

    &.ant-steps-label-horizontal .${antStepsItemTitle} {
      line-height: 32px;
    }

    &.ant-steps-label-horizontal .${antStepsItemDescription} {
      padding-bottom: 12px;
    }

    &.ant-steps-label-horizontal > .${antStepsItem} > .${antStepsItemTail} {
      position: absolute;
      top: 0;
      left: 16px;
      width: 1px;
      height: 100%;
      padding: 38px 0 6px;
    }

    &.ant-steps-label-horizontal > .${antStepsItem} > .${antStepsItemTail}::after {
      width: 1px;
      height: 100%;
    }

    &.ant-steps-label-horizontal > .${antStepsItem}:not(:last-child) > .${antStepsItemTail} {
      display: block;
    }

    &.ant-steps-label-horizontal
      > .${antStepsItem}
      > .${antStepsItemContent}
      > .${antStepsItemTitle}::after {
      display: none;
    }

    &.ant-steps-label-horizontal.${antStepsSmall} .${antStepsItemTail} {
      position: absolute;
      top: 0;
      left: 12px;
      padding: 30px 0 6px;
    }

    &.ant-steps-label-horizontal.${antStepsSmall} .${antStepsItemTitle} {
      line-height: 24px;
    }
  }
`;

export const antStepsSmall = css`&.${antStepsHorizontal}:not(.${antStepsLabelVertical}) .${antStepsItem} {
  margin-right: 12px;
}

&.${antStepsHorizontal}:not(.${antStepsLabelVertical}) .${antStepsItem}:last-child {
  margin-right: 0;
}

& .${antStepsItemIcon} {
  width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  border-radius: 24px;
}

& .${antStepsItemTitle} {
  padding-right: 12px;
  font-size: 14px;
  line-height: 24px;
}

& .${antStepsItemTitle}::after {
  top: 12px;
}

& .${antStepsItemDescription} {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

& .${antStepsItemTail} {
  top: 8px;
  padding: 0 8px;
}

& .${antStepsItemCustom} .${antStepsItemIcon} {
  width: inherit;
  height: inherit;
  line-height: inherit;
  background: none;
  border: 0;
  border-radius: 0;
}

& .${antStepsItemCustom} .${antStepsItemIcon} > .ant-steps-icon {
  font-size: 24px;
  line-height: 24px;
  transform: none;
}

`;

export const antStepsItemWait = css`
  & .${antStepsItemIcon} {
    background-color: #fff;
    border-color: rgba(0, 0, 0, 0.25);
  }

  & .${antStepsItemIcon} > .ant-steps-icon {
    color: rgba(0, 0, 0, 0.25);
  }

  & .${antStepsItemIcon} > .ant-steps-icon .ant-steps-icon-dot {
    background: rgba(0, 0, 0, 0.25);
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle} {
    color: rgba(0, 0, 0, 0.45);
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle}::after {
    background-color: #e8e8e8;
  }

  & > .${antStepsItemContent} > .${antStepsItemDescription} {
    color: rgba(0, 0, 0, 0.45);
  }

  & > .${antStepsItemTail}::after {
    background-color: #e8e8e8;
  }
`;

export const antStepsFlexNotSupported = css`
  &.${antStepsHorizontal}.ant-steps-label-horizontal .${antStepsItem} {
    margin-left: -16px;
    padding-left: 16px;
    background: #fff;
  }

  &.${antStepsHorizontal}.ant-steps-label-horizontal.${antStepsSmall} .${antStepsItem} {
    margin-left: -12px;
    padding-left: 12px;
  }

  &.${antStepsDot} .${antStepsItem}:last-child {
    overflow: hidden;
  }

  &.${antStepsDot} .${antStepsItem}:last-child .ant-steps-icon-dot::after {
    right: -200px;
    width: 200px;
  }

  &.${antStepsDot} .${antStepsItem} .ant-steps-icon-dot::before,
  &.${antStepsDot} .${antStepsItem} .ant-steps-icon-dot::after {
    position: absolute;
    top: 0;
    left: -10px;
    width: 10px;
    height: 8px;
    background: #fff;
    content: '';
  }

  &.${antStepsDot} .${antStepsItem} .ant-steps-icon-dot::after {
    right: -10px;
    left: auto;
  }

  &.${antStepsDot} .${antStepsItemWait} .${antStepsItemIcon} > .ant-steps-icon .ant-steps-icon-dot {
    background: #ccc;
  }
`;

export const antStepsLabelVertical = css`& .${antStepsItem} {
  overflow: visible;
}

& .${antStepsItemTail} {
  margin-left: 51px;
  padding: 3.5px 24px;
}

& .${antStepsItemContent} {
  display: block;
  width: 104px;
  margin-top: 8px;
  text-align: center;
}

& .${antStepsItemIcon} {
  display: inline-block;
  margin-left: 36px;
}

& .${antStepsItemTitle} {
  padding-right: 0;
}

& .${antStepsItemTitle}::after {
  display: none;
}

&.${antStepsSmall}:not(.${antStepsDot}) .${antStepsItemIcon} {
  margin-left: 40px;
}

`;

export const antStepsItemDescription = css`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
`;

export const antStepsItemError = css`
  & .${antStepsItemIcon} {
    background-color: #fff;
    border-color: #f5222d;
  }

  & .${antStepsItemIcon} > .ant-steps-icon {
    color: #f5222d;
  }

  & .${antStepsItemIcon} > .ant-steps-icon .ant-steps-icon-dot {
    background: #f5222d;
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle} {
    color: #f5222d;
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle}::after {
    background-color: #e8e8e8;
  }

  & > .${antStepsItemContent} > .${antStepsItemDescription} {
    color: #f5222d;
  }

  & > .${antStepsItemTail}::after {
    background-color: #e8e8e8;
  }
`;

export const antStepsItemFinish = css`
  & .${antStepsItemIcon} {
    background-color: #fff;
    border-color: #1890ff;
  }

  & .${antStepsItemIcon} > .ant-steps-icon {
    color: #1890ff;
  }

  & .${antStepsItemIcon} > .ant-steps-icon .ant-steps-icon-dot {
    background: #1890ff;
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle} {
    color: rgba(0, 0, 0, 0.65);
  }

  & > .${antStepsItemContent} > .${antStepsItemTitle}::after {
    background-color: #1890ff;
  }

  & > .${antStepsItemContent} > .${antStepsItemDescription} {
    color: rgba(0, 0, 0, 0.45);
  }

  & > .${antStepsItemTail}::after {
    background-color: #1890ff;
  }
`;
