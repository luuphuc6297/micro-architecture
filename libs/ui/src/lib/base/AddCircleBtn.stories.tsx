import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddCircleBtn } from './AddCircleBtn';

export default {
    component: AddCircleBtn,
    title: 'AddCircleBtn',
} as ComponentMeta<typeof AddCircleBtn>;

const Template: ComponentStory<typeof AddCircleBtn> = (args) => <AddCircleBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
