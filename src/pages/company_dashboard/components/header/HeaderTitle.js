const HeaderTitle = (props) => {
  return (
    <div className="w-full flex justify-center bg-[#fafafa]">
      <div className="w-full">
        <h1 className="text-xl md:text-3xl font-bold py-5 px-5 border-b-[1px]">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderTitle;
