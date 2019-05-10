import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antCalendar = css`
  position: relative;
  width: 280px;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #fff;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  & table {
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    border-collapse: collapse;
  }

  & table,
  & th,
  & td {
    text-align: center;
    border: 0;
  }

  & .ant-calendar-today-btn,
  & .ant-calendar-clear-btn {
    display: inline-block;
    margin: 0 0 0 8px;
    text-align: center;
  }

  & .ant-calendar-today-btn-disabled,
  & .ant-calendar-clear-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }

  & .ant-calendar-today-btn:only-child,
  & .ant-calendar-clear-btn:only-child {
    margin: 0;
  }

  & .ant-calendar-clear-btn {
    position: absolute;
    top: 7px;
    right: 5px;
    display: none;
    width: 20px;
    height: 20px;
    margin: 0;
    overflow: hidden;
    line-height: 20px;
    text-align: center;
    text-indent: -76px;
  }

  & .ant-calendar-clear-btn::after {
    display: inline-block;
    width: 20px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 14px;
    line-height: 1;
    text-indent: 43px;
    transition: color 0.3s ease;
  }

  & .ant-calendar-clear-btn:hover::after {
    color: rgba(0, 0, 0, 0.45);
  }

  & .ant-calendar-ok-btn {
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
    line-height: 22px;
  }

  & .ant-calendar-ok-btn > .anticon {
    line-height: 1;
  }

  & .ant-calendar-ok-btn,
  & .ant-calendar-ok-btn:active,
  & .ant-calendar-ok-btn:focus {
    outline: 0;
  }

  & .ant-calendar-ok-btn:not([disabled]):hover {
    text-decoration: none;
  }

  & .ant-calendar-ok-btn:not([disabled]):active {
    outline: 0;
    box-shadow: none;
  }

  & .ant-calendar-ok-btn.disabled,
  & .ant-calendar-ok-btn[disabled] {
    cursor: not-allowed;
  }

  & .ant-calendar-ok-btn.disabled > *,
  & .ant-calendar-ok-btn[disabled] > * {
    pointer-events: none;
  }

  & .ant-calendar-ok-btn-lg {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }

  & .ant-calendar-ok-btn-sm {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
  }

  & .ant-calendar-ok-btn > a:only-child {
    color: currentColor;
  }

  & .ant-calendar-ok-btn > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  & .ant-calendar-ok-btn:hover,
  & .ant-calendar-ok-btn:focus {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }

  & .ant-calendar-ok-btn:hover > a:only-child,
  & .ant-calendar-ok-btn:focus > a:only-child {
    color: currentColor;
  }

  & .ant-calendar-ok-btn:hover > a:only-child::after,
  & .ant-calendar-ok-btn:focus > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  & .ant-calendar-ok-btn:active,
  & .ant-calendar-ok-btn.active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
  }

  & .ant-calendar-ok-btn:active > a:only-child,
  & .ant-calendar-ok-btn.active > a:only-child {
    color: currentColor;
  }

  & .ant-calendar-ok-btn:active > a:only-child::after,
  & .ant-calendar-ok-btn.active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  & .ant-calendar-ok-btn-disabled,
  & .ant-calendar-ok-btn.disabled,
  & .ant-calendar-ok-btn[disabled],
  & .ant-calendar-ok-btn-disabled:hover,
  & .ant-calendar-ok-btn.disabled:hover,
  & .ant-calendar-ok-btn[disabled]:hover,
  & .ant-calendar-ok-btn-disabled:focus,
  & .ant-calendar-ok-btn.disabled:focus,
  & .ant-calendar-ok-btn[disabled]:focus,
  & .ant-calendar-ok-btn-disabled:active,
  & .ant-calendar-ok-btn.disabled:active,
  & .ant-calendar-ok-btn[disabled]:active,
  & .ant-calendar-ok-btn-disabled.active,
  & .ant-calendar-ok-btn.disabled.active,
  & .ant-calendar-ok-btn[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & .ant-calendar-ok-btn-disabled > a:only-child,
  & .ant-calendar-ok-btn.disabled > a:only-child,
  & .ant-calendar-ok-btn[disabled] > a:only-child,
  & .ant-calendar-ok-btn-disabled:hover > a:only-child,
  & .ant-calendar-ok-btn.disabled:hover > a:only-child,
  & .ant-calendar-ok-btn[disabled]:hover > a:only-child,
  & .ant-calendar-ok-btn-disabled:focus > a:only-child,
  & .ant-calendar-ok-btn.disabled:focus > a:only-child,
  & .ant-calendar-ok-btn[disabled]:focus > a:only-child,
  & .ant-calendar-ok-btn-disabled:active > a:only-child,
  & .ant-calendar-ok-btn.disabled:active > a:only-child,
  & .ant-calendar-ok-btn[disabled]:active > a:only-child,
  & .ant-calendar-ok-btn-disabled.active > a:only-child,
  & .ant-calendar-ok-btn.disabled.active > a:only-child,
  & .ant-calendar-ok-btn[disabled].active > a:only-child {
    color: currentColor;
  }

  & .ant-calendar-ok-btn-disabled > a:only-child::after,
  & .ant-calendar-ok-btn.disabled > a:only-child::after,
  & .ant-calendar-ok-btn[disabled] > a:only-child::after,
  & .ant-calendar-ok-btn-disabled:hover > a:only-child::after,
  & .ant-calendar-ok-btn.disabled:hover > a:only-child::after,
  & .ant-calendar-ok-btn[disabled]:hover > a:only-child::after,
  & .ant-calendar-ok-btn-disabled:focus > a:only-child::after,
  & .ant-calendar-ok-btn.disabled:focus > a:only-child::after,
  & .ant-calendar-ok-btn[disabled]:focus > a:only-child::after,
  & .ant-calendar-ok-btn-disabled:active > a:only-child::after,
  & .ant-calendar-ok-btn.disabled:active > a:only-child::after,
  & .ant-calendar-ok-btn[disabled]:active > a:only-child::after,
  & .ant-calendar-ok-btn-disabled.active > a:only-child::after,
  & .ant-calendar-ok-btn.disabled.active > a:only-child::after,
  & .ant-calendar-ok-btn[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }

  & .ant-calendar-ok-btn-disabled,
  & .ant-calendar-ok-btn.disabled,
  & .ant-calendar-ok-btn[disabled],
  & .ant-calendar-ok-btn-disabled:hover,
  & .ant-calendar-ok-btn.disabled:hover,
  & .ant-calendar-ok-btn[disabled]:hover,
  & .ant-calendar-ok-btn-disabled:focus,
  & .ant-calendar-ok-btn.disabled:focus,
  & .ant-calendar-ok-btn[disabled]:focus,
  & .ant-calendar-ok-btn-disabled:active,
  & .ant-calendar-ok-btn.disabled:active,
  & .ant-calendar-ok-btn[disabled]:active,
  & .ant-calendar-ok-btn-disabled.active,
  & .ant-calendar-ok-btn.disabled.active,
  & .ant-calendar-ok-btn[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  & .ant-calendar-ok-btn-disabled > a:only-child,
  & .ant-calendar-ok-btn.disabled > a:only-child,
  & .ant-calendar-ok-btn[disabled] > a:only-child,
  & .ant-calendar-ok-btn-disabled:hover > a:only-child,
  & .ant-calendar-ok-btn.disabled:hover > a:only-child,
  & .ant-calendar-ok-btn[disabled]:hover > a:only-child,
  & .ant-calendar-ok-btn-disabled:focus > a:only-child,
  & .ant-calendar-ok-btn.disabled:focus > a:only-child,
  & .ant-calendar-ok-btn[disabled]:focus > a:only-child,
  & .ant-calendar-ok-btn-disabled:active > a:only-child,
  & .ant-calendar-ok-btn.disabled:active > a:only-child,
  & .ant-calendar-ok-btn[disabled]:active > a:only-child,
  & .ant-calendar-ok-btn-disabled.active > a:only-child,
  & .ant-calendar-ok-btn.disabled.active > a:only-child,
  & .ant-calendar-ok-btn[disabled].active > a:only-child {
    color: currentColor;
  }

  & .ant-calendar-ok-btn-disabled > a:only-child::after,
  & .ant-calendar-ok-btn.disabled > a:only-child::after,
  & .ant-calendar-ok-btn[disabled] > a:only-child::after,
  & .ant-calendar-ok-btn-disabled:hover > a:only-child::after,
  & .ant-calendar-ok-btn.disabled:hover > a:only-child::after,
  & .ant-calendar-ok-btn[disabled]:hover > a:only-child::after,
  & .ant-calendar-ok-btn-disabled:focus > a:only-child::after,
  & .ant-calendar-ok-btn.disabled:focus > a:only-child::after,
  & .ant-calendar-ok-btn[disabled]:focus > a:only-child::after,
  & .ant-calendar-ok-btn-disabled:active > a:only-child::after,
  & .ant-calendar-ok-btn.disabled:active > a:only-child::after,
  & .ant-calendar-ok-btn[disabled]:active > a:only-child::after,
  & .ant-calendar-ok-btn-disabled.active > a:only-child::after,
  & .ant-calendar-ok-btn.disabled.active > a:only-child::after,
  & .ant-calendar-ok-btn[disabled].active > a:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: '';
  }
`;

