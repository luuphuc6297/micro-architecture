import { ComponentStory, ComponentMeta } from '@storybook/react';
import { renderPreview } from './UploadAvatar';

export default {
    component: renderPreview,
    title: 'renderPreview',
} as ComponentMeta<typeof renderPreview>;

const Template: ComponentStory<typeof renderPreview> = (args) => <renderPreview {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
