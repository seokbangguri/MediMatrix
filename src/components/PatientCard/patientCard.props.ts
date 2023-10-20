interface PatientData {
    user_id: number;
    patientNo: string;
    name: string;
    sex: string;
    hospital: string;
    // 다른 속성들을 필요에 따라 추가할 수 있습니다.
}

// 위의 데이터 구조를 나타내는 배열의 타입 정의
export type PatientList = PatientData[];

export interface PatientCardProps {
    name: string,
    id: string,
    score: string,
    image?: string,
    options: string[],
    patientList: PatientList,
}