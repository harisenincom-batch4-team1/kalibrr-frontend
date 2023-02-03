const DetailSavedWrapper = ({ children }) => {
  return (
    <div className="bg-white relative w-full h-full border-[1px] rounded-lg py-5 px-8 overflow-y-scroll overflow-hidden scrollbar-hide">
      {children}
    </div>
  );
};

export default DetailSavedWrapper;
