import React from 'react';
import type {ComponentMeta} from '@storybook/react';
import type {ResponsiveStylePropsWithModifiers} from '@shopify/polaris';
import {Box, BlockStack, InlineCode} from '@shopify/polaris';

import {ShadowBevel} from './ShadowBevel';

export default {
  component: ShadowBevel,
} as ComponentMeta<typeof ShadowBevel>;

export function Default() {
  const colors: ResponsiveStylePropsWithModifiers[] = [
    {
      background: 'bg-fill-success',
      color: 'text-success-on-bg-fill',
    },
    {
      background: 'bg-fill-info',
      color: 'text-info-on-bg-fill',
    },
    {
      background: 'bg-fill-warning',
      color: 'text-warning-on-bg-fill',
    },
    {
      background: 'bg-fill-critical',
      color: 'text-critical-on-bg-fill',
    },
  ];

  return (
    <BlockStack gap="500">
      <ShadowBevel boxShadow="300" borderRadius="300">
        <Box sx={{background: 'bg-surface', padding: '400'}}>Default</Box>
      </ShadowBevel>

      <ShadowBevel boxShadow="300" borderRadius="300" bevel={false}>
        <Box sx={{background: 'bg-surface', padding: '400'}}>
          With <InlineCode>bevel: false</InlineCode>
        </Box>
      </ShadowBevel>

      <ShadowBevel
        boxShadow="300"
        borderRadius="300"
        bevel={{xs: false, sm: true}}
      >
        <Box sx={{background: 'bg-surface', padding: '400'}}>
          With <InlineCode>bevel: {'{xs: false, sm: true}'}</InlineCode>
        </Box>
      </ShadowBevel>

      <ShadowBevel
        boxShadow="300"
        borderRadius="300"
        bevel={{xs: false, sm: true, lg: false}}
      >
        <Box sx={{background: 'bg-surface', padding: '400'}}>
          With{' '}
          <InlineCode>bevel: {'{xs: false, sm: true, lg: false}'}</InlineCode>
        </Box>
      </ShadowBevel>

      <ShadowBevel as="article" boxShadow="300" borderRadius="300">
        <Box sx={{background: 'bg-surface', padding: '400'}}>
          With <InlineCode>as: article</InlineCode>
        </Box>
      </ShadowBevel>

      {colors.map(({background, color}) => (
        <ShadowBevel
          key={`${background}-${color}`}
          boxShadow="300"
          borderRadius="300"
        >
          <Box sx={{background, color, padding: '400'}}>
            {background as string}
          </Box>
        </ShadowBevel>
      ))}

      <br />
    </BlockStack>
  );
}
