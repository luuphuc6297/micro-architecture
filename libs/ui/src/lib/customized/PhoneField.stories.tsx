import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PhoneFiled } from './PhoneField';

export default {
    component: PhoneFiled,
    title: 'PhoneFiled',
} as ComponentMeta<typeof PhoneFiled>;

const Template: ComponentStory<typeof PhoneFiled> = (args) => <PhoneFiled {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
