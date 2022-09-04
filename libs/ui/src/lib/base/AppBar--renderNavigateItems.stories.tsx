import { ComponentStory, ComponentMeta } from '@storybook/react';
import { renderNavigateItems } from './AppBar';

export default {
    component: renderNavigateItems,
    title: 'renderNavigateItems',
} as ComponentMeta<typeof renderNavigateItems>;

const Template: ComponentStory<typeof renderNavigateItems> = (args) => <renderNavigateItems {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
