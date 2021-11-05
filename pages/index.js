import Head from "next/head";

import { Wrapper } from "../components";

export const App = () => {
  return (
    <main>
      <Head>
        <title>Weather app Next</title>
      </Head>

      <Wrapper>
        <h1>Weather App</h1>
      </Wrapper>
    </main>
  );
};

export default App;
