import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomizedPin } from './CustomizedPin';

export default {
    component: CustomizedPin,
    title: 'CustomizedPin',
} as ComponentMeta<typeof CustomizedPin>;

const Template: ComponentStory<typeof CustomizedPin> = (args) => <CustomizedPin {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
