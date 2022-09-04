import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LazyLoadContainer } from './LazyLoadContainer';

export default {
    component: LazyLoadContainer,
    title: 'LazyLoadContainer',
} as ComponentMeta<typeof LazyLoadContainer>;

const Template: ComponentStory<typeof LazyLoadContainer> = (args) => <LazyLoadContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
