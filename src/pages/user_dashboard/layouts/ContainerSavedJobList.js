const ContainerSavedJobList = ({children}) => {
  return (
    <div className="bg-[#fafafa] w-full flex space-x-5 h-screen px-5 space-y-3 overflow-y-scroll scrollbar-hide overflow-hidden pb-36">
      {children}
    </div>
  )
}

export default ContainerSavedJobList