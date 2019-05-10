import { css, injectGlobal } from '@emotion/core';

injectGlobal`
    html,
    body {
        width: 100%;
        height: 100%;
    }

    input::-ms-clear,
    input::-ms-reveal {
        display: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    article,
    aside,
    dialog,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
        display: block;
    }

    body {
        margin: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
            "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
            "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
        font-variant: tabular-nums;
        line-height: 1.5;
        background-color: #fff;
        font-feature-settings: "tnum";
    }

    [tabindex="-1"]:focus {
        outline: none !important;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
    }

    p {
        margin-top: 0;
        margin-bottom: 1em;
    }

    abbr[title],
    abbr[data-original-title] {
        text-decoration: underline;
        text-decoration: underline dotted;
        border-bottom: 0;
        cursor: help;
    }

    address {
        margin-bottom: 1em;
        font-style: normal;
        line-height: inherit;
    }

    input[type="text"],
    input[type="password"],
    input[type="number"],
    textarea {
        -webkit-appearance: none;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1em;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: 500;
    }

    dd {
        margin-bottom: 0.5em;
        margin-left: 0;
    }

    blockquote {
        margin: 0 0 1em;
    }

    dfn {
        font-style: italic;
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    a {
        color: #1890ff;
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        transition: color 0.3s;
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: #40a9ff;
    }

    a:active {
        color: #096dd9;
    }

    a:active,
    a:hover {
        text-decoration: none;
        outline: 0;
    }

    a[disabled] {
        color: rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
        pointer-events: none;
    }

    pre,
    code,
    kbd,
    samp {
        font-size: 1em;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo,
            Courier, monospace;
    }

    pre {
        margin-top: 0;
        margin-bottom: 1em;
        overflow: auto;
    }

    figure {
        margin: 0 0 1em;
    }

    img {
        vertical-align: middle;
        border-style: none;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    a,
    area,
    button,
    [role="button"],
    input:not([type="range"]),
    label,
    select,
    summary,
    textarea {
        touch-action: manipulation;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.75em;
        padding-bottom: 0.3em;
        color: rgba(0, 0, 0, 0.45);
        text-align: left;
        caption-side: bottom;
    }

    th {
        text-align: inherit;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    input[type="radio"],
    input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }

    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
        -webkit-appearance: listbox;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        margin: 0;
        padding: 0;
        border: 0;
    }

    legend {
        display: block;
        width: 100%;
        max-width: 100%;
        margin-bottom: 0.5em;
        padding: 0;
        color: inherit;
        font-size: 1.5em;
        line-height: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none !important;
    }

    mark {
        padding: 0.2em;
        background-color: #feffe6;
    }

    ::selection {
        color: #fff;
        background: #1890ff;
    }

    @keyframes antFadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes antFadeOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    @keyframes antMoveDownIn {
        0% {
            transform: translateY(100%);
            transform-origin: 0 0;
            opacity: 0;
        }

        100% {
            transform: translateY(0%);
            transform-origin: 0 0;
            opacity: 1;
        }
    }

    @keyframes antMoveDownOut {
        0% {
            transform: translateY(0%);
            transform-origin: 0 0;
            opacity: 1;
        }

        100% {
            transform: translateY(100%);
            transform-origin: 0 0;
            opacity: 0;
        }
    }

    @keyframes antMoveLeftIn {
        0% {
            transform: translateX(-100%);
            transform-origin: 0 0;
            opacity: 0;
        }

        100% {
            transform: translateX(0%);
            transform-origin: 0 0;
            opacity: 1;
        }
    }

    @keyframes antMoveLeftOut {
        0% {
            transform: translateX(0%);
            transform-origin: 0 0;
            opacity: 1;
        }

        100% {
            transform: translateX(-100%);
            transform-origin: 0 0;
            opacity: 0;
        }
    }

    @keyframes antMoveRightIn {
        0% {
            transform: translateX(100%);
            transform-origin: 0 0;
            opacity: 0;
        }

        100% {
            transform: translateX(0%);
            transform-origin: 0 0;
            opacity: 1;
        }
    }

    @keyframes antMoveRightOut {
        0% {
            transform: translateX(0%);
            transform-origin: 0 0;
            opacity: 1;
        }

        100% {
            transform: translateX(100%);
            transform-origin: 0 0;
            opacity: 0;
        }
    }

    @keyframes antMoveUpIn {
        0% {
            transform: translateY(-100%);
            transform-origin: 0 0;
            opacity: 0;
        }

        100% {
            transform: translateY(0%);
            transform-origin: 0 0;
            opacity: 1;
        }
    }

    @keyframes antMoveUpOut {
        0% {
            transform: translateY(0%);
            transform-origin: 0 0;
            opacity: 1;
        }

        100% {
            transform: translateY(-100%);
            transform-origin: 0 0;
            opacity: 0;
        }
    }

    @keyframes loadingCircle {
        100% {
            transform: rotate(360deg);
        }
    }

    [ant-click-animating="true"],
    [ant-click-animating-without-extra-node="true"] {
        position: relative;
    }

    html {
        --antd-wave-shadow-color: #1890ff;
    }

    [ant-click-animating-without-extra-node="true"]::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        border-radius: inherit;
        box-shadow: 0 0 0 0 #1890ff;
        box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
        opacity: 0.2;
        animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1),
            waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
        animation-fill-mode: forwards;
        content: "";
        pointer-events: none;
    }

    @keyframes waveEffect {
        100% {
            box-shadow: 0 0 0 #1890ff;
            box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
        }
    }

    @keyframes fadeEffect {
        100% {
            opacity: 0;
        }
    }

    @keyframes antSlideUpIn {
        0% {
            transform: scaleY(0.8);
            transform-origin: 0% 0%;
            opacity: 0;
        }

        100% {
            transform: scaleY(1);
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    @keyframes antSlideUpOut {
        0% {
            transform: scaleY(1);
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            transform: scaleY(0.8);
            transform-origin: 0% 0%;
            opacity: 0;
        }
    }

    @keyframes antSlideDownIn {
        0% {
            transform: scaleY(0.8);
            transform-origin: 100% 100%;
            opacity: 0;
        }

        100% {
            transform: scaleY(1);
            transform-origin: 100% 100%;
            opacity: 1;
        }
    }

    @keyframes antSlideDownOut {
        0% {
            transform: scaleY(1);
            transform-origin: 100% 100%;
            opacity: 1;
        }

        100% {
            transform: scaleY(0.8);
            transform-origin: 100% 100%;
            opacity: 0;
        }
    }

    @keyframes antSlideLeftIn {
        0% {
            transform: scaleX(0.8);
            transform-origin: 0% 0%;
            opacity: 0;
        }

        100% {
            transform: scaleX(1);
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    @keyframes antSlideLeftOut {
        0% {
            transform: scaleX(1);
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            transform: scaleX(0.8);
            transform-origin: 0% 0%;
            opacity: 0;
        }
    }

    @keyframes antSlideRightIn {
        0% {
            transform: scaleX(0.8);
            transform-origin: 100% 0%;
            opacity: 0;
        }

        100% {
            transform: scaleX(1);
            transform-origin: 100% 0%;
            opacity: 1;
        }
    }

    @keyframes antSlideRightOut {
        0% {
            transform: scaleX(1);
            transform-origin: 100% 0%;
            opacity: 1;
        }

        100% {
            transform: scaleX(0.8);
            transform-origin: 100% 0%;
            opacity: 0;
        }
    }

    @keyframes antSwingIn {
        0%,
        100% {
            transform: translateX(0);
        }

        20% {
            transform: translateX(-10px);
        }

        40% {
            transform: translateX(10px);
        }

        60% {
            transform: translateX(-5px);
        }

        80% {
            transform: translateX(5px);
        }
    }

    @keyframes antZoomIn {
        0% {
            transform: scale(0.2);
            opacity: 0;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes antZoomOut {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(0.2);
            opacity: 0;
        }
    }

    @keyframes antZoomBigIn {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes antZoomBigOut {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(0.8);
            opacity: 0;
        }
    }

    @keyframes antZoomUpIn {
        0% {
            transform: scale(0.8);
            transform-origin: 50% 0%;
            opacity: 0;
        }

        100% {
            transform: scale(1);
            transform-origin: 50% 0%;
        }
    }

    @keyframes antZoomUpOut {
        0% {
            transform: scale(1);
            transform-origin: 50% 0%;
        }

        100% {
            transform: scale(0.8);
            transform-origin: 50% 0%;
            opacity: 0;
        }
    }

    @keyframes antZoomLeftIn {
        0% {
            transform: scale(0.8);
            transform-origin: 0% 50%;
            opacity: 0;
        }

        100% {
            transform: scale(1);
            transform-origin: 0% 50%;
        }
    }

    @keyframes antZoomLeftOut {
        0% {
            transform: scale(1);
            transform-origin: 0% 50%;
        }

        100% {
            transform: scale(0.8);
            transform-origin: 0% 50%;
            opacity: 0;
        }
    }

    @keyframes antZoomRightIn {
        0% {
            transform: scale(0.8);
            transform-origin: 100% 50%;
            opacity: 0;
        }

        100% {
            transform: scale(1);
            transform-origin: 100% 50%;
        }
    }

    @keyframes antZoomRightOut {
        0% {
            transform: scale(1);
            transform-origin: 100% 50%;
        }

        100% {
            transform: scale(0.8);
            transform-origin: 100% 50%;
            opacity: 0;
        }
    }

    @keyframes antZoomDownIn {
        0% {
            transform: scale(0.8);
            transform-origin: 50% 100%;
            opacity: 0;
        }

        100% {
            transform: scale(1);
            transform-origin: 50% 100%;
        }
    }

    @keyframes antZoomDownOut {
        0% {
            transform: scale(1);
            transform-origin: 50% 100%;
        }

        100% {
            transform: scale(0.8);
            transform-origin: 50% 100%;
            opacity: 0;
        }
    }
`;

