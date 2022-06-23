import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { PuppySprite } from '../src/PuppySprite/PuppySprite';


storiesOf('PuppySprite', module)
  .addDecorator(withInfo)
  .add(
    'This is a CSS animated sprite of a puppy.',
    () => 
    <PuppySprite flipped={true} />,
    { info: { header: true, inline: true } }
  )
;