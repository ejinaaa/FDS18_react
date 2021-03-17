/* eslint-disable import/no-anonymous-default-export */
import Checkbox from './Checkbox';

export default {
  title: 'FORM/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const AutoLoginCheckbox = Template.bind({});
