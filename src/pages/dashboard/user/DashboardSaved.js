import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import NavbarUserLayout from "./layouts/NavbarUserLayout";
import SkeletonCard from "./components/loading/SkeletonCard";
import SkeletonJobDetail from "./components/loading/SkeletonJobDetail";
import CardSavedJobList from "./components/saved/CardSavedJobList";
import DetailSavedJob from "./components/saved/DetailSavedJob";
import EmptySavedJobList from "./components/saved/EmptySavedJobList";
import ErrorSavedJobList from "./components/saved/ErrorSavedJobList";
import ErrorDetailSavedJobList from "./components/saved/ErrorDetailSavedJobList";
import Container from "./layouts/Container";
import ContainerSavedJobList from "./layouts/ContainerSavedJobList";
import LeftWrapperSavedJobList from "./layouts/LeftWrapperSavedJobList";
import RightWrapperSavedJobList from "./layouts/RightWrapperSavedJobList";
import DetailSavedWrapper from "./layouts/DetailSavedWrapper";
import HeaderSearchSavedJob from "./components/header/HeaderSearchSavedJob";

const DashboardSaved = () => {
  const dispatch = useDispatch();

  const tag = useSelector((state) => state.savedJobListReducer.tag);
  const tagDetail = useSelector((state) => state.savedJobListReducer.tagDetail);
  const jobDetailId = useSelector(
    (state) => state.savedJobListReducer.jobDetailId
  );

  useEffect(() => {
    dispatch({ type: "FETCH" });
    axios
      .get(process.env.REACT_APP_JOB)
      .then((res) => {
        if (res.data[0].datas === 0) {
          dispatch({ type: "FETCH_EMPTY" });
        } else {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data[0].datas });
        }
      })
      .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err?.message }));
  }, []);

  useEffect(() => {
    if (jobDetailId) {
      axios
        .get(process.env.REACT_APP_JOB + `/${jobDetailId}`)
        .then((res) => {
          if (res.data[0].datas === 0) {
            dispatch({ type: "FETCH_DETAIL_EMPTY" });
          } else {
            dispatch({
              type: "FETCH_DETAIL_SUCCESS",
              payload: res.data[0].datas,
              description: res.data[0].datas.jobDescription,
              qualification: res.data[0].datas.jobQualification,
            });
          }
        })
        .catch((err) =>
          dispatch({ type: "FETCH_DETAIL_ERROR", payload: err?.message })
        );
    }
  }, [jobDetailId]);

  return (
    <NavbarUserLayout>
      <Container>
        <HeaderSearchSavedJob title={"Disimpan"} />
        <ContainerSavedJobList>
          <LeftWrapperSavedJobList tag={tag}>
            {tag === "loading" && <SkeletonCard />}
            {tag === "loaded" && <CardSavedJobList />}
            {tag === "empty" && <EmptySavedJobList />}
            {tag === "error" && <ErrorSavedJobList />}
          </LeftWrapperSavedJobList>
          <RightWrapperSavedJobList tag={tag}>
            <DetailSavedWrapper>
              {tagDetail === "loading" && <SkeletonJobDetail />}
              {tagDetail === "loaded" && <DetailSavedJob />}
              {tagDetail === "error" && <ErrorDetailSavedJobList />}
            </DetailSavedWrapper>
          </RightWrapperSavedJobList>
        </ContainerSavedJobList>
      </Container>
    </NavbarUserLayout>
  );
};

export default DashboardSaved;
