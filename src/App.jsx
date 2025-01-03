import { ChakraProvider } from "@chakra-ui/icons";
import { React } from "react";
import layout  from "./layout/layout";
import { PublicRouter } from "./router";
import {CartProvider} from "./context";

function App() {
  return (
    <CartProvider>
      <ChakraProvider>
        <layout>
            <PublicRouter />
        </layout>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
