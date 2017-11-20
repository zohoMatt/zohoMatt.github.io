/**
 * Created by Zoho on 16/9/1.
 */
// betterdo Refactor
import uuid from 'uuid';

import BackHome from 'assets/button/BackHome';
import TopNavButton from './TopNavBar/TopNavButton';

/** ****************** Component ****************** */
/**
 * @props:
 * links                {Array<object>} object = {path: <string>, text: <string>}
 * activeLink           {number} The index of active link in the array: links
 */
export default class TopNavBar extends React.Component {
  componentWillMount() {
    this.setElements();
  }

  render() {
    return (
      <nav className="t-nav">
        <ul>
          <BackHome />
          {this.state.elements}
        </ul>
      </nav>
    );
  }

  /** ************************************** */
  setElements() {
    const { links, activeLink } = this.props;
    const linkArray = links.map((link, i) => {
      const { path, text } = link;
      const active = (i == activeLink) ? 'active-t-nav' : '';
      return (
        <TopNavButton
          key={uuid.v1()}
          active={active}
          path={path}
          text={text}
        />
      );
    });
    this.setState({
      elements: linkArray,
    });
  }
}

