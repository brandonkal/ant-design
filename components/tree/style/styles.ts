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

export const antTreeChildTree = css`
  & > li:first-child {
    padding-top: 8px;
  }

  & > li:last-child {
    padding-bottom: 0;
  }
`;

export const antTreeCheckbox = css`
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

  &:hover .${antTreeCheckboxInner} {
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

export const antTreeCheckboxInner = css`
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

export const antTreeCheckboxChecked = css`
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

  & .${antTreeCheckboxInner}::after {
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

  & .${antTreeCheckboxInner} {
    background-color: #1890ff;
    border-color: #1890ff;
  }

  &::after {
    position: absolute;
    top: 16.67%;
    left: 0;
    width: 100%;
    height: 66.67%;
  }
`;

export const antTree = css`
  &.ant-tree-directory {
    position: relative;
  }

  &.ant-tree-directory > li span.ant-tree-switcher,
  &.ant-tree-directory .${antTreeChildTree} > li span.ant-tree-switcher {
    position: relative;
    z-index: 1;
  }

  &.ant-tree-directory > li span.ant-tree-switcher.ant-tree-switcher-noop,
  &.ant-tree-directory .${antTreeChildTree} > li span.ant-tree-switcher.ant-tree-switcher-noop {
    pointer-events: none;
  }

  &.ant-tree-directory
    > li
    span.${antTreeCheckbox},
    &.ant-tree-directory
    .${antTreeChildTree}
    > li
    span.${antTreeCheckbox} {
    position: relative;
    z-index: 1;
  }

  &.ant-tree-directory > li span.ant-tree-node-content-wrapper,
  &.ant-tree-directory .${antTreeChildTree} > li span.ant-tree-node-content-wrapper {
    border-radius: 0;
    user-select: none;
  }

  &.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover,
  &.ant-tree-directory .${antTreeChildTree} > li span.ant-tree-node-content-wrapper:hover {
    background: transparent;
  }

  &.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover::before,
  &.ant-tree-directory .${antTreeChildTree} > li span.ant-tree-node-content-wrapper:hover::before {
    background: #e6f7ff;
  }

  &.ant-tree-directory > li span.ant-tree-node-content-wrapper.ant-tree-node-selected,
  &.ant-tree-directory
    .${antTreeChildTree}
    > li
    span.ant-tree-node-content-wrapper.ant-tree-node-selected {
    color: #fff;
    background: transparent;
  }

  &.ant-tree-directory > li span.ant-tree-node-content-wrapper::before,
  &.ant-tree-directory .${antTreeChildTree} > li span.ant-tree-node-content-wrapper::before {
    position: absolute;
    right: 0;
    left: 0;
    height: 24px;
    transition: all 0.3s;
    content: '';
  }

  &.ant-tree-directory > li span.ant-tree-node-content-wrapper > span,
  &.ant-tree-directory .${antTreeChildTree} > li span.ant-tree-node-content-wrapper > span {
    position: relative;
    z-index: 1;
  }

  &.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-switcher,
  &.ant-tree-directory
    .${antTreeChildTree}
    > li.ant-tree-treenode-selected
    > span.ant-tree-switcher {
    color: #fff;
  }

  &.ant-tree-directory
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}
    .${antTreeCheckboxInner},
    &.ant-tree-directory
    .${antTreeChildTree}
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}
    .${antTreeCheckboxInner} {
    border-color: #1890ff;
  }

  &.ant-tree-directory
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}.${antTreeCheckboxChecked}::after,
    &.ant-tree-directory
    .${antTreeChildTree}
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}.${antTreeCheckboxChecked}::after {
    border-color: #fff;
  }

  &.ant-tree-directory
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}.${antTreeCheckboxChecked}
    .${antTreeCheckboxInner},
    &.ant-tree-directory
    .${antTreeChildTree}
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}.${antTreeCheckboxChecked}
    .${antTreeCheckboxInner} {
    background: #fff;
  }

  &.ant-tree-directory
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}.${antTreeCheckboxChecked}
    .${antTreeCheckboxInner}::after,
    &.ant-tree-directory
    .${antTreeChildTree}
    > li.ant-tree-treenode-selected
    > span.${antTreeCheckbox}.${antTreeCheckboxChecked}
    .${antTreeCheckboxInner}::after {
    border-color: #1890ff;
  }

  &.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before,
  &.ant-tree-directory
    .${antTreeChildTree}
    > li.ant-tree-treenode-selected
    > span.ant-tree-node-content-wrapper::before {
    background: #1890ff;
  }

  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  margin: 0;
  padding: 0;

  & ol,
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    margin: 0;
    padding: 4px 0;
    white-space: nowrap;
    list-style: none;
    outline: 0;
  }

  & li span[draggable],
  & li span[draggable='true'] {
    line-height: 20px;
    border-top: 2px transparent solid;
    border-bottom: 2px transparent solid;
    user-select: none;

    -khtml-user-drag: element;
    -webkit-user-drag: element;
  }

  & li.drag-over > span[draggable] {
    color: white;
    background-color: #1890ff;
    opacity: 0.8;
  }

  & li.drag-over-gap-top > span[draggable] {
    border-top-color: #1890ff;
  }

  & li.drag-over-gap-bottom > span[draggable] {
    border-bottom-color: #1890ff;
  }

  & li.filter-node > span {
    color: #f5222d !important;
    font-weight: 500 !important;
  }

  &
    li.ant-tree-treenode-loading
    span.ant-tree-switcher.ant-tree-switcher_open
    .ant-tree-switcher-loading-icon,
  &
    li.ant-tree-treenode-loading
    span.ant-tree-switcher.ant-tree-switcher_close
    .ant-tree-switcher-loading-icon {
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
    li.ant-tree-treenode-loading
    span.ant-tree-switcher.ant-tree-switcher_open
    .ant-tree-switcher-loading-icon
    svg,
  &
    li.ant-tree-treenode-loading
    span.ant-tree-switcher.ant-tree-switcher_close
    .ant-tree-switcher-loading-icon
    svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  :root & li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open::after,
  :root & li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close::after {
    opacity: 0;
  }

  & li ul {
    margin: 0;
    padding: 0 0 0 18px;
  }

  & li .ant-tree-node-content-wrapper {
    display: inline-block;
    height: 24px;
    margin: 0;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 24px;
    text-decoration: none;
    vertical-align: top;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & li .ant-tree-node-content-wrapper:hover {
    background-color: #e6f7ff;
  }

  & li .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: #bae7ff;
  }

  & li span.${antTreeCheckbox} {
    top: initial;
    height: 24px;
    margin: 0 4px 0 2px;
    padding: 4px 0;
  }

  & li span.ant-tree-switcher,
  & li span.ant-tree-iconEle {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0;
    line-height: 24px;
    text-align: center;
    vertical-align: top;
    border: 0 none;
    outline: none;
    cursor: pointer;
  }

  & li span.ant-tree-switcher {
    position: relative;
  }

  & li span.ant-tree-switcher.ant-tree-switcher-noop {
    cursor: default;
  }

  & li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
  & li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }

  :root & li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
  :root & li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
  }

  & li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,
  & li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }

  & li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
  & li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \\9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }

  :root & li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
  :root & li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
  }

  & li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg,
  & li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }

  & li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg {
    transform: rotate(-90deg);
  }

  & li:last-child > span.ant-tree-switcher::before,
  & li:last-child > span.ant-tree-iconEle::before {
    display: none;
  }

  & > li:first-child {
    padding-top: 7px;
  }

  & > li:last-child {
    padding-bottom: 7px;
  }

  &.ant-tree-show-line li {
    position: relative;
  }

  &.ant-tree-show-line li span.ant-tree-switcher {
    color: rgba(0, 0, 0, 0.45);
    background: #fff;
  }

  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon,
  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon {
    display: inline-block;
    font-weight: normal;
    font-size: 12px;
  }

  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon svg,
  &.ant-tree-show-line
    li
    span.ant-tree-switcher.ant-tree-switcher-noop
    .ant-select-switcher-icon
    svg {
    transition: transform 0.3s;
  }

  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
    display: inline-block;
    font-weight: normal;
    font-size: 12px;
  }

  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,
  &.ant-tree-show-line
    li
    span.ant-tree-switcher.ant-tree-switcher_open
    .ant-select-switcher-icon
    svg {
    transition: transform 0.3s;
  }

  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
  &.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
    display: inline-block;
    font-weight: normal;
    font-size: 12px;
  }

  &.ant-tree-show-line
    li
    span.ant-tree-switcher.ant-tree-switcher_close
    .ant-tree-switcher-icon
    svg,
  &.ant-tree-show-line
    li
    span.ant-tree-switcher.ant-tree-switcher_close
    .ant-select-switcher-icon
    svg {
    transition: transform 0.3s;
  }

  &.ant-tree-show-line li:not(:last-child)::before {
    position: absolute;
    left: 12px;
    width: 1px;
    height: 100%;
    margin: 22px 0;
    border-left: 1px solid #d9d9d9;
    content: ' ';
  }

  &.ant-tree-icon-hide .ant-tree-treenode-loading .ant-tree-iconEle {
    display: none;
  }

  &.ant-tree-block-node li .ant-tree-node-content-wrapper {
    width: calc(100% - 24px);
  }

  &.ant-tree-block-node li span.${antTreeCheckbox} + .ant-tree-node-content-wrapper {
    width: calc(100% - 46px);
  }
`;

