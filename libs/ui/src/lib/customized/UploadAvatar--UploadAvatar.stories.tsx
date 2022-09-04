import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UploadAvatar } from './UploadAvatar';

export default {
    component: UploadAvatar,
    title: 'UploadAvatar',
} as ComponentMeta<typeof UploadAvatar>;

const Template: ComponentStory<typeof UploadAvatar> = (args) => <UploadAvatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
