import { useState } from "react";
import { useGlobalContext } from "../../../context/global-context";
import { Button, Modal } from "flowbite-react";
import { companyProfileApi } from "../../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";

const ModalDelete = () => {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    axios
      .delete(companyProfileApi, {
        headers: { Authorization: "Bearer " + Cookies.get("kalibrr-company") },
      })
      .then(() => {
        Cookies.remove("kalibrr");
        dispatch({ type: "DELETE" });
        navigate("/");
      })
      .catch((err) => toast.error(err?.message));
  };

  return (
    <>
      <Button
        onClick={onClick}
        color="failure"
        className="ml-auto w-full md:w-20 h-10"
      >
        Hapus
      </Button>
      <Modal
        show={show}
        onClose={onClose}
        className="h-screen w-full pt-40 sm:px-20 md:px-40 lg:px-96"
      >
        <Modal.Header>Hapus Akun Kalibrr</Modal.Header>
        <Modal.Body>
          <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Hapus akun bersifat permanen. Semua data perusahaan akan dihapus.
            Perusahaan harus membuat akun Kalibrr baru dan mengisi semua
            informasi yang diperlukan jika ingin membuat lowongan pekerjaan.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={onClose} className="ml-auto">
            Batal
          </Button>
          <Button onClick={handleSubmit} color="failure" className="ml-auto">
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
