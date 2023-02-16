import { useCompanyJobContext } from "../../../context/company-job-context";

const Table = () => {
  const { state, dispatch } = useCompanyJobContext();

  const truncate = (text, number) => {
    if (text.length > number) {
      return text.slice(0, number) + "...";
    }
    return text;
  };

  return (
    <div className="px-5 max-w-[1280px] mx-auto">
      <div className="bg-white scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full overflow-x-scroll md:w-full overflow-hidden relative border border-gray-200 rounded-lg mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center bg-blue-500 text-white">
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-3">
                Kualifikasi
              </th>
              <th scope="col" className="px-6 py-3">
                Tipe
              </th>
              <th scope="col" className="px-6 py-3">
                Jabatan
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Gaji
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {state.datas.map((data, i) => {
              return (
                <tr className="text-center" key={i}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.name}
                  </th>
                  <td>{truncate(data.jobDescription, 20)}</td>
                  <td>{truncate(data.jobQualification, 20)}</td>
                  <td>{data.type}</td>
                  <td>{data.tenure}</td>
                  <td>{data.status ? "Buka" : "Tutup"}</td>
                  <td>{data.salaryMin + "-" + data.salaryMax}</td>
                  <div className="space-x-2 mt-4 w-full">
                    <button className="bg-yellow-400 text-white py-1 px-3 rounded-md text-xs">
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE", payload: data.id })
                      }
                      className="bg-red-600 text-white py-1 px-3 rounded-md text-xs"
                    >
                      Hapus
                    </button>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
