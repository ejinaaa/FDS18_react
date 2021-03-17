import { button, primary, secondary } from './Button.module.scss';
import classNames from 'classnames';
import Proptypes from 'prop-types';

const Button = ({ type, mode, disabled, content, className }) => {
  const composeClasses = classNames(
    button,
    className,
    mode === 'primary' ? primary : secondary
  );

  return (
    <button type={type} disabled={disabled} className={composeClasses}>
      {content}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  mode: 'primary',
  disabled: false,
};

Button.propTypes = {
  type: Proptypes.string,
  mode: Proptypes.oneOf(['primary', 'secondary']).isRequired,
  disabled: Proptypes.bool,
};

export default Button;
