import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomDivider } from './CustomDivider';

export default {
    component: CustomDivider,
    title: 'CustomDivider',
} as ComponentMeta<typeof CustomDivider>;

const Template: ComponentStory<typeof CustomDivider> = (args) => <CustomDivider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
