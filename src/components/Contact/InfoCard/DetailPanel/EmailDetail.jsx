/**
 * Created by Zoho on 16/9/5.
 */
import RectangleButton from 'src/components/assets/button/RectangleButton';

import { BTN_COLOR, BTN_WIDTH, BTN_HEIGHT } from 'src/lib/style';

/** ****************** Component ****************** */
const EmailDetail = () =>
  (<div className="email-detail">
    <div className="email-name"><p>Send me an email</p></div>
    <RectangleButton
      btnColor={BTN_COLOR}
      btnWidth={BTN_WIDTH}
      btnHeight={BTN_HEIGHT}
      text="Email me"
      clickHandler={() => {
                             // setTimeout just for visual effect
                             setTimeout(() => {
                                 window.open('mailto:zoho10@outlook.com');
                             }, 300);
                         }}
    />
  </div>);

/** ****************** Exports ****************** */
export default EmailDetail;
