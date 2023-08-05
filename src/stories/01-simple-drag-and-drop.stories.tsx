import { Meta, StoryFn } from '@storybook/react';

import { Basic } from '../examples/SimpleDragAndDrop';

export default {
  title: 'Examples/Simple Drag and Drop/Basic',
  component: Basic,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Basic>;

const Template: StoryFn<typeof Basic> = (args) => <Basic {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
