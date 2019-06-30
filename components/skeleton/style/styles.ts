import { css } from '@emotion/core';

export const global = css`
  @keyframes ant-skeleton-loading {
    0% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
`;

export const antSkeletonContent = css`
  display: table-cell;
  width: 100%;
  vertical-align: top;

  & .ant-skeleton-title {
    width: 100%;
    height: 16px;
    margin-top: 16px;
    background: #f2f2f2;
  }

  & .ant-skeleton-title + .ant-skeleton-paragraph {
    margin-top: 24px;
  }

  & .ant-skeleton-paragraph {
    padding: 0;
  }

  & .ant-skeleton-paragraph > li {
    width: 100%;
    height: 16px;
    list-style: none;
    background: #f2f2f2;
  }

  & .ant-skeleton-paragraph > li:last-child:not(:first-child):not(:nth-child(2)) {
    width: 61%;
  }

  & .ant-skeleton-paragraph > li + li {
    margin-top: 16px;
  }
`;

export const antSkeleton = css`
  display: table;
  width: 100%;

  &.ant-skeleton-active .${antSkeletonContent} .ant-skeleton-title,
  &.ant-skeleton-active .${antSkeletonContent} .ant-skeleton-paragraph > li {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: ant-skeleton-loading 1.4s ease infinite;
  }

  &.ant-skeleton-active .ant-skeleton-avatar {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: ant-skeleton-loading 1.4s ease infinite;
  }
`;

export const antSkeletonHeader = css`
  display: table-cell;
  padding-right: 16px;
  vertical-align: top;

  & .ant-skeleton-avatar {
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
    width: 32px;
    height: 32px;
    line-height: 32px;
  }

  & .ant-skeleton-avatar.ant-skeleton-avatar-circle {
    border-radius: 50%;
  }

  & .ant-skeleton-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  & .ant-skeleton-avatar-lg.ant-skeleton-avatar-circle {
    border-radius: 50%;
  }

  & .ant-skeleton-avatar-sm {
    width: 24px;
    height: 24px;
    line-height: 24px;
  }

  & .ant-skeleton-avatar-sm.ant-skeleton-avatar-circle {
    border-radius: 50%;
  }
`;

export const antSkeletonWithAvatar = css`
  & .${antSkeletonContent} .ant-skeleton-title {
    margin-top: 12px;
  }

  & .${antSkeletonContent} .ant-skeleton-title + .ant-skeleton-paragraph {
    margin-top: 28px;
  }
`;
