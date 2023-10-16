
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Content from './content';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Content />
      </ChakraProvider>
    </div>
  );
}

export default App;
