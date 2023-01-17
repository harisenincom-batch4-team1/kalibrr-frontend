const CardContainer = ({ children }) => {
  return (
    <div className="max-w-full h-[95%] pb-16 mx-auto px-5 py-5 space-y-5 overflow-hidden overflow-y-scroll scrollbar-hide">
      {children}
    </div>
  );
};

export default CardContainer;
