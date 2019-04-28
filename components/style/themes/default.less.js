/* stylelintDisable atRuleEmptyLineBefore,atRuleNameSpaceAfter,atRuleNoUnknown */
// const import '../color/colors';
import { opacify, math, tint } from 'polished';
import colorPalette from '../color/generate';

// The prefix to use on all css classes from ant.
const antPrefix = 'ant';

// An override for the html selector for theme prefixes
const htmlSelector = 'html';

// -------- Colors -----------
const primaryColor = blue6;
const infoColor = blue6;
const successColor = green6;
const processingColor = blue6;
const errorColor = red6;
const highlightColor = red6;
const warningColor = gold6;
const normalColor = '#d9d9d9';
const white = '#fff';
const black = '#000';

// Color used by default to control hover and active backgrounds and for
// alert info backgrounds.
const primary1 = colorPalette(primaryColor, 1); // replace tint(@primaryColor, 90%)
const primary2 = colorPalette(primaryColor, 2); // replace tint(@primaryColor, 80%)
const primary3 = colorPalette(primaryColor, 3); // unused
const primary4 = colorPalette(primaryColor, 4); // unused
const primary5 = colorPalette(primaryColor, 5); // color used to control the text color in many active and hover states, replace tint(@primaryColor, 20%)
const primary6 = primaryColor; // color used to control the text color of active buttons, don't use, use @primaryColor
const primary7 = colorPalette(primaryColor, 7); // replace shade(@primaryColor, 5%)
const primary8 = colorPalette(primaryColor, 8); // unused
const primary9 = colorPalette(primaryColor, 9); // unused
const primary10 = colorPalette(primaryColor, 10); // unused

// Base Scaffolding Variables
// ---

// Background color for `<body>`
const bodyBackground = '#fff';
// Base background color for most components
const componentBackground = '#fff';
const fontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sansSerif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol'`;
const codeFamily = `'SFMonoRegular', Consolas, 'Liberation Mono', Menlo, Courier, monospace'`;
const textColor = opacify(0.65, black);
const textColorSecondary = opacify(0.45, black);
const textColorWarning = gold7;
const textColorDanger = red7;
const textColorInverse = white;
const iconColor = 'inherit';
const iconColorHover = opacify(0.75, black);
const headingColor = opacify(0.85, '#000');
const headingColorDark = opacify(100, white);
const textColorDark = opacify(0.85, white);
const textColorSecondaryDark = opacify(0.65, white);
const textSelectionBg = primaryColor;
const fontVariantBase = 'tabularNums';
const fontFeatureSettingsBase = tnum;
const fontSizeBase = '14px';
const fontSizeLg = math(`${fontSizeBase} 2px`); // 14 + 2 px
const fontSizeSm = '12px';
// fix ceil which has strings
const heading1Size = `${Math.ceil(fontSizeBase.replace('px', '') * 2.71)  }px`;
const heading2Size = `${Math.ceil(fontSizeBase.replace('px', '') * 2.14)  }px`;
const heading3Size = `${Math.ceil(fontSizeBase.replace('px', '') * 1.71)  }px`;
const heading4Size = `${Math.ceil(fontSizeBase.replace('px', '') * 1.42)  }px`;
const lineHeightBase = '1.5';
const borderRadiusBase = '4px';
const borderRadiusSm = '2px';

// vertical paddings
const paddingLg = '24px'; // containers
const paddingMd = '16px'; // small containers and buttons
const paddingSm = '12px'; // Form controls and items
const paddingXs = '8px'; // small items

// vertical padding for all form controls
const controlPaddingHorizontal = paddingSm;
const controlPaddingHorizontalSm = paddingXs;

// The background colors for active and hover states for things like
// list items or table cells.
const itemActiveBg = primary1;
const itemHoverBg = primary1;

// ICONFONT
const iconfontCssPrefix = 'anticon';

// LINK
const linkColor = primaryColor;
const linkHoverColor = colorPalette(linkColor, 5);
const linkActiveColor = colorPalette(linkColor, 7);
const linkDecoration = 'none';
const linkHoverDecoration = 'none';

// Animation
const easeBaseOut = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
const easeBaseIn = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
const easeOut = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
const easeIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
const easeInOut = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
const easeOutBack = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
const easeInBack = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
const easeInOutBack = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
const easeOutCirc = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
const easeInCirc = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
const easeInOutCirc = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
const easeOutQuint = 'cubic-bezier(0.23, 1, 0.32, 1)';
const easeInQuint = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
const easeInOutQuint = 'cubic-bezier(0.86, 0, 0.07, 1)';

