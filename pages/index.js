import Head from "next/head";

import {
  ContentBox,
  Header,
  MainCard,
  MetricBox,
  UnitSwitch,
  Wrapper,
} from "../components";

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
          <MetricBox>MetricBox</MetricBox>
          <UnitSwitch>UnitSwitch</UnitSwitch>
        </ContentBox>
      </Wrapper>
    </main>
  );
};

export default App;
