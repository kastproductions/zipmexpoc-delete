import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";
import "styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "pages";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Home />
        </div>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
