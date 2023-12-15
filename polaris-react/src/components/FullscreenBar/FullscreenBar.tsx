import React from 'react';
import {ExitMajor} from '@shopify/polaris-icons';

import {Icon} from '../Icon';
import {Text} from '../Text';
import {useI18n} from '../../utilities/i18n';

import styles from './FullscreenBar.module.scss';

export interface FullscreenBarProps {
  /** Callback when back button is clicked */
  onAction: () => void;
  /** Render child elements */
  children?: React.ReactNode;
}

export function FullscreenBar({onAction, children}: FullscreenBarProps) {
  const i18n = useI18n();

  const backButtonMarkup = (
    <Text as="span" variant="bodyLg">
      {i18n.translate('Polaris.FullscreenBar.back')}
    </Text>
  );

  return (
    <div className={styles.FullscreenBar}>
      <button
        className={styles.BackAction}
        onClick={onAction}
        aria-label={i18n.translate('Polaris.FullscreenBar.accessibilityLabel')}
      >
        <Icon tone="inherit" source={ExitMajor} />
        {backButtonMarkup}
      </button>
      {children}
    </div>
  );
}
