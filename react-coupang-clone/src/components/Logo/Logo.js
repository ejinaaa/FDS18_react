import { ReactComponent as Colorful } from './images/colorful.svg';
import { ReactComponent as Mono } from './images/mono.svg';
import { ReactComponent as Black } from './images/black.svg';
import PropTypes from 'prop-types';

const Logo = ({ title, type, className, ...restProps }) => (
  <a href="/" className={className}>
    {type === 'mono' ? (
      <Mono title={title} type={type} {...restProps} />
    ) : type === 'black' ? (
      <Black title={title} type={type} {...restProps} />
    ) : (
      <Colorful title={title} type={type} {...restProps} />
    )}
  </a>
);

Logo.defaultProps = {
  title: '쿠팡 로고 컬러',
  type: 'colorful',
  className: 'logoLink',
};

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['colorful', 'mono', 'black']).isRequired,
};

export default Logo;
