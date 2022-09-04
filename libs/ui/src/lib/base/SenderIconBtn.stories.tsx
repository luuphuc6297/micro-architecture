import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SenderIconBtn } from './SenderIconBtn';

export default {
    component: SenderIconBtn,
    title: 'SenderIconBtn',
} as ComponentMeta<typeof SenderIconBtn>;

const Template: ComponentStory<typeof SenderIconBtn> = (args) => <SenderIconBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
