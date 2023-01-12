const CardTitle = (props) => {
  return (
    <h1 className="text-white font-semibold text-base md:text-xl bg-[#0086FF] py-3 px-4">
      {props.title}
    </h1>
  );
};

export default CardTitle;
