import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResponsiveAppBar } from './AppBar';

export default {
    component: ResponsiveAppBar,
    title: 'ResponsiveAppBar',
} as ComponentMeta<typeof ResponsiveAppBar>;

const Template: ComponentStory<typeof ResponsiveAppBar> = (args) => <ResponsiveAppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
