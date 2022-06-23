import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { SpriteComponent } from '../src/spritecomponent';


storiesOf('SpriteComponent', module)
  .addDecorator(withInfo)
  .add(
    'This is the original SpriteComponent, It acts as a container for the puppy sprite.',
    () => 
    <SpriteComponent />,
    { info: { header: true, inline: true } }
  )
;