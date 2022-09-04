import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubmitButton } from './SubmitButton';

export default {
    component: SubmitButton,
    title: 'SubmitButton',
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
