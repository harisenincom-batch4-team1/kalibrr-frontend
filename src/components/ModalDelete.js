import { applyJobApi } from "api";
import axios from "axios";
import { useGlobalContext } from "context";
import { Button, Modal } from "flowbite-react";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ModalDelete = ({ userId, jobId, detailJob }) => {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  console.log("status", state.isLoginCompany);
  console.log("detail", detailJob);

  const onClick = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    axios
      .post(
        applyJobApi,
        { jobId: Number(jobId), userId: Number(userId) },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("kalibrr"),
          },
        }
      )
      .then((res) => {
        toast.success("Berhasil melamar pekerjaan");
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        }
      })
      .finally(() => {
        setShow(false);
      });
  };

  return (
    <>
      <Button
        onClick={onClick}
        className="absolute top-40 sm:right-4 sm:top-20 py-2"
        size="sm"
        disabled={!detailJob || state.isLoginCompany}
      >
        Lamar Sekarang
      </Button>
      <Modal
        show={show}
        onClose={onClose}
        className="h-screen w-full pt-40 sm:px-20 md:px-40 lg:px-96"
      >
        <Modal.Header>Konfirmasi Lamaran</Modal.Header>
        <Modal.Body>
          <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Tekan Lamar jika anda minat
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={onClose} className="ml-auto">
            Batal
          </Button>
          <Button onClick={handleSubmit} className="ml-auto">
            Lamar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
