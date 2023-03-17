import { companyPhotoApi, companyStaticPhotoApi } from "api";
import { useUserJobApplicationContext } from "context";
import moment from "moment";

export const Card = () => {
  const { state } = useUserJobApplicationContext();

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
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        data.Job.Company.photo ===
                        "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                          ? "https://cdn-icons-png.flaticon.com/512/2098/2098316.png"
                          : companyStaticPhotoApi + data.Job.Company.photo
                      }
                      className="w-16 h-16 object-contain border-[1px] rounded-sm p-2"
                    />
                    <div className="mb-3">
                      <p className="text-lg font-semibold">{data.Job.name}</p>
                      <p className="text-sm font-normal">
                        {data.Job.Company.name}
                      </p>
                      <p className="text-xs font-normal mt-1">
                        {moment(data.createdAt).format("MM/DD/YYYY")}
                      </p>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 text-center">
                  {data.status === "rejected" ? (
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <p className="w-fit bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        {data.status}
                      </p>
                      <p className="text-xs">
                        {moment(data.updatedAt).format("MM/DD/YYYY")}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1 items-center justify-center text-center">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {data.status}
                      </span>
                      <p className="text-xs text-center">
                        {moment(data.updatedAt).format("MM/DD/YYYY")}
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
