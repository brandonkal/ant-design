import { css } from '@emotion/core';

export const global = css``;

export const antTableBordered = css`
  & .${antTableTitle} + .ant-table-content,
  & .${antTableTitle} + .ant-table-content table,
  & .${antTableTitle} + .ant-table-content .${antTableThead} > tr:first-child > th {
    border-radius: 0;
  }

  & .${antTableHeader} > table,
  & .${antTableBody} > table,
  & .${antTableFixedLeft} table,
  & .${antTableFixedRight} table {
    border: 1px solid #e8e8e8;
    border-right: 0;
    border-bottom: 0;
  }

  &.${antTableEmpty} .${antTablePlaceholder} {
    border-right: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
  }

  &.${antTableFixedHeader} .${antTableHeader} > table {
    border-bottom: 0;
  }

  &.${antTableFixedHeader} .${antTableBody} > table {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &.${antTableFixedHeader} .${antTableHeader} + .${antTableBody} > table,
  &.${antTableFixedHeader} .${antTableBodyInner} > table {
    border-top: 0;
  }

  & .${antTableThead} > tr:not(:last-child) > th {
    border-bottom: 1px solid #e8e8e8;
  }

  & .${antTableThead} > tr > th,
  & .${antTableTbody} > tr > td {
    border-right: 1px solid #e8e8e8;
  }
`;

export const antTableFooter = css`
  position: relative;
  padding: 16px 16px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;

  &::before {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fafafa;
    content: '';
  }
`;

export const antTableTitle = css`
  position: relative;
  top: 1px;
  padding: 16px 0;
  border-radius: 4px 4px 0 0;

  & + .ant-table-content {
    position: relative;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
  }
`;

export const antTableRowExpandIcon = css`
  display: inline-block;
  width: 17px;
  height: 17px;
  line-height: 14px;
  text-align: center;
  background: #fff;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  user-select: none;
`;

export const antTableFixedLeft = css`
  position: absolute;
  top: 0;
  z-index: auto;
  overflow: hidden;
  border-radius: 0;
  transition: box-shadow 0.3s ease;

  & table {
    width: auto;
    background: #fff;
  }

  left: 0;
  box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.15);

  & .${antTableHeader} {
    overflow-y: hidden;
  }

  & .${antTableBodyInner} {
    margin-right: -20px;
    padding-right: 20px;
  }

  &,
  & table {
    border-radius: 4px 0 0 0;
  }

  & .${antTableThead} > tr > th:last-child {
    border-top-right-radius: 0;
  }
`;

export const antTableFixedRight = css`
  position: absolute;
  top: 0;
  z-index: auto;
  overflow: hidden;
  border-radius: 0;
  transition: box-shadow 0.3s ease;

  & table {
    width: auto;
    background: #fff;
  }

  right: 0;
  box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.15);

  &,
  & table {
    border-radius: 0 4px 0 0;
  }

  & .${antTableExpandedRow} {
    color: transparent;
    pointer-events: none;
  }

  & .${antTableThead} > tr > th:first-child {
    border-top-left-radius: 0;
  }
`;

export const antTable = css`
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
  clear: both;

  & table {
    width: 100%;
    text-align: left;
    border-radius: 4px 4px 0 0;
    border-collapse: collapse;
  }

  &.${antTableBordered} .${antTableFooter} {
    border: 1px solid #e8e8e8;
  }

  &.${antTableBordered} .${antTableTitle} {
    padding-right: 16px;
    padding-left: 16px;
    border: 1px solid #e8e8e8;
  }

  & .ant-table-row-indent + .${antTableRowExpandIcon} {
    margin-right: 8px;
  }

  &.ant-table-scroll-position-left .${antTableFixedLeft} {
    box-shadow: none;
  }

  &.ant-table-scroll-position-right .${antTableFixedRight} {
    box-shadow: none;
  }

  & colgroup > col.ant-table-selection-col {
    width: 60px;
  }
`;

export const antTableBody = css`
  transition: opacity 0.3s;
`;

export const antTableBodyInner = css`
  height: 100%;
`;

