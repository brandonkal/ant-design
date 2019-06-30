import { css } from '@emotion/core';

export const global = css`
  input[type='radio'][disabled],
  input[type='checkbox'][disabled] {
    cursor: not-allowed;
  }

  form input[type='radio'],
  form input[type='checkbox'] {
    width: 14px;
    height: 14px;
  }

  @keyframes antShowHelpIn {
    0% {
      transform: translateY(-5px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes antShowHelpOut {
    to {
      transform: translateY(-5px);
      opacity: 0;
    }
  }

  @keyframes diffZoomIn1 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes diffZoomIn2 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes diffZoomIn3 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const antFormItem = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  margin-bottom: 24px;
  vertical-align: top;

  & label {
    position: relative;
  }

  & label > .anticon {
    font-size: 14px;
    vertical-align: top;
  }

  & .ant-switch {
    margin: 2px 0 4px;
  }
`;

export const antFormItemWithHelp = css`
  margin-bottom: 5px;
`;

export const antAdvancedSearchForm = css`
  & .${antFormItem} {
    margin-bottom: 24px;
  }

  & .${antFormItemWithHelp} {
    margin-bottom: 5px;
  }
`;

export const antCascaderPicker = css`
  form & {
    width: 100%;
  }
`;

export const disabled = css`
  input[type='radio']&,
  input[type='checkbox']& {
    cursor: not-allowed;
  }
`;

export const antCheckbox = css`
  &.${disabled} label {
    cursor: not-allowed;
  }
`;

export const antCheckboxInline = css`
  &.${disabled} {
    cursor: not-allowed;
  }

  form & {
    display: inline-block;
    margin-left: 8px;
    font-weight: normal;
    vertical-align: middle;
    cursor: pointer;
  }

  form &:first-child {
    margin-left: 0;
  }
`;

export const antCheckboxVertical = css`
  &.${disabled} {
    cursor: not-allowed;
  }

  form & {
    display: block;
  }

  form & + & {
    margin-left: 0;
  }
`;

export const antFormItemLabel = css`
  & > label {
    color: rgba(0, 0, 0, 0.85);
  }

  & > label::after {
    content: ':';
    position: relative;
    top: -0.5px;
    margin: 0 8px 0 2px;
  }

  & > label.ant-form-item-no-colon::after {
    content: ' ';
  }

  display: inline-block;
  overflow: hidden;
  line-height: 39.9999px;
  white-space: nowrap;
  text-align: right;
  vertical-align: middle;

  @media (max-width: 575px) {
    & {
      display: block;
      width: 100%;
    }

    & {
      display: block;
      margin: 0;
      padding: 0 0 8px;
      line-height: 1.5;
      white-space: initial;
      text-align: left;
    }

    & label::after {
      display: none;
    }
  }
`;

export const antCol24 = css`
  &.${antFormItemLabel} {
    display: block;
    margin: 0;
    padding: 0 0 8px;
    line-height: 1.5;
    white-space: initial;
    text-align: left;
  }

  &.${antFormItemLabel} label::after {
    display: none;
  }
`;

export const antColLg24 = css`
  @media (max-width: 1199px) {
    &.${antFormItemLabel} {
      display: block;
      margin: 0;
      padding: 0 0 8px;
      line-height: 1.5;
      white-space: initial;
      text-align: left;
    }

    &.${antFormItemLabel} label::after {
      display: none;
    }
  }
`;

export const antColMd24 = css`
  @media (max-width: 991px) {
    &.${antFormItemLabel} {
      display: block;
      margin: 0;
      padding: 0 0 8px;
      line-height: 1.5;
      white-space: initial;
      text-align: left;
    }

    &.${antFormItemLabel} label::after {
      display: none;
    }
  }
`;

export const antColSm24 = css`
  @media (max-width: 767px) {
    &.${antFormItemLabel} {
      display: block;
      margin: 0;
      padding: 0 0 8px;
      line-height: 1.5;
      white-space: initial;
      text-align: left;
    }

    &.${antFormItemLabel} label::after {
      display: none;
    }
  }
`;

export const antColXl24 = css`
  &.${antFormItemLabel} {
    display: block;
    margin: 0;
    padding: 0 0 8px;
    line-height: 1.5;
    white-space: initial;
    text-align: left;
  }

  &.${antFormItemLabel} label::after {
    display: none;
  }

  @media (max-width: 1599px) {
    &.${antFormItemLabel} {
      display: block;
      margin: 0;
      padding: 0 0 8px;
      line-height: 1.5;
      white-space: initial;
      text-align: left;
    }

    &.${antFormItemLabel} label::after {
      display: none;
    }
  }
`;

