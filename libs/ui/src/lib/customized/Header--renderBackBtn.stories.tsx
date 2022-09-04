import { ComponentStory, ComponentMeta } from '@storybook/react';
import { renderBackBtn } from './Header';

export default {
    component: renderBackBtn,
    title: 'renderBackBtn',
} as ComponentMeta<typeof renderBackBtn>;

const Template: ComponentStory<typeof renderBackBtn> = (args) => <renderBackBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
