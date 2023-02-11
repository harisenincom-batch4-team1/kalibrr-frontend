import { useUserJobApplicationContext } from "../../../context/user-job-application";

const Card = () => {
  const { state, dispatch } = useUserJobApplicationContext();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[800px] mx-auto my-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-blue-600 text-white dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Pekerjaan
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {state.datas.map((data, i) => {
            return (
              <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.Job.name}
                </th>
                <td className="px-6 py-4 text-center">{data.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Card;
