/**
 * Created by Zoho on 16/9/2.
 */

// betterdo Refactor
import uuid from 'uuid';

import IconButton from './LinkPanel/IconButton';

export default class LinkPanel extends React.Component {
  constructor() {
    super();

    const IconArray = [
      'fa-archive', 'fa-github', 'fa-envelope',
      'fa-linkedin-square'].map(name => <IconButton iconName={name} key={uuid.v1()} />);

    this.data = {
      className: 'contact-link',
      elements: IconArray,
    };
  }

  render() {
    return (
      <div className={this.data.className}>
        {this.data.elements}
      </div>
    );
  }
}
