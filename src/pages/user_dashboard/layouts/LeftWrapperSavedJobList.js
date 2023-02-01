const LeftWrapperSavedJobList = ({ children, tag }) => {
  return (
    <div
      className={
        tag === "empty" || tag === "error"
          ? "w-full space-y-5  overflow-y-scroll overflow-hidden pt-6 scrollbar-hide pb-5"
          : "w-full lg:w-5/12 space-y-5 overflow-y-scroll overflow-hidden pt-6 scrollbar-hide pb-5"
      }
    >
      {children}
    </div>
  );
};

export default LeftWrapperSavedJobList;
