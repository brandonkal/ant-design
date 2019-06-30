import { css } from '@emotion/core';

export const global = css``;

export const antDropdown = css`
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
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  display: block;

  &::before {
    position: absolute;
    top: -7px;
    right: 0;
    bottom: -7px;
    left: -7px;
    z-index: -9999;
    opacity: 0.0001;
    content: ' ';
  }

  &.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomLeft,
  &.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomLeft,
  &.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomCenter,
  &.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomCenter,
  &.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomRight,
  &.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomRight {
    animation-name: antSlideUpIn;
  }

  &.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topLeft,
  &.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topLeft,
  &.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topCenter,
  &.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topCenter,
  &.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topRight,
  &.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topRight {
    animation-name: antSlideDownIn;
  }

  &.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomLeft,
  &.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomCenter,
  &.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomRight {
    animation-name: antSlideUpOut;
  }

  &.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topLeft,
  &.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topCenter,
  &.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topRight {
    animation-name: antSlideDownOut;
  }
`;

export const antDropdownButton = css`
  white-space: nowrap;

  &.ant-btn-group > .ant-btn:last-child:not(:first-child) {
    padding-right: 8px;
    padding-left: 8px;
  }

  & .anticon.anticon-down {
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
  }

  :root & .anticon.anticon-down {
    font-size: 12px;
  }
`;

export const antDropdownHidden = css`
  display: none;
`;

export const antDropdownLink = css`
  & > .anticon.anticon-down {
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
  }

  :root & > .anticon.anticon-down {
    font-size: 12px;
  }
`;

export const antDropdownMenu = css`
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  list-style-type: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  -webkit-transform: translate3d(0, 0, 0);
`;

export const antDropdownMenuItem = css`
  clear: both;
  margin: 0;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  & > .anticon:first-child {
    min-width: 12px;
    margin-right: 8px;
  }

  & > a {
    display: block;
    margin: -5px -12px;
    padding: 5px 12px;
    color: rgba(0, 0, 0, 0.65);
    transition: all 0.3s;
  }

  &:hover {
    background-color: #e6f7ff;
  }

  & .ant-dropdown-menu-submenu-arrow {
    position: absolute;
    right: 8px;
  }

  & .ant-dropdown-menu-submenu-arrow-icon {
    color: rgba(0, 0, 0, 0.45);
    font-style: normal;
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
  }

  :root & .ant-dropdown-menu-submenu-arrow-icon {
    font-size: 12px;
  }
`;

export const antDropdownMenuSubmenuTitle = css`
  clear: both;
  margin: 0;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  & > .anticon:first-child {
    min-width: 12px;
    margin-right: 8px;
  }

  & > a {
    display: block;
    margin: -5px -12px;
    padding: 5px 12px;
    color: rgba(0, 0, 0, 0.65);
    transition: all 0.3s;
  }

  &:hover {
    background-color: #e6f7ff;
  }

  & .ant-dropdown-menu-submenu-arrow {
    position: absolute;
    right: 8px;
  }

  & .ant-dropdown-menu-submenu-arrow-icon {
    color: rgba(0, 0, 0, 0.45);
    font-style: normal;
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
  }

  :root & .ant-dropdown-menu-submenu-arrow-icon {
    font-size: 12px;
  }

  padding-right: 26px;
`;

export const antDropdownMenuItemSelected = css`
  &,
  & > a {
    color: #1890ff;
    background-color: #e6f7ff;
  }
`;

export const antDropdownMenuDark = css`
  &,
  & .${antDropdownMenu} {
    background: #001529;
  }

  & .${antDropdownMenuItem}, & .${antDropdownMenuSubmenuTitle}, & .${antDropdownMenuItem} > a {
    color: rgba(255, 255, 255, 0.65);
  }

  & .${antDropdownMenuItem} .ant-dropdown-menu-submenu-arrow::after,
  & .${antDropdownMenuSubmenuTitle} .ant-dropdown-menu-submenu-arrow::after,
  & .${antDropdownMenuItem} > a .ant-dropdown-menu-submenu-arrow::after {
    color: rgba(255, 255, 255, 0.65);
  }

  &
    .${antDropdownMenuItem}:hover,
    &
    .${antDropdownMenuSubmenuTitle}:hover,
    &
    .${antDropdownMenuItem}
    > a:hover {
    color: #fff;
    background: transparent;
  }

  &
    .${antDropdownMenuItemSelected},
    &
    .${antDropdownMenuItemSelected}:hover,
    &
    .${antDropdownMenuItemSelected}
    > a {
    color: #fff;
    background: #1890ff;
  }
`;

export const antDropdownMenuHidden = css`
  display: none;
`;

export const antDropdownMenuItemDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;

  &:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: #fff;
    cursor: not-allowed;
  }
`;

export const antDropdownMenuItemDivider = css`
  height: 1px;
  margin: 4px 0;
  overflow: hidden;
  line-height: 0;
  background-color: #e8e8e8;
`;

export const antDropdownMenuItemGroupTitle = css`
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
`;

export const antDropdownMenuSubmenu = css`
  &.ant-dropdown-menu-submenu-disabled
    .${antDropdownMenuSubmenuTitle},
    &.ant-dropdown-menu-submenu-disabled
    .${antDropdownMenuSubmenuTitle}
    .ant-dropdown-menu-submenu-arrow-icon {
    color: rgba(0, 0, 0, 0.25);
    background-color: #fff;
    cursor: not-allowed;
  }
`;

export const antDropdownMenuSubmenuPopup = css`
  position: absolute;
  z-index: 1050;

  & > .${antDropdownMenu} {
    transform-origin: 0 0;
  }
`;

export const antDropdownMenuSubmenuTitleDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;

  &:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: #fff;
    cursor: not-allowed;
  }
`;

export const antDropdownMenuSubmenuTitleDivider = css`
  height: 1px;
  margin: 4px 0;
  overflow: hidden;
  line-height: 0;
  background-color: #e8e8e8;
`;

export const antDropdownMenuSubmenuTitleSelected = css`
  &,
  & > a {
    color: #1890ff;
    background-color: #e6f7ff;
  }
`;

export const antDropdownMenuSubmenuVertical = css`
  position: relative;

  & > .${antDropdownMenu} {
    position: absolute;
    top: 0;
    left: 100%;
    min-width: 100%;
    margin-left: 4px;
    transform-origin: 0 0;
  }
`;

export const antDropdownTrigger = css`
  & > .anticon.anticon-down {
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
  }

  :root & > .anticon.anticon-down {
    font-size: 12px;
  }
`;

export const antDropdownWrap = css`
  position: relative;

  & .ant-btn > .anticon-down {
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
  }

  :root & .ant-btn > .anticon-down {
    font-size: 12px;
  }

  & .anticon-down::before {
    transition: transform 0.2s;
  }
`;

export const antDropdownWrapOpen = css`
  & .anticon-down::before {
    transform: rotate(180deg);
  }
`;
