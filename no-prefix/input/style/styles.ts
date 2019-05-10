import { css, injectGlobal } from '@emotion/core';

injectGlobal``;

export const antInput = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
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

  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  &:focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }

  &[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }

  textarea& {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
  }
`;

export const antInputDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 1;

  &:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
`;

export const antInputAffixWrapper = css`
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
  width: 100%;
  text-align: start;


&:hover .${antInput}:not(.${antInputDisabled}) {
  border-color: #40a9ff;
  border-right-width: 1px !important;
}

& .${antInput} {
  position: relative;
  text-align: inherit;
}

& .ant-input-prefix, & .ant-input-suffix {
  position: absolute;
  top: 50%;
  z-index: 2;
  color: rgba(0, 0, 0, 0.65);
  line-height: 0;
  transform: translateY(-50%);
}

& .ant-input-prefix :not(.anticon), & .ant-input-suffix :not(.anticon) {
  line-height: 1.5;
}

& .ant-input-prefix {
  left: 12px;
}

& .ant-input-suffix {
  right: 12px;
}

& .${antInput}:not(:first-child) {
  padding-left: 30px;
}

& .${antInput}:not(:last-child) {
  padding-right: 30px;
}

& .${antInput} {
  min-height: 100%;
}

`;

export const antInputClearIcon = css`
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  vertical-align: top;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }

  &:active {
    color: rgba(0, 0, 0, 0.65);
  }

  & + i {
    margin-left: 6px;
  }
`;

export const antInputGroup = css`
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
  display: table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  &[class*='col-'] {
    float: none;
    padding-right: 0;
    padding-left: 0;
  }

  & > [class*='col-'] {
    padding-right: 8px;
  }

  & > [class*='col-']:last-child {
    padding-right: 0;
  }

  & > .${antInput} {
    display: table-cell;
  }

  & > .${antInput}:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  & .${antInput} {
    float: left;
    width: 100%;
    margin-bottom: 0;
    text-align: inherit;
  }

  & .${antInput}:focus {
    z-index: 1;
    border-right-width: 1px;
  }

  & .${antInput}:hover {
    z-index: 1;
    border-right-width: 1px;
  }

  & > .${antInput}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > .${antInput}:first-child .ant-select .ant-select-selection {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > .${antInputAffixWrapper}:not(:first-child) .${antInput} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > .${antInputAffixWrapper}:not(:last-child) .${antInput} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > .${antInput}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > .${antInput}:last-child .ant-select .ant-select-selection {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & .${antInputAffixWrapper} {
    display: table-cell;
    float: left;
    width: 100%;
  }

  &.ant-input-group-compact {
    display: block;
    zoom: 1;
  }

  &.ant-input-group-compact::before,
  &.ant-input-group-compact::after {
    display: table;
    content: '';
  }

  &.ant-input-group-compact::after {
    clear: both;
  }

  &.ant-input-group-compact-addon:not(:first-child):not(:last-child),
  &.ant-input-group-compact-wrap:not(:first-child):not(:last-child),
  &.ant-input-group-compact > .${antInput}:not(:first-child):not(:last-child) {
    border-right-width: 1px;
  }

  &.ant-input-group-compact-addon:not(:first-child):not(:last-child):hover,
  &.ant-input-group-compact-wrap:not(:first-child):not(:last-child):hover,
  &.ant-input-group-compact > .${antInput}:not(:first-child):not(:last-child):hover {
    z-index: 1;
  }

  &.ant-input-group-compact-addon:not(:first-child):not(:last-child):focus,
  &.ant-input-group-compact-wrap:not(:first-child):not(:last-child):focus,
  &.ant-input-group-compact > .${antInput}:not(:first-child):not(:last-child):focus {
    z-index: 1;
  }

  &.ant-input-group-compact > * {
    display: inline-block;
    float: none;
    vertical-align: top;
    border-radius: 0;
  }

  &.ant-input-group-compact > *:not(:last-child) {
    margin-right: -1px;
    border-right-width: 1px;
  }

  &.ant-input-group-compact .${antInput} {
    float: none;
  }

  &.ant-input-group-compact > .ant-select > .ant-select-selection,
  &.ant-input-group-compact
    > .ant-calendar-picker
    .${antInput},
    &.ant-input-group-compact
    > .ant-select-auto-complete
    .${antInput},
    &.ant-input-group-compact
    > .ant-cascader-picker
    .${antInput},
    &.ant-input-group-compact
    > .ant-mention-wrapper
    .ant-mention-editor,
  &.ant-input-group-compact > .ant-time-picker .ant-time-picker-input {
    border-right-width: 1px;
    border-radius: 0;
  }

  &.ant-input-group-compact > .ant-select > .ant-select-selection:hover,
  &.ant-input-group-compact
    > .ant-calendar-picker
    .${antInput}:hover,
    &.ant-input-group-compact
    > .ant-select-auto-complete
    .${antInput}:hover,
    &.ant-input-group-compact
    > .ant-cascader-picker
    .${antInput}:hover,
    &.ant-input-group-compact
    > .ant-mention-wrapper
    .ant-mention-editor:hover,
  &.ant-input-group-compact > .ant-time-picker .ant-time-picker-input:hover {
    z-index: 1;
  }

  &.ant-input-group-compact > .ant-select > .ant-select-selection:focus,
  &.ant-input-group-compact
    > .ant-calendar-picker
    .${antInput}:focus,
    &.ant-input-group-compact
    > .ant-select-auto-complete
    .${antInput}:focus,
    &.ant-input-group-compact
    > .ant-cascader-picker
    .${antInput}:focus,
    &.ant-input-group-compact
    > .ant-mention-wrapper
    .ant-mention-editor:focus,
  &.ant-input-group-compact > .ant-time-picker .ant-time-picker-input:focus {
    z-index: 1;
  }

  &.ant-input-group-compact > *:first-child,
  &.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,
  &.ant-input-group-compact
    > .ant-calendar-picker:first-child
    .${antInput},
    &.ant-input-group-compact
    > .ant-select-auto-complete:first-child
    .${antInput},
    &.ant-input-group-compact
    > .ant-cascader-picker:first-child
    .${antInput},
    &.ant-input-group-compact
    > .ant-mention-wrapper:first-child
    .ant-mention-editor,
  &.ant-input-group-compact > .ant-time-picker:first-child .ant-time-picker-input {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &.ant-input-group-compact > *:last-child,
  &.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,
  &.ant-input-group-compact
    > .ant-calendar-picker:last-child
    .${antInput},
    &.ant-input-group-compact
    > .ant-select-auto-complete:last-child
    .${antInput},
    &.ant-input-group-compact
    > .ant-cascader-picker:last-child
    .${antInput},
    &.ant-input-group-compact
    > .ant-cascader-picker-focused:last-child
    .${antInput},
    &.ant-input-group-compact
    > .ant-mention-wrapper:last-child
    .ant-mention-editor,
  &.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input {
    border-right-width: 1px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &.ant-input-group-compact > .ant-select-auto-complete .${antInput} {
    vertical-align: top;
  }
`;