export const antClickAnimatingNode = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  border-radius: inherit;
  box-shadow: 0 0 0 0 #1890ff;
  box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
  opacity: 0.2;
  animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1),
    waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-fill-mode: forwards;
  content: '';
  pointer-events: none;
`;

export const antMotionCollapse = css`
  overflow: hidden;
  transition: height 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
`;

export const antMotionCollapseLegacy = css`
  overflow: hidden;
`;

export const antMotionCollapseLegacyActive = css`
  transition: height 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
`;

export const anticon = css`
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  & > * {
    line-height: 1;
  }

  & svg {
    display: inline-block;
  }

  &::before {
    display: none;
  }

  & .anticon-icon {
    display: block;
  }

  &[tabindex] {
    cursor: pointer;
  }
`;

export const anticonSpin = css`
  &::before {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }

  display: inline-block;
  animation: loadingCircle 1s infinite linear;
`;

export const clearfix = css`
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

export const fadeAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.fade-appear-active {
    animation-name: antFadeIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: linear;
`;

export const fadeEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.fade-enter-active {
    animation-name: antFadeIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: linear;
`;

export const fadeLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.fade-leave-active {
    animation-name: antFadeOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: linear;
`;

export const moveDownAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-down-appear-active {
    animation-name: antMoveDownIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveDownEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-down-enter-active {
    animation-name: antMoveDownIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveDownLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-down-leave-active {
    animation-name: antMoveDownOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
`;

export const moveLeftAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-left-appear-active {
    animation-name: antMoveLeftIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveLeftEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-left-enter-active {
    animation-name: antMoveLeftIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveLeftLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-left-leave-active {
    animation-name: antMoveLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
`;

export const moveRightAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-right-appear-active {
    animation-name: antMoveRightIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveRightEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-right-enter-active {
    animation-name: antMoveRightIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveRightLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-right-leave-active {
    animation-name: antMoveRightOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
`;

export const moveUpAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-up-appear-active {
    animation-name: antMoveUpIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveUpEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-up-enter-active {
    animation-name: antMoveUpIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const moveUpLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.move-up-leave-active {
    animation-name: antMoveUpOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
`;

export const slideDownAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-down-appear-active {
    animation-name: antSlideDownIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideDownEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-down-enter-active {
    animation-name: antSlideDownIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideDownLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-down-leave-active {
    animation-name: antSlideDownOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
`;

export const slideLeftAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-left-appear-active {
    animation-name: antSlideLeftIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideLeftEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-left-enter-active {
    animation-name: antSlideLeftIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideLeftLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-left-leave-active {
    animation-name: antSlideLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
`;

export const slideRightAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-right-appear-active {
    animation-name: antSlideRightIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideRightEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-right-enter-active {
    animation-name: antSlideRightIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideRightLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-right-leave-active {
    animation-name: antSlideRightOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
`;

export const slideUpAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-up-appear-active {
    animation-name: antSlideUpIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideUpEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-up-enter-active {
    animation-name: antSlideUpIn;
    animation-play-state: running;
  }

  opacity: 0;
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
`;

export const slideUpLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.slide-up-leave-active {
    animation-name: antSlideUpOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
`;

export const swingAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.swing-appear-active {
    animation-name: antSwingIn;
    animation-play-state: running;
  }
`;

export const swingEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.swing-enter-active {
    animation-name: antSwingIn;
    animation-play-state: running;
  }
`;

export const zoomAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-appear-active {
    animation-name: antZoomIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomBigAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-big-appear-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomBigEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-big-enter-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomBigFastAppear = css`
  animation-duration: 0.1s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-big-fast-appear-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomBigFastEnter = css`
  animation-duration: 0.1s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-big-fast-enter-active {
    animation-name: antZoomBigIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomBigFastLeave = css`
  animation-duration: 0.1s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-big-fast-leave-active {
    animation-name: antZoomBigOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

export const zoomBigLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-big-leave-active {
    animation-name: antZoomBigOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

export const zoomDownAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-down-appear-active {
    animation-name: antZoomDownIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomDownEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-down-enter-active {
    animation-name: antZoomDownIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomDownLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-down-leave-active {
    animation-name: antZoomDownOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

export const zoomEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-enter-active {
    animation-name: antZoomIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-leave-active {
    animation-name: antZoomOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

export const zoomLeftAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-left-appear-active {
    animation-name: antZoomLeftIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomLeftEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-left-enter-active {
    animation-name: antZoomLeftIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomLeftLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-left-leave-active {
    animation-name: antZoomLeftOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

export const zoomRightAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-right-appear-active {
    animation-name: antZoomRightIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomRightEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-right-enter-active {
    animation-name: antZoomRightIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomRightLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-right-leave-active {
    animation-name: antZoomRightOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

export const zoomUpAppear = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-up-appear-active {
    animation-name: antZoomUpIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomUpEnter = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-up-enter-active {
    animation-name: antZoomUpIn;
    animation-play-state: running;
  }

  transform: scale(0);
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const zoomUpLeave = css`
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-play-state: paused;

  &.zoom-up-leave-active {
    animation-name: antZoomUpOut;
    animation-play-state: running;
    pointer-events: none;
  }

  animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;
