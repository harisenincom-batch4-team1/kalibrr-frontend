export const HeaderTitle = (props) => {
  return (
    <div className="w-full justify-center bg-[#fafafa] hidden sm:flex">
      <div className="w-full">
        <h1 className="text-xl md:text-3xl font-bold py-5 px-5 border-b-[1px]">
          {props.title}
        </h1>
      </div>
    </div>
  );
};
