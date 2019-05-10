import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antSelect = css`
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
  display: inline-block;
  outline: 0;

  & ul,
  & ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & > ul > li > a {
    padding: 0;
    background-color: #fff;
  }
`;

export const antSelectSelectionSingle = css`
  position: relative;
  height: 32px;
  cursor: pointer;
`;

export const antSelectSelectionSelectedValue = css`
  float: left;
  max-width: 100%;
  padding-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const antSelectSelectionMultiple = css`
  min-height: 32px;
  padding-bottom: 3px;
  cursor: text;
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }

  & .${antSelectSearchInline} {
    position: static;
    float: left;
    width: auto;
    max-width: 100%;
    padding: 0;
  }

  & .${antSelectSearchInline} .ant-select-search__field {
    width: 0.75em;
    max-width: 100%;
  }

  & .${antSelectSelectionRendered} {
    height: auto;
    margin-bottom: -3px;
    margin-left: 5px;
  }

  & .${antSelectSelectionPlaceholder} {
    margin-left: 6px;
  }

  & > ul > li,
  & .${antSelectSelectionRendered} > ul > li {
    height: 24px;
    margin-top: 3px;
    line-height: 22px;
  }

  & .ant-select-selection__choice {
    position: relative;
    float: left;
    max-width: 99%;
    margin-right: 4px;
    padding: 0 20px 0 10px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    cursor: default;
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .ant-select-selection__choice__disabled {
    padding: 0 10px;
  }

  & .ant-select-selection__choice__content {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & .ant-select-selection__choice__remove {
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    right: 4px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: bold;
    line-height: inherit;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-block;
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
  }

  & .ant-select-selection__choice__remove > * {
    line-height: 1;
  }

  & .ant-select-selection__choice__remove svg {
    display: inline-block;
  }

  & .ant-select-selection__choice__remove::before {
    display: none;
  }

  & .ant-select-selection__choice__remove & .ant-select-selection__choice__remove-icon {
    display: block;
  }

  :root & .ant-select-selection__choice__remove {
    font-size: 12px;
  }

  & .ant-select-selection__choice__remove:hover {
    color: rgba(0, 0, 0, 0.75);
  }

  & .${antSelectSelectionClear}, & .${antSelectArrow} {
    top: 16px;
  }
`;

export const antSelectSelectionRendered = css`
  position: relative;
  display: block;
  margin-right: 11px;
  margin-left: 11px;
  line-height: 30px;

  &::after {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: '.';
    pointer-events: none;
  }
`;

export const antSelectAllowClear = css`
  & .${antSelectSelectionSingle} .${antSelectSelectionSelectedValue} {
    padding-right: 16px;
  }

  & .${antSelectSelectionMultiple} .${antSelectSelectionRendered} {
    margin-right: 20px;
  }
`;

export const antSelectArrow = css`
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 1;
  transform-origin: 50% 50%;

  & > * {
    line-height: 1;
  }

  & svg {
    display: inline-block;
  }

  &::before {
    display: none;
  }

  & .ant-select-arrow-icon {
    display: block;
  }

  & .ant-select-arrow-icon svg {
    transition: transform 0.3s;
  }
`;

export const antSelectSearchInline = css`
  position: absolute;
  width: 100%;
  height: 100%;

  & .${antSelectSearchFieldWrap} {
    width: 100%;
    height: 100%;
  }

  & .ant-select-search__field {
    width: 100%;
    height: 100%;
    font-size: 100%;
    line-height: 1;
    background: transparent;
    border-width: 0;
    border-radius: 4px;
    outline: 0;
  }

  & > i {
    float: right;
  }
`;

export const antSelectSearchFieldWrap = css`
  position: relative;
  display: inline-block;
`;

export const antSelectSelection = css`
  display: block;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;

  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  &:focus,
  &:active {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &:hover .${antSelectSelectionClear} {
    opacity: 1;
  }
`;

export const antSelectShowArrow = css`
  & .${antSelectSelectionMultiple} .${antSelectSelectionRendered} {
    margin-right: 20px;
  }
`;

export const antSelectCombobox = css`
  & .${antSelectArrow} {
    display: none;
  }

  & .${antSelectSearchInline} {
    float: none;
    width: 100%;
    height: 100%;
  }

  & .${antSelectSearchFieldWrap} {
    width: 100%;
    height: 100%;
  }

  & .ant-select-search__field {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    box-shadow: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0s;
  }

  &.${antSelectAllowClear}
    .${antSelectSelection}:hover
    .${antSelectSelectionRendered},
    &.${antSelectShowArrow}
    .${antSelectSelection}:hover
    .${antSelectSelectionRendered} {
    margin-right: 20px;
  }
`;

export const antSelectSelectionClear = css`
  position: absolute;
  top: 50%;
  right: 11px;
  z-index: 1;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-style: normal;
  line-height: 12px;
  text-align: center;
  text-transform: none;
  background: #fff;
  cursor: pointer;
  opacity: 0;
  transition: color 0.3s ease, opacity 0.15s ease;
  text-rendering: auto;

  &::before {
    display: block;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const antSelectDisabled = css`
  color: rgba(0, 0, 0, 0.25);

  & .${antSelectSelection} {
    background: #f5f5f5;
    cursor: not-allowed;
  }

  & .${antSelectSelection}:hover, & .${antSelectSelection}:focus, & .${antSelectSelection}:active {
    border-color: #d9d9d9;
    box-shadow: none;
  }

  & .${antSelectSelectionClear} {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  & .${antSelectSelectionMultiple} .ant-select-selection__choice {
    padding-right: 10px;
    color: rgba(0, 0, 0, 0.33);
    background: #f5f5f5;
  }

  & .${antSelectSelectionMultiple} .ant-select-selection__choice__remove {
    display: none;
  }

  & .ant-select-selection__choice__remove {
    color: rgba(0, 0, 0, 0.25);
    cursor: default;
  }

  & .ant-select-selection__choice__remove:hover {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antSelectDropdownMenuItem = css`
  position: relative;
  display: block;
  padding: 5px 12px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.65);
  font-weight: normal;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover:not(.${antSelectDropdownMenuItemDisabled}) {
    background-color: #e6f7ff;
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;
  }
`;

export const antSelectDropdownMenuItemDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;

  &:hover {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const antSelectDropdownMenuItemSelected = css`
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
  background-color: #fafafa;
`;

export const antSelectDropdown = css`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  box-sizing: border-box;
  font-size: 14px;
  font-variant: initial;
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,
  &.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {
    animation-name: antSlideUpIn;
  }

  &.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft,
  &.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft {
    animation-name: antSlideDownIn;
  }

  &.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
    animation-name: antSlideUpOut;
  }

  &.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {
    animation-name: antSlideDownOut;
  }

  &.ant-select-dropdown--multiple .${antSelectDropdownMenuItem} {
    padding-right: 32px;
  }

  &.ant-select-dropdown--multiple .${antSelectDropdownMenuItem} .ant-select-selected-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    color: transparent;
    font-weight: bold;
    font-size: 12px;
    text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;
    transform: translateY(-50%);
    transition: all 0.2s;
  }

  &.ant-select-dropdown--multiple .${antSelectDropdownMenuItem}:hover .ant-select-selected-icon {
    color: rgba(0, 0, 0, 0.87);
  }

  &.ant-select-dropdown--multiple .${antSelectDropdownMenuItemDisabled} .ant-select-selected-icon {
    display: none;
  }

  &.ant-select-dropdown--multiple .${antSelectDropdownMenuItemSelected} .ant-select-selected-icon,
  &.ant-select-dropdown--multiple
    .${antSelectDropdownMenuItemSelected}:hover
    .ant-select-selected-icon {
    display: inline-block;
    color: #1890ff;
  }
`;

export const antSelectDropdownEmpty = css`
  &.ant-select-dropdown--multiple .${antSelectDropdownMenuItem} {
    padding-right: 12px;
  }
`;

export const antSelectDropdownContainerOpen = css`
  & .${antSelectDropdown} {
    display: block;
  }
`;

export const antSelectDropdownHidden = css`
  display: none;
`;

export const antSelectDropdownMenu = css`
  max-height: 250px;
  margin-bottom: 0;
  padding-left: 0;
  overflow: auto;
  list-style: none;
  outline: none;
`;

export const antSelectDropdownMenuItemActive = css`
  &:not(.${antSelectDropdownMenuItemDisabled}) {
    background-color: #e6f7ff;
  }
`;

export const antSelectDropdownMenuItemDivider = css`
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  line-height: 0;
  background-color: #e8e8e8;
`;

export const antSelectDropdownMenuItemGroupList = css`
  margin: 0;
  padding: 0;

  & > .${antSelectDropdownMenuItem} {
    padding-left: 20px;
  }

  & .${antSelectDropdownMenuItem}:first-child:not(:last-child) {
    border-radius: 0;
  }
`;

export const antSelectDropdownMenuItemGroup = css`
  &:not(:last-child)
    .${antSelectDropdownMenuItemGroupList}
    .${antSelectDropdownMenuItem}:last-child {
    border-radius: 0;
  }
`;

export const antSelectDropdownMenuItemGroupTitle = css`
  height: 32px;
  padding: 0 12px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  line-height: 32px;
`;

export const antSelectDropdownOpen = css`
  & .${antSelectDropdown} {
    display: block;
  }
`;

export const antSelectFocused = css`
  & .${antSelectSelection} {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const antSelectLg = css`
  font-size: 16px;

  & .${antSelectSelectionSingle} {
    height: 40px;
  }

  & .${antSelectSelectionRendered} {
    line-height: 38px;
  }

  & .${antSelectSelectionMultiple} {
    min-height: 40px;
  }

  & .${antSelectSelectionMultiple} .${antSelectSelectionRendered} li {
    height: 32px;
    line-height: 32px;
  }

  &
    .${antSelectSelectionMultiple}
    .${antSelectSelectionClear},
    &
    .${antSelectSelectionMultiple}
    .${antSelectArrow} {
    top: 20px;
  }
`;

export const antSelectNoArrow = css`
  & .${antSelectSelectionSelectedValue} {
    padding-right: 0;
  }
`;

export const antSelectOpen = css`
  & .ant-select-arrow-icon svg {
    transform: rotate(180deg);
  }

  & .${antSelectSelection} {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const antSelectSearchFieldMirror = css`
  position: absolute;
  top: 0;
  left: 0;
  white-space: pre;
  opacity: 0;
  pointer-events: none;
`;

export const antSelectSearchFieldPlaceholder = css`
  position: absolute;
  top: 50%;
  right: 9px;
  left: 0;
  max-width: 100%;
  height: 20px;
  margin-top: -10px;
  overflow: hidden;
  color: #bfbfbf;
  line-height: 20px;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;

  left: 12px;
`;

export const antSelectSelectionPlaceholder = css`
  position: absolute;
  top: 50%;
  right: 9px;
  left: 0;
  max-width: 100%;
  height: 20px;
  margin-top: -10px;
  overflow: hidden;
  color: #bfbfbf;
  line-height: 20px;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
`;

export const antSelectSm = css`
  & .${antSelectSelectionSingle} {
    height: 24px;
  }

  & .${antSelectSelectionRendered} {
    margin: 0 7px;
    line-height: 22px;
  }

  & .${antSelectSelectionMultiple} {
    min-height: 24px;
  }

  & .${antSelectSelectionMultiple} .${antSelectSelectionRendered} li {
    height: 16px;
    line-height: 14px;
  }

  &
    .${antSelectSelectionMultiple}
    .${antSelectSelectionClear},
    &
    .${antSelectSelectionMultiple}
    .${antSelectArrow} {
    top: 12px;
  }

  & .${antSelectSelectionClear}, & .${antSelectArrow} {
    right: 8px;
  }
`;
