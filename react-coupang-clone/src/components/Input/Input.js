/* eslint-disable default-case */
// import { Component } from 'react';
import Icon from '../Icon/Icon';
import './Input.scss';
import PropTypes from 'prop-types';

const Input = ({ type, visible, placeholder, className }) => (
  <label className={className}>
    <input
      className="input"
      type={type}
      visible={visible}
      placeholder={placeholder}
    />
    {visible === 'default' ? null : (
      <Icon
        className="icon"
        shape={(() => {
          switch (visible) {
            case 'false':
              return 'show';
            case 'true':
              return 'hide';
          }
        })()}
        title={(() => {
          switch (visible) {
            case 'false':
              return 'show icon';
            case 'true':
              return 'hide icon';
          }
        })()}
      />
    )}
  </label>
);

Input.defaultProps = {
  visible: 'default',
};
Input.propTypes = {
  type: PropTypes.string.isRequired,
  visible: PropTypes.oneOf(['default', 'false', 'true']),
  placeholder: PropTypes.string,
};
export default Input;