export const antTableThead = css`
  & > tr {
    background: #fafafa;
  }

  & > tr > th {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    text-align: left;
    background: transparent;
    border-bottom: 1px solid #e8e8e8;
    transition: background 0.3s ease;
  }

  & > tr > th[colspan] {
    text-align: center;
  }

  & > tr > th .anticon-filter,
  & > tr > th .ant-table-filter-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 100%;
    color: #bfbfbf;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
  }

  & > tr > th .anticon-filter > svg,
  & > tr > th .ant-table-filter-icon > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -6px;
  }

  & > tr > th .ant-table-filter-selected.anticon-filter {
    color: #1890ff;
  }

  & > tr > th .ant-table-column-sorter {
    display: table-cell;
    vertical-align: middle;
  }

  & > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner {
    height: 1em;
    margin-top: 0.35em;
    margin-left: 0.57142857em;
    color: #bfbfbf;
    line-height: 1em;
    text-align: center;
    transition: all 0.3s;
  }

  & > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-up,
  &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-down {
    display: inline-block;
    font-size: 12px;
    font-size: 11px \\9;
    transform: scale(0.91666667) rotate(0deg);
    display: block;
    height: 1em;
    line-height: 1em;
    transition: all 0.3s;
  }

  :root
    &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-up,
  :root
    &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-down {
    font-size: 12px;
  }

  &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-up.on,
  &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-down.on {
    color: #1890ff;
  }

  & > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner-full {
    margin-top: -0.15em;
  }

  &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner-full
    .ant-table-column-sorter-up,
  &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner-full
    .ant-table-column-sorter-down {
    height: 0.5em;
    line-height: 0.5em;
  }

  &
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner-full
    .ant-table-column-sorter-down {
    margin-top: 0.125em;
  }

  & > tr > th.ant-table-column-has-actions {
    position: relative;
    background-clip: padding-box;
  }

  & > tr > th.ant-table-column-has-actions.ant-table-column-has-filters {
    padding-right: 30px !important;
  }

  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters
    .anticon-filter.ant-table-filter-open,
  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters
    .ant-table-filter-icon.ant-table-filter-open {
    color: rgba(0, 0, 0, 0.45);
    background: #e5e5e5;
  }

  & > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .anticon-filter:hover,
  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .ant-table-filter-icon:hover {
    color: rgba(0, 0, 0, 0.45);
    background: #e5e5e5;
  }

  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .anticon-filter:active,
  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .ant-table-filter-icon:active {
    color: rgba(0, 0, 0, 0.65);
  }

  & > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters {
    cursor: pointer;
  }

  & > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover {
    background: #f2f2f2;
  }

  & > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover .anticon-filter,
  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover
    .ant-table-filter-icon {
    background: #f2f2f2;
  }

  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:active
    .ant-table-column-sorter-up:not(.on),
  &
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:active
    .ant-table-column-sorter-down:not(.on) {
    color: rgba(0, 0, 0, 0.45);
  }

  & > tr > th .ant-table-header-column {
    display: inline-block;
    vertical-align: top;
  }

  & > tr > th .ant-table-header-column .ant-table-column-sorters {
    display: table;
  }

  & > tr > th .ant-table-header-column .ant-table-column-sorters > .ant-table-column-title {
    display: table-cell;
    vertical-align: middle;
  }

  & > tr > th .ant-table-header-column .ant-table-column-sorters > *:not(.ant-table-column-sorter) {
    position: relative;
  }

  & > tr > th .ant-table-header-column .ant-table-column-sorters::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    transition: all 0.3s;
    content: '';
  }

  & > tr > th .ant-table-header-column .ant-table-column-sorters:hover::before {
    background: rgba(0, 0, 0, 0.04);
  }

  & > tr > th.ant-table-column-has-sorters {
    user-select: none;
  }

  & > tr:first-child > th:first-child {
    border-top-left-radius: 4px;
  }

  & > tr:first-child > th:last-child {
    border-top-right-radius: 4px;
  }

  & > tr:not(:last-child) > th[colspan] {
    border-bottom: 0;
  }

  & > tr {
    transition: all 0.3s, height 0s;
  }

  & > tr.ant-table-row-hover:not(.${antTableExpandedRow}) > td,
  & > tr:hover:not(.${antTableExpandedRow}) > td {
    background: #e6f7ff;
  }

  & > tr > th.ant-table-column-sort {
    background: #f5f5f5;
  }

  & > tr > th {
    padding: 16px 16px;
  }

  & > tr > th.ant-table-selection-column-custom .${antTableSelection} {
    margin-right: -15px;
  }

  & > tr > th.ant-table-selection-column {
    text-align: center;
  }

  & > tr > th.ant-table-selection-column .ant-radio-wrapper {
    margin-right: 0;
  }
`;

