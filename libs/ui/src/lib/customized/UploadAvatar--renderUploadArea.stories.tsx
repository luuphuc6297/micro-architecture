import { ComponentStory, ComponentMeta } from '@storybook/react';
import { renderUploadArea } from './UploadAvatar';

export default {
    component: renderUploadArea,
    title: 'renderUploadArea',
} as ComponentMeta<typeof renderUploadArea>;

const Template: ComponentStory<typeof renderUploadArea> = (args) => <renderUploadArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
