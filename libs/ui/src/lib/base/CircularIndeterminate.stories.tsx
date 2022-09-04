import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularIndeterminate } from './CircularIndeterminate';

export default {
    component: CircularIndeterminate,
    title: 'CircularIndeterminate',
} as ComponentMeta<typeof CircularIndeterminate>;

const Template: ComponentStory<typeof CircularIndeterminate> = (args) => <CircularIndeterminate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