export const antColXs24 = css`
  @media (max-width: 575px) {
    &.${antFormItemLabel} {
      display: block;
      margin: 0;
      padding: 0 0 8px;
      line-height: 1.5;
      white-space: initial;
      text-align: left;
    }

    &.${antFormItemLabel} label::after {
      display: none;
    }
  }
`;

export const antForm = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';

  & legend {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 0;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    line-height: inherit;
    border: 0;
    border-bottom: 1px solid #d9d9d9;
  }

  & label {
    font-size: 14px;
  }

  & input[type='search'] {
    box-sizing: border-box;
  }

  & input[type='radio'],
  & input[type='checkbox'] {
    line-height: normal;
  }

  & input[type='file'] {
    display: block;
  }

  & input[type='range'] {
    display: block;
    width: 100%;
  }

  & select[multiple],
  & select[size] {
    height: auto;
  }

  & input[type='file']:focus,
  & input[type='radio']:focus,
  & input[type='checkbox']:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }

  & output {
    display: block;
    padding-top: 15px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const antFormExplain = css`
  clear: both;
  min-height: 22px;
  margin-top: -2px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  margin-bottom: -1px;
`;

export const antFormExtra = css`
  clear: both;
  min-height: 22px;
  margin-top: -2px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  padding-top: 4px;
`;

export const antFormItemRequired = css`
  &::before {
    display: inline-block;
    margin-right: 4px;
    color: #f5222d;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
`;

export const antFormHideRequiredMark = css`
  & .${antFormItemRequired}::before {
    display: none;
  }
`;

export const antFormItemControlWrapper = css`
  @media (max-width: 575px) {
    & {
      display: block;
      width: 100%;
    }
  }
`;

export const antFormText = css`
  display: inline-block;
  padding-right: 8px;
`;

export const hasFeedback = css`
  form & .${antInput} {
    padding-right: 24px;
  }

  form & .ant-input-password-icon {
    margin-right: 18px;
  }

  form & > .${antSelect} .ant-select-arrow,
  form & > .${antSelect} .ant-select-selection__clear,
  form & :not(.ant-input-group-addon) > .${antSelect} .ant-select-arrow,
  form & :not(.ant-input-group-addon) > .${antSelect} .ant-select-selection__clear {
    right: 28px;
  }

  form & > .${antSelect} .ant-select-selection-selected-value,
  form & :not(.ant-input-group-addon) > .${antSelect} .ant-select-selection-selected-value {
    padding-right: 42px;
  }

  form & .ant-cascader-picker-arrow {
    margin-right: 17px;
  }

  form & .ant-cascader-picker-clear {
    right: 28px;
  }

  form & .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix {
    right: 28px;
  }

  form & .ant-calendar-picker-icon,
  form & .ant-time-picker-icon,
  form & .ant-calendar-picker-clear,
  form & .ant-time-picker-clear {
    right: 28px;
  }
`;

export const antFormInline = css`
  & .${antFormItem} {
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 0;
  }

  & .${antFormItemWithHelp} {
    margin-bottom: 24px;
  }

  & .${antFormItem} > .${antFormItemControlWrapper}, & .${antFormItem} > .${antFormItemLabel} {
    display: inline-block;
    vertical-align: top;
  }

  & .${antFormText} {
    display: inline-block;
  }

  & .${hasFeedback} {
    display: inline-block;
  }
`;

export const antFormItemChildren = css`
  position: relative;
`;

export const antFormItemControl = css`
  position: relative;
  line-height: 40px;
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

export const antFormItemLabelLeft = css`
  text-align: left;
`;

export const antFormSplit = css`
  display: block;
  text-align: center;
`;

export const antFormVertical = css`
  & .${antFormItemLabel} {
    display: block;
    margin: 0;
    padding: 0 0 8px;
    line-height: 1.5;
    white-space: initial;
    text-align: left;
  }

  & .${antFormItemLabel} label::after {
    display: none;
  }

  & .${antFormItem} {
    padding-bottom: 8px;
  }

  & .${antFormItemControl} {
    line-height: 1.5;
  }

  & .${antFormExplain} {
    margin-top: 2px;
    margin-bottom: -5px;
  }

  & .${antFormExtra} {
    margin-top: 2px;
    margin-bottom: -4px;
  }
`;

export const antInput = css`
  form textarea& {
    height: auto;
    margin-bottom: 4px;
  }
`;

export const antSelect = css`
  form & {
    width: 100%;
  }
`;

export const antInputGroupWrapper = css`
  form & {
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const antInputGroup = css`
  form & .${antSelect}, form & .${antCascaderPicker} {
    width: auto;
  }

  form :not(.${antInputGroupWrapper}) > & {
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const antInputGroupWrap = css`
  & .ant-select-selection {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & .ant-select-selection:hover {
    border-color: #d9d9d9;
  }

  & .ant-select-selection--single {
    height: 40px;
    margin-left: -1px;
    background-color: rgba(0, 0, 0, 0.07);
  }

  & .ant-select-selection--single .ant-select-selection__rendered {
    padding-right: 25px;
    padding-left: 8px;
    line-height: 30px;
  }

  & .ant-select-open .ant-select-selection {
    border-color: #d9d9d9;
    box-shadow: none;
  }
`;

export const antInputNumber = css`
  form & + .${antFormText} {
    margin-left: 8px;
  }
`;

export const antInputNumberHandlerWrap = css`
  form & {
    z-index: 2;
  }
`;

export const antRadio = css`
  &.${disabled} label {
    cursor: not-allowed;
  }
`;

export const antRadioInline = css`
  &.${disabled} {
    cursor: not-allowed;
  }

  form & {
    display: inline-block;
    margin-left: 8px;
    font-weight: normal;
    vertical-align: middle;
    cursor: pointer;
  }

  form &:first-child {
    margin-left: 0;
  }
`;

export const antRadioVertical = css`
  &.${disabled} {
    cursor: not-allowed;
  }

  form & {
    display: block;
  }

  form & + & {
    margin-left: 0;
  }
`;

export const antUpload = css`
  form & {
    background: transparent;
  }
`;

export const hasError = css`
  &.${hasFeedback} .ant-form-item-children-icon {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 32px;
    height: 20px;
    margin-top: -10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    visibility: visible;
    animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    pointer-events: none;
  }

  &.${hasFeedback} .ant-form-item-children-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  & .${antFormExplain}, & .${antFormSplit} {
    color: #f5222d;
  }

  & .${antInput}, & .${antInput}:hover {
    border-color: #f5222d;
  }

  & .${antInput}:focus {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }

  & .${antInput}:not([disabled]):hover {
    border-color: #f5222d;
  }

  & .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }

  & .ant-input-affix-wrapper .${antInput}, & .ant-input-affix-wrapper .${antInput}:hover {
    background-color: #fff;
    border-color: #f5222d;
  }

  & .ant-input-affix-wrapper .${antInput}:focus {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }

  & .ant-input-affix-wrapper:hover .${antInput}:not(.ant-input-disabled) {
    border-color: #f5222d;
  }

  & .ant-input-prefix {
    color: #f5222d;
  }

  & .ant-input-group-addon {
    color: #f5222d;
    background-color: #fff;
    border-color: #f5222d;
  }

  & .${hasFeedback} {
    color: #f5222d;
  }

  &.${hasFeedback} .ant-form-item-children-icon {
    color: #f5222d;
    animation-name: diffZoomIn2 !important;
  }

  & .ant-select-selection {
    border-color: #f5222d;
  }

  & .ant-select-selection:hover {
    border-color: #f5222d;
  }

  & .ant-select-open .ant-select-selection,
  & .ant-select-focused .ant-select-selection {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }

  & .${antSelect}.ant-select-auto-complete .${antInput}:focus {
    border-color: #f5222d;
  }

  & .ant-input-group-addon .ant-select-selection {
    border-color: transparent;
    box-shadow: none;
  }

  & .ant-calendar-picker-icon::after,
  & .ant-time-picker-icon::after,
  & .ant-picker-icon::after,
  & .ant-select-arrow,
  & .ant-cascader-picker-arrow {
    color: #f5222d;
  }

  & .${antInputNumber}, & .ant-time-picker-input {
    border-color: #f5222d;
  }

  & .ant-input-number-focused,
  & .ant-time-picker-input-focused,
  & .${antInputNumber}:focus, & .ant-time-picker-input:focus {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }

  & .${antInputNumber}:not([disabled]):hover,
  & .ant-time-picker-input:not([disabled]):hover {
    border-color: #f5222d;
  }

  & .ant-mention-wrapper .ant-mention-editor,
  & .ant-mention-wrapper .ant-mention-editor:not([disabled]):hover {
    border-color: #f5222d;
  }

  & .ant-mention-wrapper.ant-mention-active:not([disabled]) .ant-mention-editor,
  & .ant-mention-wrapper .ant-mention-editor:not([disabled]):focus {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }

  & .${antCascaderPicker}:focus .ant-cascader-input {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }

  & .ant-transfer-list {
    border-color: #f5222d;
  }

  & .ant-transfer-list-search:not([disabled]) {
    border-color: #d9d9d9;
  }

  & .ant-transfer-list-search:not([disabled]):hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }

  & .ant-transfer-list-search:not([disabled]):focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const hasSuccess = css`
  &.${hasFeedback} .ant-form-item-children-icon {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 32px;
    height: 20px;
    margin-top: -10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    visibility: visible;
    animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    pointer-events: none;
  }

  &.${hasFeedback} .ant-form-item-children-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  &.${hasFeedback} .ant-form-item-children-icon {
    color: #52c41a;
    animation-name: diffZoomIn1 !important;
  }
`;

export const hasWarning = css`
  &.${hasFeedback} .ant-form-item-children-icon {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 32px;
    height: 20px;
    margin-top: -10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    visibility: visible;
    animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    pointer-events: none;
  }

  &.${hasFeedback} .ant-form-item-children-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  & .${antFormExplain}, & .${antFormSplit} {
    color: #faad14;
  }

  & .${antInput}, & .${antInput}:hover {
    border-color: #faad14;
  }

  & .${antInput}:focus {
    border-color: #ffc53d;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  }

  & .${antInput}:not([disabled]):hover {
    border-color: #faad14;
  }

  & .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: #ffc53d;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  }

  & .ant-input-affix-wrapper .${antInput}, & .ant-input-affix-wrapper .${antInput}:hover {
    background-color: #fff;
    border-color: #faad14;
  }

  & .ant-input-affix-wrapper .${antInput}:focus {
    border-color: #ffc53d;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  }

  & .ant-input-affix-wrapper:hover .${antInput}:not(.ant-input-disabled) {
    border-color: #faad14;
  }

  & .ant-input-prefix {
    color: #faad14;
  }

  & .ant-input-group-addon {
    color: #faad14;
    background-color: #fff;
    border-color: #faad14;
  }

  & .${hasFeedback} {
    color: #faad14;
  }

  &.${hasFeedback} .ant-form-item-children-icon {
    color: #faad14;
    animation-name: diffZoomIn3 !important;
  }

  & .ant-select-selection {
    border-color: #faad14;
  }

  & .ant-select-selection:hover {
    border-color: #faad14;
  }

  & .ant-select-open .ant-select-selection,
  & .ant-select-focused .ant-select-selection {
    border-color: #ffc53d;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  }

  & .ant-calendar-picker-icon::after,
  & .ant-time-picker-icon::after,
  & .ant-picker-icon::after,
  & .ant-select-arrow,
  & .ant-cascader-picker-arrow {
    color: #faad14;
  }

  & .${antInputNumber}, & .ant-time-picker-input {
    border-color: #faad14;
  }

  & .ant-input-number-focused,
  & .ant-time-picker-input-focused,
  & .${antInputNumber}:focus, & .ant-time-picker-input:focus {
    border-color: #ffc53d;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  }

  & .${antInputNumber}:not([disabled]):hover,
  & .ant-time-picker-input:not([disabled]):hover {
    border-color: #faad14;
  }

  & .${antCascaderPicker}:focus .ant-cascader-input {
    border-color: #ffc53d;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
  }
`;

export const isValidating = css`
  &.${hasFeedback} .ant-form-item-children-icon {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 32px;
    height: 20px;
    margin-top: -10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    visibility: visible;
    animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    pointer-events: none;
  }

  &.${hasFeedback} .ant-form-item-children-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  &.${hasFeedback} .ant-form-item-children-icon {
    display: inline-block;
    color: #1890ff;
  }
`;

export const showHelpAppear = css`
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.show-help-appear-active {
    animation-name: antShowHelpIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const showHelpEnter = css`
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.show-help-enter-active {
    animation-name: antShowHelpIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const showHelpLeave = css`
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.show-help-leave-active {
    animation-name: antShowHelpOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;
