import { Lead } from "../components/Lead/Lead";
import { CardSection } from "../components/CardSection/CardSection";

export default function Home() {
  return (
    <>
      <Lead
        tag="h1"
        title={
          <>
            Интернет-журнал
            <br />о феминизме и женской культуре.
          </>
        }
      />
      <CardSection />
      <Lead
        tag="p"
        variant="light"
        title={
          <>
            Внеси свой вклад
            <br />в развитие журнала!
          </>
        }
      />
    </>
  );
}
