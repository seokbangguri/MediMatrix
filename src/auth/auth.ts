import axios from "axios";
import Swal from "sweetalert2";

const apiUrl = process.env.REACT_APP_API_URL;

export async function verifyToken() {
    if(sessionStorage.getItem('token')){
      try {
      const data = { token: sessionStorage.getItem('token') };
      const response = await axios.post(apiUrl+'/verify', data);
        return response.data.decoded;
      } catch(error) {
        console.error('토큰 검증 실패:', error);
        sessionStorage.removeItem('token');
        Swal.fire({
          title: '다시 로그인!',
          text: '확인을 누르면 로그인으로 이동합니다.',
          icon: 'error',
          confirmButtonText: '확인',
        }).then(() => {
          window.location.href = "/signin";
        });
        return false;
      }
    } else {
      return false;
    }
}