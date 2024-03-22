import React, {useCallback, useState} from 'react';
import type {ComponentMeta} from '@storybook/react';
import {
  Frame,
  Icon,
  TopBar,
  Text,
  ThemeProvider,
  InlineStack,
} from '@shopify/polaris';
import {SidekickIcon, NotificationIcon} from '@shopify/polaris-icons';

export default {
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

export function Default() {
  const [isSidekickMenuOpen, setIsSidekickMenuOpen] = useState(true);

  const toggleIsSidekickMenuOpen = useCallback(
    () => setIsSidekickMenuOpen((isSidekickMenuOpen) => !isSidekickMenuOpen),
    [],
  );

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);

  const toggleIsNotificationsMenuOpen = useCallback(
    () =>
      setIsNotificationsMenuOpen(
        (isNotificationsMenuOpen) => !isNotificationsMenuOpen,
      ),
    [],
  );

  const sidekickMenu = (
    <ThemeProvider theme="light">
      <TopBar.Menu
        activatorContent={
          <ThemeProvider theme="dark-experimental">
            <span>
              <Icon source={SidekickIcon} />
              <Text as="span" visuallyHidden>
                Light theme popover button
              </Text>
            </span>
          </ThemeProvider>
        }
        open={isSidekickMenuOpen}
        onOpen={toggleIsSidekickMenuOpen}
        onClose={toggleIsSidekickMenuOpen}
        actions={[
          {
            items: [{content: 'Light theme popover'}],
          },
        ]}
      />
    </ThemeProvider>
  );

  const notificationsMenu = (
    <ThemeProvider theme="dark-experimental">
      <TopBar.Menu
        activatorContent={
          <span>
            <Icon source={NotificationIcon} />
            <Text as="span" visuallyHidden>
              Dark theme popover button
            </Text>
          </span>
        }
        open={isNotificationsMenuOpen}
        onOpen={toggleIsNotificationsMenuOpen}
        onClose={toggleIsNotificationsMenuOpen}
        actions={[
          {
            items: [{content: 'Dark theme popover'}],
          },
        ]}
      />
    </ThemeProvider>
  );

  return (
    <Frame
      topBar={
        <TopBar
          secondaryMenu={
            <InlineStack>
              {sidekickMenu}
              {notificationsMenu}
            </InlineStack>
          }
        />
      }
    />
  );
}
