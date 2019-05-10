import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antPopover = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1030;
  font-weight: normal;
  white-space: normal;
  text-align: left;
  cursor: auto;
  user-select: text;

  &::after {
    position: absolute;
    background: rgba(255, 255, 255, 0.01);
    content: '';
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    & {
    }
  }
`;

export const antPopoverArrow = css`
  position: absolute;
  display: block;
  width: 8.48528137px;
  height: 8.48528137px;
  background: transparent;
  border-style: solid;
  border-width: 4.24264069px;
  transform: rotate(45deg);
`;

export const antPopoverButtons = css`
  margin-bottom: 4px;
  text-align: right;

  & button {
    margin-left: 8px;
  }
`;

export const antPopoverHidden = css`
  display: none;
`;

export const antPopoverInner = css`
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15) \\9;

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    & {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const antPopoverInnerContent = css`
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.65);
`;

export const antPopoverMessage = css`
  position: relative;
  padding: 4px 0 12px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;

  & > .anticon {
    position: absolute;
    top: 8px;
    color: #faad14;
    font-size: 14px;
  }
`;

export const antPopoverMessageTitle = css`
  padding-left: 22px;
`;

export const antPopoverPlacementBottom = css`
  padding-top: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    top: 6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
`;

export const antPopoverPlacementBottomLeft = css`
  padding-top: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    top: 6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    left: 16px;
  }
`;

export const antPopoverPlacementBottomRight = css`
  padding-top: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    top: 6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    right: 16px;
  }
`;

export const antPopoverPlacementLeft = css`
  padding-right: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    right: 6px;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
    box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
`;

export const antPopoverPlacementLeftBottom = css`
  padding-right: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    right: 6px;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
    box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    bottom: 12px;
  }
`;

export const antPopoverPlacementLeftTop = css`
  padding-right: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    right: 6px;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
    box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    top: 12px;
  }
`;

export const antPopoverPlacementRight = css`
  padding-left: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    left: 6px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #fff;
    border-left-color: #fff;
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
`;

export const antPopoverPlacementRightBottom = css`
  padding-left: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    left: 6px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #fff;
    border-left-color: #fff;
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    bottom: 12px;
  }
`;

export const antPopoverPlacementRightTop = css`
  padding-left: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    left: 6px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #fff;
    border-left-color: #fff;
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    top: 12px;
  }
`;

export const antPopoverPlacementTop = css`
  padding-bottom: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    bottom: 6.2px;
    border-top-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: transparent;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
`;

export const antPopoverPlacementTopLeft = css`
  padding-bottom: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    bottom: 6.2px;
    border-top-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: transparent;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    left: 16px;
  }
`;

export const antPopoverPlacementTopRight = css`
  padding-bottom: 10px;

  & > .ant-popover-content > .${antPopoverArrow} {
    bottom: 6.2px;
    border-top-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: transparent;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  }

  & > .ant-popover-content > .${antPopoverArrow} {
    right: 16px;
  }
`;

export const antPopoverTitle = css`
  min-width: 177px;
  min-height: 32px;
  margin: 0;
  padding: 5px 16px 4px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  border-bottom: 1px solid #e8e8e8;
`;
