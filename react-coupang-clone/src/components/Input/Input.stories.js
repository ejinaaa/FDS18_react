/* eslint-disable import/no-anonymous-default-export */
import Input from './Input';

export default {
  title: 'FORM/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const EmailNormal = Template.bind({});
export const EmailInputed = Template.bind({});
export const PwInputedShow = Template.bind({});
export const PwInputedHide = Template.bind({});

EmailNormal.args = {
  type: 'email',
  placeholder: '아이디(이메일)',
};
EmailInputed.args = {
  type: 'email',
  placeholder: '아이디(이메일)',
  value: 'yamoo9',
};
PwInputedShow.args = {
  type: 'password',
  placeholder: '비밀번호',
  visible: 'false',
  value: 'all@is!design',
};
PwInputedHide.args = {
  type: 'text',
  placeholder: '비밀번호',
  visible: 'true',
  value: 'all@is!design',
};
