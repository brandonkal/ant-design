import '../../style/themes/default';
import '../../style/mixins/index';
import './mixin';
import styled from 'styled-components';

const btnPrefixCls = 'ant-prefix-btn';

// for compatible
const btnGhostColor = textColor;
const btnGhostBg = transparent;
const btnGhostBorder = borderColorBase;


// Button styles
// -----------------------------
const Button = styled.button`
  /* Fixing https://github.com/ant-design/ant-design/issues/12978
  It is a render problem of chrome, which is only happened in the codesandbox demo
  0.001px solution works and I don't why */
  line-height: line-height-base - 0.001;
  .btn;
  .btn-default;

  /* Make sure that the target of Button's click event always be 'button'
    Ref: https://github.com/ant-design/ant-design/issues/7034 */
  & i,
  & span {
    display: inline-block;
    pointer-events: none;
  }

  &-primary {
    .btn-primary;

    .${btnPrefixCls}-group &:not(:first-child):not(:last-child) {
      border-right-color: btn-group-border;
      border-left-color: btn-group-border;

      &:disabled {
        border-color: btn-default-border;
      }
    }

    .${btnPrefixCls}-group &:first-child {
      &:not(:last-child) {
        border-right-color: btn-group-border;
        &[disabled] {
          border-right-color: btn-default-border;
        }
      }
    }

    .${btnPrefixCls}-group &:last-child:not(:first-child),
    .${btnPrefixCls}-group & + & {
      border-left-color: btn-group-border;
      &[disabled] {
        border-left-color: btn-default-border;
      }
    }
  }

  &-ghost {
    .btn-ghost;
  }

  &-dashed {
    .btn-dashed;
  }

  &-danger {
    .btn-danger;
  }

  &-round {
    .btn-round(btn-prefix-cls);
  }

  &-circle,
  &-circle-outline {
    .btn-circle(btn-prefix-cls);
  }

  &::before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    display: none;
    background: component-background;
    border-radius: inherit;
    opacity: 0.35;
    transition: opacity 0.2s;
    content: '';
    pointer-events: none;
  }

  .{iconfont-css-prefix} {
    transition: margin-left 0.3s ease-in-out;

    // Follow icon blur under windows. Change the render.
    // https://github.com/ant-design/ant-design/issues/13924
    &.{iconfont-css-prefix}-plus,
    &.{iconfont-css-prefix}-minus {
      > svg {
        shape-rendering: optimizeSpeed;
      }
    }
  }

  &&-loading {
    position: relative;
    pointer-events: none;
  }

  &&-loading::before {
    display: block;
  }

  &&-loading:not(&-circle):not(&-circle-outline):not(&-icon-only) {
    padding-left: 29px;
    .{iconfont-css-prefix}:not(:last-child) {
      margin-left: -14px;
    }
  }

  &-sm&-loading:not(&-circle):not(&-circle-outline):not(&-icon-only) {
    padding-left: 24px;
    .{iconfont-css-prefix} {
      margin-left: -17px;
    }
  }

  &-group {
    .btn-group(btn-prefix-cls);
  }

  &:not(&-circle):not(&-circle-outline)&-icon-only {
    padding-right: 8px;
    padding-left: 8px;
  }

  // http://stackoverflow.com/a/21281554/3040605
  &:focus > span,
  &:active > span {
    position: relative;
  }

  // To ensure that a space will be placed between character and `Icon`.
  > .{iconfont-css-prefix} + span,
  > span + .{iconfont-css-prefix} {
    margin-left: 8px;
  }

  &-background-ghost {
    color: component-background;
    background: transparent !important;
    border-color: component-background;
  }

  &-background-ghost&-primary {
    .button-variant-ghost(btn-primary-bg);
  }

  &-background-ghost&-danger {
    .button-variant-ghost(btn-danger-color);
  }

  &-two-chinese-chars::first-letter {
    letter-spacing: 0.34em;
  }

  &-two-chinese-chars > *:not(.{iconfont-css-prefix}) {
    margin-right: -0.34em;
    letter-spacing: 0.34em;
  }

  &-block {
    width: 100%;
  }

  // https://github.com/ant-design/ant-design/issues/12681
  &:empty {
    vertical-align: top;
  }
}

a.{btn-prefix-cls} {
  line-height: btn-height-base - 2px;
  &-lg {
    line-height: btn-height-lg - 2px;
  }
  &-sm {
    line-height: btn-height-sm - 2px;
  }
`