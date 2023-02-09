/*
  THEME CONFIG

  In here, we have some enum-style keys that refer to colors in context. These
  keys are then used to inform a relationship between context and design tokens.

  The structure for a color design token reference is ${group}-${item} and should
  be lowercase, so if you wanted to use the core primary color, you would use
  'core-primary' because “Core” is the group and “Primary” is the item
*/
module.exports = {
  colorKeys: {
    MODE: 'mode',
    CHECKBOX: 'checkbox',
    CHECKBOX_CHECKED: 'checkbox-checked',
    CORE_TEXT: 'core-text',
    CORE_BG: 'core-bg',
    DARK_BG: 'dark-bg',
    DARK_TEXT: 'dark-text',
    MID_TEXT: 'mid-text',
    MID_BG: 'mid-bg',
    HIGHLIGHT_TEXT: 'highlight-text',
    HIGHLIGHT_TEXT_ALT: 'highlight-text-alt',
    HIGHLIGHT_INTERACT_BG: 'highlight-interact-bg',
    ACCENT_TEXT: 'accent-text',
    ACCENT_BG: 'accent-bg',
    ACTION_BG: 'action-bg',
    ACTION_BG_HOVER: 'action-bg-hover',
    ACTION_BG_ALT: 'action-bg-alt',
    ACTION_BG_PRIMARY: 'action-bg-primary',
    ACTION_TEXT: 'action-text',
    ACTION_TEXT_ALT: 'action-text-alt',
    ACTION_TEXT_PRIMARY: 'action-text-primary',
    ACTIVE_BG: 'active-bg',
    ACTIVE_TEXT: 'active-text',
    BRAND_TEXT: 'brand-text',
    CHECK_FG: 'check-fg',
    CHECK_BG: 'check-bg',
    CHECK_BG_ACTIVE: 'check-bg-active',
    FLOATING_RIBBON_BG: 'floating-ribbon-bg',
    FOCUS_RING: 'focus-ring',
    IMG_BACKDROP: 'img-backdrop',
    PRIMARY_BOX_BG: 'primary-box-bg',
    PRIMARY_BOX_TEXT: 'primary-box-text',
    QUATERNARY_BOX_BG: 'quaternary-box-bg',
    QUATERNARY_BOX_TEXT: 'quaternary-box-text',
    SECONDARY_BOX_BG: 'secondary-box-bg',
    SECONDARY_BOX_TEXT: 'secondary-box-text',
    RADIO: 'radio',
    RADIO_CHECKED: 'radio-checked',
    REVERSED_BG: 'reversed-bg',
    REVERSED_TEXT: 'reversed-text',
    STATE_INFO_TEXT: 'state-info-text',
    STATE_INFO_BG: 'state-info-bg',
    STATE_WARN_TEXT: 'state-warn-text',
    STATE_WARN_BG: 'state-warn-bg',
    STATE_GOOD_TEXT: 'state-good-text',
    STATE_GOOD_BG: 'state-good-bg',
    STATE_BAD_TEXT: 'state-bad-text',
    STATE_BAD_BG: 'state-bad-bg',
    STATE_UPDATE_BG: 'state-update-bg',
    STATE_UPDATE_TEXT: 'state-update-text',
    SYNTAX_PRIMARY: 'syntax-primary',
    SYNTAX_PRIMARY_GLARE: 'syntax-primary-glare',
    SYNTAX_SECONDARY: 'syntax-secondary',
    SYNTAX_TERTIARY: 'syntax-tertiary',
    SYNTAX_QUATERNARY: 'syntax-quaternary',
    STROKE: 'stroke',
    TERTIARY_BOX_BG: 'tertiary-box-bg',
    TERTIARY_BOX_TEXT: 'tertiary-box-text',
    TRANSPARENT_IMG_MASK: 'transparent-img-mask',
  },
  getDark() {
    return {
      MODE: 'dark',
      CHECKBOX: 'backgrounds-checkbox-dark',
      CHECKBOX_CHECKED: 'backgrounds-checkbox-dark-checked',
      CORE_TEXT: 'shades-light',
      CORE_BG: 'shades-dim',
      DARK_BG: 'shades-charcoal',
      DARK_TEXT: 'shades-dark',
      MID_TEXT: 'shades-gray-glare',
      MID_BG: 'shades-charcoal',
      HIGHLIGHT_TEXT: 'core-primary-glare',
      HIGHLIGHT_TEXT_ALT: 'core-tertiary-glare',
      HIGHLIGHT_INTERACT_BG: 'shades-charcoal',
      ACCENT_TEXT: 'shades-gray-glare',
      ACCENT_BG: 'shades-charcoal',
      ACTION_BG: 'shades-dim',
      ACTION_BG_ALT: 'shades-dim',
      ACTION_BG_PRIMARY: 'core-primary-dim',
      ACTION_BG_HOVER: 'shades-gray-glare',
      ACTION_TEXT: 'core-primary-glare',
      ACTION_TEXT_PRIMARY: 'core-primary-bright',
      ACTION_TEXT_ALT: 'shades-light',
      ACTIVE_BG: 'core-primary-glare',
      ACTIVE_TEXT: 'shades-dark',
      BRAND_TEXT: 'shades-gray-glare',
      CHECK_FG: 'shades-light',
      CHECK_BG: 'shades-gray',
      CHECK_BG_ACTIVE: 'core-tertiary-glare',
      FLOATING_RIBBON_BG: 'core-primary-dim',
      FOCUS_RING: 'core-primary-glare',
      IMG_BACKDROP: 'shades-light',
      PRIMARY_BOX_BG: 'core-primary-dim',
      PRIMARY_BOX_TEXT: 'core-primary-bright',
      QUATERNARY_BOX_BG: 'core-quaternary-dim',
      QUATERNARY_BOX_TEXT: 'core-quaternary-bright',
      SECONDARY_BOX_BG: 'core-secondary-dim',
      SECONDARY_BOX_TEXT: 'core-secondary-bright',
      RADIO: 'backgrounds-radio-dark',
      RADIO_CHECKED: 'backgrounds-radio-dark-checked',
      REVERSED_BG: 'shades-gray-glare',
      REVERSED_TEXT: 'shades-dark',
      STATE_INFO_TEXT: 'state-info-bright',
      STATE_INFO_BG: 'state-info-dim',
      STATE_WARN_TEXT: 'state-warn-glare',
      STATE_WARN_BG: 'state-warn-dim',
      STATE_GOOD_TEXT: 'state-good-glare',
      STATE_GOOD_BG: 'state-good-dim',
      STATE_BAD_TEXT: 'state-bad-glare',
      STATE_BAD_BG: 'state-bad-dim',
      STATE_UPDATE_BG: 'state-update-dim',
      STATE_UPDATE_TEXT: 'state-update-bright',
      SYNTAX_PRIMARY: 'code-primary-bright',
      SYNTAX_PRIMARY_GLARE: 'code-primary-bright',
      SYNTAX_SECONDARY: 'code-secondary-bright',
      SYNTAX_TERTIARY: 'code-tertiary-bright',
      SYNTAX_QUATERNARY: 'code-quaternary-bright',
      STROKE: 'shades-gray',
      TERTIARY_BOX_TEXT: 'core-tertiary-glare',
      TERTIARY_BOX_BG: 'core-tertiary-dim',
      TRANSPARENT_IMG_MASK: 'shades-gray-glare',
    };
  },
  getLight() {
    return {
      MODE: 'light',
      CHECKBOX: 'backgrounds-checkbox',
      CHECKBOX_CHECKED: 'backgrounds-checkbox-checked',
      CORE_TEXT: 'shades-dark',
      CORE_BG: 'shades-light-bright',
      DARK_BG: 'shades-gray-glare',
      DARK_TEXT: 'shades-dark',
      MID_TEXT: 'shades-gray',
      MID_BG: 'shades-light',
      HIGHLIGHT_TEXT: 'core-primary',
      HIGHLIGHT_TEXT_ALT: 'core-tertiary',
      HIGHLIGHT_INTERACT_BG: 'core-primary-bright',
      ACCENT_TEXT: 'shades-dark',
      ACCENT_BG: 'shades-light',
      ACTION_BG: 'shades-light-bright',
      ACTION_BG_ALT: 'shades-light-bright',
      ACTION_BG_PRIMARY: 'core-primary',
      ACTION_BG_HOVER: 'shades-gray-bright',
      ACTION_TEXT: 'core-primary',
      ACTION_TEXT_PRIMARY: 'shades-light-bright',
      ACTION_TEXT_ALT: 'shades-dark',
      ACTIVE_BG: 'core-primary-bright',
      ACTIVE_TEXT: 'core-primary',
      BRAND_TEXT: 'shades-gray',
      CHECK_FG: 'shades-light',
      CHECK_BG: 'shades-gray-glare',
      CHECK_BG_ACTIVE: 'core-tertiary-glare',
      FLOATING_RIBBON_BG: 'core-primary-dim',
      FOCUS_RING: 'core-primary',
      IMG_BACKDROP: 'shades-light-bright',
      PRIMARY_BOX_BG: 'core-primary-bright',
      PRIMARY_BOX_TEXT: 'core-primary',
      QUATERNARY_BOX_BG: 'core-quaternary-bright',
      QUATERNARY_BOX_TEXT: 'core-quaternary',
      RADIO: 'backgrounds-radio',
      RADIO_CHECKED: 'backgrounds-radio-checked',
      REVERSED_BG: 'shades-charcoal',
      REVERSED_TEXT: 'shades-light',
      SECONDARY_BOX_BG: 'core-secondary-bright',
      SECONDARY_BOX_TEXT: 'core-secondary',
      STATE_INFO_TEXT: 'state-info',
      STATE_INFO_BG: 'state-info-bright',
      STATE_WARN_TEXT: 'state-warn',
      STATE_WARN_BG: 'state-warn-bright',
      STATE_GOOD_TEXT: 'state-good',
      STATE_GOOD_BG: 'state-good-bright',
      STATE_BAD_TEXT: 'state-bad',
      STATE_BAD_BG: 'state-bad-bright',
      STATE_UPDATE_BG: 'state-update-bright',
      STATE_UPDATE_TEXT: 'state-update',
      STROKE: 'shades-gray-glare',
      SYNTAX_PRIMARY: 'code-primary',
      SYNTAX_PRIMARY_GLARE: 'code-primary-glare',
      SYNTAX_SECONDARY: 'code-secondary',
      SYNTAX_TERTIARY: 'code-tertiary',
      SYNTAX_QUATERNARY: 'code-quaternary',
      TERTIARY_BOX_TEXT: 'core-tertiary',
      TERTIARY_BOX_BG: 'core-tertiary-bright',
      TRANSPARENT_IMG_MASK: 'shades-light-bright',
    };
  },
  generate() {
    return [
      {
        name: 'default',
        tokens: this.getLight(),
      },
      {
        name: 'dark-toggle',
        key: 'prefix',
        value: '[data-user-theme="dark"]',
        tokens: this.getDark(),
      },
      {
        name: 'dark',
        key: 'prefers-color-scheme',
        value: 'dark',
        tokens: this.getDark(),
      },
      {
        name: 'light-toggle',
        key: 'prefix',
        value: '[data-user-theme="light"]',
        tokens: this.getLight(),
      },
    ];
  },
  get backgroundUtilities() {
    return Object.keys(this.colorKeys)
      .filter((key) => key.includes('_BG'))
      .map((key) => ({
        utilityClass: `bg-${this.colorKeys[key]}`,
        sassMixin: `@include apply-utility('bg', '${this.colorKeys[key]}')`,
        sassFunction: `get-utility-value('bg', '${this.colorKeys[key]}')`,
      }));
  },
  get textUtilities() {
    return Object.keys(this.colorKeys)
      .filter((key) => key.includes('_TEXT'))
      .map((key) => ({
        utilityClass: `color-${this.colorKeys[key]}`,
        sassMixin: `@include apply-utility('color', '${this.colorKeys[key]}')`,
        sassFunction: `get-utility-value('color', '${this.colorKeys[key]}')`,
      }));
  },
};