export const antTableHeader = css`
  overflow: hidden;
  background: #fafafa;

  & table {
    border-radius: 4px 4px 0 0;
  }
`;

export const antTableEmpty = css`
  & .${antTableBody} {
    overflow: auto !important;
  }
`;

export const antTablePlaceholder = css`
  position: relative;
  z-index: 1;
  padding: 16px 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;

  & .anticon {
    margin-right: 4px;
  }
`;

export const antTableFixedHeader = css`
  & > .ant-table-content > .${antTableScroll} > .${antTableBody} {
    position: relative;
    background: #fff;
  }

  & .${antTableBodyInner} {
    overflow: scroll;
  }

  & .${antTableScroll} .${antTableHeader} {
    margin-bottom: -20px;
    padding-bottom: 20px;
    overflow: scroll;
    opacity: 0.9999;
  }

  & .${antTableFixedLeft} .ant-table-body-outer .ant-table-fixed,
  & .${antTableFixedRight} .ant-table-body-outer .ant-table-fixed {
    border-radius: 0;
  }

  & .${antTableFixedLeft} .${antTableBodyInner} {
    padding-right: 0;
  }
`;

export const antTableTbody = css`
  & > tr > td {
    border-bottom: 1px solid #e8e8e8;
    transition: all 0.3s, border 0s;
  }

  & > tr {
    transition: all 0.3s, height 0s;
  }

  & > tr.ant-table-row-hover:not(.${antTableExpandedRow}) > td,
  & > tr:hover:not(.${antTableExpandedRow}) > td {
    background: #e6f7ff;
  }

  & > tr.ant-table-row-selected td {
    color: inherit;
    background: #fafafa;
  }

  & > tr > td.ant-table-column-sort {
    background: rgba(0, 0, 0, 0.01);
  }

  & > tr > td {
    padding: 16px 16px;
  }

  & > tr > td.ant-table-selection-column {
    text-align: center;
  }

  & > tr > td.ant-table-selection-column .ant-radio-wrapper {
    margin-right: 0;
  }
`;

export const antTableExpandIconTh = css`
  width: 50px;
  min-width: 50px;
  text-align: center;
`;

export const antTableWrapper = css`
  zoom: 1;

  &::before,
  &::after {
    display: table;
    content: '';
  }

  &::after {
    clear: both;
  }
`;

export const antTableExpandedRow = css`
  tr&,
  tr&:hover {
    background: #fbfbfb;
  }

  tr& td > .${antTableWrapper} {
    margin: -16px -16px -17px;
  }
`;

export const antTableFilterDropdown = css`
  position: relative;
  min-width: 96px;
  margin-left: -8px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  & .ant-dropdown-menu {
    border: 0;
    border-radius: 4px 4px 0 0;
    box-shadow: none;
  }

  & .ant-dropdown-menu-without-submenu {
    max-height: 400px;
    overflow-x: hidden;
  }

  & .ant-dropdown-menu-item > label + span {
    padding-right: 0;
  }

  & .ant-dropdown-menu-sub {
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &
    .ant-dropdown-menu
    .ant-dropdown-submenu-contain-selected
    .ant-dropdown-menu-submenu-title::after {
    color: #1890ff;
    font-weight: bold;
    text-shadow: 0 0 2px #bae7ff;
  }

  & .ant-dropdown-menu-item {
    overflow: hidden;
  }

  & > .ant-dropdown-menu > .ant-dropdown-menu-item:last-child,
  & > .ant-dropdown-menu > .ant-dropdown-menu-submenu:last-child .ant-dropdown-menu-submenu-title {
    border-radius: 0;
  }
`;

