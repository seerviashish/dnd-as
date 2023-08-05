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

Primary.parameters = {
  docs: {
    description: {
      story:
        'Basic contains simple drag and drop example from drag area to drop area. Here drop area is not contained in drag area.',
    },
    source: {
      code: `
import { Box } from '@mui/material';
import React from 'react';
import { DragAndDrop, DragArea, DragElement, DropArea } from 'dnd-as';

const Basic: React.FC = () => (
  <DragAndDrop>
    <DragArea>
      {({ dragAreaRef }) => (
        <Box ref={dragAreaRef}>
          <DragElement>
            {({ dragElementRef }) => (
              <Box ref={dragElementRef}>Draggable Element</Box>
            )}
          </DragElement>
          <DropArea>
            {({ dropAreaRef }) => <Box ref={dropAreaRef}>Drop Area</Box>}
          </DropArea>
        </Box>
      )}
    </DragArea>
  </DragAndDrop>
);

export default Basic;
`,
    },
  },
};
