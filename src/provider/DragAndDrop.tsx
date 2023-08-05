import React from 'react';

interface IDragAndDropContext {}

const DragAndDropContext = React.createContext<IDragAndDropContext>({});

const { Provider, Consumer: DragAndDropConsumer } = DragAndDropContext;

export { DragAndDropConsumer };

interface IDragAndDrop {
  children: React.ReactNode;
}

const DragAndDrop: React.FC<IDragAndDrop> = ({ children }) => (
  <Provider value={{}}>{children}</Provider>
);

export default DragAndDrop;
