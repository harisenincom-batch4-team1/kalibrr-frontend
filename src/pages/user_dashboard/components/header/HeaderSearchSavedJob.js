import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";

const HeaderSearchSavedJob = (props) => {
  const dispatch = useDispatch();

  const tag = useSelector((state) => state.savedJobListReducer.tag);
  const tagDetail = useSelector((state) => state.savedJobListReducer.tagDetail);
  const input = useSelector((state) => state.savedJobListReducer.inputValue);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (tag === "loading" || tagDetail === "loading") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [tag, tagDetail]);

  return (
    <div className="w-full flex justify-center bg-[#fafafa]">
      <div className="w-full h-fit border-b-[1px] flex items-center py-3 md:py-0 md:px-5">
        <h1 className="text-3xl font-bold py-5 hidden md:block w-64">
          {props.title}
        </h1>
        <div className="w-full px-5 md:px-0 mx-auto ">
          <div className="w-full bg-[#edf2f7] flex justify-between rounded-full rouded-full overflow-hidden">
            <input
              value={input}
              onChange={(e) =>
                dispatch({ type: "CHANGE_INPUT", payload: e.target.value })
              }
              disabled={isDisabled}
              type="text"
              className="w-full bg-[#edf2f7] py-3 px-5 outline-none"
              placeholder="Cari Pekerjaan yang Disimpan"
            />
            <MagnifyingGlassIcon className="w-6 mr-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchSavedJob;
