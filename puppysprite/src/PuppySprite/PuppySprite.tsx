import * as React from 'react';
import * as styles from './PuppySprite.scss';

interface SpriteDetailsProp {
  flipped?: boolean;
}

export class PuppySpriteStep3 extends React.Component<SpriteDetailsProp, SpriteDetailsProp> {

  constructor(props: SpriteDetailsProp) {
    super(props);

    this.state = {
      flipped: this.props.flipped,
    }
  }

  
}

