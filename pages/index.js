import Head from "next/head";

import { ContentBox, MainCard, Wrapper } from "../components";

export const App = () => {
  return (
    <main>
      <Head>
        <title>Weather app Next</title>
      </Head>

      <Wrapper>
        <MainCard>MainCard</MainCard>
        <ContentBox>Content Box</ContentBox>
      </Wrapper>
    </main>
  );
};

export default App;
