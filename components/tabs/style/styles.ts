import { css } from '@emotion/core';

export const global = css``;

export const antTabsNavContainer = css`
  position: relative;
  box-sizing: border-box;
  margin-bottom: -1px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  white-space: nowrap;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }
`;

export const antTabsInkBar = css`
  position: absolute;
  bottom: 1px;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  height: 2px;
  background-color: #1890ff;
  transform-origin: 0 0;
`;

export const antTabsNavWrap = css`
  margin-bottom: -1px;
  overflow: hidden;
`;

export const antTabsExtraContent = css`
  line-height: 40px;

  & .ant-tabs-new-tab {
    position: relative;
    width: 20px;
    height: 20px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & .ant-tabs-new-tab:hover {
    color: #1890ff;
    border-color: #1890ff;
  }

  & .ant-tabs-new-tab svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

export const antTabsNavScroll = css`
  overflow: hidden;
  white-space: nowrap;
`;

export const antTabsNavContainerScrolling = css`
  padding-right: 32px;
  padding-left: 32px;
`;

export const antTabsNav = css`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding-left: 0;
  list-style: none;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::before,
  &::after {
    display: table;
    content: ' ';
  }

  &::after {
    clear: both;
  }

  & .ant-tabs-tab {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    margin: 0 32px 0 0;
    padding: 12px 16px;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .ant-tabs-tab:last-child {
    margin-right: 0;
  }

  & .ant-tabs-tab:hover {
    color: #40a9ff;
  }

  & .ant-tabs-tab:active {
    color: #096dd9;
  }

  & .ant-tabs-tab .anticon {
    margin-right: 8px;
  }

  & .ant-tabs-tab-disabled,
  & .ant-tabs-tab-disabled:hover {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }

  & .ant-tabs-tab-active {
    color: #1890ff;
    font-weight: 500;
  }
`;

export const antTabsTabNext = css`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 100%;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  opacity: 0;
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  pointer-events: none;

  &.ant-tabs-tab-arrow-show {
    width: 32px;
    height: 100%;
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.65);
  }

  right: 2px;
`;

export const antTabsTabPrev = css`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 100%;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  opacity: 0;
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  pointer-events: none;

  &.ant-tabs-tab-arrow-show {
    width: 32px;
    height: 100%;
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.65);
  }

  left: 0;

  :root & {
    filter: none;
  }
`;

export const antTabsLeftContent = css`
  & > .ant-tabs-content-animated {
    margin-left: 0 !important;
    transform: none !important;
  }

  & > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  & > .ant-tabs-tabpane-inactive input {
    visibility: hidden;
  }
`;

export const antTabsRightContent = css`
  & > .ant-tabs-content-animated {
    margin-left: 0 !important;
    transform: none !important;
  }

  & > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  & > .ant-tabs-tabpane-inactive input {
    visibility: hidden;
  }
