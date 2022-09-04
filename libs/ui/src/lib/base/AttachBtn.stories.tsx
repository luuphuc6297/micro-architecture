import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AttachBtn } from './AttachBtn';

export default {
    component: AttachBtn,
    title: 'AttachBtn',
} as ComponentMeta<typeof AttachBtn>;

const Template: ComponentStory<typeof AttachBtn> = (args) => <AttachBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
