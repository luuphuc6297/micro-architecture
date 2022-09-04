import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from './Banner';

export default {
    component: Banner,
    title: 'Banner',
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
