//スタイルシートの読み込み
import { ChakraProvider } from '@chakra-ui/react' 

//recoilの読み込み
//import { RecoilRoot } from "recoil"

import * as React from "react";

//ComponentとpagePropsは、next.jsの機能
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
