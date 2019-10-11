import React from 'react';
import { css } from '@emotion/core';

export const Header = () => (
  <header
    css={theme => css`
      color: ${theme.colors.accent};
    `}
  >
    header
  </header>
);