`;

export const antTabs = css`
  &.ant-tabs-card .ant-tabs-card-bar .${antTabsNavContainer} {
    height: 40px;
  }

  &.ant-tabs-card .ant-tabs-card-bar .${antTabsInkBar} {
    visibility: hidden;
  }

  &.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    height: 40px;
    margin: 0;
    margin-right: 2px;
    padding: 0 16px;
    line-height: 38px;
    background: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 4px 4px 0 0;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    height: 40px;
    color: #1890ff;
    background: #fff;
    border-color: #e8e8e8;
    border-bottom: 1px solid #fff;
  }

  &.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-inactive {
    padding: 0;
  }

  &.ant-tabs-card .ant-tabs-card-bar .${antTabsNavWrap} {
    margin-bottom: 0;
  }

  &.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
    width: 16px;
    height: 16px;
    height: 14px;
    margin-right: -5px;
    margin-left: 3px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    vertical-align: middle;
    transition: all 0.3s;
  }

  &.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x:hover {
    color: rgba(0, 0, 0, 0.85);
  }

  &.ant-tabs-card .ant-tabs-card-content > .ant-tabs-tabpane,
  &.ant-tabs-editable-card .ant-tabs-card-content > .ant-tabs-tabpane {
    transition: none !important;
  }

  &.ant-tabs-card .ant-tabs-card-content > .ant-tabs-tabpane-inactive,
  &.ant-tabs-editable-card .ant-tabs-card-content > .ant-tabs-tabpane-inactive {
    overflow: hidden;
  }

  &.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:hover .anticon-close {
    opacity: 1;
  }

  & .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab {
    height: auto;
    border-top: 0;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 0 0 4px 4px;
  }

  & .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab-active {
    padding-top: 1px;
    padding-bottom: 0;
    color: #1890ff;
  }

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
  overflow: hidden;
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }

  & .ant-tabs-large-bar .${antTabsNavContainer} {
    font-size: 16px;
  }

  & .ant-tabs-large-bar .ant-tabs-tab {
    padding: 16px;
  }

  & .ant-tabs-small-bar .${antTabsNavContainer} {
    font-size: 14px;
  }

  & .ant-tabs-small-bar .ant-tabs-tab {
    padding: 8px 16px;
  }

  & .ant-tabs-top-content,
  & .ant-tabs-bottom-content {
    width: 100%;
  }

  & .ant-tabs-top-content > .ant-tabs-tabpane,
  & .ant-tabs-bottom-content > .ant-tabs-tabpane {
    flex-shrink: 0;
    width: 100%;
    opacity: 1;
    transition: opacity 0.45s;
  }

  & .ant-tabs-top-content > .ant-tabs-tabpane-inactive,
  & .ant-tabs-bottom-content > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  & .ant-tabs-top-content > .ant-tabs-tabpane-inactive input,
  & .ant-tabs-bottom-content > .ant-tabs-tabpane-inactive input {
    visibility: hidden;
  }

  & .ant-tabs-top-content.ant-tabs-content-animated,
  & .ant-tabs-bottom-content.ant-tabs-content-animated {
    display: flex;
    flex-direction: row;
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    will-change: margin-left;
  }

  & .ant-tabs-left-bar,
  & .ant-tabs-right-bar {
    height: 100%;
    border-bottom: 0;
  }

  & .ant-tabs-left-bar-tab-prev,
  & .ant-tabs-right-bar-tab-prev,
  & .ant-tabs-left-bar-tab-next,
  & .ant-tabs-right-bar-tab-next {
    width: 32px;
    height: 0;
    transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .ant-tabs-left-bar-tab-prev.ant-tabs-tab-arrow-show,
  & .ant-tabs-right-bar-tab-prev.ant-tabs-tab-arrow-show,
  & .ant-tabs-left-bar-tab-next.ant-tabs-tab-arrow-show,
  & .ant-tabs-right-bar-tab-next.ant-tabs-tab-arrow-show {
    width: 100%;
    height: 32px;
  }

  & .ant-tabs-left-bar .ant-tabs-tab,
  & .ant-tabs-right-bar .ant-tabs-tab {
    display: block;
    float: none;
    margin: 0 0 16px 0;
    padding: 8px 24px;
  }

  & .ant-tabs-left-bar .ant-tabs-tab:last-child,
  & .ant-tabs-right-bar .ant-tabs-tab:last-child {
    margin-bottom: 0;
  }

  & .ant-tabs-left-bar .${antTabsExtraContent}, & .ant-tabs-right-bar .${antTabsExtraContent} {
    text-align: center;
  }

  & .ant-tabs-left-bar .${antTabsNavScroll}, & .ant-tabs-right-bar .${antTabsNavScroll} {
    width: auto;
  }

  &
    .ant-tabs-left-bar
    .${antTabsNavContainer},
    &
    .ant-tabs-right-bar
    .${antTabsNavContainer},
    &
    .ant-tabs-left-bar
    .${antTabsNavWrap},
    &
    .ant-tabs-right-bar
    .${antTabsNavWrap} {
    height: 100%;
  }

  & .ant-tabs-left-bar .${antTabsNavContainer}, & .ant-tabs-right-bar .${antTabsNavContainer} {
    margin-bottom: 0;
  }

  &
    .ant-tabs-left-bar
    .${antTabsNavContainer}.${antTabsNavContainerScrolling},
    &
    .ant-tabs-right-bar
    .${antTabsNavContainer}.${antTabsNavContainerScrolling} {
    padding: 32px 0;
  }

  & .ant-tabs-left-bar .${antTabsNavWrap}, & .ant-tabs-right-bar .${antTabsNavWrap} {
    margin-bottom: 0;
  }

  & .ant-tabs-left-bar .${antTabsNav}, & .ant-tabs-right-bar .${antTabsNav} {
    width: 100%;
  }

  & .ant-tabs-left-bar .${antTabsInkBar}, & .ant-tabs-right-bar .${antTabsInkBar} {
    top: 0;
    bottom: auto;
    left: auto;
    width: 2px;
    height: auto;
  }

  & .ant-tabs-left-bar .${antTabsTabNext}, & .ant-tabs-right-bar .${antTabsTabNext} {
    bottom: 0;
    width: 100%;
    height: 32px;
  }

  & .ant-tabs-left-bar .${antTabsTabPrev}, & .ant-tabs-right-bar .${antTabsTabPrev} {
    top: 0;
    width: 100%;
    height: 32px;
  }

  & .${antTabsLeftContent}, & .${antTabsRightContent} {
    width: auto;
    margin-top: 0 !important;
    overflow: hidden;
  }

  & .ant-tabs-left-bar {
    float: left;
    margin-right: -1px;
    margin-bottom: 0;
    border-right: 1px solid #e8e8e8;
  }

  & .ant-tabs-left-bar .ant-tabs-tab {
    text-align: right;
  }

  & .ant-tabs-left-bar .${antTabsNavContainer} {
    margin-right: -1px;
  }

  & .ant-tabs-left-bar .${antTabsNavWrap} {
    margin-right: -1px;
  }

  & .ant-tabs-left-bar .${antTabsInkBar} {
    right: 1px;
  }

  & .${antTabsLeftContent} {
    padding-left: 24px;
    border-left: 1px solid #e8e8e8;
  }

  & .ant-tabs-right-bar {
    float: right;
    margin-bottom: 0;
    margin-left: -1px;
    border-left: 1px solid #e8e8e8;
  }

  & .ant-tabs-right-bar .${antTabsNavContainer} {
    margin-left: -1px;
  }

  & .ant-tabs-right-bar .${antTabsNavWrap} {
    margin-left: -1px;
  }

  & .ant-tabs-right-bar .${antTabsInkBar} {
    left: 1px;
  }

  & .${antTabsRightContent} {
    padding-right: 24px;
    border-right: 1px solid #e8e8e8;
  }
`;

export const antTabsBar = css`
  margin: 0 0 16px 0;
  border-bottom: 1px solid #e8e8e8;
  outline: none;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const antTabsBottom = css`
  & .ant-tabs-bottom-bar {
    margin-top: 16px;
    margin-bottom: 0;
    border-top: 1px solid #e8e8e8;
    border-bottom: none;
  }

  & .ant-tabs-bottom-bar .${antTabsInkBar} {
    top: 1px;
    bottom: auto;
  }

  & .ant-tabs-bottom-bar .${antTabsNavContainer} {
    margin-top: -1px;
    margin-bottom: 0;
  }

  & .ant-tabs-ink-bar-animated {
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const antTabsLeft = css`
  & .ant-tabs-ink-bar-animated {
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const antTabsNoAnimation = css`
  & > .ant-tabs-content > .ant-tabs-content-animated {
    margin-left: 0 !important;
    transform: none !important;
  }

  & > .ant-tabs-content > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  & > .ant-tabs-content > .ant-tabs-tabpane-inactive input {
    visibility: hidden;
  }
`;

export const antTabsRight = css`
  & .ant-tabs-ink-bar-animated {
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const antTabsTabBtnDisabled = css`
  cursor: not-allowed;

  &,
  &:hover {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antTabsTabNextIcon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bold;
  font-style: normal;
  font-variant: normal;
  line-height: inherit;
  text-align: center;
  text-transform: none;
  transform: translate(-50%, -50%);
`;

export const antTabsTabNextIconTarget = css`
  display: block;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);

  :root & {
    font-size: 12px;
  }
`;

export const antTabsTabPrevIcon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bold;
  font-style: normal;
  font-variant: normal;
  line-height: inherit;
  text-align: center;
  text-transform: none;
  transform: translate(-50%, -50%);
`;

export const antTabsTabPrevIconTarget = css`
  display: block;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);

  :root & {
    font-size: 12px;
  }
`;

export const antTabsTop = css`
  & .ant-tabs-ink-bar-animated {
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const antTabsVertical = css`
  &.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-left-bar
    .${antTabsNavContainer},
    &.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-right-bar
    .${antTabsNavContainer} {
    height: auto;
  }

  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab,
  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab {
    margin-bottom: 8px;
    border-bottom: 1px solid #e8e8e8;
  }

  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab-active,
  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab-active {
    padding-bottom: 4px;
  }

  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab:last-child,
  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab:last-child {
    margin-bottom: 8px;
  }

  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-new-tab,
  &.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-new-tab {
    width: 90%;
  }

  &.ant-tabs-card.${antTabsLeft} .ant-tabs-card-bar.ant-tabs-left-bar .${antTabsNavWrap} {
    margin-right: 0;
  }

  &.ant-tabs-card.${antTabsLeft} .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab {
    margin-right: 1px;
    border-right: 0;
    border-radius: 4px 0 0 4px;
  }

  &.ant-tabs-card.${antTabsLeft} .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab-active {
    margin-right: -1px;
    padding-right: 18px;
  }

  &.ant-tabs-card.${antTabsRight} .ant-tabs-card-bar.ant-tabs-right-bar .${antTabsNavWrap} {
    margin-left: 0;
  }

  &.ant-tabs-card.${antTabsRight} .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab {
    margin-left: 1px;
    border-left: 0;
    border-radius: 0 4px 4px 0;
  }

  &.ant-tabs-card.${antTabsRight} .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab-active {
    margin-left: -1px;
    padding-left: 18px;
  }
`;

export const noFlex = css`
  & > .ant-tabs-content > .ant-tabs-content-animated {
    margin-left: 0 !important;
    transform: none !important;
  }

  & > .ant-tabs-content > .ant-tabs-tabpane-inactive {
    height: 0;
    padding: 0 !important;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  & > .ant-tabs-content > .ant-tabs-tabpane-inactive input {
    visibility: hidden;
  }
`;
