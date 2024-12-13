import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"} minHeight={"100vh"}>
      <Flex flex="1" flexDirection="column">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
export default Layout;
