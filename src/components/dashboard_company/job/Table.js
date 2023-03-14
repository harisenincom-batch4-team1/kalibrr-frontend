import { useCompanyJobContext } from "context";
import { Button, Label, Modal, Radio } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
import { Spinner } from "components/Spinner";
import { DefaultEditor } from "react-simple-wysiwyg";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { companyJobApi } from "api";

export const Table = () => {
  const { state, dispatch } = useCompanyJobContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "EDIT" });
    setTimeout(() => {
      axios
        .put(
          companyJobApi,
          {
            name: data.name,
            type: data.type,
            tenure: data.tenure,
            salaryMin: data.salaryMin,
            salaryMax: data.salaryMax,
            jobDescription: state.descriptionInput,
            jobQualification: state.qualificationInput,
            status: data.status,
          },
          {
            headers: {
              Authorization: "Bearer " + Cookies.get("kalibrr-company"),
            },
          }
        )
        .then(() => {
          navigate("/company/dashboard/profile");
          setTimeout(() => {
            navigate("/company/dashboard/job");
          }, 1);
          toast.success("Berhasil memperbarui lowongan pekerjaan");
          dispatch({ type: "EDIT_SUCCESS" });
        })
        .catch((err) => {
          toast.error(err?.message);
          dispatch({ type: "EDIT_ERROR", payload: err?.message });
        });
    }, 500);
  };

  return (
    <>
      <Modal
        onClose={() => dispatch({ type: "CANCEL_DELETE" })}
        show={state.tag === "delete"}
        className="h-screen w-full pt-40 sm:px-20 md:px-44 lg:px-80"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah kamu yakin ingin menghapus lowongan kerja ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="gray"
                onClick={() => dispatch({ type: "CANCEL_DELETE" })}
              >
                Batal
              </Button>
              <Button
                color="failure"
                onClick={() => dispatch({ type: "DELETE" })}
              >
                Hapus
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-white scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-full overflow-x-scroll md:w-full overflow-hidden relative border border-gray-200 rounded-lg mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center bg-blue-700 text-white">
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Tipe
                </th>
                <th scope="col" className="px-6 py-3">
                  Masa
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Di ubah
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {state.datas.map((data, i) => {
                return (
                  <tr
                    className="text-center w-full border-t hover:bg-gray-50"
                    key={i}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.name}
                    </th>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.type}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.tenure}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span className="text-green-600 font-semibold">
                        {data.status === true || data.status == 1 ? "Buka" : ""}
                      </span>
                      <span className="text-red-600 font-semibold">
                        {data.status === false || data.status == 0
                          ? "Tutup"
                          : ""}
                      </span>
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap dark:text-white"
                    >
                      {moment(data.updatedAt).format("YYYY/MM/DD")}
                    </td>
                    <div className="space-x-2 mt-4 flex justify-center mx-auto px-2">
                      <button
                        onClick={() =>
                          dispatch({ type: "EDIT", payload: data })
                        }
                        className="bg-yellow-400 text-white py-1 px-3 rounded-md text-xs"
                      >
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
    </>
  );
};
