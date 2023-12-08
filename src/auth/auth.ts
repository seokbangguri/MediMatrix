import axios from "axios";
import { showError } from "../utils/errorHandling";

const apiUrl = process.env.REACT_APP_API_URL;

export async function verifyToken() {
  const token = sessionStorage.getItem('token');
  
  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(`${apiUrl}/verify`, { token }, {
      timeout: 5000,
    });

    return response.data.decoded;
  } catch (error: any) {
    handleVerificationError();
    return false;
  }
}

function handleVerificationError() {
  sessionStorage.removeItem('token');
  showError('다시 로그인!', '확인을 누르면 로그인으로 이동합니다')
  .then(() => {
    window.location.href = "/signin";
  });
}