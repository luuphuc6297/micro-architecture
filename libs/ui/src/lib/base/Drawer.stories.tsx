import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TemporaryDrawer } from './Drawer';

export default {
    component: TemporaryDrawer,
    title: 'TemporaryDrawer',
} as ComponentMeta<typeof TemporaryDrawer>;

const Template: ComponentStory<typeof TemporaryDrawer> = (args) => <TemporaryDrawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