export const antTableFilterDropdownBtns = css`
  padding: 7px 8px;
  overflow: hidden;
  border-top: 1px solid #e8e8e8;
`;

export const antTableFilterDropdownLink = css`
  color: #1890ff;

  &:hover {
    color: #40a9ff;
  }

  &:active {
    color: #096dd9;
  }

  &.confirm {
    float: left;
  }

  &.clear {
    float: right;
  }
`;

export const antTableScroll = css`
  overflow: auto;
  overflow-x: hidden;

  & table {
    width: auto;
    min-width: 100%;
  }

  & table .ant-table-fixed-columns-in-body {
    visibility: hidden;
  }
`;

export const antTableLoading = css`
  position: relative;

  & .${antTableBody} {
    background: #fff;
    opacity: 0.5;
  }

  & .ant-table-spin-holder {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    margin-left: -30px;
    line-height: 20px;
  }

  & .ant-table-with-pagination {
    margin-top: -20px;
  }

  & .ant-table-without-pagination {
    margin-top: 10px;
  }
`;

export const antTableMiddle = css`
  & > .${antTableTitle}, & > .${antTableFooter} {
    padding: 12px 8px;
  }

  & > .ant-table-content > .${antTableHeader} > table > .${antTableThead} > tr > th,
  & > .ant-table-content > .${antTableBody} > table > .${antTableThead} > tr > th,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableBody}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr
    > th,
  & > .ant-table-content > .${antTableHeader} > table > .${antTableTbody} > tr > td,
  & > .ant-table-content > .${antTableBody} > table > .${antTableTbody} > tr > td,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableHeader}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableBody}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .${antTableHeader}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .${antTableHeader}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableTbody}
    > tr
    > td {
    padding: 12px 8px;
  }

  & tr.${antTableExpandedRow} td > .${antTableWrapper} {
    margin: -12px -8px -13px;
  }
`;

export const antTablePagination = css`
  &.ant-pagination {
    float: right;
    margin: 16px 0;
  }
`;

export const antTableRow = css`
  &[class*='ant-table-row-level-0'] .ant-table-selection-column > span {
    display: inline-block;
  }
`;

export const antTableRowCollapsed = css`
  &::after {
    content: '+';
  }
`;

export const antTableRowExpandIconCell = css`
  width: 50px;
  min-width: 50px;
  text-align: center;
`;

export const antTableRowExpanded = css`
  &::after {
    content: '-';
  }
`;

export const antTableRowSpaced = css`
  visibility: hidden;

  &::after {
    content: '.';
  }
`;

export const antTableSelection = css`
  white-space: nowrap;

  & .anticon-down {
    color: #bfbfbf;
    transition: all 0.3s;
  }
`;

export const antTableSelectionDown = css`
  display: inline-block;
  padding: 0;
  line-height: 1;
  cursor: pointer;

  &:hover .anticon-down {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const antTableSelectionMenu = css`
  min-width: 96px;
  margin-top: 5px;
  margin-left: -30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  & .ant-action-down {
    color: #bfbfbf;
  }
`;

export const antTableSelectionSelectAllCustom = css`
  margin-right: 4px !important;
