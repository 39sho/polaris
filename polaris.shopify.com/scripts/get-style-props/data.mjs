// TODO: Confirm this list is complete or source it from mdn/webref data somehow
export const positionalCSSProperties = [
  'width',
  'height',
  'paddingLeft',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'marginLeft',
  'marginTop',
  'marginRight',
  'marginBottom',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomRightRadius',
  'borderBottomLeftRadius',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderTopStyle',
  'borderRightStyle',
  'borderBottomStyle',
  'borderLeftStyle',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'overflowX',
  'overflowY',
  'overscrollBehaviorX',
  'overscrollBehaviorY',
  'scrollPaddingTop',
  'scrollPaddingRight',
  'scrollPaddingBottom',
  'scrollPaddingLeft',
  'scrollMarginTop',
  'scrollMarginRight',
  'scrollMarginBottom',
  'scrollMarginLeft',
  'top',
  'left',
  'right',
  'bottom',
  'containIntrinsicWidth',
  'containIntrinsicHeight',
];

// Remove these once https://github.com/frenic/csstype/pull/188 is merged
export const incorrectlyMarkedAsLonghandByCSSTypes = [
  'borderBlockColor',
  'borderBlockStyle',
  'borderBlockWidth',
  'borderInlineColor',
  'borderInlineStyle',
  'borderInlineWidth',
];

export const disallowedCSSProperties = [
  // We only support logical properties, but later alias these to their
  // positional counterparts following the principle of: Do what the user
  // intended, not what they said.
  ...positionalCSSProperties,

  ...incorrectlyMarkedAsLonghandByCSSTypes,

  // Exclude from https://www.w3.org/TR/compat
  'touchAction',
  // Exclude from https://www.w3.org/TR/css-cascade
  'all',
  // Exclude from https://www.w3.org/TR/css-content
  'content',
  'quotes',
  'stringSet',
  'bookmarkLevel',
  'bookmarkLabel',
  'bookmarkState',
  // Exclude from https://www.w3.org/TR/css-gcpm
  'copyInto',
  'content',
  'footnoteDisplay',
  'footnotePolicy',
  // Exclude from https://www.w3.org/TR/css-page-floats
  'floatReference',
  'floatDefer',
  'floatOffset',
  // Exclude from https://www.w3.org/TR/css-page
  'page',
  // Exclude from https://www.w3.org/TR/mathml-core
  'mathStyle',
  'mathShift',
  'mathDepth',
];

export const disallowedCSSPropertyValues = [
  'inherit',
  'initial',
  '-moz-initial',
];

export const stylePropAliasFallbacks = {
  rowGap: ['gap'],
  columnGap: ['gap'],
  paddingInlineStart: ['paddingLeft', 'paddingInline', 'padding'],
  paddingInlineEnd: ['paddingRight', 'paddingInline', 'padding'],
  paddingBlockStart: ['paddingTop', 'paddingBlock', 'padding'],
  paddingBlockEnd: ['paddingBottom', 'paddingBlock', 'padding'],
  marginInlineStart: ['marginLeft', 'marginInline', 'margin'],
  marginInlineEnd: ['marginRight', 'marginInline', 'margin'],
  marginBlockStart: ['marginTop', 'marginBlock', 'margin'],
  marginBlockEnd: ['marginBottom', 'marginBlock', 'margin'],
  inlineSize: ['width', 'size'],
  blockSize: ['height', 'size'],
  minInlineSize: ['minWidth', 'minSize'],
  minBlockSize: ['minHeight', 'minSize'],
  maxInlineSize: ['maxWidth', 'maxSize'],
  maxBlockSize: ['maxHeight', 'maxSize'],
  containIntrinsicInlineSize: ['containIntrinsicWidth', 'containIntrinsicSize'],
  containIntrinsicBlockSize: ['containIntrinsicHeight', 'containIntrinsicSize'],
  overflowInline: ['overflowX', 'overflow'],
  overflowBlock: ['overflowY', 'overflow'],
  overscrollBehaviorInline: ['overscrollBehaviorX', 'overscrollBehavior'],
  overscrollBehaviorBlock: ['overscrollBehaviorY', 'overscrollBehavior'],
  backgroundPositionX: ['backgroundPosition'],
  backgroundPositionY: ['backgroundPosition'],
  borderStartStartRadius: ['borderTopLeftRadius', 'borderRadius'],
  borderStartEndRadius: ['borderTopRightRadius', 'borderRadius'],
  borderEndStartRadius: ['borderBottomLeftRadius', 'borderRadius'],
  borderEndEndRadius: ['borderBottomRightRadius', 'borderRadius'],
  borderInlineStartColor: [
    'borderLeftColor',
    'borderInlineColor',
    'borderColor',
  ],
  borderInlineEndColor: [
    'borderRightColor',
    'borderInlineColor',
    'borderColor',
  ],
  borderBlockStartColor: ['borderTopColor', 'borderBlockColor', 'borderColor'],
  borderBlockEndColor: ['borderBottomColor', 'borderBlockColor', 'borderColor'],
  borderInlineStartStyle: [
    'borderLeftStyle',
    'borderInlineStyle',
    'borderStyle',
  ],
  borderInlineEndStyle: [
    'borderRightStyle',
    'borderInlineStyle',
    'borderStyle',
  ],
  borderBlockStartStyle: ['borderTopStyle', 'borderBlockStyle', 'borderStyle'],
  borderBlockEndStyle: ['borderBottomStyle', 'borderBlockStyle', 'borderStyle'],
  borderInlineStartWidth: [
    'borderLeftWidth',
    'borderInlineWidth',
    'borderWidth',
  ],
  borderInlineEndWidth: [
    'borderRightWidth',
    'borderInlineWidth',
    'borderWidth',
  ],
  borderBlockStartWidth: ['borderTopWidth', 'borderBlockWidth', 'borderWidth'],
  borderBlockEndWidth: ['borderBottomWidth', 'borderBlockWidth', 'borderWidth'],
  insetInlineStart: ['left', 'insetInline', 'inset'],
  insetInlineEnd: ['right', 'insetInline', 'inset'],
  insetBlockStart: ['top', 'insetBlock', 'inset'],
  insetBlockEnd: ['bottom', 'insetBlock', 'inset'],
  scrollPaddingInlineStart: [
    'scrollPaddingLeft',
    'scrollPaddingInline',
    'scrollPadding',
  ],
  scrollPaddingInlineEnd: [
    'scrollPaddingRight',
    'scrollPaddingInline',
    'scrollPadding',
  ],
  scrollPaddingBlockStart: [
    'scrollPaddingTop',
    'scrollPaddingBlock',
    'scrollPadding',
  ],
  scrollPaddingBlockEnd: [
    'scrollPaddingBottom',
    'scrollPaddingBlock',
    'scrollPadding',
  ],
  scrollMarginInlineStart: [
    'scrollMarginLeft',
    'scrollMarginInline',
    'scrollMargin',
  ],
  scrollMarginInlineEnd: [
    'scrollMarginRight',
    'scrollMarginInline',
    'scrollMargin',
  ],
  scrollMarginBlockStart: [
    'scrollMarginTop',
    'scrollMarginBlock',
    'scrollMargin',
  ],
  scrollMarginBlockEnd: [
    'scrollMarginBottom',
    'scrollMarginBlock',
    'scrollMargin',
  ],
  justifyItems: ['justify'],
  alignItems: ['align'],
};
