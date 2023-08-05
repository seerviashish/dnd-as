import React, { useRef } from 'react';

interface IDragAreaContext {}

const DragAreaContext = React.createContext<IDragAreaContext>({});

const { Provider, Consumer: DragAreaConsumer } = DragAreaContext;

export { DragAreaConsumer };

interface IDragArea {
  children: (dragArea: {
    dragAreaRef: React.Ref<HTMLElement | undefined>;
  }) => React.ReactNode;
}

const DragArea: React.FC<IDragArea> = ({ children }) => {
  const dragAreaRef = useRef<HTMLElement>();
  return <Provider value={{}}>{children({ dragAreaRef })}</Provider>;
};

export default DragArea;
