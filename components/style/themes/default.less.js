/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
const import '../color/colors';

// The prefix to use on all css classes from ant.
const antPrefix = ant;

// An override for the html selector for theme prefixes
const htmlSelector = html;

// -------- Colors -----------
const primaryColor = @blue-6;
const infoColor = @blue-6;
const successColor = @green-6;
const processingColor = @blue-6;
const errorColor = @red-6;
const highlightColor = @red-6;
const warningColor = @gold-6;
const normalColor = #d9d9d9;
const white = #fff;
const black = #000;

// Color used by default to control hover and active backgrounds and for
// alert info backgrounds.
const primary1 = color(~`colorPalette('@{primaryColor}', 1) `); // replace tint(@primaryColor, 90%)
const primary2 = color(~`colorPalette('@{primaryColor}', 2) `); // replace tint(@primaryColor, 80%)
const primary3 = color(~`colorPalette('@{primaryColor}', 3) `); // unused
const primary4 = color(~`colorPalette('@{primaryColor}', 4) `); // unused
const primary5 = color(
  ~`colorPalette('@{primaryColor}', 5) `
); // color used to control the text color in many active and hover states, replace tint(@primaryColor, 20%)
const primary6 = @primaryColor; // color used to control the text color of active buttons, don't use, use @primaryColor
const primary7 = color(~`colorPalette('@{primaryColor}', 7) `); // replace shade(@primaryColor, 5%)
const primary8 = color(~`colorPalette('@{primaryColor}', 8) `); // unused
const primary9 = color(~`colorPalette('@{primaryColor}', 9) `); // unused
const primary10 = color(~`colorPalette('@{primaryColor}', 10) `); // unused

// Base Scaffolding Variables
// ---

