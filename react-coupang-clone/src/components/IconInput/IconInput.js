import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import './IconInput.scss';

const IconInput = ({
  iconTitle,
  iconShape,
  inputType,
  inputVisible,
  placeholder,
  className,
}) => (
  <div className={className}>
    <Icon title={iconTitle} shape={iconShape} className="iconContainer" />
    <Input
      type={inputType}
      visible={inputVisible}
      placeholder={placeholder}
      className="inputContainer"
    />
  </div>
);

export default IconInput;