export const antCalendarBody = css`
  padding: 8px 12px;
`;

export const antCalendarCalendarTable = css`
  margin-bottom: 0;
  border-spacing: 0;
`;

export const antCalendarCell = css`
  height: 30px;
  padding: 3px 0;
`;

export const antCalendarColumnHeader = css`
  width: 33px;
  padding: 6px 0;
  line-height: 18px;
  text-align: center;

  & .ant-calendar-column-header-inner {
    display: block;
    font-weight: normal;
  }
`;

export const antCalendarDate = css`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  line-height: 22px;
  text-align: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  transition: background 0.3s ease;

  &:hover {
    background: #e6f7ff;
    cursor: pointer;
  }

  &:active {
    color: #fff;
    background: #40a9ff;
  }
`;

export const antCalendarDatePanel = css`
  position: relative;
  outline: none;
`;

export const antCalendarDecadePanel = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  outline: none;
`;

export const antCalendarDecadePanelBody = css`
  flex: 1;
`;

export const antCalendarDecadePanelCell = css`
  white-space: nowrap;
  text-align: center;
`;

export const antCalendarDecadePanelDecade = css`
  display: inline-block;
  height: 24px;
  margin: 0 auto;
  padding: 0 6px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 24px;
  text-align: center;
  background: transparent;
  border-radius: 2px;
  transition: background 0.3s ease;

  &:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
