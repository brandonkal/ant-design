import { css } from '@emotion/core';

export const global = css``;

export const antMenuInline = css`
  border-right: 1px solid #e8e8e8;

  & .${antMenuItem} {
    position: relative;
  }

  & .${antMenuItem}::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #1890ff;
    transform: scaleY(0.0001);
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: '';
  }

  & .${antMenuItem}, & .${antMenuSubmenuTitle} {
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 40px;
    text-overflow: ellipsis;
  }

  & .${antMenuSubmenu} {
    padding-bottom: 0.01px;
  }

  & .${antMenuItem}:not(:last-child) {
    margin-bottom: 8px;
  }

  & > .${antMenuItem}, & > .${antMenuSubmenu} > .${antMenuSubmenuTitle} {
    height: 40px;
    line-height: 40px;
  }

  width: 100%;

  & .ant-menu-selected::after,
  & .${antMenuItemSelected}::after {
    transform: scaleY(1);
    opacity: 1;
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .${antMenuItem}, & .${antMenuSubmenuTitle} {
    width: calc(100% + 1px);
  }

  & .${antMenuSubmenuTitle} {
    padding-right: 34px;
  }
`;

export const antMenuSubmenuOpen = css`
  &.${antMenuSubmenuInline} > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow {
    transform: translateY(-2px);
  }

  &.${antMenuSubmenuInline} > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateX(-2px);
  }

  &.${antMenuSubmenuInline} > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateX(2px);
  }
`;

export const antMenuHorizontal = css`
  & .${antMenuItem}, & .${antMenuSubmenu} {
    margin-top: -1px;
  }

  &
    > .${antMenuItem}:hover,
    &
    > .${antMenuItemActive},
    &
    > .${antMenuSubmenu}
    .${antMenuSubmenuTitle}:hover {
    background-color: transparent;
  }

  &.${antMenuSub} {
    min-width: 114px;
  }

  line-height: 46px;
  white-space: nowrap;
  border: 0;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: none;

  & > .${antMenuItem}, & > .${antMenuSubmenu} {
    position: relative;
    top: 1px;
    display: inline-block;
    vertical-align: bottom;
    border-bottom: 2px solid transparent;
  }

  &
    > .${antMenuItem}:hover,
    &
    > .${antMenuSubmenu}:hover,
    &
    > .${antMenuItemActive},
    &
    > .${antMenuSubmenuActive},
    &
    > .ant-menu-item-open,
  & > .${antMenuSubmenuOpen}, & > .${antMenuItemSelected}, & > .ant-menu-submenu-selected {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }

  & > .${antMenuItem} > a {
    display: block;
    color: rgba(0, 0, 0, 0.65);
  }

  & > .${antMenuItem} > a:hover {
    color: #1890ff;
  }

  & > .${antMenuItem} > a::before {
    bottom: -2px;
  }

  & > .${antMenuItemSelected} > a {
    color: #1890ff;
  }

  &::after {
    display: block;
    clear: both;
    height: 0;
    content: '\\20';
  }
`;

export const antMenuItemSelected = css`
  color: #1890ff;

  & > a,
  & > a:hover {
    color: #1890ff;
  }
`;

export const antMenuItemDivider = css`
  height: 1px;
  overflow: hidden;
  line-height: 0;
  background-color: #e8e8e8;
`;

