import { ComponentStory, ComponentMeta } from '@storybook/react';
import { thumbs } from './UploadAvatar';

export default {
    component: thumbs,
    title: 'thumbs',
} as ComponentMeta<typeof thumbs>;

const Template: ComponentStory<typeof thumbs> = (args) => <thumbs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
