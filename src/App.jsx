import { ChakraProvider } from "@chakra-ui/icons";
import { React } from "react";
import Layout from "./layout/layout";
import { PublicRouter } from "./router";

function App() {
  return (
    <>
      <ChakraProvider>
        <Layout>
            <PublicRouter />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
