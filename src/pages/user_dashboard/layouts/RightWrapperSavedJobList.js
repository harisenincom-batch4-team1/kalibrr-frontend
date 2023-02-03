const RightWrapperSavedJobList = ({ children, tag }) => {
  return (
    <div
      className={
        tag === "empty" || tag === "error"
          ? "hidden"
          : "w-7/12 h-[95%] hidden lg:block pt-3 overflow-hidden overflow-y-scroll scrollbar-hide"
      }
    >
      {children}
    </div>
  );
};

export default RightWrapperSavedJobList;
