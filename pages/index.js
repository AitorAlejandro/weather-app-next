import Head from "next/head";

import { ContentBox, Header, MainCard, Wrapper } from "../components";

export const App = () => {
  return (
    <main>
      <Head>
        <title>Weather app Next</title>
      </Head>

      <Wrapper>
        <MainCard>MainCard</MainCard>
        <ContentBox>
          <Header>Header</Header>
        </ContentBox>
      </Wrapper>
    </main>
  );
};

export default App;
