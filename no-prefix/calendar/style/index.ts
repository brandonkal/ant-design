import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antFullcalendar = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  border-top: 1px solid #d9d9d9;
  outline: none;

  & table {
    width: 100%;
    max-width: 100%;
    height: 256px;
    background-color: transparent;
    border-collapse: collapse;
  }

  & table,
  & th,
  & td {
    border: 0;
  }

  & td {
    position: relative;
  }
`;

export const antFullcalendarCalendarBody = css`
  padding: 8px 12px;
`;

export const antFullcalendarCalendarTable = css`
  margin-bottom: 0;
  border-spacing: 0;
`;

export const antFullcalendarColumnHeader = css`
  width: 33px;
  padding: 0;
  line-height: 18px;
  text-align: center;

  & .ant-fullcalendar-column-header-inner {
    display: block;
    font-weight: normal;
  }
`;

export const antFullcalendarContent = css`
  position: absolute;
  bottom: -9px;
  left: 0;
  width: 100%;
`;

export const antFullcalendarDate = css`
  text-align: center;
  transition: all 0.3s;
`;

export const antFullcalendarDatePanel = css`
  position: relative;
  outline: none;
`;

export const antFullcalendarToday = css`
  & .${antFullcalendarValue} {
    box-shadow: 0 0 0 1px #1890ff inset;
  }
`;

export const antFullcalendarValue = css`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  transition: all 0.3s;

  &:hover {
    background: #e6f7ff;
    cursor: pointer;
  }

  &:active {
    color: #fff;
    background: #1890ff;
  }
`;

export const antFullcalendarDisabledCell = css`
  & .${antFullcalendarDate}, & .${antFullcalendarDate}:hover {
    cursor: not-allowed;
  }

  &:not(.${antFullcalendarToday})
    .${antFullcalendarDate},
    &:not(.${antFullcalendarToday})
    .${antFullcalendarDate}:hover {
    background: transparent;
  }

  & .${antFullcalendarValue} {
    width: auto;
    color: rgba(0, 0, 0, 0.25);
    border-radius: 0;
    cursor: not-allowed;
  }
`;

export const antFullcalendarDisabledCellFirstOfRow = css`
  & .${antFullcalendarValue} {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const antFullcalendarDisabledCellLastOfRow = css`
  & .${antFullcalendarValue} {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const antFullcalendarHeader = css`
  padding: 11px 16px 11px 0;
  text-align: right;

  & .ant-select-dropdown {
    text-align: left;
  }

  & .ant-radio-group {
    margin-left: 8px;
    text-align: left;
  }

  & label.ant-radio-button {
    height: 22px;
    padding: 0 10px;
    line-height: 20px;
  }
`;

export const antFullcalendarMonth = css`
  text-align: center;
  transition: all 0.3s;
`;

export const antFullcalendarMonthPanelCurrentCell = css`
  & .${antFullcalendarValue} {
    box-shadow: 0 0 0 1px #1890ff inset;
  }
`;

export const antFullcalendarMonthPanelSelectedCell = css`
  & .${antFullcalendarValue} {
    color: #fff;
    background: #1890ff;
  }
`;

export const antFullcalendarSelectedDay = css`
  & .${antFullcalendarValue} {
    color: #fff;
    background: #1890ff;
  }
`;

export const antFullcalendarLastMonthCell = css`
  & .${antFullcalendarValue} {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antFullcalendarNextMonthBtnDay = css`
  & .${antFullcalendarValue} {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antFullcalendarFullscreen = css`
  border-top: 0;

  & .ant-fullcalendar-table {
    table-layout: fixed;
  }

  & .${antFullcalendarHeader} .ant-radio-group {
    margin-left: 16px;
  }

  & .${antFullcalendarHeader} label.ant-radio-button {
    height: 32px;
    line-height: 30px;
  }

  & .${antFullcalendarMonth}, & .${antFullcalendarDate} {
    display: block;
    height: 116px;
    margin: 0 4px;
    padding: 4px 8px;
    color: rgba(0, 0, 0, 0.65);
    text-align: left;
    border-top: 2px solid #e8e8e8;
    transition: background 0.3s;
  }

  & .${antFullcalendarMonth}:hover, & .${antFullcalendarDate}:hover {
    background: #e6f7ff;
    cursor: pointer;
  }

  & .${antFullcalendarMonth}:active, & .${antFullcalendarDate}:active {
    background: #bae7ff;
  }

  & .${antFullcalendarColumnHeader} {
    padding-right: 12px;
    padding-bottom: 5px;
    text-align: right;
  }

  & .${antFullcalendarValue} {
    width: auto;
    text-align: right;
    background: transparent;
  }

  & .${antFullcalendarToday} .${antFullcalendarValue} {
    color: rgba(0, 0, 0, 0.65);
  }

  &
    .${antFullcalendarMonthPanelCurrentCell}
    .${antFullcalendarMonth},
    &
    .${antFullcalendarToday}
    .${antFullcalendarDate} {
    background: transparent;
    border-top-color: #1890ff;
  }

  &
    .${antFullcalendarMonthPanelCurrentCell}
    .${antFullcalendarValue},
    &
    .${antFullcalendarToday}
    .${antFullcalendarValue} {
    box-shadow: none;
  }

  &
    .${antFullcalendarMonthPanelSelectedCell}
    .${antFullcalendarMonth},
    &
    .${antFullcalendarSelectedDay}
    .${antFullcalendarDate} {
    background: #e6f7ff;
  }

  &
    .${antFullcalendarMonthPanelSelectedCell}
    .${antFullcalendarValue},
    &
    .${antFullcalendarSelectedDay}
    .${antFullcalendarValue} {
    color: #1890ff;
  }

  &
    .${antFullcalendarLastMonthCell}
    .${antFullcalendarDate},
    &
    .${antFullcalendarNextMonthBtnDay}
    .${antFullcalendarDate} {
    color: rgba(0, 0, 0, 0.25);
  }

  & .${antFullcalendarContent} {
    position: static;
    width: auto;
    height: 88px;
    overflow-y: auto;
  }
`;

export const antFullcalendarMonthPanelCell = css`
  & .${antFullcalendarValue} {
    width: 48px;
  }
`;

export const antFullcalendarMonthPanelTable = css`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
`;

export const antFullcalendarWeekNumberHeader = css`
  & .ant-fullcalendar-column-header-inner {
    display: none;
  }
`;

export const antSelect = css`
  &.ant-fullcalendar-year-select {
    min-width: 90px;
  }

  &.ant-fullcalendar-year-select.ant-select-sm {
    min-width: 70px;
  }

  &.ant-fullcalendar-month-select {
    min-width: 80px;
    margin-left: 8px;
  }

  &.ant-fullcalendar-month-select.ant-select-sm {
    min-width: 70px;
  }
`;
