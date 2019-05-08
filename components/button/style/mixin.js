// @ts-nocheck
import { css } from 'linaria'

// mixins for button
// ------------------------
export function buttonSize(height, padding, fontSize, borderRadius) {
  return css`
  height: ${height};
  padding: ${padding};
  font-size: ${fontSize};
  border-radius: ${borderRadius};
`
}

export const buttonDisabled = css`
  &Disabled,
  &.disabled,
  &[disabled] {
    &,
    &:hover,
    &:focus,
    &:active,
    &.active {
      ${buttonColor(btnDisableColor, btnDisableBg, btnDisableBorder)}
      text-shadow: none;
      box-shadow: none;
    }
  }
`

function buttonVariantPrimary(color, background) {
  return css`
  ${buttonColor(color, background, background)};

  text-shadow: ${btnTextShadow};
  box-shadow: ${btnPrimaryShadow};

  &:hover,
  &:focus {
    ${buttonColor(
      color, colorPalette(background, 5), colorPalette(background, 5)
    )};
  }

  &:active,
  &.active {
    ${buttonColor(
      color, colorPalette(background, 7), colorPalette(background, 7)
    )};
  }

  ${buttonDisabled()};
`
}

function buttonVariantOther(color, background, border) {
  return css`
    ${buttonColor(color, background, border)};

  &:hover,
  &:focus {
    ${buttonColor(
      colorPalette(btnPrimaryBg, 5), background, colorPalette(btnPrimaryBg, 5)
    )};
  }
  &:active,
  &.active {
    ${buttonColor(
      colorPalette(btnPrimaryBg, 7), background, colorPalette(btnPrimaryBg, 7)
    )};
  }
  ${buttonDisabled()};
  `
}
.buttonVariantDanger(color; background; border) {
  ${buttonColor(color; background; border)};
  &:hover {
    .buttonColor(btnPrimaryColor, colorPalette(color, 5), colorPalette(color, 5));
  }
  &:focus {
    .buttonColor(colorPalette(color, 5), componentBackground, colorPalette(color, 5));
  }
  &:active,
  &.active {
    ${buttonColor(
      btnPrimaryColor, colorPalette(color, 7), colorPalette(color, 7)
    )};
  }
  .buttonDisabled();
}

function buttonVariantGhost(color) {
  return css`
  ${buttonColor(color, transparent, color)};

  text-shadow: none;
  &:hover,
  &:focus {
    ${buttonColor(colorPalette(color, 5), transparent, colorPalette(color, 5))};
  }
  &:active,
  &.active {
    ${buttonColor(colorPalette(color, 7), transparent, colorPalette(color, 7))};
  }
  ${buttonDisabled()};
`
}

// buttonColor defintion
function buttonColor(color, background, border) {
  return css`
  color: ${color};
  background-color: ${background};
  border-color: ${border};
  /* // a inside Button which only work in Chrome */
  /* http://stackoverflow.com/a/17253457 */
  & > a:only-child {
    color: currentColor;
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: transparent;
      content: '';
    }
  }
  `
}


.buttonGroupBase(btnClassName) {
  position: relative;
  display: inlineBlock;
  > .@{btnClassName},
  > span > .@{btnClassName} {
    position: relative;
    &:hover,
    &:focus,
    &:active,
    &.active {
      zIndex: 2;
    }
    &:disabled {
      zIndex: 0;
    }
  }
  // size
  &Lg > .@{btnClassName},
  &Lg > span > .@{btnClassName} {
    .buttonSize(btnHeightLg; btnPaddingLg; btnFontSizeLg; 0);

    lineHeight: btnHeightLg - 2px;
  }
  &Sm > .@{btnClassName},
  &Sm > span > .@{btnClassName} {
    .buttonSize(btnHeightSm; btnPaddingSm; fontSizeBase; 0);

    lineHeight: btnHeightSm - 2px;
    > .@{iconfontCssPrefix} {
      fontSize: fontSizeBase;
    }
  }
}
// Base styles of buttons
// TODO: check which other components are using this .btn; mixin
// --------------------------------------------------
const btn = css`
  position: relative;
  display: inlineBlock;
  font-weight: btnFontWeight;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: btnBorderWidth btnBorderStyle transparent;
  box-Shadow: ${btnShadow};
  cursor: pointer;
  transition: all 0.3s easeInOut;
  user-select: none;
  touch-action: manipulation;
  ${buttonSize(btnHeightBase, btnPaddingBase, fontSizeBase, btnBorderRadiusBase)};

  > .${iconfontCssPrefix} {
    line-Height: 1;
  }
  &,
  &:active,
  &:focus {
    outline: 0;
  }
  &:not([disabled]):hover {
    text-Decoration: none;
  }
  &:not([disabled]):active {
    outline: 0;
    box-Shadow: none;
  }
  &.disabled,
  &[disabled] {
    cursor: notAllowed;
    > * {
      pointer-Events: none;
    }
  }
  &Lg {
    ${buttonSize(btnHeightLg, btnPaddingLg, btnFontSizeLg, btnBorderRadiusBase)};
  }
  &Sm {
    ${buttonSize(btnHeightSm, btnPaddingSm, btnFontSizeSm, btnBorderRadiusSm)};
  }
`


