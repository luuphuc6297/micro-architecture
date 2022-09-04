import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextFiledLabel } from './TextFiledLabel';

export default {
    component: TextFiledLabel,
    title: 'TextFiledLabel',
} as ComponentMeta<typeof TextFiledLabel>;

const Template: ComponentStory<typeof TextFiledLabel> = (args) => <TextFiledLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
