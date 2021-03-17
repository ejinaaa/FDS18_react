import Tooltip from '../Tooltip/Tooltip';
import Checkbox from '../Checkbox/Checkbox';
import './AutoSignInCheckbox.scss';

const AutoSignInCheckbox = ({ className }) => (
  <div className={className}>
    <Checkbox content="자동 로그인" />
    <Tooltip
      orientation="top"
      content="개인 정보 보호를 위해 본인 기기에서만 이용해주세요"
      className="speechBubble"
    />
  </div>
);

export default AutoSignInCheckbox;