`;

export const antCalendarFooterExtra = css`
  text-align: left;
`;

export const antCalendarDecadePanelFooter = css`
  border-top: 1px solid #e8e8e8;

  & .${antCalendarFooterExtra} {
    padding: 0 12px;
  }
`;

export const antCalendarDecadePanelHeader = css`
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  user-select: none;

  & a:hover {
    color: #40a9ff;
  }

  & .ant-calendar-decade-panel-century-select,
  & .ant-calendar-decade-panel-decade-select,
  & .ant-calendar-decade-panel-year-select,
  & .ant-calendar-decade-panel-month-select {
    display: inline-block;
    padding: 0 2px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    line-height: 40px;
  }

  & .ant-calendar-decade-panel-century-select-arrow,
  & .ant-calendar-decade-panel-decade-select-arrow,
  & .ant-calendar-decade-panel-year-select-arrow,
  & .ant-calendar-decade-panel-month-select-arrow {
    display: none;
  }

  & .ant-calendar-decade-panel-prev-century-btn,
  & .ant-calendar-decade-panel-next-century-btn,
  & .ant-calendar-decade-panel-prev-decade-btn,
  & .ant-calendar-decade-panel-next-decade-btn,
  & .ant-calendar-decade-panel-prev-month-btn,
  & .ant-calendar-decade-panel-next-month-btn,
  & .ant-calendar-decade-panel-prev-year-btn,
  & .ant-calendar-decade-panel-next-year-btn {
    position: absolute;
    top: 0;
    display: inline-block;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;
    line-height: 40px;
  }

  & .ant-calendar-decade-panel-prev-century-btn,
  & .ant-calendar-decade-panel-prev-decade-btn,
  & .ant-calendar-decade-panel-prev-year-btn {
    left: 7px;
  }

  & .ant-calendar-decade-panel-prev-century-btn::after,
  & .ant-calendar-decade-panel-prev-decade-btn::after,
  & .ant-calendar-decade-panel-prev-year-btn::after {
    content: '«';
  }

  & .ant-calendar-decade-panel-next-century-btn,
  & .ant-calendar-decade-panel-next-decade-btn,
  & .ant-calendar-decade-panel-next-year-btn {
    right: 7px;
  }

  & .ant-calendar-decade-panel-next-century-btn::after,
  & .ant-calendar-decade-panel-next-decade-btn::after,
  & .ant-calendar-decade-panel-next-year-btn::after {
    content: '»';
  }

  & .ant-calendar-decade-panel-prev-month-btn {
    left: 29px;
  }

  & .ant-calendar-decade-panel-prev-month-btn::after {
    content: '‹';
  }

  & .ant-calendar-decade-panel-next-month-btn {
    right: 29px;
  }

  & .ant-calendar-decade-panel-next-month-btn::after {
    content: '›';
  }
`;

export const antCalendarDecadePanelHidden = css`
  display: none;
`;

export const antCalendarDecadePanelLastCenturyCell = css`
  & .${antCalendarDecadePanelDecade} {
    color: rgba(0, 0, 0, 0.25);
    user-select: none;
  }
`;

export const antCalendarDecadePanelNextCenturyCell = css`
  & .${antCalendarDecadePanelDecade} {
    color: rgba(0, 0, 0, 0.25);
    user-select: none;
  }
`;

export const antCalendarDecadePanelSelectedCell = css`
  & .${antCalendarDecadePanelDecade} {
    color: #fff;
    background: #1890ff;
  }

  & .${antCalendarDecadePanelDecade}:hover {
    color: #fff;
    background: #1890ff;
  }
`;

export const antCalendarDecadePanelTable = css`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  border-collapse: separate;
`;

export const antCalendarSelectedDay = css`
  & .${antCalendarDate} {
    background: #d1e9ff;
  }
`;

export const antCalendarToday = css`
  & .${antCalendarDate} {
    color: #1890ff;
    font-weight: bold;
    border-color: #1890ff;
  }
