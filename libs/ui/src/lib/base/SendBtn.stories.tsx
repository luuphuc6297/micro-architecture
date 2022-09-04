import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SendBtn } from './SendBtn';

export default {
    component: SendBtn,
    title: 'SendBtn',
} as ComponentMeta<typeof SendBtn>;

const Template: ComponentStory<typeof SendBtn> = (args) => <SendBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