// Border color
const borderColorBase = '#D9D9D9'; // base border outline a component
const borderColorSplit = '#E8E8E8'; // split border inside a component
const borderColorInverse = white;
const borderWidthBase = '1px'; // width of the border for a component
const borderStyleBase = 'solid'; // style of a components border

// Outline
const outlineBlurSize = '0';
const outlineWidth = '2px';
const outlineColor = primaryColor;

const backgroundColorLight = '#FAFAFA'; // background of header and selected item
const backgroundColorBase = '#F5F5F5'; // Default grey background color

// Disabled states
const disabledColor = opacify(0.25, '#000');
const disabledBg = backgroundColorBase;
const disabledColorDark = opacify(0.35, '#fff');

// Shadow
const shadowColor = 'rgba(0, 0, 0, 0.15)';
const shadowColorInverse = componentBackground;
const boxShadowBase = shadow1Down;
const shadow1Up = '0 -2px 8px @shadowColor';
const shadow1Down = '0 2px 8px @shadowColor';
const shadow1Left = '-2px 0 8px @shadowColor';
const shadow1Right = '2px 0 8px @shadowColor';
const shadow2 = '0 4px 12px @shadowColor';

// Buttons
const btnFontWeight = '400';
const btnBorderRadiusBase = borderRadiusBase;
const btnBorderRadiusSm = borderRadiusBase;
const btnBorderWidth = borderWidthBase;
const btnBorderStyle = borderStyleBase;
const btnShadow = '0 2px 0 rgba(0, 0, 0, 0.015)';
const btnPrimaryShadow = '0 2px 0 rgba(0, 0, 0, 0.045)';
const btnTextShadow = '0 -1px 0 rgba(0, 0, 0, 0.12)';

const btnPrimaryColor = '#fff';
const btnPrimaryBg = primaryColor;

const btnDefaultColor = textColor;
const btnDefaultBg = '#fff';
const btnDefaultBorder = borderColorBase;

const btnDangerColor = errorColor;
const btnDangerBg = backgroundColorBase;
const btnDangerBorder = borderColorBase;

const btnDisableColor = disabledColor;
const btnDisableBg = disabledBg;
const btnDisableBorder = borderColorBase;

const btnPaddingBase = `0 ${paddingMd} - 1px`;
const btnFontSizeLg = fontSizeLg;
const btnFontSizeSm = fontSizeBase;
const btnPaddingLg = btnPaddingBase;
const btnPaddingSm = '0 @paddingXs - 1px';

const btnHeightBase = '32px';
const btnHeightLg = '40px';
const btnHeightSm = '24px';

const btnCircleSize = btnHeightBase;
const btnCircleSizeLg = btnHeightLg;
const btnCircleSizeSm = btnHeightSm;

const btnGroupBorder = primary5;

// Checkbox
const checkboxSize = '16px';
const checkboxColor = primaryColor;
const checkboxCheckColor = '#fff';
const checkboxBorderWidth = borderWidthBase;

// Empty
const emptyFontSize = fontSizeBase;

// Radio
const radioSize = '16px';
const radioDotColor = primaryColor;

// Radio buttons
const radioButtonBg = btnDefaultBg;
const radioButtonCheckedBg = btnDefaultBg;
const radioButtonColor = btnDefaultColor;
const radioButtonHoverColor = primary5;
const radioButtonActiveColor = primary7;

// Media queries breakpoints
// Extra small screen / phone
const screenXs = '480px';
const screenXsMin = screenXs;

// Small screen / tablet
const screenSm = '576px';
const screenSmMin = screenSm;

// Medium screen / desktop
const screenMd = '768px';
const screenMdMin = screenMd;

// Large screen / wide desktop
const screenLg = '992px';
const screenLgMin = screenLg;

// Extra large screen / full hd
const screenXl = '1200px';
const screenXlMin = screenXl;

// Extra extra large screen / large desktop
const screenXxl = '1600px';
const screenXxlMin = screenXxl;

// provide a maximum
const screenXsMax = math(`${screenSmMin} - 1px`);
const screenSmMax = math(`${screenMdMin} - 1px`);
const screenMdMax = math(`${screenLgMin} - 1px`);
const screenLgMax = math(`${screenXlMin} - 1px`);
const screenXlMax = math(`${screenXxlMin} - 1px`);