`;

export const antCalendarDisabledCell = css`
  & .${antCalendarDate} {
    position: relative;
    width: auto;
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border: 1px solid transparent;
    border-radius: 0;
    cursor: not-allowed;
  }

  & .${antCalendarDate}:hover {
    background: #f5f5f5;
  }

  &.${antCalendarSelectedDay} .${antCalendarDate}::before {
    position: absolute;
    top: -1px;
    left: 5px;
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    content: '';
  }

  &.${antCalendarToday} .${antCalendarDate} {
    position: relative;
    padding-right: 5px;
    padding-left: 5px;
  }

  &.${antCalendarToday} .${antCalendarDate}::before {
    position: absolute;
    top: -1px;
    left: 5px;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    content: ' ';
  }
`;

export const antCalendarDisabledCellFirstOfRow = css`
  & .${antCalendarDate} {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const antCalendarDisabledCellLastOfRow = css`
  & .${antCalendarDate} {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const antCalendarFooter = css`
  padding: 0 12px;
  line-height: 38px;
  border-top: 1px solid #e8e8e8;

  &:empty {
    border-top: 0;
  }
`;

export const antCalendarFooterBtn = css`
  display: block;
  text-align: center;
`;

export const antCalendarHeader = css`
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  user-select: none;

  & a:hover {
    color: #40a9ff;
  }

  & .ant-calendar-century-select,
  & .ant-calendar-decade-select,
  & .ant-calendar-year-select,
  & .ant-calendar-month-select {
    display: inline-block;
    padding: 0 2px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    line-height: 40px;
  }

  & .ant-calendar-century-select-arrow,
  & .ant-calendar-decade-select-arrow,
  & .ant-calendar-year-select-arrow,
  & .ant-calendar-month-select-arrow {
    display: none;
  }

  & .ant-calendar-prev-century-btn,
  & .ant-calendar-next-century-btn,
  & .ant-calendar-prev-decade-btn,
  & .ant-calendar-next-decade-btn,
  & .ant-calendar-prev-month-btn,
  & .ant-calendar-next-month-btn,
  & .ant-calendar-prev-year-btn,
  & .ant-calendar-next-year-btn {
    position: absolute;
    top: 0;
    display: inline-block;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;
    line-height: 40px;
  }

  & .ant-calendar-prev-century-btn,
  & .ant-calendar-prev-decade-btn,
  & .ant-calendar-prev-year-btn {
    left: 7px;
  }

  & .ant-calendar-prev-century-btn::after,
  & .ant-calendar-prev-decade-btn::after,
  & .ant-calendar-prev-year-btn::after {
    content: '«';
  }

  & .ant-calendar-next-century-btn,
  & .ant-calendar-next-decade-btn,
  & .ant-calendar-next-year-btn {
    right: 7px;
  }

  & .ant-calendar-next-century-btn::after,
  & .ant-calendar-next-decade-btn::after,
  & .ant-calendar-next-year-btn::after {
    content: '»';
  }

  & .ant-calendar-prev-month-btn {
    left: 29px;
  }

  & .ant-calendar-prev-month-btn::after {
    content: '‹';
  }

  & .ant-calendar-next-month-btn {
    right: 29px;
  }

  & .ant-calendar-next-month-btn::after {
    content: '›';
  }
`;

export const antCalendarInput = css`
  width: 100%;
  height: 22px;
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
  border: 0;
  outline: 0;
  cursor: auto;

  &::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #bfbfbf;
  }

  &::-webkit-input-placeholder {
    color: #bfbfbf;
  }
`;

export const antCalendarInputWrap = css`
  height: 34px;
  padding: 6px 10px;
  border-bottom: 1px solid #e8e8e8;
