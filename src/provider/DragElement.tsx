import React, { useRef } from 'react';

interface IDragElementContext {}

const DragElementContext = React.createContext<IDragElementContext>({});

const { Provider, Consumer: DragElementConsumer } = DragElementContext;

export { DragElementConsumer };

interface IDragElement {
  children: (dragElement: {
    dragElementRef: React.Ref<HTMLElement | undefined>;
  }) => React.ReactNode;
}

const DragElement: React.FC<IDragElement> = ({ children }) => {
  const dragElementRef = useRef<HTMLElement>(null);
  return <Provider value={{}}>{children({ dragElementRef })}</Provider>;
};

export default DragElement;
