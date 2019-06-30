import { css } from '@emotion/core';

export const global = css``;

export const antTimelineItemTail = css`
  position: absolute;
  top: 0.75em;
  left: 4px;
  height: 100%;
  border-left: 2px solid #e8e8e8;
`;

export const antTimelineItemHead = css`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 100px;
`;

export const antTimelineItemHeadCustom = css`
  position: absolute;
  top: 5.5px;
  left: 5px;
  width: auto;
  height: auto;
  margin-top: 0;
  padding: 3px 1px;
  line-height: 1;
  text-align: center;
  border: 0;
  border-radius: 0;
  transform: translate(-50%, -50%);
`;

export const antTimelineItemContent = css`
  position: relative;
  top: -6px;
  margin: 0 0 0 18px;
`;

export const antTimelineItemLast = css`
  & > .${antTimelineItemTail} {
    display: none;
  }

  & > .${antTimelineItemContent} {
    min-height: 48px;
  }
`;

export const antTimelineItemPending = css`
  & .${antTimelineItemHead} {
    font-size: 12px;
  }

  & .${antTimelineItemTail} {
    display: none;
  }
`;

export const antTimeline = css`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: 'tnum';
  margin: 0;
  padding: 0;
  list-style: none;

  &.ant-timeline-alternate
    .${antTimelineItemTail},
    &.ant-timeline-right
    .${antTimelineItemTail},
    &.ant-timeline-alternate
    .${antTimelineItemHead},
    &.ant-timeline-right
    .${antTimelineItemHead},
    &.ant-timeline-alternate
    .${antTimelineItemHeadCustom},
    &.ant-timeline-right
    .${antTimelineItemHeadCustom} {
    left: 50%;
  }

  &.ant-timeline-alternate .${antTimelineItemHead}, &.ant-timeline-right .${antTimelineItemHead} {
    margin-left: -4px;
  }

  &.ant-timeline-alternate
    .${antTimelineItemHeadCustom},
    &.ant-timeline-right
    .${antTimelineItemHeadCustom} {
    margin-left: 1px;
  }

  &.ant-timeline-alternate
    .ant-timeline-item-left
    .${antTimelineItemContent},
    &.ant-timeline-right
    .ant-timeline-item-left
    .${antTimelineItemContent} {
    left: 50%;
    width: 50%;
    text-align: left;
  }

  &.ant-timeline-alternate
    .ant-timeline-item-right
    .${antTimelineItemContent},
    &.ant-timeline-right
    .ant-timeline-item-right
    .${antTimelineItemContent} {
    right: 50%;
    left: -30px;
    width: 50%;
    margin-right: 18px;
    text-align: right;
  }

  &.ant-timeline-right
    .ant-timeline-item-right
    .${antTimelineItemTail},
    &.ant-timeline-right
    .ant-timeline-item-right
    .${antTimelineItemHead},
    &.ant-timeline-right
    .ant-timeline-item-right
    .${antTimelineItemHeadCustom} {
    left: 100%;
  }

  &.ant-timeline-right .ant-timeline-item-right .${antTimelineItemContent} {
    right: 0;
    left: -30px;
    width: 100%;
  }

  &.ant-timeline-pending .${antTimelineItemLast} .${antTimelineItemTail} {
    display: block;
    border-left: 2px dotted #e8e8e8;
  }

  &.ant-timeline-reverse .${antTimelineItemLast} .${antTimelineItemTail} {
    display: none;
  }

  &.ant-timeline-reverse .${antTimelineItemPending} .${antTimelineItemTail} {
    display: block;
    border-left: 2px dotted #e8e8e8;
  }

  &.ant-timeline-reverse .${antTimelineItemPending} .${antTimelineItemContent} {
    min-height: 48px;
  }
`;

export const antTimelineItem = css`
  position: relative;
  margin: 0;
  padding: 0 0 20px;
  font-size: 14px;
  list-style: none;
`;

export const antTimelineItemHeadBlue = css`
  color: #1890ff;
  border-color: #1890ff;
`;

export const antTimelineItemHeadGreen = css`
  color: #52c41a;
  border-color: #52c41a;
`;

export const antTimelineItemHeadRed = css`
  color: #f5222d;
  border-color: #f5222d;
`;
