/* eslint-disable import/no-anonymous-default-export */
import Button from './Button';

export default {
  title: 'FORM/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
export const ButtonPrimaryDisabled = Template.bind({});
export const ButtonSecondary = Template.bind({});
export const ButtonSecondaryDisabled = Template.bind({});

ButtonPrimary.args = {
  type: 'button',
  mode: 'primary',
  disabled: false,
  content: '로그인',
};
ButtonPrimaryDisabled.args = {
  type: 'button',
  mode: 'primary',
  disabled: true,
  content: '로그인',
};
ButtonSecondary.args = {
  type: 'button',
  mode: 'secondary',
  disabled: false,
  content: '회원가입',
};
ButtonSecondaryDisabled.args = {
  type: 'button',
  mode: 'secondary',
  disabled: true,
  content: '회원가입',
};
