import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antSelectAutoComplete = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';

  &.ant-select .ant-select-selection {
    border: 0;
    box-shadow: none;
  }

  &.ant-select .ant-select-selection__rendered {
    height: 100%;
    margin-right: 0;
    margin-left: 0;
    line-height: 32px;
  }

  &.ant-select .ant-select-selection__placeholder {
    margin-right: 12px;
    margin-left: 12px;
  }

  &.ant-select .ant-select-selection--single {
    height: auto;
  }

  &.ant-select .ant-select-search--inline {
    position: static;
    float: left;
  }

  &.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered {
    margin-right: 0 !important;
  }

  &.ant-select .ant-input {
    height: 32px;
    line-height: 1.5;
    background: transparent;
    border-width: 1px;
  }

  &.ant-select .ant-input:focus,
  &.ant-select .ant-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  &.ant-select .ant-input[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
    background-color: transparent;
  }

  &.ant-select .ant-input[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  &.ant-select-lg .ant-select-selection__rendered {
    line-height: 40px;
  }

  &.ant-select-lg .ant-input {
    height: 40px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  &.ant-select-sm .ant-select-selection__rendered {
    line-height: 24px;
  }

  &.ant-select-sm .ant-input {
    height: 24px;
    padding-top: 1px;
    padding-bottom: 1px;
  }
`;

export const antInputGroup = css`
  & > .${antSelectAutoComplete} .ant-select-search__field.ant-input-affix-wrapper {
    display: inline;
    float: none;
  }
`;
