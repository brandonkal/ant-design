import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antTooltip = css`
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
  z-index: 1060;
  display: block;
  max-width: 250px;
  visibility: visible;
`;

export const antTooltipArrow = css`
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
`;

export const antTooltipHidden = css`
  display: none;
`;

export const antTooltipInner = css`
  min-width: 30px;
  min-height: 32px;
  padding: 6px 8px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  word-wrap: break-word;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const antTooltipPlacementBottom = css`
  padding-top: 8px;

  & .${antTooltipArrow} {
    top: 3px;
    border-width: 0 5px 5px;
    border-bottom-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    left: 50%;
    margin-left: -5px;
  }
`;

export const antTooltipPlacementBottomLeft = css`
  padding-top: 8px;

  & .${antTooltipArrow} {
    top: 3px;
    border-width: 0 5px 5px;
    border-bottom-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    left: 16px;
  }
`;

export const antTooltipPlacementBottomRight = css`
  padding-top: 8px;

  & .${antTooltipArrow} {
    top: 3px;
    border-width: 0 5px 5px;
    border-bottom-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    right: 16px;
  }
`;

export const antTooltipPlacementLeft = css`
  padding-right: 8px;

  & .${antTooltipArrow} {
    right: 3px;
    border-width: 5px 0 5px 5px;
    border-left-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    top: 50%;
    margin-top: -5px;
  }
`;

export const antTooltipPlacementLeftBottom = css`
  padding-right: 8px;

  & .${antTooltipArrow} {
    right: 3px;
    border-width: 5px 0 5px 5px;
    border-left-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    bottom: 8px;
  }
`;

export const antTooltipPlacementLeftTop = css`
  padding-right: 8px;

  & .${antTooltipArrow} {
    right: 3px;
    border-width: 5px 0 5px 5px;
    border-left-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    top: 8px;
  }
`;

export const antTooltipPlacementRight = css`
  padding-left: 8px;

  & .${antTooltipArrow} {
    left: 3px;
    border-width: 5px 5px 5px 0;
    border-right-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    top: 50%;
    margin-top: -5px;
  }
`;

export const antTooltipPlacementRightBottom = css`
  padding-left: 8px;

  & .${antTooltipArrow} {
    left: 3px;
    border-width: 5px 5px 5px 0;
    border-right-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    bottom: 8px;
  }
`;

export const antTooltipPlacementRightTop = css`
  padding-left: 8px;

  & .${antTooltipArrow} {
    left: 3px;
    border-width: 5px 5px 5px 0;
    border-right-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    top: 8px;
  }
`;

export const antTooltipPlacementTop = css`
  padding-bottom: 8px;

  & .${antTooltipArrow} {
    bottom: 3px;
    border-width: 5px 5px 0;
    border-top-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    left: 50%;
    margin-left: -5px;
  }
`;

export const antTooltipPlacementTopLeft = css`
  padding-bottom: 8px;

  & .${antTooltipArrow} {
    bottom: 3px;
    border-width: 5px 5px 0;
    border-top-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    left: 16px;
  }
`;

export const antTooltipPlacementTopRight = css`
  padding-bottom: 8px;

  & .${antTooltipArrow} {
    bottom: 3px;
    border-width: 5px 5px 0;
    border-top-color: rgba(0, 0, 0, 0.75);
  }

  & .${antTooltipArrow} {
    right: 16px;
  }
`;
