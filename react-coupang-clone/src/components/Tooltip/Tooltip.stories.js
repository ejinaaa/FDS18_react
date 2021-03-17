/* eslint-disable import/no-anonymous-default-export */
import Tooltip from './Tooltip';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const TooltipTop = Template.bind({});
export const TooltipLeft = Template.bind({});
export const TooltipBottom = Template.bind({});
export const TooltipRight = Template.bind({});

TooltipTop.args = {
  orientation: 'top',
};
TooltipLeft.args = {
  orientation: 'left',
};
TooltipBottom.args = {
  orientation: 'bottom',
};
TooltipRight.args = {
  orientation: 'right',
};
