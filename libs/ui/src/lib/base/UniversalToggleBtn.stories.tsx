import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UniversalToggleBtn } from './UniversalToggleBtn';

export default {
    component: UniversalToggleBtn,
    title: 'UniversalToggleBtn',
} as ComponentMeta<typeof UniversalToggleBtn>;

const Template: ComponentStory<typeof UniversalToggleBtn> = (args) => <UniversalToggleBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