export const antInputGroupAddon = css`
  display: table-cell;

  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  width: 1px;
  white-space: nowrap;
  vertical-align: middle;

  position: relative;
  padding: 0 11px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: normal;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;

  & .ant-select {
    margin: -5px -11px;
  }

  & .ant-select .ant-select-selection {
    margin: -1px;
    background-color: inherit;
    border: 1px solid transparent;
    box-shadow: none;
  }

  & .ant-select-open .ant-select-selection,
  & .ant-select-focused .ant-select-selection {
    color: #1890ff;
  }

  & > i:only-child::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:first-child .ant-select .ant-select-selection {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:first-child {
    border-right: 0;
  }

  &:last-child {
    border-left: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-child .ant-select .ant-select-selection {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const antInputGroupLg = css`
  & .${antInput}, & > .${antInputGroupAddon} {
    height: 40px;
    padding: 6px 11px;
    font-size: 16px;
  }

  & .ant-select-selection--single {
    height: 40px;
  }
`;

export const antInputGroupSm = css`
  & .${antInput}, & > .${antInputGroupAddon} {
    height: 24px;
    padding: 1px 7px;
  }

  & .ant-select-selection--single {
    height: 24px;
  }
`;

export const antInputGroupWrap = css`
  display: table-cell;

  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  width: 1px;
  white-space: nowrap;
  vertical-align: middle;

  & > * {
    display: block !important;
  }
`;

export const antInputGroupWrapper = css`
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;
`;

export const antInputLg = css`
  height: 40px;
  padding: 6px 11px;
  font-size: 16px;
`;

export const antInputPasswordIcon = css`
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #333;
  }
`;

export const antInputSearchEnterButton = css`
  & input {
    border-right: 0;
  }

  & + .${antInputGroupAddon}, & input + .${antInputGroupAddon} {
    padding: 0;
    border: 0;
  }

  & + .${antInputGroupAddon} .ant-input-search-button,
  & input + .${antInputGroupAddon} .ant-input-search-button {
    width: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const antInputSearchIcon = css`
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const antInputSm = css`
  height: 24px;
  padding: 1px 7px;
`;
