import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialButton } from './SocialButton';

export default {
    component: SocialButton,
    title: 'SocialButton',
} as ComponentMeta<typeof SocialButton>;

const Template: ComponentStory<typeof SocialButton> = (args) => <SocialButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
