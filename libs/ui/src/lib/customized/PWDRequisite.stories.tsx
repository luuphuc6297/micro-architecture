import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PWDRequisite } from './PWDRequisite';

export default {
    component: PWDRequisite,
    title: 'PWDRequisite',
} as ComponentMeta<typeof PWDRequisite>;

const Template: ComponentStory<typeof PWDRequisite> = (args) => <PWDRequisite {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
