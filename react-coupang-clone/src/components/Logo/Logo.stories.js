/* eslint-disable import/no-anonymous-default-export */
import Logo from './Logo';

export default {
  title: 'UI/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Colorful = Template.bind({});
export const Mono = Template.bind({});
export const Black = Template.bind({});

Colorful.args = {
  title: '쿠팡 로고 컬러',
  type: 'colorful',
};
Mono.args = {
  title: '쿠팡 로고 모노',
  type: 'mono',
};
Black.args = {
  title: '쿠팡 로고 검정',
  type: 'black',
};