export const antMenuDark = css`
  &,
  & .${antMenuSub} {
    color: rgba(255, 255, 255, 0.65);
    background: #001529;
  }

  & .${antMenuSubmenuTitle} .ant-menu-submenu-arrow,
  & .${antMenuSub} .${antMenuSubmenuTitle} .ant-menu-submenu-arrow {
    opacity: 0.45;
    transition: all 0.3s;
  }

  & .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after,
  & .${antMenuSub} .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before,
  & .${antMenuSub} .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before {
    background: #fff;
  }

  &.${antMenuSubmenuPopup} {
    background: transparent;
  }

  & .${antMenuInline}.${antMenuSub} {
    background: #000c17;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
  }

  &.${antMenuHorizontal} {
    border-bottom: 0;
  }

  &.${antMenuHorizontal} > .${antMenuItem}, &.${antMenuHorizontal} > .${antMenuSubmenu} {
    top: 0;
    margin-top: 0;
    border-color: #001529;
    border-bottom: 0;
  }

  &.${antMenuHorizontal} > .${antMenuItem} > a::before {
    bottom: 0;
  }

  & .${antMenuItem}, & .${antMenuItemGroupTitle}, & .${antMenuItem} > a {
    color: rgba(255, 255, 255, 0.65);
  }

  &.${antMenuInline}, &.${antMenuVertical}, &.${antMenuVerticalLeft}, &.${antMenuVerticalRight} {
    border-right: 0;
  }

  &.${antMenuInline}
    .${antMenuItem},
    &.${antMenuVertical}
    .${antMenuItem},
    &.${antMenuVerticalLeft}
    .${antMenuItem},
    &.${antMenuVerticalRight}
    .${antMenuItem} {
    left: 0;
    margin-left: 0;
    border-right: 0;
  }

  &.${antMenuInline}
    .${antMenuItem}::after,
    &.${antMenuVertical}
    .${antMenuItem}::after,
    &.${antMenuVerticalLeft}
    .${antMenuItem}::after,
    &.${antMenuVerticalRight}
    .${antMenuItem}::after {
    border-right: 0;
  }

  &.${antMenuInline} .${antMenuItem}, &.${antMenuInline} .${antMenuSubmenuTitle} {
    width: 100%;
  }

  &
    .${antMenuItem}:hover,
    &
    .${antMenuItemActive},
    &
    .${antMenuSubmenuActive},
    &
    .${antMenuSubmenuOpen},
    &
    .ant-menu-submenu-selected,
  & .${antMenuSubmenuTitle}:hover {
    color: #fff;
    background-color: transparent;
  }

  & .${antMenuItem}:hover > a,
  & .${antMenuItemActive} > a,
  & .${antMenuSubmenuActive} > a,
  & .${antMenuSubmenuOpen} > a,
  & .ant-menu-submenu-selected > a,
  & .${antMenuSubmenuTitle}:hover > a {
    color: #fff;
  }

  & .${antMenuItem}:hover > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow,
  & .${antMenuItemActive} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow,
  & .${antMenuSubmenuActive} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow,
  & .${antMenuSubmenuOpen} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow,
  & .ant-menu-submenu-selected > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow,
  & .${antMenuSubmenuTitle}:hover > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow,
  & .${antMenuItem}:hover > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow,
  & .${antMenuItemActive} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow,
  & .${antMenuSubmenuActive} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow,
  & .${antMenuSubmenuOpen} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow,
  & .ant-menu-submenu-selected > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow,
  & .${antMenuSubmenuTitle}:hover > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow {
    opacity: 1;
  }

  & .${antMenuItem}:hover > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after,
  & .${antMenuItemActive} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuActive} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuOpen} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after,
  & .ant-menu-submenu-selected > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuTitle}:hover > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after,
  & .${antMenuItem}:hover > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::after,
  & .${antMenuItemActive} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuActive} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuOpen} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::after,
  & .ant-menu-submenu-selected > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuTitle}:hover > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::after,
  & .${antMenuItem}:hover > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .${antMenuItemActive} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .${antMenuSubmenuActive} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .${antMenuSubmenuOpen} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .ant-menu-submenu-selected > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .${antMenuSubmenuTitle}:hover > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .${antMenuItem}:hover > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::before,
  & .${antMenuItemActive} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::before,
  & .${antMenuSubmenuActive} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::before,
  & .${antMenuSubmenuOpen} > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::before,
  & .ant-menu-submenu-selected > .${antMenuSubmenuTitle}:hover > .ant-menu-submenu-arrow::before,
  &
    .${antMenuSubmenuTitle}:hover
    > .${antMenuSubmenuTitle}:hover
    > .ant-menu-submenu-arrow::before {
    background: #fff;
  }

  & .${antMenuItemSelected} {
    color: #fff;
    border-right: 0;
  }

  & .${antMenuItemSelected}::after {
    border-right: 0;
  }

  & .${antMenuItemSelected} > a,
  & .${antMenuItemSelected} > a:hover {
    color: #fff;
  }

  & .${antMenuItemDisabled}, & .${antMenuSubmenuDisabled}, & .${antMenuItemDisabled} > a,
  & .${antMenuSubmenuDisabled} > a {
    color: rgba(255, 255, 255, 0.35) !important;
    opacity: 0.8;
  }

  &
    .${antMenuItemDisabled}
    > .${antMenuSubmenuTitle},
    &
    .${antMenuSubmenuDisabled}
    > .${antMenuSubmenuTitle} {
    color: rgba(255, 255, 255, 0.35) !important;
  }

  & .${antMenuItemDisabled} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .${antMenuSubmenuDisabled} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & .${antMenuItemDisabled} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after,
  & .${antMenuSubmenuDisabled} > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after {
    background: rgba(255, 255, 255, 0.35) !important;
  }
`;

