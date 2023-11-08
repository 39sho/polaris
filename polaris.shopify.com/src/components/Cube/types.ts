/* THIS FILE IS AUTO GENERATED, DO NOT TOUCH */
import * as CSS from 'csstype';
import {ResponsiveProp} from '../../utils/various';
import type {ComputedTokenCSSProperties} from '@shopify/polaris-tokens';
export type CSSProperties = Omit<
  Pick<
    CSS.Properties,
    | 'animationName'
    | 'animationDuration'
    | 'animationTimingFunction'
    | 'animationDelay'
    | 'animationIterationCount'
    | 'animationDirection'
    | 'animationFillMode'
    | 'animationPlayState'
    | 'backgroundColor'
    | 'backgroundImage'
    | 'backgroundRepeat'
    | 'backgroundAttachment'
    | 'backgroundPosition'
    | 'borderBlockWidth'
    | 'borderBlockStyle'
    | 'borderBlockColor'
    | 'borderBlockEndWidth'
    | 'borderBlockEndStyle'
    | 'borderBlockEndColor'
    | 'borderBlockStartWidth'
    | 'borderBlockStartStyle'
    | 'borderBlockStartColor'
    | 'borderBottomWidth'
    | 'borderBottomStyle'
    | 'borderBottomColor'
    | 'borderTopColor'
    | 'borderRightColor'
    | 'borderLeftColor'
    | 'borderImageSource'
    | 'borderImageSlice'
    | 'borderImageWidth'
    | 'borderImageOutset'
    | 'borderImageRepeat'
    | 'borderInlineWidth'
    | 'borderInlineStyle'
    | 'borderInlineColor'
    | 'borderInlineEndWidth'
    | 'borderInlineEndStyle'
    | 'borderInlineEndColor'
    | 'borderInlineStartWidth'
    | 'borderInlineStartStyle'
    | 'borderInlineStartColor'
    | 'borderLeftWidth'
    | 'borderLeftStyle'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderRightWidth'
    | 'borderRightStyle'
    | 'borderTopStyle'
    | 'borderTopWidth'
    | 'columnRuleWidth'
    | 'columnRuleStyle'
    | 'columnRuleColor'
    | 'columnWidth'
    | 'columnCount'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexBasis'
    | 'flexDirection'
    | 'flexWrap'
    | 'fontStyle'
    | 'fontVariant'
    | 'fontWeight'
    | 'fontStretch'
    | 'fontSize'
    | 'lineHeight'
    | 'fontFamily'
    | 'rowGap'
    | 'columnGap'
    | 'gridTemplateRows'
    | 'gridTemplateColumns'
    | 'gridTemplateAreas'
    | 'gridAutoRows'
    | 'gridAutoColumns'
    | 'gridAutoFlow'
    | 'gridRowStart'
    | 'gridColumnStart'
    | 'gridRowEnd'
    | 'gridColumnEnd'
    | 'listStyleType'
    | 'listStylePosition'
    | 'listStyleImage'
    | 'marginTop'
    | 'marginRight'
    | 'marginBottom'
    | 'marginLeft'
    | 'offsetPath'
    | 'offsetDistance'
    | 'offsetRotate'
    | 'offsetAnchor'
    | 'outlineWidth'
    | 'outlineStyle'
    | 'outlineColor'
    | 'overflowX'
    | 'overflowY'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'alignContent'
    | 'justifyContent'
    | 'alignItems'
    | 'justifyItems'
    | 'alignSelf'
    | 'justifySelf'
    | 'textDecorationLine'
    | 'textDecorationStyle'
    | 'textDecorationColor'
    | 'textDecorationThickness'
    | 'textEmphasisStyle'
    | 'textEmphasisColor'
    | 'transitionProperty'
    | 'transitionDuration'
    | 'transitionTimingFunction'
    | 'transitionDelay'
    | 'zIndex'
    | 'pageBreakBefore'
    | 'pageBreakAfter'
    | 'pageBreakInside'
    | 'mixBlendMode'
    | 'isolation'
    | 'backgroundBlendMode'
    | 'backgroundClip'
    | 'backgroundOrigin'
    | 'backgroundSize'
    | 'breakBefore'
    | 'breakAfter'
    | 'breakInside'
    | 'orphans'
    | 'widows'
    | 'boxDecorationBreak'
    | 'color'
    | 'opacity'
    | 'display'
    | 'order'
    | 'visibility'
    | 'fontSizeAdjust'
    | 'fontSynthesis'
    | 'fontKerning'
    | 'fontVariantLigatures'
    | 'fontVariantPosition'
    | 'fontVariantCaps'
    | 'fontVariantNumeric'
    | 'fontVariantAlternates'
    | 'fontVariantEastAsian'
    | 'fontFeatureSettings'
    | 'fontLanguageOverride'
    | 'fontOpticalSizing'
    | 'fontVariationSettings'
    | 'fontPalette'
    | 'fontVariantEmoji'
    | 'objectFit'
    | 'objectPosition'
    | 'imageOrientation'
    | 'imageRendering'
    | 'verticalAlign'
    | 'counterReset'
    | 'counterIncrement'
    | 'counterSet'
    | 'blockSize'
    | 'inlineSize'
    | 'minBlockSize'
    | 'minInlineSize'
    | 'maxBlockSize'
    | 'maxInlineSize'
    | 'marginBlockStart'
    | 'marginBlockEnd'
    | 'marginInlineStart'
    | 'marginInlineEnd'
    | 'marginBlock'
    | 'marginInline'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'paddingBlock'
    | 'paddingInline'
    | 'borderStartStartRadius'
    | 'borderStartEndRadius'
    | 'borderEndStartRadius'
    | 'borderEndEndRadius'
    | 'columnSpan'
    | 'columnFill'
    | 'overflowClipMargin'
    | 'textOverflow'
    | 'overflowBlock'
    | 'overflowInline'
    | 'scrollBehavior'
    | 'scrollbarGutter'
    | 'overscrollBehavior'
    | 'overscrollBehaviorX'
    | 'overscrollBehaviorY'
    | 'overscrollBehaviorInline'
    | 'overscrollBehaviorBlock'
    | 'position'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'insetBlockStart'
    | 'insetInlineStart'
    | 'insetBlockEnd'
    | 'insetInlineEnd'
    | 'insetBlock'
    | 'insetInline'
    | 'inset'
    | 'scrollSnapType'
    | 'scrollPadding'
    | 'scrollMargin'
    | 'scrollSnapAlign'
    | 'scrollSnapStop'
    | 'scrollPaddingTop'
    | 'scrollPaddingRight'
    | 'scrollPaddingBottom'
    | 'scrollPaddingLeft'
    | 'scrollPaddingInlineStart'
    | 'scrollPaddingBlockStart'
    | 'scrollPaddingInlineEnd'
    | 'scrollPaddingBlockEnd'
    | 'scrollPaddingBlock'
    | 'scrollPaddingInline'
    | 'scrollMarginTop'
    | 'scrollMarginRight'
    | 'scrollMarginBottom'
    | 'scrollMarginLeft'
    | 'scrollMarginBlockStart'
    | 'scrollMarginInlineStart'
    | 'scrollMarginBlockEnd'
    | 'scrollMarginInlineEnd'
    | 'scrollMarginBlock'
    | 'scrollMarginInline'
    | 'scrollbarColor'
    | 'scrollbarWidth'
    | 'shapeOutside'
    | 'shapeImageThreshold'
    | 'shapeMargin'
    | 'width'
    | 'height'
    | 'minWidth'
    | 'minHeight'
    | 'maxWidth'
    | 'maxHeight'
    | 'containIntrinsicWidth'
    | 'containIntrinsicHeight'
    | 'containIntrinsicBlockSize'
    | 'containIntrinsicInlineSize'
    | 'containIntrinsicSize'
    | 'boxSizing'
    | 'tableLayout'
    | 'borderCollapse'
    | 'borderSpacing'
    | 'captionSide'
    | 'emptyCells'
    | 'textTransform'
    | 'whiteSpace'
    | 'tabSize'
    | 'wordBreak'
    | 'lineBreak'
    | 'hyphens'
    | 'hyphenateCharacter'
    | 'hyphenateLimitChars'
    | 'overflowWrap'
    | 'wordWrap'
    | 'textAlign'
    | 'textAlignLast'
    | 'textJustify'
    | 'wordSpacing'
    | 'letterSpacing'
    | 'textIndent'
    | 'hangingPunctuation'
    | 'textUnderlinePosition'
    | 'textUnderlineOffset'
    | 'textDecorationSkipInk'
    | 'textEmphasisPosition'
    | 'textShadow'
    | 'translate'
    | 'rotate'
    | 'scale'
    | 'transformStyle'
    | 'perspective'
    | 'perspectiveOrigin'
    | 'backfaceVisibility'
    | 'transform'
    | 'transformOrigin'
    | 'transformBox'
    | 'outlineOffset'
    | 'resize'
    | 'cursor'
    | 'caretColor'
    | 'caretShape'
    | 'caret'
    | 'userSelect'
    | 'accentColor'
    | 'inputSecurity'
    | 'willChange'
    | 'direction'
    | 'unicodeBidi'
    | 'writingMode'
    | 'textOrientation'
    | 'textCombineUpright'
    | 'backdropFilter'
    | 'filter'
  >,
  keyof ComputedTokenCSSProperties
>;
export type ResponsiveTokenProperties = {
  [K in keyof ComputedTokenCSSProperties]: ResponsiveProp<
    ComputedTokenCSSProperties[K]
  >;
};
export type CubeProps = CSSProperties & ResponsiveTokenProperties;