// Background color for `<body>`
const body-background = #fff;
// Base background color for most components
const component-background = #fff;
const font-family = -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol';
const code-family = 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
const textColor = fade(@black, 65%);
const textColor-secondary = fade(@black, 45%);
const textColor-warning = @gold-7;
const textColor-danger = @red-7;
const textColor-inverse = @white;
const iconColor = inherit;
const iconColor-hover = fade(@black, 75%);
const headingColor = fade(#000, 85%);
const headingColor-dark = fade(@white, 100%);
const textColor-dark = fade(@white, 85%);
const textColor-secondary-dark = fade(@white, 65%);
const text-selection-bg = @primaryColor;
const font-variant-base = tabular-nums;
const font-feature-settings-base = 'tnum';
const font-size-base = 14px;
const font-size-lg = @font-size-base + 2px;
const font-size-sm = 12px;
const heading-1-size = ceil(@font-size-base * 2.71);
const heading-2-size = ceil(@font-size-base * 2.14);
const heading-3-size = ceil(@font-size-base * 1.71);
const heading-4-size = ceil(@font-size-base * 1.42);
const line-height-base = 1.5;
const border-radius-base = 4px;
const border-radius-sm = 2px;

// vertical paddings
const padding-lg = 24px; // containers
const padding-md = 16px; // small containers and buttons
const padding-sm = 12px; // Form controls and items
const padding-xs = 8px; // small items

// vertical padding for all form controls
const control-padding-horizontal = @padding-sm;
const control-padding-horizontal-sm = @padding-xs;

// The background colors for active and hover states for things like
// list items or table cells.
const item-active-bg = @primary-1;
const item-hover-bg = @primary-1;

// ICONFONT
const iconfontCss-prefix = anticon;

// LINK
const linkColor = @primaryColor;
const link-hoverColor = color(~`colorPalette('@{linkColor}', 5) `);
const link-activeColor = color(~`colorPalette('@{linkColor}', 7) `);
const link-decoration = none;
const link-hover-decoration = none;

// Animation
const ease-base-out = cubic-bezier(0.7, 0.3, 0.1, 1);
const ease-base-in = cubic-bezier(0.9, 0, 0.3, 0.7);
const ease-out = cubic-bezier(0.215, 0.61, 0.355, 1);
const ease-in = cubic-bezier(0.55, 0.055, 0.675, 0.19);
const ease-in-out = cubic-bezier(0.645, 0.045, 0.355, 1);
const ease-out-back = cubic-bezier(0.12, 0.4, 0.29, 1.46);
const ease-in-back = cubic-bezier(0.71, -0.46, 0.88, 0.6);
const ease-in-out-back = cubic-bezier(0.71, -0.46, 0.29, 1.46);
const ease-outCirc = cubic-bezier(0.08, 0.82, 0.17, 1);
const ease-inCirc = cubic-bezier(0.6, 0.04, 0.98, 0.34);
const ease-in-outCirc = cubic-bezier(0.78, 0.14, 0.15, 0.86);
const ease-out-quint = cubic-bezier(0.23, 1, 0.32, 1);
const ease-in-quint = cubic-bezier(0.755, 0.05, 0.855, 0.06);
const ease-in-out-quint = cubic-bezier(0.86, 0, 0.07, 1);

// Border color
const borderColor-base = hsv(0, 0, 85%); // base border outline a component
const borderColor-split = hsv(0, 0, 91%); // split border inside a component
const borderColor-inverse = @white;
const border-width-base = 1px; // width of the border for a component
const border-style-base = solid; // style of a components border

// Outline
const outline-blur-size = 0;
const outline-width = 2px;
const outlineColor = @primaryColor;

const backgroundColor-light = hsv(0, 0, 98%); // background of header and selected item
const backgroundColor-base = hsv(0, 0, 96%); // Default grey background color

// Disabled states
const disabledColor = fade(#000, 25%);
const disabled-bg = @backgroundColor-base;
const disabledColor-dark = fade(#fff, 35%);

// Shadow
const shadowColor = rgba(0, 0, 0, 0.15);
const shadowColor-inverse = @component-background;
const box-shadow-base = @shadow-1-down;
const shadow-1-up = 0 -2px 8px @shadowColor;
const shadow-1-down = 0 2px 8px @shadowColor;
const shadow-1-left = -2px 0 8px @shadowColor;
const shadow-1-right = 2px 0 8px @shadowColor;
const shadow-2 = 0 4px 12px @shadowColor;

// Buttons
const btn-font-weight = 400;
const btn-border-radius-base = @border-radius-base;
const btn-border-radius-sm = @border-radius-base;
const btn-border-width = @border-width-base;
const btn-border-style = @border-style-base;
const btn-shadow = 0 2px 0 rgba(0, 0, 0, 0.015);
const btn-primary-shadow = 0 2px 0 rgba(0, 0, 0, 0.045);
const btn-text-shadow = 0 -1px 0 rgba(0, 0, 0, 0.12);

const btn-primaryColor = #fff;
const btn-primary-bg = @primaryColor;

const btn-defaultColor = @textColor;
const btn-default-bg = #fff;
const btn-default-border = @borderColor-base;

const btn-dangerColor = @errorColor;
const btn-danger-bg = @backgroundColor-base;
const btn-danger-border = @borderColor-base;

const btn-disableColor = @disabledColor;
const btn-disable-bg = @disabled-bg;
const btn-disable-border = @borderColor-base;

const btn-padding-base = 0 @padding-md - 1px;
const btn-font-size-lg = @font-size-lg;
const btn-font-size-sm = @font-size-base;
const btn-padding-lg = @btn-padding-base;
const btn-padding-sm = 0 @padding-xs - 1px;

const btn-height-base = 32px;
const btn-height-lg = 40px;
const btn-height-sm = 24px;

const btnCircle-size = @btn-height-base;
const btnCircle-size-lg = @btn-height-lg;
const btnCircle-size-sm = @btn-height-sm;

const btn-group-border = @primary-5;

// Checkbox
const checkbox-size = 16px;
const checkboxColor = @primaryColor;
const checkboxCheckColor = #fff;
const checkbox-border-width = @border-width-base;

// Empty
const empty-font-size = @font-size-base;

// Radio
const radio-size = 16px;
const radio-dotColor = @primaryColor;

// Radio buttons
const radio-button-bg = @btn-default-bg;
const radio-buttonChecked-bg = @btn-default-bg;
const radio-buttonColor = @btn-defaultColor;
const radio-button-hoverColor = @primary-5;
const radio-button-activeColor = @primary-7;

// Media queries breakpoints
// Extra small screen / phone
const screen-xs = 480px;
const screen-xs-min = @screen-xs;

// Small screen / tablet
const screen-sm = 576px;
const screen-sm-min = @screen-sm;

// Medium screen / desktop
const screen-md = 768px;
const screen-md-min = @screen-md;

// Large screen / wide desktop
const screen-lg = 992px;
const screen-lg-min = @screen-lg;

// Extra large screen / full hd
const screen-xl = 1200px;
const screen-xl-min = @screen-xl;

// Extra extra large screen / large desktop
const screen-xxl = 1600px;
const screen-xxl-min = @screen-xxl;

// provide a maximum
const screen-xs-max = (@screen-sm-min - 1px);
const screen-sm-max = (@screen-md-min - 1px);
const screen-md-max = (@screen-lg-min - 1px);
const screen-lg-max = (@screen-xl-min - 1px);
const screen-xl-max = (@screen-xxl-min - 1px);

// Grid system
const gridColumns = 24;
const grid-gutter-width = 0;

// Layout
const layout-body-background = #f0f2f5;
const layout-header-background = #001529;
const layout-footer-background = @layout-body-background;
const layout-header-height = 64px;
const layout-header-padding = 0 50px;
const layout-footer-padding = 24px 50px;
const layout-sider-background = @layout-header-background;
const layout-trigger-height = 48px;
const layout-trigger-background = #002140;
const layout-triggerColor = #fff;
const layout-zero-trigger-width = 36px;
const layout-zero-trigger-height = 42px;
// Layout light theme
const layout-sider-background-light = #fff;
const layout-trigger-background-light = #fff;
const layout-triggerColor-light = @textColor;

// z-index list, order by `z-index`
const zindex-table-fixed = auto;
const zindex-affix = 10;
const zindex-back-top = 10;
const zindex-badge = 10;
const zindex-picker-panel = 10;
const zindex-popupClose = 10;
const zindex-modal = 1000;
const zindex-modal-mask = 1000;
const zindex-message = 1010;
const zindex-notification = 1010;
const zindex-popover = 1030;
const zindex-dropdown = 1050;
const zindex-picker = 1050;
const zindex-tooltip = 1060;

// Animation
const animation-duration-slow = 0.3s; // Modal
const animation-duration-base = 0.2s;
const animation-duration-fast = 0.1s; // Tooltip

// Form
// ---
const label-requiredColor = @highlightColor;
const labelColor = @headingColor;
const form-item-margin-bottom = 24px;
const form-item-trailingColon = true;
const form-vertical-label-padding = 0 0 8px;
const form-vertical-label-margin = 0;

// Input
// ---
const input-height-base = 32px;
const input-height-lg = 40px;
const input-height-sm = 24px;
const input-padding-horizontal = @control-padding-horizontal - 1px;
const input-padding-horizontal-base = @input-padding-horizontal;
const input-padding-horizontal-sm = @control-padding-horizontal-sm - 1px;
const input-padding-horizontal-lg = @input-padding-horizontal;
const input-padding-vertical-base = 4px;
const input-padding-vertical-sm = 1px;
const input-padding-vertical-lg = 6px;
const input-placeholderColor = hsv(0, 0, 75%);
const inputColor = @textColor;
const input-borderColor = @borderColor-base;
const input-bg = #fff;
const input-number-handler-active-bg = #f4f4f4;
const input-addon-bg = @backgroundColor-light;
const input-hover-borderColor = @primaryColor;
const input-disabled-bg = @disabled-bg;
const input-outline-offset = 0 0;

// Select
// ---
const select-borderColor = @borderColor-base;
const select-item-selected-font-weight = 600;

// Tooltip
// ---
// Tooltip max width
const tooltip-max-width = 250px;
// Tooltip text color
const tooltipColor = #fff;
// Tooltip background color
const tooltip-bg = rgba(0, 0, 0, 0.75);
// Tooltip arrow width
const tooltip-arrow-width = 5px;
// Tooltip distance with trigger
const tooltip-distance = @tooltip-arrow-width - 1px + 4px;
// Tooltip arrow color
const tooltip-arrowColor = @tooltip-bg;

// Popover
// ---
// Popover body background color
const popover-bg = #fff;
// Popover text color
const popoverColor = @textColor;
// Popover maximum width
const popover-min-width = 177px;
// Popover arrow width
const popover-arrow-width = 6px;
// Popover arrow color
const popover-arrowColor = @popover-bg;
// Popover outer arrow width
// Popover outer arrow color
const popover-arrow-outerColor = @popover-bg;
// Popover distance with trigger
const popover-distance = @popover-arrow-width + 4px;

// Modal
// --
const modal-body-padding = 24px;
const modal-header-bg = @component-background;
const modal-footer-bg = transparent;
const modal-mask-bg = fade(@black, 65%);

// Progress
// --
const progress-defaultColor = @processingColor;
const progress-remainingColor = @backgroundColor-base;
const progress-textColor = @textColor;

// Menu
// ---
const menu-inline-toplevel-item-height = 40px;
const menu-item-height = 40px;
const menuCollapsed-width = 80px;
const menu-bg = @component-background;
const menu-popup-bg = @component-background;
const menu-itemColor = @textColor;
const menu-highlightColor = @primaryColor;
const menu-item-active-bg = @item-active-bg;
const menu-item-active-border-width = 3px;
const menu-item-group-titleColor = @textColor-secondary;
// dark theme
const menu-darkColor = @textColor-secondary-dark;
const menu-dark-bg = @layout-header-background;
const menu-dark-arrowColor = #fff;
const menu-dark-submenu-bg = #000c17;
const menu-dark-highlightColor = #fff;
const menu-dark-item-active-bg = @primaryColor;

// Spin
// ---
const spin-dot-size-sm = 14px;
const spin-dot-size = 20px;
const spin-dot-size-lg = 32px;

// Table
// --
const table-header-bg = @backgroundColor-light;
const table-headerColor = @headingColor;
const table-header-sort-bg = @backgroundColor-base;
const table-body-sort-bg = rgba(0, 0, 0, 0.01);
const table-row-hover-bg = @primary-1;
const table-selected-row-bg = #fafafa;
const table-expanded-row-bg = #fbfbfb;
const table-padding-vertical = 16px;
const table-padding-horizontal = 16px;
const table-border-radius-base = @border-radius-base;

// Tag
// --
const tag-default-bg = @backgroundColor-light;
const tag-defaultColor = @textColor;
const tag-font-size = @font-size-sm;

// TimePicker
// ---
const time-picker-panelColumn-width = 56px;
const time-picker-panel-width = @time-picker-panelColumn-width * 3;
const time-picker-selected-bg = @backgroundColor-base;

// Carousel
// ---
const carousel-dot-width = 16px;
const carousel-dot-height = 3px;
const carousel-dot-active-width = 24px;

// Badge
// ---
const badge-height = 20px;
const badge-dot-size = 6px;
const badge-font-size = @font-size-sm;
const badge-font-weight = normal;
const badge-status-size = 6px;
const badge-textColor = @component-background;

// Rate
// ---
const rate-starColor = @yellow-6;
const rate-star-bg = @borderColor-split;

// Card
// ---
const card-headColor = @headingColor;
const card-head-background = transparent;
const card-head-padding = 16px;
const card-inner-head-padding = 12px;
const card-padding-base = 24px;
const card-actions-background = @backgroundColor-light;
const card-background = #cfd8dc;
const card-shadow = 0 2px 8px rgba(0, 0, 0, 0.09);
const card-radius = @border-radius-sm;

// Comment
// ---
const comment-padding-base = 16px 0;
const comment-nest-indent = 44px;
const comment-author-nameColor = @textColor-secondary;
const comment-author-timeColor = #ccc;
const comment-actionColor = @textColor-secondary;
const comment-action-hoverColor = #595959;

// Tabs
// ---
const tabsCard-head-background = @backgroundColor-light;
const tabsCard-height = 40px;
const tabsCard-activeColor = @primaryColor;
const tabs-title-font-size = @font-size-base;
const tabs-title-font-size-lg = @font-size-lg;
const tabs-title-font-size-sm = @font-size-base;
const tabs-ink-barColor = @primaryColor;
const tabs-bar-margin = 0 0 16px 0;
const tabs-horizontal-margin = 0 32px 0 0;
const tabs-horizontal-padding = 12px 16px;
const tabs-horizontal-padding-lg = 16px;
const tabs-horizontal-padding-sm = 8px 16px;
const tabs-vertical-padding = 8px 24px;
const tabs-vertical-margin = 0 0 16px 0;
const tabs-scrolling-size = 32px;
const tabs-highlightColor = @primaryColor;
const tabs-hoverColor = @primary-5;
const tabs-activeColor = @primary-7;

// BackTop
// ---
const back-topColor = #fff;
const back-top-bg = @textColor-secondary;
const back-top-hover-bg = @textColor;

// Avatar
// ---
const avatar-size-base = 32px;
const avatar-size-lg = 40px;
const avatar-size-sm = 24px;
const avatar-font-size-base = 18px;
const avatar-font-size-lg = 24px;
const avatar-font-size-sm = 14px;
const avatar-bg = #ccc;
const avatarColor = #fff;
const avatar-border-radius = @border-radius-base;

// Switch
// ---
const switch-height = 22px;
const switch-sm-height = 16px;
const switch-smChecked-margin-left = -(@switch-sm-height - 3px);
const switch-disabled-opacity = 0.4;
const switchColor = @primaryColor;
const switch-shadowColor = fade(#00230b, 20%);

// Pagination
// ---
const pagination-item-size = 32px;
const pagination-item-size-sm = 24px;
const pagination-font-family = Arial;
const pagination-font-weight-active = 500;
const pagination-item-bg-active = @component-background;

// PageHeader
// ---
const page-header-padding-horizontal = 24px;
const page-header-padding-vertical = 16px;

// Breadcrumb
// ---
const breadcrumb-baseColor = @textColor-secondary;
const breadcrumb-last-itemColor = @textColor;
const breadcrumb-font-size = @font-size-base;
const breadcrumb-icon-font-size = @font-size-base;
const breadcrumb-linkColor = @textColor-secondary;
const breadcrumb-linkColor-hover = @primary-5;
const breadcrumb-separatorColor = @textColor-secondary;
const breadcrumb-separator-margin = 0 @padding-xs;

// Slider
// ---
const slider-margin = 14px 6px 10px;
const slider-rail-backgroundColor = @backgroundColor-base;
const slider-rail-backgroundColor-hover = #e1e1e1;
const slider-track-backgroundColor = @primary-3;
const slider-track-backgroundColor-hover = @primary-4;
const slider-handleColor = @primary-3;
const slider-handleColor-hover = @primary-4;
const slider-handleColor-focus = tint(@primaryColor, 20%);
const slider-handleColor-focus-shadow = fade(@primaryColor, 20%);
const slider-handleColor-tooltip-open = @primaryColor;
const slider-dot-borderColor = @borderColor-split;
const slider-dot-borderColor-active = tint(@primaryColor, 50%);
const slider-disabledColor = @disabledColor;
const slider-disabled-backgroundColor = @component-background;

// Tree
// ---
const tree-title-height = 24px;
const treeChild-padding = 18px;
const tree-directory-selectedColor = #fff;
const tree-directory-selected-bg = @primaryColor;

// Collapse
// ---
const collapse-header-padding = 12px 16px 12px 40px;
const collapse-header-bg = @backgroundColor-light;
const collapseContent-padding = @padding-md;
const collapseContent-bg = @component-background;

// Skeleton
// ---
const skeletonColor = #f2f2f2;

// Transfer
// ---
const transfer-disabled-bg = @disabled-bg;

// Message
// ---
const message-noticeContent-padding = 10px 16px;

// Motion
// ---
const wave-animation-width = 6px;

// Alert
// ---
const alert-success-borderColor = ~`colorPalette('@{successColor}', 3) `;
const alert-success-bgColor = ~`colorPalette('@{successColor}', 1) `;
const alert-success-iconColor = @successColor;
const alert-info-borderColor = ~`colorPalette('@{infoColor}', 3) `;
const alert-info-bgColor = ~`colorPalette('@{infoColor}', 1) `;
const alert-info-iconColor = @infoColor;
const alert-warning-borderColor = ~`colorPalette('@{warningColor}', 3) `;
const alert-warning-bgColor = ~`colorPalette('@{warningColor}', 1) `;
const alert-warning-iconColor = @warningColor;
const alert-error-borderColor = ~`colorPalette('@{errorColor}', 3) `;
const alert-error-bgColor = ~`colorPalette('@{errorColor}', 1) `;
const alert-error-iconColor = @errorColor;

// List
// ---
const list-header-background = transparent;
const list-footer-background = transparent;
const list-empty-text-padding = @padding-md;
const list-item-padding = @padding-sm 0;
const list-item-meta-margin-bottom = @padding-md;
const list-item-meta-avatar-margin-right = @padding-md;
const list-item-meta-title-margin-bottom = @padding-sm;

// Statistic
// ---
const statistic-title-font-size = @font-size-base;
const statisticContent-font-size = 24px;
const statistic-unit-font-size = 16px;
const statistic-font-family = Tahoma, 'Helvetica Neue', @font-family;

// Drawer
// ---
const drawer-header-padding = 16px 24px;
const drawer-body-padding = 24px;
