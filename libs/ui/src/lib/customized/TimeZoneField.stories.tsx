import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimeZoneField } from './TimeZoneField';

export default {
    component: TimeZoneField,
    title: 'TimeZoneField',
} as ComponentMeta<typeof TimeZoneField>;

const Template: ComponentStory<typeof TimeZoneField> = (args) => <TimeZoneField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
