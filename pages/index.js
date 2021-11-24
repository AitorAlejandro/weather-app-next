import Head from "next/head";

import "../styles/Index.module.css";

import {
  ContentBox,
  DateAndTime,
  Header,
  MainCard,
  MetricCard,
  MetricBox,
  Search,
  UnitSwitch,
  Wrapper,
} from "../components";

export const App = () => {
  return (
    <div>
      <Head>
        <title>Weather app Next</title>
      </Head>

      <Wrapper>
        <MainCard>MainCard</MainCard>
        <ContentBox>
          <Header>
            <DateAndTime>DateAndTime</DateAndTime>
            <Search>Search</Search>
          </Header>
          <MetricBox>
            <MetricCard>Metric Card</MetricCard>
            <MetricCard>Metric Card</MetricCard>
            <MetricCard>Metric Card</MetricCard>
            <MetricCard>Metric Card</MetricCard>
            <MetricCard>Metric Card</MetricCard>
            <MetricCard>Metric Card</MetricCard>
          </MetricBox>
          <UnitSwitch>UnitSwitch</UnitSwitch>
        </ContentBox>
      </Wrapper>
    </div>
  );
};

export default App;