// Grid system
const gridColumns = '24';
const gridGutterWidth = '0';

// Layout
const layoutBodyBackground = '#f0f2f5';
const layoutHeaderBackground = '#001529';
const layoutFooterBackground = layoutBodyBackground;
const layoutHeaderHeight = '64px';
const layoutHeaderPadding = '0 50px';
const layoutFooterPadding = '24px 50px';
const layoutSiderBackground = layoutHeaderBackground;
const layoutTriggerHeight = '48px';
const layoutTriggerBackground = '#002140';
const layoutTriggerColor = '#fff';
const layoutZeroTriggerWidth = '36px';
const layoutZeroTriggerHeight = '42px';
// Layout light theme
const layoutSiderBackgroundLight = '#fff';
const layoutTriggerBackgroundLight = '#fff';
const layoutTriggerColorLight = textColor;

// zIndex list, order by `zIndex`
const zindexTableFixed = 'auto';
const zindexAffix = '10';
const zindexBackTop = '10';
const zindexBadge = '10';
const zindexPickerPanel = '10';
const zindexPopupClose = '10';
const zindexModal = '1000';
const zindexModalMask = '1000';
const zindexMessage = '1010';
const zindexNotification = '1010';
const zindexPopover = '1030';
const zindexDropdown = '1050';
const zindexPicker = '1050';
const zindexTooltip = '1060';

// Animation
const animationDurationSlow = '0.3s'; // Modal
const animationDurationBase = '0.2s';
const animationDurationFast = '0.1s'; // Tooltip

// Form
// ---
const labelRequiredColor = highlightColor;
const labelColor = headingColor;
const formItemMarginBottom = '24px';
const formItemTrailingColon = 'true';
const formVerticalLabelPadding = '0 0 8px';
const formVerticalLabelMargin = '0';

// Input
// ---
const inputHeightBase = '32px';
const inputHeightLg = '40px';
const inputHeightSm = '24px';
const inputPaddingHorizontal = math(`${controlPaddingHorizontal} - 1px`);
const inputPaddingHorizontalBase = inputPaddingHorizontal;
const inputPaddingHorizontalSm = math(`${controlPaddingHorizontalSm} - 1px`);
const inputPaddingHorizontalLg = inputPaddingHorizontal;
const inputPaddingVerticalBase = '4px';
const inputPaddingVerticalSm = '1px';
const inputPaddingVerticalLg = '6px';
const inputPlaceholderColor = '#BFBFBF';
const inputColor = textColor;
const inputBorderColor = borderColorBase;
const inputBg = '#fff';
const inputNumberHandlerActiveBg = '#f4f4f4';
const inputAddonBg = backgroundColorLight;
const inputHoverBorderColor = primaryColor;
const inputDisabledBg = disabledBg;
const inputOutlineOffset = '0 0';

// Select
// ---
const selectBorderColor = borderColorBase;
const selectItemSelectedFontWeight = '600';

// Tooltip
// ---
// Tooltip max width
const tooltipMaxWidth = '250px';
// Tooltip text color
const tooltipColor = '#fff';
// Tooltip background color
const tooltipBg = 'rgba(0, 0, 0, 0.75)';
// Tooltip arrow width
const tooltipArrowWidth = '5px';
// Tooltip distance with trigger
const tooltipDistance = math(`${tooltipArrowWidth} + 3px`);
// Tooltip arrow color
const tooltipArrowColor = tooltipBg;

// Popover
// ---
// Popover body background color
const popoverBg = '#fff';
// Popover text color
const popoverColor = textColor;
// Popover maximum width
const popoverMinWidth = '177px';
// Popover arrow width
const popoverArrowWidth = '6px';
// Popover arrow color
const popoverArrowColor = popoverBg;
// Popover outer arrow width
// Popover outer arrow color
const popoverArrowOuterColor = popoverBg;
// Popover distance with trigger
const popoverDistance = `calc(${popoverArrowWidth} + 4px)`;

// Modal
// --
const modalBodyPadding = '24px';
const modalHeaderBg = componentBackground;
const modalFooterBg = 'transparent';
const modalMaskBg = opacify(0.65, black);

// Progress
// --
const progressDefaultColor = processingColor;
const progressRemainingColor = backgroundColorBase;
const progressTextColor = textColor;

