import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antBreadcrumbSeparator = css`
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
`;

export const antBreadcrumb = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;

  & .anticon {
    font-size: 14px;
  }

  & a {
    color: rgba(0, 0, 0, 0.45);
    transition: color 0.3s;
  }

  & a:hover {
    color: #40a9ff;
  }

  & > span:last-child {
    color: rgba(0, 0, 0, 0.65);
  }

  & > span:last-child .${antBreadcrumbSeparator} {
    display: none;
  }
`;

export const antBreadcrumbLink = css`
  & > .anticon + span {
    margin-left: 4px;
  }
`;

export const antBreadcrumbOverlayLink = css`
  & > .anticon {
    margin-left: 4px;
  }
`;