`;

export const antCalendarLastMonthCell = css`
  & .${antCalendarDate} {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antCalendarMonthPanel = css`
  position: absolute;
  top: 1px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  border-radius: 4px;
  outline: none;

  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const antCalendarYearPanel = css`
  position: absolute;
  top: 1px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  border-radius: 4px;
  outline: none;

  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const antCalendarMonth = css`
  & .ant-calendar-month-header-wrap {
    position: relative;
    height: 288px;
  }

  & .${antCalendarMonthPanel}, & .${antCalendarYearPanel} {
    top: 0;
    height: 100%;
  }
`;

export const antCalendarMonthPanelBody = css`
  flex: 1;
`;

export const antCalendarMonthPanelCell = css`
  text-align: center;
`;

export const antCalendarMonthPanelMonth = css`
  display: inline-block;
  height: 24px;
  margin: 0 auto;
  padding: 0 8px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 24px;
  text-align: center;
  background: transparent;
  border-radius: 2px;
  transition: background 0.3s ease;

  &:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
`;

export const antCalendarMonthPanelCellDisabled = css`
  & .${antCalendarMonthPanelMonth}, & .${antCalendarMonthPanelMonth}:hover {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const antCalendarMonthPanelFooter = css`
  border-top: 1px solid #e8e8e8;

  & .${antCalendarFooterExtra} {
    padding: 0 12px;
  }
`;

export const antCalendarMonthPanelHeader = css`
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  user-select: none;

  & a:hover {
    color: #40a9ff;
  }

  & .ant-calendar-month-panel-century-select,
  & .ant-calendar-month-panel-decade-select,
  & .ant-calendar-month-panel-year-select,
  & .ant-calendar-month-panel-month-select {
    display: inline-block;
    padding: 0 2px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    line-height: 40px;
  }

  & .ant-calendar-month-panel-century-select-arrow,
  & .ant-calendar-month-panel-decade-select-arrow,
  & .ant-calendar-month-panel-year-select-arrow,
  & .ant-calendar-month-panel-month-select-arrow {
    display: none;
  }

  & .ant-calendar-month-panel-prev-century-btn,
  & .ant-calendar-month-panel-next-century-btn,
  & .ant-calendar-month-panel-prev-decade-btn,
  & .ant-calendar-month-panel-next-decade-btn,
  & .ant-calendar-month-panel-prev-month-btn,
  & .ant-calendar-month-panel-next-month-btn,
  & .ant-calendar-month-panel-prev-year-btn,
  & .ant-calendar-month-panel-next-year-btn {
    position: absolute;
    top: 0;
    display: inline-block;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;
    line-height: 40px;
  }

  & .ant-calendar-month-panel-prev-century-btn,
  & .ant-calendar-month-panel-prev-decade-btn,
  & .ant-calendar-month-panel-prev-year-btn {
    left: 7px;
  }

  & .ant-calendar-month-panel-prev-century-btn::after,
  & .ant-calendar-month-panel-prev-decade-btn::after,
  & .ant-calendar-month-panel-prev-year-btn::after {
    content: '«';
  }

  & .ant-calendar-month-panel-next-century-btn,
  & .ant-calendar-month-panel-next-decade-btn,
  & .ant-calendar-month-panel-next-year-btn {
    right: 7px;
  }

  & .ant-calendar-month-panel-next-century-btn::after,
  & .ant-calendar-month-panel-next-decade-btn::after,
  & .ant-calendar-month-panel-next-year-btn::after {
    content: '»';
  }

  & .ant-calendar-month-panel-prev-month-btn {
    left: 29px;
  }

  & .ant-calendar-month-panel-prev-month-btn::after {
    content: '‹';
  }

  & .ant-calendar-month-panel-next-month-btn {
    right: 29px;
  }

  & .ant-calendar-month-panel-next-month-btn::after {
    content: '›';
  }
`;

export const antCalendarMonthPanelHidden = css`
  display: none;
`;

export const antCalendarMonthPanelSelectedCell = css`
  & .${antCalendarMonthPanelMonth} {
    color: #fff;
    background: #1890ff;
  }

  & .${antCalendarMonthPanelMonth}:hover {
    color: #fff;
    background: #1890ff;
  }
`;

export const antCalendarMonthPanelTable = css`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  border-collapse: separate;
`;

export const antCalendarNextMonthBtnDay = css`
  & .${antCalendarDate} {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antCalendarPickerInput = css`
  outline: none;

  &.ant-input-sm {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const antCalendarPickerClear = css`
  position: absolute;
  top: 50%;
  right: 12px;
  z-index: 1;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  font-size: 12px;
  line-height: 14px;
  transition: all 0.3s;
  user-select: none;

  z-index: 2;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  background: #fff;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;

  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const antCalendarPicker = css`
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
  outline: none;
  cursor: text;
  transition: opacity 0.3s;

  &:hover .${antCalendarPickerInput}:not(.ant-input-disabled) {
    border-color: #1890ff;
  }

  &:focus .${antCalendarPickerInput}:not(.ant-input-disabled) {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &:hover .${antCalendarPickerClear} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const antCalendarPickerContainer = css`
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
  z-index: 1050;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';

  &.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-topLeft,
  &.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-topRight,
  &.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-topLeft,
  &.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-topRight {
    animation-name: antSlideDownIn;
  }

  &.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-bottomLeft,
  &.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-bottomRight,
  &.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-bottomLeft,
  &.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-bottomRight {
    animation-name: antSlideUpIn;
  }

  &.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-topLeft,
  &.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-topRight {
    animation-name: antSlideDownOut;
  }

  &.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-bottomLeft,
  &.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-bottomRight {
    animation-name: antSlideUpOut;
  }
`;

export const antCalendarPickerIcon = css`
  position: absolute;
  top: 50%;
  right: 12px;
  z-index: 1;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  font-size: 12px;
  line-height: 14px;
  transition: all 0.3s;
  user-select: none;

  display: inline-block;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  line-height: 1;
`;

export const antCalendarPickerSmall = css`
  & .${antCalendarPickerClear}, & .${antCalendarPickerIcon} {
    right: 8px;
  }
`;

export const antCalendarTime = css`
  & .ant-calendar-day-select {
    display: inline-block;
    padding: 0 2px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    line-height: 34px;
  }

  & .${antCalendarFooter} {
    position: relative;
    height: auto;
  }

  & .${antCalendarFooterBtn} {
    text-align: right;
  }

  & .${antCalendarFooter} .ant-calendar-today-btn {
    float: left;
    margin: 0;
  }

  & .${antCalendarFooter} .ant-calendar-time-picker-btn {
    display: inline-block;
    margin-right: 8px;
  }

  & .${antCalendarFooter} .ant-calendar-time-picker-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const antCalendarRangeMiddle = css`
  position: absolute;
  left: 50%;
  z-index: 1;
  height: 34px;
  margin: 1px 0 0 0;
  padding: 0 200px 0 0;
  color: rgba(0, 0, 0, 0.45);
  line-height: 34px;
  text-align: center;
  transform: translateX(-50%);
  pointer-events: none;
`;

export const antCalendarRangeRight = css`
  float: right;

  & .${antCalendarTimePickerInner} {
    border-left: 1px solid #e8e8e8;
  }

  & .ant-calendar-date-input-wrap {
    margin-left: -90px;
  }
`;

export const antCalendarWeekNumber = css`
  width: 286px;

  & .${antCalendarBody} tr {
    cursor: pointer;
    transition: all 0.3s;
  }

  & .${antCalendarBody} tr:hover {
    background: #e6f7ff;
  }

  & .${antCalendarBody} tr.ant-calendar-active-week {
    font-weight: bold;
    background: #bae7ff;
  }

  &
    .${antCalendarBody}
    tr
    .${antCalendarSelectedDay}
    .${antCalendarDate},
    &
    .${antCalendarBody}
    tr
    .${antCalendarSelectedDay}:hover
    .${antCalendarDate} {
    color: rgba(0, 0, 0, 0.65);
    background: transparent;
  }
`;

export const antCalendarRangePart = css`
  position: relative;
  width: 50%;
`;

export const antCalendarYearPanelTable = css`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  border-collapse: separate;
`;

export const antCalendarYearPanelHeader = css`
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  user-select: none;

  & a:hover {
    color: #40a9ff;
  }

  & .ant-calendar-year-panel-century-select,
  & .ant-calendar-year-panel-decade-select,
  & .ant-calendar-year-panel-year-select,
  & .ant-calendar-year-panel-month-select {
    display: inline-block;
    padding: 0 2px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    line-height: 40px;
  }

  & .ant-calendar-year-panel-century-select-arrow,
  & .ant-calendar-year-panel-decade-select-arrow,
  & .ant-calendar-year-panel-year-select-arrow,
  & .ant-calendar-year-panel-month-select-arrow {
    display: none;
  }

  & .ant-calendar-year-panel-prev-century-btn,
  & .ant-calendar-year-panel-next-century-btn,
  & .ant-calendar-year-panel-prev-decade-btn,
  & .ant-calendar-year-panel-next-decade-btn,
  & .ant-calendar-year-panel-prev-month-btn,
  & .ant-calendar-year-panel-next-month-btn,
  & .ant-calendar-year-panel-prev-year-btn,
  & .ant-calendar-year-panel-next-year-btn {
    position: absolute;
    top: 0;
    display: inline-block;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;
    line-height: 40px;
  }

  & .ant-calendar-year-panel-prev-century-btn,
  & .ant-calendar-year-panel-prev-decade-btn,
  & .ant-calendar-year-panel-prev-year-btn {
    left: 7px;
  }

  & .ant-calendar-year-panel-prev-century-btn::after,
  & .ant-calendar-year-panel-prev-decade-btn::after,
  & .ant-calendar-year-panel-prev-year-btn::after {
    content: '«';
  }

  & .ant-calendar-year-panel-next-century-btn,
  & .ant-calendar-year-panel-next-decade-btn,
  & .ant-calendar-year-panel-next-year-btn {
    right: 7px;
  }

  & .ant-calendar-year-panel-next-century-btn::after,
  & .ant-calendar-year-panel-next-decade-btn::after,
  & .ant-calendar-year-panel-next-year-btn::after {
    content: '»';
  }

  & .ant-calendar-year-panel-prev-month-btn {
    left: 29px;
  }

  & .ant-calendar-year-panel-prev-month-btn::after {
    content: '‹';
  }

  & .ant-calendar-year-panel-next-month-btn {
    right: 29px;
  }

  & .ant-calendar-year-panel-next-month-btn::after {
    content: '›';
  }
`;

export const antCalendarYearPanelBody = css`
  flex: 1;
`;

export const antCalendarTimePicker = css`
  position: absolute;
  top: 40px;
  width: 100%;
  background-color: #fff;
`;

export const antCalendarTimePickerPanel = css`
  position: absolute;
  z-index: 1050;
  width: 100%;
`;

export const antCalendarTimePickerInner = css`
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  outline: none;
`;

export const antCalendarTimePickerCombobox = css`
  width: 100%;
`;

export const antCalendarTimePickerSelect = css`
  position: relative;
  float: left;
  box-sizing: border-box;
  height: 226px;
  overflow: hidden;
  font-size: 14px;
  border-right: 1px solid #e8e8e8;

  &:hover {
    overflow-y: auto;
  }

  &:first-child {
    margin-left: 0;
    border-left: 0;
  }

  &:last-child {
    border-right: 0;
  }

  & ul {
    box-sizing: border-box;
    width: 100%;
    max-height: 206px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    box-sizing: content-box;
    width: 100%;
    height: 24px;
    margin: 0;
    padding-left: 32px;
    line-height: 24px;
    list-style: none;
    cursor: pointer;
    transition: background 0.3s ease;
    user-select: none;
  }

  & li:last-child::after {
    display: block;
    height: 202px;
    content: '';
  }

  & li:hover {
    background: #e6f7ff;
  }
`;

export const antCalendarRange = css`
  width: 552px;
  overflow: hidden;

  & .${antCalendarDatePanel}::after {
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
    content: '.';
  }

  &.${antCalendarTime} .${antCalendarRangeMiddle} {
    padding: 0 10px 0 0;
    transform: translateX(-50%);
  }

  &.${antCalendarTime} .${antCalendarRangeRight} .ant-calendar-date-input-wrap {
    margin-left: 0;
  }

  & .${antCalendarInputWrap} {
    position: relative;
    height: 34px;
  }

  & .${antCalendarInput}, & .ant-calendar-time-picker-input {
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
    height: 24px;
    padding-right: 0;
    padding-left: 0;
    border: 0;
    box-shadow: none;
  }

  & .${antCalendarInput}::-moz-placeholder, & .ant-calendar-time-picker-input::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  &
    .${antCalendarInput}:-ms-input-placeholder,
    &
    .ant-calendar-time-picker-input:-ms-input-placeholder {
    color: #bfbfbf;
  }

  &
    .${antCalendarInput}::-webkit-input-placeholder,
    &
    .ant-calendar-time-picker-input::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  & .${antCalendarInput}:hover, & .ant-calendar-time-picker-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  & .${antCalendarInput}:focus, & .ant-calendar-time-picker-input:focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & .ant-calendar-input-disabled,
  & .ant-calendar-time-picker-input-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  & .ant-calendar-input-disabled:hover,
  & .ant-calendar-time-picker-input-disabled:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  & .${antCalendarInput}[disabled], & .ant-calendar-time-picker-input[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  & .${antCalendarInput}[disabled]:hover, & .ant-calendar-time-picker-input[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  textarea& .${antCalendarInput}, textarea& .ant-calendar-time-picker-input {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }

  & .ant-calendar-input-lg,
  & .ant-calendar-time-picker-input-lg {
    height: 40px;
    padding: 6px 11px;
    font-size: 16px;
  }

  & .ant-calendar-input-sm,
  & .ant-calendar-time-picker-input-sm {
    height: 24px;
    padding: 1px 7px;
  }

  & .${antCalendarInput}:focus, & .ant-calendar-time-picker-input:focus {
    box-shadow: none;
  }

  & .ant-calendar-time-picker-icon {
    display: none;
  }

  &.${antCalendarWeekNumber} {
    width: 574px;
  }

  &.${antCalendarWeekNumber} .${antCalendarRangePart} {
    width: 286px;
  }

  & .${antCalendarYearPanel}, & .${antCalendarMonthPanel}, & .${antCalendarDecadePanel} {
    top: 34px;
  }

  & .${antCalendarMonthPanel} .${antCalendarYearPanel} {
    top: 0;
  }

  &
    .${antCalendarDecadePanelTable},
    &
    .${antCalendarYearPanelTable},
    &
    .${antCalendarMonthPanelTable} {
    height: 208px;
  }

  & .ant-calendar-in-range-cell {
    position: relative;
    border-radius: 0;
  }

  & .ant-calendar-in-range-cell > div {
    position: relative;
    z-index: 1;
  }

  & .ant-calendar-in-range-cell::before {
    position: absolute;
    top: 4px;
    right: 0;
    bottom: 4px;
    left: 0;
    display: block;
    background: #e6f7ff;
    border: 0;
    border-radius: 0;
    content: '';
  }

  & .${antCalendarFooterExtra} {
    float: left;
  }

  & .${antCalendarHeader}, & .${antCalendarMonthPanelHeader}, & .${antCalendarYearPanelHeader} {
    border-bottom: 0;
  }

  & .${antCalendarBody}, & .${antCalendarMonthPanelBody}, & .${antCalendarYearPanelBody} {
    border-top: 1px solid #e8e8e8;
  }

  &.${antCalendarTime} .${antCalendarTimePicker} {
    top: 68px;
    z-index: 2;
    width: 100%;
    height: 207px;
  }

  &.${antCalendarTime} .${antCalendarTimePickerPanel} {
    height: 267px;
    margin-top: -34px;
  }

  &.${antCalendarTime} .${antCalendarTimePickerInner} {
    height: 100%;
    padding-top: 40px;
    background: none;
  }

  &.${antCalendarTime} .${antCalendarTimePickerCombobox} {
    display: inline-block;
    height: 100%;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
  }

  &.${antCalendarTime} .${antCalendarTimePickerSelect} {
    height: 100%;
  }

  &.${antCalendarTime} .${antCalendarTimePickerSelect} ul {
    max-height: 100%;
  }

  &.${antCalendarTime} .${antCalendarFooter} .ant-calendar-time-picker-btn {
    margin-right: 8px;
  }

  &.${antCalendarTime} .ant-calendar-today-btn {
    height: 22px;
    margin: 8px 12px;
    line-height: 22px;
  }

  &.ant-calendar-show-time-picker .${antCalendarBody} {
    border-top-color: transparent;
  }
`;

export const antCalendarRangeLeft = css`
  float: left;

  & .${antCalendarTimePickerInner} {
    border-right: 1px solid #e8e8e8;
  }
`;

export const antCalendarRangePickerInput = css`
  width: 44%;
  height: 99%;
  text-align: center;
  background-color: transparent;
  border: 0;
  outline: 0;

  &::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #bfbfbf;
  }

  &::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

export const antCalendarRangePickerSeparator = css`
  display: inline-block;
  min-width: 10px;
  height: 100%;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  text-align: center;
  vertical-align: top;
  pointer-events: none;
`;

export const antCalendarRangeQuickSelector = css`
  div& {
    text-align: left;
  }

  div& > a {
    margin-right: 8px;
  }
`;

export const antCalendarRangeWithRanges = css`
  &.${antCalendarTime} .${antCalendarTimePicker} {
    height: 233px;
  }
`;

export const antCalendarSelectedDate = css`
  & .${antCalendarDate} {
    color: #fff;
    background: #1890ff;
    border: 1px solid transparent;
  }

  & .${antCalendarDate}:hover {
    background: #1890ff;
  }
`;

export const antCalendarSelectedEndDate = css`
  & .${antCalendarDate} {
    color: #fff;
    background: #1890ff;
    border: 1px solid transparent;
  }

  & .${antCalendarDate}:hover {
    background: #1890ff;
  }
`;

export const antCalendarSelectedStartDate = css`
  & .${antCalendarDate} {
    color: #fff;
    background: #1890ff;
    border: 1px solid transparent;
  }

  & .${antCalendarDate}:hover {
    background: #1890ff;
  }
`;

export const antCalendarTimePickerColumn1 = css`
  &,
  & .${antCalendarTimePickerSelect} {
    width: 100%;
  }
`;

export const antCalendarTimePickerColumn2 = css`
  & .${antCalendarTimePickerSelect} {
    width: 50%;
  }
`;

export const antCalendarTimePickerColumn3 = css`
  & .${antCalendarTimePickerSelect} {
    width: 33.33%;
  }
`;

export const antCalendarTimePickerColumn4 = css`
  & .${antCalendarTimePickerSelect} {
    width: 25%;
  }
`;

export const antCalendarTimePickerInputWrap = css`
  display: none;
`;

export const antCalendarTimePickerSelectOptionDisabled = css`
  li& {
    color: rgba(0, 0, 0, 0.25);
  }

  li&:hover {
    background: transparent;
    cursor: not-allowed;
  }
`;

export const antCalendarTimePickerSelectOptionSelected = css`
  li& {
    font-weight: bold;
    background: #f5f5f5;
  }
`;

export const antCalendarWeekNumberCell = css`
  text-align: center;

  opacity: 0.5;
`;

export const antCalendarWeekNumberHeader = css`
  & .ant-calendar-column-header-inner {
    display: none;
  }
`;

export const antCalendarYearPanelCell = css`
  text-align: center;
`;

export const antCalendarYearPanelFooter = css`
  border-top: 1px solid #e8e8e8;

  & .${antCalendarFooterExtra} {
    padding: 0 12px;
  }
`;

export const antCalendarYearPanelHidden = css`
  display: none;
`;

export const antCalendarYearPanelYear = css`
  display: inline-block;
  height: 24px;
  margin: 0 auto;
  padding: 0 8px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 24px;
  text-align: center;
  background: transparent;
  border-radius: 2px;
  transition: background 0.3s ease;

  &:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
`;

export const antCalendarYearPanelLastDecadeCell = css`
  & .${antCalendarYearPanelYear} {
    color: rgba(0, 0, 0, 0.25);
    user-select: none;
  }
`;

export const antCalendarYearPanelNextDecadeCell = css`
  & .${antCalendarYearPanelYear} {
    color: rgba(0, 0, 0, 0.25);
    user-select: none;
  }
`;

export const antCalendarYearPanelSelectedCell = css`
  & .${antCalendarYearPanelYear} {
    color: #fff;
    background: #1890ff;
  }

  & .${antCalendarYearPanelYear}:hover {
    color: #fff;
    background: #1890ff;
  }
`;
