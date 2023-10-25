export interface PatientInfoInterface {
    name: string;
    id: string;
    sex: string;
};
export interface finalDataInterface {
    name: string;
    id: string;
    sex: string;
    hospital: string;
    therapists: string;
};

export interface SignInValuesInterface {
    email: string;
    password: string;
}

//Interface
export interface SignUpValuesInterface {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    hospitalName: string;
    phoneNumber?: string;
    role: string;
}

export interface PatientDataInterface {
    user_id: number;
    patientNo: string;
    name: string;
    sex: string;
    hospital: string;
    // 다른 속성들을 필요에 따라 추가할 수 있습니다.
}

export interface SelectedTestInterface {
    hospital: string;
    patientNo: string;
    score: {
        [key: string]: string;
    };
    totalScore: string;
    month: string;
    Date: string;
}

// 위의 데이터 구조를 나타내는 배열의 타입 정의
export type PatientListType = PatientDataInterface[];

//Interface
export interface UpdateInfoInterface {
    email: string;
    name: string;
    hospitalName: string;
    phoneNumber?: string;
}
export interface UpdatePasswordInterface {
    password: string;
    confirmPassword: string;
}
