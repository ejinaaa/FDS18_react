/* eslint-disable default-case */
import { speechBubble, top, right, bottom, left } from './Tooltip.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tooltip = ({ orientation, content, className }) => {
  const composeClasses = classNames(
    speechBubble,
    className,
    (() => {
      switch (orientation) {
        case 'top':
          return top;
        case 'right':
          return right;
        case 'bottom':
          return bottom;
        case 'left':
          return left;
      }
    })()
  );

  return (
    <div className={composeClasses} orientation={orientation}>
      {content}
    </div>
  );
};

Tooltip.defaultProps = {
  content: '개인 정보 보호를 위해 본인 기기에서만 이용해주세요',
};
Tooltip.propTypes = {
  orientation: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
};

export default Tooltip;