export const antMenu = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: 'tnum';
  margin-bottom: 0;
  padding-left: 0;
  color: rgba(0, 0, 0, 0.65);
  line-height: 0;
  list-style: none;
  background: #fff;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, width 0.2s;
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }

  & ul,
  & ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &:not(.${antMenuInline}) .${antMenuSubmenuOpen} {
    color: #1890ff;
  }

  &:not(.${antMenuHorizontal}) .${antMenuItemSelected} {
    background-color: #e6f7ff;
  }

  & > .${antMenuItemDivider} {
    height: 1px;
    margin: 1px 0;
    padding: 0;
    overflow: hidden;
    line-height: 0;
    background-color: #e8e8e8;
  }

  &.${antMenuDark} .${antMenuItemSelected} {
    background-color: #1890ff;
  }
`;

export const antMenuSub = css`
  &.${antMenuInline} {
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  &.${antMenuInline}
    > .${antMenuItem},
    &.${antMenuInline}
    > .${antMenuSubmenu}
    > .${antMenuSubmenuTitle} {
    height: 40px;
    line-height: 40px;
    list-style-position: inside;
    list-style-type: disc;
  }

  &.${antMenuInline} .${antMenuItemGroupTitle} {
    padding-left: 32px;
  }
`;

export const antMenuSubmenuTitle = css`
  &:active {
    background: #e6f7ff;
  }

  &:hover {
    color: #1890ff;
  }

  position: relative;
  display: block;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);

  & .anticon {
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
    transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .anticon + span {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const antMenuSubmenuPopup = css`
  position: absolute;
  z-index: 1050;
  background: #fff;
  border-radius: 4px;

  & .submenu-title-wrapper {
    padding-right: 20px;
  }

  &::before {
    position: absolute;
    top: -7px;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.0001;
    content: ' ';
  }

  &.${antMenuDark} .${antMenuItemSelected} {
    background-color: #1890ff;
  }
`;

export const antMenuItem = css`
  &:active {
    background: #e6f7ff;
  }

  & > a {
    display: block;
    color: rgba(0, 0, 0, 0.65);
  }

  & > a:hover {
    color: #1890ff;
  }

  & > a::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: '';
  }

  &:hover {
    color: #1890ff;
  }

  position: relative;
  display: block;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);

  & .anticon {
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
    transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .anticon + span {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const antMenuSubmenu = css`
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);

  & .${antMenuSub} {
    cursor: initial;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > .${antMenu} {
    background-color: #fff;
    border-radius: 4px;
  }

  & > .${antMenuSubmenuTitle}::after {
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const antMenuItemGroupTitle = css`
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.3s;
`;

export const antMenuVertical = css`
  border-right: 1px solid #e8e8e8;

  &.${antMenuSub} {
    min-width: 160px;
    padding: 0;
    border-right: 0;
    transform-origin: 0 0;
  }

  &.${antMenuSub} .${antMenuItem} {
    left: 0;
    margin-left: 0;
    border-right: 0;
  }

  &.${antMenuSub} .${antMenuItem}::after {
    border-right: 0;
  }

  &.${antMenuSub} > .${antMenuItem}, &.${antMenuSub} > .${antMenuSubmenu} {
    transform-origin: 0 0;
  }

  & .ant-menu-submenu-selected {
    color: #1890ff;
  }

  & .ant-menu-submenu-selected > a {
    color: #1890ff;
  }

  & .${antMenuItem} {
    position: relative;
  }

  & .${antMenuItem}::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #1890ff;
    transform: scaleY(0.0001);
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: '';
  }

  & .${antMenuItem}, & .${antMenuSubmenuTitle} {
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 40px;
    text-overflow: ellipsis;
  }

  & .${antMenuSubmenu} {
    padding-bottom: 0.01px;
  }

  & .${antMenuItem}:not(:last-child) {
    margin-bottom: 8px;
  }

  & > .${antMenuItem}, & > .${antMenuSubmenu} > .${antMenuSubmenuTitle} {
    height: 40px;
    line-height: 40px;
  }
`;

export const antMenuVerticalLeft = css`
  border-right: 1px solid #e8e8e8;

  &.${antMenuSub} {
    min-width: 160px;
    padding: 0;
    border-right: 0;
    transform-origin: 0 0;
  }

  &.${antMenuSub} .${antMenuItem} {
    left: 0;
    margin-left: 0;
    border-right: 0;
  }

  &.${antMenuSub} .${antMenuItem}::after {
    border-right: 0;
  }

  &.${antMenuSub} > .${antMenuItem}, &.${antMenuSub} > .${antMenuSubmenu} {
    transform-origin: 0 0;
  }

  & .ant-menu-submenu-selected {
    color: #1890ff;
  }

  & .ant-menu-submenu-selected > a {
    color: #1890ff;
  }

  & .${antMenuItem} {
    position: relative;
  }

  & .${antMenuItem}::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #1890ff;
    transform: scaleY(0.0001);
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: '';
  }

  & .${antMenuItem}, & .${antMenuSubmenuTitle} {
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 40px;
    text-overflow: ellipsis;
  }

  & .${antMenuSubmenu} {
    padding-bottom: 0.01px;
  }

  & .${antMenuItem}:not(:last-child) {
    margin-bottom: 8px;
  }

  & > .${antMenuItem}, & > .${antMenuSubmenu} > .${antMenuSubmenuTitle} {
    height: 40px;
    line-height: 40px;
  }
`;

export const antMenuVerticalRight = css`
  border-left: 1px solid #e8e8e8;

  &.${antMenuSub} {
    min-width: 160px;
    padding: 0;
    border-right: 0;
    transform-origin: 0 0;
  }

  &.${antMenuSub} .${antMenuItem} {
    left: 0;
    margin-left: 0;
    border-right: 0;
  }

  &.${antMenuSub} .${antMenuItem}::after {
    border-right: 0;
  }

  &.${antMenuSub} > .${antMenuItem}, &.${antMenuSub} > .${antMenuSubmenu} {
    transform-origin: 0 0;
  }

  & .ant-menu-submenu-selected {
    color: #1890ff;
  }

  & .ant-menu-submenu-selected > a {
    color: #1890ff;
  }

  & .${antMenuItem} {
    position: relative;
  }

  & .${antMenuItem}::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #1890ff;
    transform: scaleY(0.0001);
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: '';
  }

  & .${antMenuItem}, & .${antMenuSubmenuTitle} {
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 40px;
    text-overflow: ellipsis;
  }

  & .${antMenuSubmenu} {
    padding-bottom: 0.01px;
  }

  & .${antMenuItem}:not(:last-child) {
    margin-bottom: 8px;
  }

  & > .${antMenuItem}, & > .${antMenuSubmenu} > .${antMenuSubmenuTitle} {
    height: 40px;
    line-height: 40px;
  }
`;

export const antMenuItemActive = css`
  color: #1890ff;
`;

export const antMenuSubmenuActive = css`
  color: #1890ff;
`;

export const antMenuItemDisabled = css`
  color: rgba(0, 0, 0, 0.25) !important;
  background: none;
  border-color: transparent !important;
  cursor: not-allowed;

  & > a {
    color: rgba(0, 0, 0, 0.25) !important;
    pointer-events: none;
  }

  & > .${antMenuSubmenuTitle} {
    color: rgba(0, 0, 0, 0.25) !important;
    cursor: not-allowed;
  }

  & > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after {
    background: rgba(0, 0, 0, 0.25) !important;
  }
`;

export const antMenuSubmenuDisabled = css`
  color: rgba(0, 0, 0, 0.25) !important;
  background: none;
  border-color: transparent !important;
  cursor: not-allowed;

  & > a {
    color: rgba(0, 0, 0, 0.25) !important;
    pointer-events: none;
  }

  & > .${antMenuSubmenuTitle} {
    color: rgba(0, 0, 0, 0.25) !important;
    cursor: not-allowed;
  }

  & > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::before,
  & > .${antMenuSubmenuTitle} > .ant-menu-submenu-arrow::after {
    background: rgba(0, 0, 0, 0.25) !important;
  }
`;

export const antMenuHidden = css`
  display: none;
`;

export const antMenuItemGroupList = css`
  margin: 0;
  padding: 0;

  & .${antMenuItem}, & .${antMenuSubmenuTitle} {
    padding: 0 16px 0 28px;
  }
`;

export const antMenuInlineCollapsed = css`
  width: 80px;

  &
    > .${antMenuItem},
    &
    > .ant-menu-item-group
    > .${antMenuItemGroupList}
    > .${antMenuItem},
    &
    > .ant-menu-item-group
    > .${antMenuItemGroupList}
    > .${antMenuSubmenu}
    > .${antMenuSubmenuTitle},
    &
    > .${antMenuSubmenu}
    > .${antMenuSubmenuTitle} {
    left: 0;
    padding: 0 32px !important;
    text-overflow: clip;
  }

  & > .${antMenuItem} .ant-menu-submenu-arrow,
  & > .ant-menu-item-group > .${antMenuItemGroupList} > .${antMenuItem} .ant-menu-submenu-arrow,
  &
    > .ant-menu-item-group
    > .${antMenuItemGroupList}
    > .${antMenuSubmenu}
    > .${antMenuSubmenuTitle}
    .ant-menu-submenu-arrow,
  & > .${antMenuSubmenu} > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow {
    display: none;
  }

  & > .${antMenuItem} .anticon,
  & > .ant-menu-item-group > .${antMenuItemGroupList} > .${antMenuItem} .anticon,
  &
    > .ant-menu-item-group
    > .${antMenuItemGroupList}
    > .${antMenuSubmenu}
    > .${antMenuSubmenuTitle}
    .anticon,
  & > .${antMenuSubmenu} > .${antMenuSubmenuTitle} .anticon {
    margin: 0;
    font-size: 16px;
    line-height: 40px;
  }

  & > .${antMenuItem} .anticon + span,
  & > .ant-menu-item-group > .${antMenuItemGroupList} > .${antMenuItem} .anticon + span,
  &
    > .ant-menu-item-group
    > .${antMenuItemGroupList}
    > .${antMenuSubmenu}
    > .${antMenuSubmenuTitle}
    .anticon
    + span,
  & > .${antMenuSubmenu} > .${antMenuSubmenuTitle} .anticon + span {
    display: inline-block;
    max-width: 0;
    opacity: 0;
  }

  & .${antMenuItemGroupTitle} {
    padding-right: 4px;
    padding-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const antMenuInlineCollapsedTooltip = css`
  pointer-events: none;

  & .anticon {
    display: none;
  }

  & a {
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const antMenuRoot = css`
  &.${antMenuVertical}, &.${antMenuVerticalLeft}, &.${antMenuVerticalRight}, &.${antMenuInline} {
    box-shadow: none;
  }
`;

export const antMenuSubmenuInline = css`
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before,
  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background: #fff;
    background: rgba(0, 0, 0, 0.65) \\9;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    background-image: none \\9;
    border-radius: 2px;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateY(-2px);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateY(2px);
  }

  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::after,
  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::before {
    background: linear-gradient(to right, #1890ff, #1890ff);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before {
    transform: rotate(-45deg) translateX(2px);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    transform: rotate(45deg) translateX(-2px);
  }
`;

export const antMenuSubmenuVertical = css`
  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before,
  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background: #fff;
    background: rgba(0, 0, 0, 0.65) \\9;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    background-image: none \\9;
    border-radius: 2px;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateY(-2px);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateY(2px);
  }

  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::after,
  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::before {
    background: linear-gradient(to right, #1890ff, #1890ff);
  }
`;

export const antMenuSubmenuVerticalLeft = css`
  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before,
  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background: #fff;
    background: rgba(0, 0, 0, 0.65) \\9;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    background-image: none \\9;
    border-radius: 2px;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateY(-2px);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateY(2px);
  }

  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::after,
  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::before {
    background: linear-gradient(to right, #1890ff, #1890ff);
  }
`;

export const antMenuSubmenuVerticalRight = css`
  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before,
  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background: #fff;
    background: rgba(0, 0, 0, 0.65) \\9;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    background-image: none \\9;
    border-radius: 2px;
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::before {
    transform: rotate(45deg) translateY(-2px);
  }

  & > .${antMenuSubmenuTitle} .ant-menu-submenu-arrow::after {
    transform: rotate(-45deg) translateY(2px);
  }

  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::after,
  & > .${antMenuSubmenuTitle}:hover .ant-menu-submenu-arrow::before {
    background: linear-gradient(to right, #1890ff, #1890ff);
  }
`;