// Menu
// ---
const menuInlineToplevelItemHeight = '40px';
const menuItemHeight = '40px';
const menuCollapsedWidth = '80px';
const menuBg = componentBackground;
const menuPopupBg = componentBackground;
const menuItemColor = textColor;
const menuHighlightColor = primaryColor;
const menuItemActiveBg = itemActiveBg;
const menuItemActiveBorderWidth = '3px';
const menuItemGroupTitleColor = textColorSecondary;
// dark theme
const menuDarkColor = textColorSecondaryDark;
const menuDarkBg = layoutHeaderBackground;
const menuDarkArrowColor = '#fff';
const menuDarkSubmenuBg = '#000c17';
const menuDarkHighlightColor = '#fff';
const menuDarkItemActiveBg = primaryColor;

// Spin
// ---
const spinDotSizeSm = '14px';
const spinDotSize = '20px';
const spinDotSizeLg = '32px';

// Table
// --
const tableHeaderBg = backgroundColorLight;
const tableHeaderColor = headingColor;
const tableHeaderSortBg = backgroundColorBase;
const tableBodySortBg = 'rgba(0, 0, 0, 0.01)';
const tableRowHoverBg = primary1;
const tableSelectedRowBg = '#fafafa';
const tableExpandedRowBg = '#fbfbfb';
const tablePaddingVertical = '16px';
const tablePaddingHorizontal = '16px';
const tableBorderRadiusBase = borderRadiusBase;

// Tag
// --
const tagDefaultBg = backgroundColorLight;
const tagDefaultColor = textColor;
const tagFontSize = fontSizeSm;

// TimePicker
// ---
const timePickerPanelColumnWidth = '56px';
const timePickerPanelWidth = math(`${timePickerPanelColumnWidth} * 3`);
const timePickerSelectedBg = backgroundColorBase;

// Carousel
// ---
const carouselDotWidth = '16px';
const carouselDotHeight = '3px';
const carouselDotActiveWidth = '24px';

// Badge
// ---
const badgeHeight = '20px';
const badgeDotSize = '6px';
const badgeFontSize = fontSizeSm;
const badgeFontWeight = 'normal';
const badgeStatusSize = '6px';
const badgeTextColor = componentBackground;

// Rate
// ---
const rateStarColor = yellow6;
const rateStarBg = borderColorSplit;

// Card
// ---
const cardHeadColor = headingColor;
const cardHeadBackground = 'transparent';
const cardHeadPadding = '16px';
const cardInnerHeadPadding = '12px';
const cardPaddingBase = '24px';
const cardActionsBackground = backgroundColorLight;
const cardBackground = '#cfd8dc';
const cardShadow = '0 2px 8px rgba(0, 0, 0, 0.09)';
const cardRadius = borderRadiusSm;

// Comment
// ---
const commentPaddingBase = '16px 0';
const commentNestIndent = '44px';
const commentAuthorNameColor = textColorSecondary;
const commentAuthorTimeColor = '#ccc';
const commentActionColor = textColorSecondary;
const commentActionHoverColor = '#595959';

// Tabs
// ---
const tabsCardHeadBackground = backgroundColorLight;
const tabsCardHeight = '40px';
const tabsCardActiveColor = primaryColor;
const tabsTitleFontSize = fontSizeBase;
const tabsTitleFontSizeLg = fontSizeLg;
const tabsTitleFontSizeSm = fontSizeBase;
const tabsInkBarColor = primaryColor;
const tabsBarMargin = '0 0 16px 0';
const tabsHorizontalMargin = '0 32px 0 0';
const tabsHorizontalPadding = '12px 16px';
const tabsHorizontalPaddingLg = '16px';
const tabsHorizontalPaddingSm = '8px 16px';
const tabsVerticalPadding = '8px 24px';
const tabsVerticalMargin = '0 0 16px 0';
const tabsScrollingSize = '32px';
const tabsHighlightColor = primaryColor;
const tabsHoverColor = primary5;
const tabsActiveColor = primary7;

// BackTop
// ---
const backTopColor = '#fff';
const backTopBg = textColorSecondary;
const backTopHoverBg = textColor;

// Avatar
// ---
const avatarSizeBase = '32px';
const avatarSizeLg = '40px';
const avatarSizeSm = '24px';
const avatarFontSizeBase = '18px';
const avatarFontSizeLg = '24px';
const avatarFontSizeSm = '14px';
const avatarBg = '#ccc';
const avatarColor = '#fff';
const avatarBorderRadius = borderRadiusBase;

