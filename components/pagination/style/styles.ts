import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antPaginationTotalText = css`
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  line-height: 30px;
  vertical-align: middle;
`;

export const antPaginationItem = css`
  display: inline-block;
  min-width: 32px;
  height: 32px;
  margin-right: 8px;
  font-family: Arial;
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  user-select: none;

  & a {
    display: block;
    padding: 0 6px;
    color: rgba(0, 0, 0, 0.65);
    transition: none;
  }

  &:focus,
  &:hover {
    border-color: #1890ff;
    transition: all 0.3s;
  }

  &:focus a,
  &:hover a {
    color: #1890ff;
  }
`;

export const antPaginationItemActive = css`
  font-weight: 500;
  background: #fff;
  border-color: #1890ff;

  & a {
    color: #1890ff;
  }

  &:focus,
  &:hover {
    border-color: #40a9ff;
  }

  &:focus a,
  &:hover a {
    color: #40a9ff;
  }
`;

export const antPaginationPrev = css`
  margin-right: 8px;

  display: inline-block;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.65);
  font-family: Arial;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  outline: 0;

  & a {
    color: rgba(0, 0, 0, 0.65);
    user-select: none;
  }

  &:hover a {
    border-color: #40a9ff;
  }

  & .ant-pagination-item-link {
    display: block;
    height: 100%;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s;
  }

  &:focus .ant-pagination-item-link,
  &:hover .ant-pagination-item-link {
    color: #1890ff;
    border-color: #1890ff;
  }
`;

export const antPaginationNext = css`
  display: inline-block;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.65);
  font-family: Arial;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  outline: 0;

  & a {
    color: rgba(0, 0, 0, 0.65);
    user-select: none;
  }

  &:hover a {
    border-color: #40a9ff;
  }

  & .ant-pagination-item-link {
    display: block;
    height: 100%;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s;
  }

  &:focus .ant-pagination-item-link,
  &:hover .ant-pagination-item-link {
    color: #1890ff;
    border-color: #1890ff;
  }
`;

export const antPaginationJumpPrev = css`
  outline: 0;

  & .ant-pagination-item-container {
    position: relative;
  }

  & .ant-pagination-item-container .ant-pagination-item-link-icon {
    display: inline-block;
    font-size: 12px;
    font-size: 12px \\9;
    transform: scale(1) rotate(0deg);
    color: #1890ff;
    letter-spacing: -1px;
    opacity: 0;
    transition: all 0.2s;
  }

  :root & .ant-pagination-item-container .ant-pagination-item-link-icon {
    font-size: 12px;
  }

  & .ant-pagination-item-container .ant-pagination-item-link-icon-svg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  & .ant-pagination-item-container .ant-pagination-item-ellipsis {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    color: rgba(0, 0, 0, 0.25);
    letter-spacing: 2px;
    text-align: center;
    text-indent: 0.13em;
    opacity: 1;
    transition: all 0.2s;
  }

  &:focus .ant-pagination-item-link-icon,
  &:hover .ant-pagination-item-link-icon {
    opacity: 1;
  }

  &:focus .ant-pagination-item-ellipsis,
  &:hover .ant-pagination-item-ellipsis {
    opacity: 0;
  }

  margin-right: 8px;

  display: inline-block;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.65);
  font-family: Arial;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const antPaginationJumpNext = css`
  outline: 0;

  & .ant-pagination-item-container {
    position: relative;
  }

  & .ant-pagination-item-container .ant-pagination-item-link-icon {
    display: inline-block;
    font-size: 12px;
    font-size: 12px \\9;
    transform: scale(1) rotate(0deg);
    color: #1890ff;
    letter-spacing: -1px;
    opacity: 0;
    transition: all 0.2s;
  }

  :root & .ant-pagination-item-container .ant-pagination-item-link-icon {
    font-size: 12px;
  }

  & .ant-pagination-item-container .ant-pagination-item-link-icon-svg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  & .ant-pagination-item-container .ant-pagination-item-ellipsis {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    color: rgba(0, 0, 0, 0.25);
    letter-spacing: 2px;
    text-align: center;
    text-indent: 0.13em;
    opacity: 1;
    transition: all 0.2s;
  }

  &:focus .ant-pagination-item-link-icon,
  &:hover .ant-pagination-item-link-icon {
    opacity: 1;
  }

  &:focus .ant-pagination-item-ellipsis,
  &:hover .ant-pagination-item-ellipsis {
    opacity: 0;
  }

  margin-right: 8px;

  display: inline-block;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.65);
  font-family: Arial;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