// primary button style
.btnPrimary() {
  .buttonVariantPrimary(btnPrimaryColor; btnPrimaryBg);
}
// default button style
.btnDefault() {
  .buttonVariantOther(btnDefaultColor; btnDefaultBg; btnDefaultBorder);
  &:hover,
  &:focus,
  &:active,
  &.active {
    textDecoration: none;
    background: btnDefaultBg;
  }
}
// ghost button style
.btnGhost() {
  .buttonVariantOther(btnGhostColor, btnGhostBg, btnGhostBorder);
}
// dashed button style
.btnDashed() {
  .buttonVariantOther(btnDefaultColor, btnDefaultBg, btnDefaultBorder);

  borderStyle: dashed;
}
// danger button style
.btnDanger() {
  .buttonVariantDanger(btnDangerColor, btnDangerBg, btnDangerBorder);
}
// round button
.btnRound(btnClassName: btn) {
  .buttonSize(btnCircleSize; 0 btnCircleSize / 2; fontSizeBase + 2px; btnCircleSize);
  &.@{btnClassName}Lg {
    .buttonSize(
      btnCircleSizeLg; 0 btnCircleSizeLg / 2; btnFontSizeLg + 2px; btnCircleSizeLg
    );
  }
  &.@{btnClassName}Sm {
    .buttonSize(
      btnCircleSizeSm; 0 btnCircleSizeSm / 2; fontSizeBase; btnCircleSizeSm
    );
  }
}
// circle button: the content only contains icon
.btnCircle(btnClassName: btn) {
  .square(btnCircleSize);
  .buttonSize(btnCircleSize; 0; fontSizeBase + 2px; 50%);
  &.@{btnClassName}Lg {
    .square(btnCircleSizeLg);
    .buttonSize(btnCircleSizeLg; 0; btnFontSizeLg + 2px; 50%);
  }
  &.@{btnClassName}Sm {
    .square(btnCircleSizeSm);
    .buttonSize(btnCircleSizeSm; 0; fontSizeBase; 50%);
  }
}
// Horizontal button groups style
// --------------------------------------------------
.btnGroup(btnClassName: btn) {
  .buttonGroupBase(btnClassName);
  .@{btnClassName} + .@{btnClassName},
  .@{btnClassName} + &,
  span + .@{btnClassName},
  .@{btnClassName} + span,
  > span + span,
  & + .@{btnClassName},
  & + & {
    marginLeft: -1px;
  }
  .@{btnClassName}Primary + .@{btnClassName}:not(.@{btnClassName}Primary):not([disabled]) {
    borderLeftColor: transparent;
  }
  .@{btnClassName} {
    borderRadius: 0;
  }
  > .@{btnClassName}:firstChild,
  > span:firstChild > .@{btnClassName} {
    marginLeft: 0;
  }
  > .@{btnClassName}:onlyChild {
    borderRadius: btnBorderRadiusBase;
  }
  > span:onlyChild > .@{btnClassName} {
    borderRadius: btnBorderRadiusBase;
  }
  > .@{btnClassName}:firstChild:not(:lastChild),
  > span:firstChild:not(:lastChild) > .@{btnClassName} {
    borderTopLeftRadius: btnBorderRadiusBase;
    borderBottomLeftRadius: btnBorderRadiusBase;
  }
  > .@{btnClassName}:lastChild:not(:firstChild),
  > span:lastChild:not(:firstChild) > .@{btnClassName} {
    borderTopRightRadius: btnBorderRadiusBase;
    borderBottomRightRadius: btnBorderRadiusBase;
  }
  &Sm {
    > .@{btnClassName}:onlyChild {
      borderRadius: btnBorderRadiusSm;
    }
    > span:onlyChild > .@{btnClassName} {
      borderRadius: btnBorderRadiusSm;
    }
    > .@{btnClassName}:firstChild:not(:lastChild),
    > span:firstChild:not(:lastChild) > .@{btnClassName} {
      borderTopLeftRadius: btnBorderRadiusSm;
      borderBottomLeftRadius: btnBorderRadiusSm;
    }
    > .@{btnClassName}:lastChild:not(:firstChild),
    > span:lastChild:not(:firstChild) > .@{btnClassName} {
      borderTopRightRadius: btnBorderRadiusSm;
      borderBottomRightRadius: btnBorderRadiusSm;
    }
  }
  & > & {
    float: left;
  }
  & > &:not(:firstChild):not(:lastChild) > .@{btnClassName} {
    borderRadius: 0;
  }
  & > &:firstChild:not(:lastChild) {
    > .@{btnClassName}:lastChild {
      paddingRight: 8px;
      borderTopRightRadius: 0;
      borderBottomRightRadius: 0;
    }
  }
  & > &:lastChild:not(:firstChild) > .@{btnClassName}:firstChild {
    paddingLeft: 8px;
    borderTopLeftRadius: 0;
    borderBottomLeftRadius: 0;
  }
}

