import { css } from '@emotion/core';

export const global = css`
  @keyframes antCheckboxEffect {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }

    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
`;

export const antSelectTreeCheckbox = css`
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
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;

  &:hover .${antSelectTreeCheckboxInner} {
    border-color: #1890ff;
  }

  &:hover::after {
    visibility: visible;
  }

  & + span {
    padding-right: 8px;
    padding-left: 8px;
  }
`;

export const antSelectTree = css`
  box-sizing: border-box;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  margin: 0;
  margin-top: -4px;
  padding: 0 4px;

  & li {
    margin: 8px 0;
    padding: 0;
    white-space: nowrap;
    list-style: none;
    outline: 0;
  }

  & li.filter-node > span {
    font-weight: 500;
  }

  & li ul {
    margin: 0;
    padding: 0 0 0 18px;
  }

  & li .ant-select-tree-node-content-wrapper {
    display: inline-block;
    width: calc(100% - 24px);
    margin: 0;
    padding: 3px 5px;
    color: rgba(0, 0, 0, 0.65);
    text-decoration: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & li .ant-select-tree-node-content-wrapper:hover {
    background-color: #e6f7ff;
  }

  & li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
    background-color: #bae7ff;
  }

  & li span.${antSelectTreeCheckbox} {
    margin: 0 4px 0 0;
  }

  & li span.${antSelectTreeCheckbox} + .ant-select-tree-node-content-wrapper {
    width: calc(100% - 46px);
  }

  & li span.ant-select-tree-switcher,
  & li span.ant-select-tree-iconEle {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0;
    line-height: 22px;
    text-align: center;
    vertical-align: middle;
    border: 0 none;
    outline: none;
    cursor: pointer;
  }

  & li span.ant-select-icon_loading .ant-select-switcher-loading-icon {
    position: absolute;
    left: 0;
    display: inline-block;
    color: #1890ff;
    font-size: 14px;
    transform: none;
  }

  & li span.ant-select-icon_loading .ant-select-switcher-loading-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  & li span.ant-select-tree-switcher {
    position: relative;
  }

  & li span.ant-select-tree-switcher.ant-select-tree-switcher-noop {
    cursor: auto;
  }

  & li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon,
  & li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }

  :root & li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon,
  :root & li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
  }

  & li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon svg,
  & li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }

  & li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon,
  & li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }

  :root & li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon,
  :root
    &
    li
    span.ant-select-tree-switcher.ant-select-tree-switcher_close
    .ant-select-switcher-icon {
    font-size: 12px;
  }

  & li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon svg,
  & li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }

  & li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon svg {
    transform: rotate(-90deg);
  }

  &
    li
    span.ant-select-tree-switcher.ant-select-tree-switcher_open
    .ant-select-switcher-loading-icon,
  &
    li
    span.ant-select-tree-switcher.ant-select-tree-switcher_close
    .ant-select-switcher-loading-icon {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    color: #1890ff;
    font-size: 14px;
    transform: none;
  }

  &
    li
    span.ant-select-tree-switcher.ant-select-tree-switcher_open
    .ant-select-switcher-loading-icon
    svg,
  &
    li
    span.ant-select-tree-switcher.ant-select-tree-switcher_close
    .ant-select-switcher-loading-icon
    svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  & .ant-select-tree-treenode-loading .ant-select-tree-iconEle {
    display: none;
  }
`;

export const antSelectTreeCheckboxInner = css`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  border-collapse: separate;
  transition: all 0.3s;

  &::after {
    position: absolute;
    top: 50%;
    left: 21%;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0) translate(-50%, -50%);
    opacity: 0;
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    content: ' ';
  }
`;

export const antSelectTreeCheckboxChecked = css`
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    animation: antCheckboxEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    content: '';
  }

  & .${antSelectTreeCheckboxInner}::after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    content: ' ';
  }

  & .${antSelectTreeCheckboxInner} {
    background-color: #1890ff;
    border-color: #1890ff;
  }
`;

export const antSelectTreeCheckboxInput = css`
  &:focus + .${antSelectTreeCheckboxInner} {
    border-color: #1890ff;
  }

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`;

export const antSelectTreeCheckboxDisabled = css`
  cursor: not-allowed;

  &.${antSelectTreeCheckboxChecked} .${antSelectTreeCheckboxInner}::after {
    border-color: rgba(0, 0, 0, 0.25);
    animation-name: none;
  }

  & .${antSelectTreeCheckboxInput} {
    cursor: not-allowed;
  }

  & .${antSelectTreeCheckboxInner} {
    background-color: #f5f5f5;
    border-color: #d9d9d9 !important;
  }

  & .${antSelectTreeCheckboxInner}::after {
    border-color: #f5f5f5;
    border-collapse: separate;
    animation-name: none;
  }

  & + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const antSelectTreeCheckboxGroup = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
`;

export const antSelectTreeCheckboxGroupItem = css`
  display: inline-block;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  & + & {
    margin-left: 0;
  }
`;

export const antSelectTreeCheckboxIndeterminate = css`
  & .${antSelectTreeCheckboxInner} {
    background-color: #fff;
    border-color: #d9d9d9;
  }

  & .${antSelectTreeCheckboxInner}::after {
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border: 0;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    content: ' ';
  }

  &.${antSelectTreeCheckboxDisabled} .${antSelectTreeCheckboxInner}::after {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: rgba(0, 0, 0, 0.25);
  }
`;

export const antSelectTreeCheckboxWrapper = css`
  &:hover .${antSelectTreeCheckboxInner} {
    border-color: #1890ff;
  }

  &:hover .${antSelectTreeCheckbox}::after {
    visibility: visible;
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
  display: inline-block;
  line-height: unset;
  cursor: pointer;

  & + & {
    margin-left: 8px;
  }

  & + span {
    padding-right: 8px;
    padding-left: 8px;
  }
`;

export const antSelectTreeChildTree = css`
  display: none;
`;

export const antSelectTreeChildTreeOpen = css`
  display: block;
`;

export const antSelectTreeDropdown = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';

  & .ant-select-dropdown-search {
    position: sticky;
    top: 0;
    z-index: 1;
    display: block;
    padding: 4px;
    background: #fff;
  }

  & .ant-select-dropdown-search .ant-select-search__field__wrap {
    width: 100%;
  }

  & .ant-select-dropdown-search .ant-select-search__field {
    box-sizing: border-box;
    width: 100%;
    padding: 4px 7px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    outline: none;
  }

  & .ant-select-dropdown-search.ant-select-search--hide {
    display: none;
  }

  & .ant-select-not-found {
    display: block;
    padding: 7px 16px;
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const antSelectTreeIconClose = css`
  margin-right: 2px;
  vertical-align: top;
`;

export const antSelectTreeIconOpen = css`
  margin-right: 2px;
  vertical-align: top;
`;

export const antSelectTreeTreenodeDisabled = css`
  li& > span:not(.ant-select-tree-switcher),
  li& > .ant-select-tree-node-content-wrapper,
  li& > .ant-select-tree-node-content-wrapper span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }

  li& > .ant-select-tree-node-content-wrapper:hover {
    background: transparent;
  }
`;
