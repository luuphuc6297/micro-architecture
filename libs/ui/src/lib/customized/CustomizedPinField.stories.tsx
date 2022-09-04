import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomizedPinField } from './CustomizedPinField';

export default {
    component: CustomizedPinField,
    title: 'CustomizedPinField',
} as ComponentMeta<typeof CustomizedPinField>;

const Template: ComponentStory<typeof CustomizedPinField> = (args) => <CustomizedPinField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
