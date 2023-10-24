interface PatientData {
    user_id: number;
    patientNo: string;
    name: string;
    sex: string;
    hospital: string;
    // 다른 속성들을 필요에 따라 추가할 수 있습니다.
}
interface SelectedTest {
    hospital: string;
    patientNo: string;
    score: {
      [key: string]: string;
    };
    totalScore: string;
    month: string;
    Date: string;
  }
  

type GetDataCallback = (data: SelectedTest) => void;

export interface PatientCardProps {
    patientList: PatientData[],
    getData: GetDataCallback
}

//테스트 데이터
// INSERT INTO testData (patientNo, hospital, score, totalScore, month, Date)
// VALUES (
//     '12341234',
//     '분당차병원',
//     '{"4": "1", "5": "1", "6": "1", "7": "1", "8": "1", "9": "1", "10": "1", "11": "1", "12": "1", "13": "1", "14": "1", "15": "1", "16": "1", "17": "1", "18": "1", "19": "1", "20": "1", "21": "0", "22": "0", "23": "1", "24": "0", "25": "1", "26": "0", "27": "0", "28": "0", "29": "0", "30": "0"}',
//     '17',
//     '14',
//     CURRENT_DATE
// );