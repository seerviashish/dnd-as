import { Box } from '@mui/material';
import React from 'react';
import { DragAndDrop, DragArea, DragElement, DropArea } from '../../..';

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
