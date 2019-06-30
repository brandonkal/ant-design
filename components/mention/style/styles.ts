import { css } from '@emotion/core';

export const global = css``;

export const antMentionDropdown = css`
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
  min-width: 120px;
  max-height: 250px;
  margin-top: 1.5em;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const antMentionDropdownItem = css`
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
  transition: background 0.3s;

  &:hover {
    background-color: #e6f7ff;
  }

  &.focus {
    background-color: #e6f7ff;
  }
`;

export const antMentionDropdownItemActive = css`
  background-color: #e6f7ff;
`;

export const antMentionDropdownItemDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;

  &:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: #fff;
    cursor: not-allowed;
  }
`;

export const antMentionDropdownItemDivider = css`
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  line-height: 0;
  background-color: #e8e8e8;
`;

export const antMentionDropdownItemSelected = css`
  &,
  &:hover {
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;
    background-color: #f5f5f5;
  }
`;

export const antMentionDropdownNotfound = css`
  &.${antMentionDropdownItem} {
    color: rgba(0, 0, 0, 0.25);
  }

  &.${antMentionDropdownItem} .anticon-loading {
    display: block;
    color: #1890ff;
    text-align: center;
  }
`;

export const antMentionDropdownPlacementTop = css`
  margin-top: -0.1em;
`;

export const antMentionWrapper = css`
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
  width: 100%;
  vertical-align: middle;

  & .ant-mention-editor {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    display: block;
    height: auto;
    min-height: 32px;
    padding: 0;
    line-height: 1.5;
  }

  & .ant-mention-editor::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  & .ant-mention-editor:-ms-input-placeholder {
    color: #bfbfbf;
  }

  & .ant-mention-editor::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  & .ant-mention-editor:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  & .ant-mention-editor:focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & .ant-mention-editor-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  & .ant-mention-editor-disabled:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  & .ant-mention-editor[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  & .ant-mention-editor[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  textarea& .ant-mention-editor {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }

  & .ant-mention-editor-lg {
    height: 40px;
    padding: 6px 11px;
    font-size: 16px;
  }

  & .ant-mention-editor-sm {
    height: 24px;
    padding: 1px 7px;
  }

  & .ant-mention-editor-wrapper {
    height: auto;
    overflow-y: auto;
  }

  &.ant-mention-active:not(.disabled) .ant-mention-editor {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &.disabled .ant-mention-editor {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  &.disabled .ant-mention-editor:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  & .public-DraftEditorPlaceholder-root {
    position: absolute;
    pointer-events: none;
  }

  & .public-DraftEditorPlaceholder-root .public-DraftEditorPlaceholder-inner {
    height: auto;
    padding: 5px 11px;
    color: #bfbfbf;
    white-space: pre-wrap;
    word-wrap: break-word;
    outline: none;
    opacity: 1;
  }

  & .DraftEditor-editorContainer .public-DraftEditor-content {
    height: auto;
    padding: 5px 11px;
  }
`;
