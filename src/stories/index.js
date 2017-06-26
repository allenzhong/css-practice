import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import CssButton from "../components/CssButton";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Yes! Button', module)
  .add('Default', () => <CssButton style="yes-button" />)
  .add('Using em', () => <CssButton style="yes-button-em" />)
  .add('HSLA', () => <CssButton style="yes-button-hsla" />)
  .add('HSLA Green', () => <CssButton style="yes-button-hsla ok" />)
  .add('HSLA Red', () => <CssButton style="yes-button-hsla cancel" />)
