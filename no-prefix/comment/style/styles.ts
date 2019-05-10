import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antComment = css`
  position: relative;
`;

export const antCommentActions = css`
  margin-top: 12px;
  padding-left: 0;

  & > li {
    display: inline-block;
    color: rgba(0, 0, 0, 0.45);
  }

  & > li > span {
    padding-right: 10px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    cursor: pointer;
    transition: color 0.3s;
    user-select: none;
  }

  & > li > span:hover {
    color: #595959;
  }
`;

export const antCommentAvatar = css`
  position: relative;
  flex-shrink: 0;
  margin-right: 12px;
  cursor: pointer;

  & img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const antCommentContent = css`
  position: relative;
  flex: 1 1 auto;
  min-width: 1px;
  font-size: 14px;
  word-wrap: break-word;
`;

export const antCommentContentAuthor = css`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4px;
  font-size: 14px;

  & > a,
  & > span {
    height: 18px;
    padding-right: 8px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const antCommentContentAuthorName = css`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  transition: color 0.3s;

  & > * {
    color: rgba(0, 0, 0, 0.45);
  }

  & > *:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const antCommentContentAuthorTime = css`
  color: #ccc;
  white-space: nowrap;
  cursor: auto;
`;

export const antCommentContentDetail = css`
  & p {
    white-space: pre-wrap;
  }
`;

export const antCommentInner = css`
  display: flex;
  padding: 16px 0;
`;

export const antCommentNested = css`
  margin-left: 44px;
`;