`;

export const antPaginationOptions = css`
  display: inline-block;
  margin-left: 16px;
  vertical-align: middle;

  @media only screen and (max-width: 576px) {
    & {
      display: none;
    }
  }
`;

export const antPaginationOptionsQuickJumper = css`
  display: inline-block;
  height: 32px;
  line-height: 32px;
  vertical-align: top;

  & input {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    width: 50px;
    margin: 0 8px;
  }

  & input::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  & input:-ms-input-placeholder {
    color: #bfbfbf;
  }

  & input::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  & input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  & input:focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  & input-disabled:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  & input[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  & input[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  textarea& input {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }

  & input-lg {
    height: 40px;
    padding: 6px 11px;
    font-size: 16px;
  }

  & input-sm {
    height: 24px;
    padding: 1px 7px;
  }
`;

export const antPagination = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';


& ul, & ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

&::after {
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  content: ' ';
}

&.mini .${antPaginationTotalText}, &.mini .ant-pagination-simple-pager {
  height: 24px;
  line-height: 24px;
}

&.mini .${antPaginationItem} {
  min-width: 24px;
  height: 24px;
  margin: 0;
  line-height: 22px;
}

&.mini .${antPaginationItem}:not(.${antPaginationItemActive}) {
  background: transparent;
  border-color: transparent;
}

&.mini .${antPaginationPrev}, &.mini .${antPaginationNext} {
  min-width: 24px;
  height: 24px;
  margin: 0;
  line-height: 24px;
}

&.mini .${antPaginationPrev} .ant-pagination-item-link, &.mini .${antPaginationNext} .ant-pagination-item-link {
  background: transparent;
  border-color: transparent;
}

&.mini .${antPaginationPrev} .ant-pagination-item-link::after, &.mini .${antPaginationNext} .ant-pagination-item-link::after {
  height: 24px;
  line-height: 24px;
}

&.mini .${antPaginationJumpPrev}, &.mini .${antPaginationJumpNext} {
  height: 24px;
  margin-right: 0;
  line-height: 24px;
}

&.mini .${antPaginationOptions} {
  margin-left: 2px;
}

&.mini .${antPaginationOptionsQuickJumper} {
  height: 24px;
  line-height: 24px;
}

&.mini .${antPaginationOptionsQuickJumper} input {
  height: 24px;
  padding: 1px 7px;
  width: 44px;
}

`;

export const antPaginationDisabled = css`
  &,
  &:hover,
  &:focus {
    cursor: not-allowed;
  }

  & a,
  &:hover a,
  &:focus a,
  & .ant-pagination-item-link,
  &:hover .ant-pagination-item-link,
  &:focus .ant-pagination-item-link {
    color: rgba(0, 0, 0, 0.25);
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
`;

export const antPaginationItemAfterJumpPrev = css`
  @media only screen and (max-width: 992px) {
    & {
      display: none;
    }
  }
`;

export const antPaginationItemBeforeJumpNext = css`
  @media only screen and (max-width: 992px) {
    & {
      display: none;
    }
  }
`;

export const antPaginationOptionsSizeChanger = css`
  &.ant-select {
    display: inline-block;
    width: auto;
    margin-right: 8px;
  }
`;

export const antPaginationSimple = css`
  & .${antPaginationPrev}, & .${antPaginationNext} {
    height: 24px;
    line-height: 24px;
    vertical-align: top;
  }

  & .${antPaginationPrev} .ant-pagination-item-link,
  & .${antPaginationNext} .ant-pagination-item-link {
    height: 24px;
    border: 0;
  }

  & .${antPaginationPrev} .ant-pagination-item-link::after,
  & .${antPaginationNext} .ant-pagination-item-link::after {
    height: 24px;
    line-height: 24px;
  }

  & .ant-pagination-simple-pager {
    display: inline-block;
    height: 24px;
    margin-right: 8px;
  }

  & .ant-pagination-simple-pager input {
    box-sizing: border-box;
    height: 100%;
    margin-right: 8px;
    padding: 0 6px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
  }

  & .ant-pagination-simple-pager input:hover {
    border-color: #1890ff;
  }
`;

export const antPaginationSlash = css`
  margin: 0 10px 0 5px;
`;
