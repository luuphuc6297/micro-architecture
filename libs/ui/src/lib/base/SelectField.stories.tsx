import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectField } from './SelectField';

export default {
    component: SelectField,
    title: 'SelectField',
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
