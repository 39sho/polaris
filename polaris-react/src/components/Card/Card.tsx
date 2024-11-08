import type {
  BreakpointsAlias,
  ColorBackgroundAlias,
  SpaceScale,
} from '@shopify/polaris-tokens';
import React from 'react';

import type {ResponsiveProp} from '../../utilities/css';
import {Box} from '../Box';
import {ShadowBevel} from '../ShadowBevel';
import {WithinContentContext} from '../../utilities/within-content-context';

type Spacing = ResponsiveProp<SpaceScale>;

export interface CardProps {
  children?: React.ReactNode;
  /** Background color
   * @default 'bg-surface'
   */
  background?: ColorBackgroundAlias;
  /** The spacing around the card
   * @default {xs: '400', sm: '500'}
   * @example
   * padding='400'
   * padding={{xs: '200', sm: '300', md: '400', lg: '500', xl: '600'}}
   */
  padding?: Spacing;
  /** Border radius value above a set breakpoint
   * @default 'sm'
   */
  roundedAbove?: BreakpointsAlias;
}

export const Card = ({
  children,
  background = 'bg-surface',
  padding = {xs: '400'},
  roundedAbove = 'sm',
}: CardProps) => {
  return (
    <WithinContentContext.Provider value>
      <ShadowBevel
        boxShadow="100"
        borderRadius="300"
        zIndex="32"
        bevel={{
          [roundedAbove]: true,
        }}
      >
        <Box
          background={background}
          padding={padding}
          overflowX="clip"
          overflowY="clip"
          minHeight="100%"
        >
          {children}
        </Box>
      </ShadowBevel>
    </WithinContentContext.Provider>
  );
};
