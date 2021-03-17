import { checkbox, checked, disabled } from './Checkbox.module.scss';
import { Component } from 'react';
import classNames from 'classnames';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
    };
  }

  toggleCheckbox = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { content, ...restProps } = this.props;
    const composeClasses = classNames(
      checkbox,
      this.state.checked ? checked : null,
      this.state.disabled ? disabled : null
    );

    return (
      <label className={composeClasses}>
        <input type="checkbox" onChange={this.toggleCheckbox} {...restProps} />
        {content}
      </label>
    );
  }
}

Checkbox.defaultProps = {
  content: '자동 로그인',
};

export default Checkbox;
