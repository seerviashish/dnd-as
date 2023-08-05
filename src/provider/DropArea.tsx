import React, { useRef } from 'react';

interface IDropAreaContext {}

const DropAreaContext = React.createContext<IDropAreaContext>({});

const { Provider, Consumer: DropAreaConsumer } = DropAreaContext;

export { DropAreaConsumer };

interface IDropArea {
  children: (dropArea: {
    dropAreaRef: React.Ref<HTMLElement | undefined>;
  }) => React.ReactNode;
}

const DropArea: React.FC<IDropArea> = ({ children }) => {
  const dropAreaRef = useRef<HTMLElement>(null);
  return <Provider value={{}}>{children({ dropAreaRef })}</Provider>;
};

export default DropArea;
