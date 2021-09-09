import Head from "next/head";
import Header from "../components/Header";
import TopContainer from "../containers/TopContainer";
import DemoContainer from "../containers/DemoContainer";
import SetupInsContainer from "../containers/SetupInsContainer";
import TeamContainer from "../containers/TeamContainer";
import Footer from "../components/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Next Step</title>
        <meta
          name="description"
          content="VS Code Extension that prints out web vital metrics for Next.js developers in their code editor to improve performance and SEO"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>

          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap&apos;);
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Bungee&display=swap&apos;);
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Karla:wght@200;300;500&display=swap&apos;);
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Inter&family=Yantramanav:wght@400&display=swap&apos;);

        </style>
      </Head>
      <Header />
      <TopContainer />
      <DemoContainer />
      <SetupInsContainer />
      <TeamContainer />
      <Footer />
    </Fragment>
  );
}