// Switch
// ---
const switchHeight = '22px';
const switchSmHeight = '16px';
const switchSmCheckedMarginLeft = `-${math(`${switchSmHeight} - 3px`)}`;
const switchDisabledOpacity = '0.4';
const switchColor = primaryColor;
const switchShadowColor = opacify(0.2, '#00230b');

// Pagination
// ---
const paginationItemSize = '32px';
const paginationItemSizeSm = '24px';
const paginationFontFamily = 'Arial';
const paginationFontWeightActive = '500';
const paginationItemBgActive = componentBackground;

// PageHeader
// ---
const pageHeaderPaddingHorizontal = '24px';
const pageHeaderPaddingVertical = '16px';

// Breadcrumb
// ---
const breadcrumbBaseColor = textColorSecondary;
const breadcrumbLastItemColor = textColor;
const breadcrumbFontSize = fontSizeBase;
const breadcrumbIconFontSize = fontSizeBase;
const breadcrumbLinkColor = textColorSecondary;
const breadcrumbLinkColorHover = primary5;
const breadcrumbSeparatorColor = textColorSecondary;
const breadcrumbSeparatorMargin = `0 ${paddingXs}`;

// Slider
// ---
const sliderMargin = '14px 6px 10px';
const sliderRailBackgroundColor = backgroundColorBase;
const sliderRailBackgroundColorHover = '#e1e1e1';
const sliderTrackBackgroundColor = primary3;
const sliderTrackBackgroundColorHover = primary4;
const sliderHandleColor = primary3;
const sliderHandleColorHover = primary4;
const sliderHandleColorFocus = tint(primaryColor, 0.2);
const sliderHandleColorFocusShadow = opacify(0.2, primaryColor);
const sliderHandleColorTooltipOpen = primaryColor;
const sliderDotBorderColor = borderColorSplit;
const sliderDotBorderColorActive = tint(primaryColor, 0.5);
const sliderDisabledColor = disabledColor;
const sliderDisabledBackgroundColor = componentBackground;

// Tree
// ---
const treeTitleHeight = '24px';
const treeChildPadding = '18px';
const treeDirectorySelectedColor = '#fff';
const treeDirectorySelectedBg = primaryColor;

// Collapse
// ---
const collapseHeaderPadding = '12px 16px 12px 40px';
const collapseHeaderBg = backgroundColorLight;
const collapseContentPadding = paddingMd;
const collapseContentBg = componentBackground;

// Skeleton
// ---
const skeletonColor = '#f2f2f2';

// Transfer
// ---
const transferDisabledBg = disabledBg;

// Message
// ---
const messageNoticeContentPadding = '10px 16px';

// Motion
// ---
const waveAnimationWidth = '6px';

// Alert
// ---
const alertSuccessBorderColor = colorPalette(successColor, 3);
const alertSuccessBgColor = colorPalette(successColor, 1);
const alertSuccessIconColor = successColor;
const alertInfoBorderColor = colorPalette(infoColor, 3);
const alertInfoBgColor = colorPalette(infoColor, 1);
const alertInfoIconColor = infoColor;
const alertWarningBorderColor = colorPalette(warningColor, 3);
const alertWarningBgColor = colorPalette(warningColor, 1);
const alertWarningIconColor = warningColor;
const alertErrorBorderColor = colorPalette(errorColor, 3);
const alertErrorBgColor = colorPalette(errorColor, 1);
const alertErrorIconColor = errorColor;

// List
// ---
const listHeaderBackground = 'transparent';
const listFooterBackground = 'transparent';
const listEmptyTextPadding = paddingMd;
const listItemPadding = `${paddingSm} 0`;
const listItemMetaMarginBottom = paddingMd;
const listItemMetaAvatarMarginRight = paddingMd;
const listItemMetaTitleMarginBottom = paddingSm;

// Statistic
// ---
const statisticTitleFontSize = fontSizeBase;
const statisticContentFontSize = '24px';
const statisticUnitFontSize = '16px';
const statisticFontFamily = `Tahoma, Helvetica Neue, ${fontFamily}`;

// Drawer
// ---
const drawerHeaderPadding = '16px 24px';
const drawerBodyPadding = '24px';
