import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomizedSnackbar } from './Snackbar';

export default {
    component: CustomizedSnackbar,
    title: 'CustomizedSnackbar',
} as ComponentMeta<typeof CustomizedSnackbar>;

const Template: ComponentStory<typeof CustomizedSnackbar> = (args) => <CustomizedSnackbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
