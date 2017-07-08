import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import CssButton from "../components/CssButton";
import { defaultCss, cssWithEm, cssWithHSLA, cssWithHSLAGreen, cssWithHSLARed } from "../components/CssButton"
import TextField, {defaultTextFieldCss} from '../components/TextField';
import CSSPanel from '../components/CSSPanel';
import Thumbnail, {defaultThumbnailCss} from '../components/Thumbnail';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Yes! Button', module)
  .add('Default', () => <CssButton style="yes-button" cssString={defaultCss}/>)
  .add('Using em', () => <CssButton style="yes-button-em" cssString={cssWithEm} />)
  .add('HSLA', () => <CssButton style="yes-button-hsla" cssString={cssWithHSLA} />)
  .add('HSLA Green', () => <CssButton style="yes-button-hsla ok" cssString={cssWithHSLAGreen} />)
  .add('HSLA Red', () => <CssButton style="yes-button-hsla cancel" cssString={cssWithHSLARed} />);

storiesOf('Text Field', module)
  .add('With Tip', ()=> <TextField cssString={defaultTextFieldCss}/>);


storiesOf('Thumbnail', module)
  .add('Bacon', ()=> <Thumbnail cssString={defaultThumbnailCss} />);
