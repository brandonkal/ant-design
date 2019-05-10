import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antEmpty = css`
  margin: 0 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;

export const antEmptyDescription = css`
  margin: 0;
`;

export const antEmptyFooter = css`
  margin-top: 16px;
`;

export const antEmptyImage = css`
  height: 100px;
  margin-bottom: 8px;

  & img {
    height: 100%;
  }
`;

export const antEmptyNormal = css`
  margin: 32px 0;
  color: rgba(0, 0, 0, 0.25);

  & .${antEmptyImage} {
    height: 40px;
  }
`;

export const antEmptySmall = css`
  margin: 8px 0;
  color: rgba(0, 0, 0, 0.25);

  & .${antEmptyImage} {
    height: 35px;
  }
`;
