import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AutoCompleteFiled } from './AutoComplete';

export default {
    component: AutoCompleteFiled,
    title: 'AutoCompleteFiled',
} as ComponentMeta<typeof AutoCompleteFiled>;

const Template: ComponentStory<typeof AutoCompleteFiled> = (args) => <AutoCompleteFiled {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
