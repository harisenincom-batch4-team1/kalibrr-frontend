import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { PublicLayout } from "layouts";
import { HeroSection, JobCategory, GetHired, ExploreJobs } from "components";
import { jobsApi } from "api";
import axios from "axios";

export const Homepage = () => {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [datas, setDatas] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  const truncate = (text, number) => {
    if (text.length > number) {
      return text.slice(0, number) + "...";
    }
    return text;
  };

  useEffect(() => {
    switch (status) {
      case "idle":
        setStatus("fetching");
        break;
      case "fetching":
        axios(jobsApi + "?limit=6&page=0")
          .then((res) => {
            if (res.data.datas.result.length === 0) {
              setStatus("empty");
              return;
            } else {
              setDatas(res.data.datas.result);
              setRandomNumber(
                Math.floor(Math.random() * res.data.datas.result.length)
              );
              setStatus("success");
              return;
            }
          })
          .catch((err) => {
            setStatus("error");
            setErrorMsg(err?.message);
          });
        break;
      default:
        break;
    }
  }, [status]);

  return (
    <PublicLayout>
      <Helmet>
        <title>Beranda - Kalibrr Temukan Lowongan Kerja</title>
      </Helmet>
      <main className="px-5">
        <HeroSection />
        <JobCategory />
        <GetHired
          datas={datas}
          errorMsg={errorMsg}
          status={status}
          truncate={truncate}
          randomId={randomNumber}
        />
        <ExploreJobs
          datas={datas}
          errorMsg={errorMsg}
          status={status}
          truncate={truncate}
        />
      </main>
    </PublicLayout>
  );
};
