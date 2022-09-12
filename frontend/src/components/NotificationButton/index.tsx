import icon from "../../assets/img/notification-icon.svg";
import axios from "axios";
import "./styles.css";
import { toast } from "react-toastify";

type Props = {
  saleId: number;
};

const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((res) => {
    toast.info("SMS enviado com sucesso!");
  });
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
