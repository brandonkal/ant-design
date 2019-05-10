import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antTypography = css`
  color: rgba(0, 0, 0, 0.65);

  &.ant-typography-secondary {
    color: rgba(0, 0, 0, 0.45);
  }

  &.ant-typography-warning {
    color: #d48806;
  }

  &.ant-typography-danger {
    color: #cf1322;
  }

  &.ant-typography-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    user-select: none;
  }

  div&,
  & p {
    margin-bottom: 1em;
  }

  h1&,
  & h1 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 38px;
    line-height: 1.23;
  }

  h2&,
  & h2 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 30px;
    line-height: 1.35;
  }

  h3&,
  & h3 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 24px;
    line-height: 1.35;
  }

  h4&,
  & h4 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
  }

  & + h1&,
  & + h2&,
  & + h3&,
  & + h4& {
    margin-top: 1.2em;
  }

  & div + h1,
  & ul + h1,
  & li + h1,
  & p + h1,
  & h1 + h1,
  & h2 + h1,
  & h3 + h1,
  & h4 + h1,
  & div + h2,
  & ul + h2,
  & li + h2,
  & p + h2,
  & h1 + h2,
  & h2 + h2,
  & h3 + h2,
  & h4 + h2,
  & div + h3,
  & ul + h3,
  & li + h3,
  & p + h3,
  & h1 + h3,
  & h2 + h3,
  & h3 + h3,
  & h4 + h3,
  & div + h4,
  & ul + h4,
  & li + h4,
  & p + h4,
  & h1 + h4,
  & h2 + h4,
  & h3 + h4,
  & h4 + h4 {
    margin-top: 1.2em;
  }

  & a {
    color: #1890ff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }

  & a:focus,
  & a:hover {
    color: #40a9ff;
  }

  & a:active {
    color: #096dd9;
  }

  & a:active,
  & a:hover {
    text-decoration: none;
  }

  & a[disabled] {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    pointer-events: none;
  }

  & code {
    margin: 0 0.2em;
    padding: 0.2em 0.4em 0.1em;
    font-size: 85%;
    background: rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 3px;
  }

  & mark {
    padding: 0;
    background-color: #ffe58f;
  }

  & u,
  & ins {
    text-decoration: underline;
    -webkit-text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
  }

  & s,
  & del {
    text-decoration: line-through;
  }

  & strong {
    font-weight: 600;
  }

  & ul,
  & ol {
    margin: 0 0 1em 0;
    padding: 0;
  }

  & ul li,
  & ol li {
    margin: 0 0 0 20px;
    padding: 0 0 0 4px;
  }

  & ul li {
    list-style-type: circle;
  }

  & ul li li {
    list-style-type: disc;
  }

  & ol li {
    list-style-type: decimal;
  }
`;

export const antTypographyCopy = css`
  color: #1890ff;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: 8px;

  &:focus,
  &:hover {
    color: #40a9ff;
  }

  &:active {
    color: #096dd9;
  }
`;

export const antTypographyCopySuccess = css`
  &,
  &:hover,
  &:focus {
    color: #52c41a;
  }
`;

export const antTypographyEdit = css`
  color: #1890ff;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: 8px;

  &:focus,
  &:hover {
    color: #40a9ff;
  }

  &:active {
    color: #096dd9;
  }
`;

export const antTypographyEditContent = css`
  position: relative;

  div& {
    left: -12px;
    margin-top: -5px;
    margin-bottom: calc(1em - 4px - 2px);
  }
`;

export const antTypographyEditContentConfirm = css`
  position: absolute;
  right: 10px;
  bottom: 8px;
  color: rgba(0, 0, 0, 0.45);
  pointer-events: none;
`;

export const antTypographyEllipsis = css`
  span& {
    display: inline-block;
  }
`;

export const antTypographyEllipsisMultipleLine = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const antTypographyEllipsisSingleLine = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const antTypographyExpand = css`
  color: #1890ff;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: 8px;

  &:focus,
  &:hover {
    color: #40a9ff;
  }

  &:active {
    color: #096dd9;
  }
`;