export const antTreeCheckboxInput = css`
  &:focus + .${antTreeCheckboxInner} {
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

export const antTreeCheckboxDisabled = css`
  cursor: not-allowed;

  &.${antTreeCheckboxChecked} .${antTreeCheckboxInner}::after {
    border-color: rgba(0, 0, 0, 0.25);
    animation-name: none;
  }

  & .${antTreeCheckboxInput} {
    cursor: not-allowed;
  }

  & .${antTreeCheckboxInner} {
    background-color: #f5f5f5;
    border-color: #d9d9d9 !important;
  }

  & .${antTreeCheckboxInner}::after {
    border-color: #f5f5f5;
    border-collapse: separate;
    animation-name: none;
  }

  & + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export const antTreeCheckboxGroup = css`
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

export const antTreeCheckboxGroupItem = css`
  display: inline-block;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  & + & {
    margin-left: 0;
  }
`;

export const antTreeCheckboxIndeterminate = css`
  & .${antTreeCheckboxInner} {
    background-color: #fff;
    border-color: #d9d9d9;
  }

  & .${antTreeCheckboxInner}::after {
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

  &.${antTreeCheckboxDisabled} .${antTreeCheckboxInner}::after {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: rgba(0, 0, 0, 0.25);
  }
`;

export const antTreeCheckboxWrapper = css`
  &:hover .${antTreeCheckboxInner} {
    border-color: #1890ff;
  }

  &:hover .${antTreeCheckbox}::after {
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

export const antTreeIconClose = css`
  margin-right: 2px;
  vertical-align: top;
`;

export const antTreeIconOpen = css`
  margin-right: 2px;
  vertical-align: top;
`;

export const antTreeTreenodeDisabled = css`
  li& > span:not(.ant-tree-switcher),
  li& > .ant-tree-node-content-wrapper,
  li& > .ant-tree-node-content-wrapper span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }

  li& > .ant-tree-node-content-wrapper:hover {
    background: transparent;
  }
`;