`;

export const antTableSmall = css`
  border: 1px solid #e8e8e8;
  border-radius: 4px;

  & > .${antTableTitle}, & > .${antTableFooter} {
    padding: 8px 8px;
  }

  & > .${antTableTitle} {
    top: 0;
    border-bottom: 1px solid #e8e8e8;
  }

  & > .ant-table-content > .${antTableBody} {
    margin: 0 8px;
  }

  & > .ant-table-content > .${antTableHeader} > table,
  & > .ant-table-content > .${antTableBody} > table,
  & > .ant-table-content > .${antTableScroll} > .${antTableHeader} > table,
  & > .ant-table-content > .${antTableScroll} > .${antTableBody} > table,
  & > .ant-table-content > .${antTableFixedLeft} > .${antTableHeader} > table,
  & > .ant-table-content > .${antTableFixedRight} > .${antTableHeader} > table,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table {
    border: 0;
  }

  & > .ant-table-content > .${antTableHeader} > table > .${antTableThead} > tr > th,
  & > .ant-table-content > .${antTableBody} > table > .${antTableThead} > tr > th,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableBody}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr
    > th,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr
    > th,
  & > .ant-table-content > .${antTableHeader} > table > .${antTableTbody} > tr > td,
  & > .ant-table-content > .${antTableBody} > table > .${antTableTbody} > tr > td,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableHeader}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableBody}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .${antTableHeader}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .${antTableHeader}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableTbody}
    > tr
    > td,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableTbody}
    > tr
    > td {
    padding: 8px 8px;
  }

  & > .ant-table-content > .${antTableHeader} > table > .${antTableThead} > tr,
  & > .ant-table-content > .${antTableBody} > table > .${antTableThead} > tr,
  & > .ant-table-content > .${antTableScroll} > .${antTableHeader} > table > .${antTableThead} > tr,
  & > .ant-table-content > .${antTableScroll} > .${antTableBody} > table > .${antTableThead} > tr,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr {
    background-color: transparent;
    border-bottom: 1px solid #e8e8e8;
  }

  &
    > .ant-table-content
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort,
  &
    > .ant-table-content
    > .${antTableBody}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort,
  &
    > .ant-table-content
    > .${antTableScroll}
    > .${antTableBody}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .${antTableHeader}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table
    > .${antTableThead}
    > tr
    > th.ant-table-column-sort {
    background-color: rgba(0, 0, 0, 0.01);
  }

  & > .ant-table-content > .${antTableScroll} > .${antTableHeader} > table,
  & > .ant-table-content > .${antTableScroll} > .${antTableBody} > table,
  & > .ant-table-content > .${antTableFixedLeft} > .${antTableHeader} > table,
  & > .ant-table-content > .${antTableFixedRight} > .${antTableHeader} > table,
  &
    > .ant-table-content
    > .${antTableFixedLeft}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table,
  &
    > .ant-table-content
    > .${antTableFixedRight}
    > .ant-table-body-outer
    > .${antTableBodyInner}
    > table {
    padding: 0;
  }

  & > .ant-table-content .${antTableHeader} {
    background-color: #fff;
  }

  &
    > .ant-table-content
    .${antTablePlaceholder},
    &
    > .ant-table-content
    .${antTableRow}:last-child
    td {
    border-bottom: 0;
  }

  &.${antTableBordered} {
    border-right: 0;
  }

  &.${antTableBordered} .${antTableTitle} {
    border: 0;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
  }

  &.${antTableBordered} .ant-table-content {
    border-right: 1px solid #e8e8e8;
  }

  &.${antTableBordered} .${antTableFooter} {
    border: 0;
    border-top: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
  }

  &.${antTableBordered} .${antTableFooter}::before {
    display: none;
  }

  &.${antTableBordered} .${antTablePlaceholder} {
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
  }

  &.${antTableBordered} .${antTableThead} > tr > th:last-child,
  &.${antTableBordered} .${antTableTbody} > tr > td:last-child {
    border-right: none;
  }

  &.${antTableBordered} .${antTableFixedLeft} .${antTableThead} > tr > th:last-child,
  &.${antTableBordered} .${antTableFixedLeft} .${antTableTbody} > tr > td:last-child {
    border-right: 1px solid #e8e8e8;
  }

  &.${antTableBordered} .${antTableFixedRight} {
    border-right: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
  }

  & tr.${antTableExpandedRow} td > .${antTableWrapper} {
    margin: -8px -8px -9px;
  }
`;

export const antTableWithoutColumnHeader = css`
  & .${antTableTitle} + .ant-table-content,
  & table {
    border-radius: 0;
  }

  &.${antTableBordered}.${antTableEmpty} .${antTablePlaceholder} {
    border-top: 1px solid #e8e8e8;
    border-radius: 4px;
  }
`;
