interface HospitalInfo {
    [key: string]: {
        beery: boolean;
        sperm: boolean;
    };
}

//계약된 병원 서비스 분류
const hospital: HospitalInfo = {
    계약병원1: { beery: true, sperm: false },
    계약병원2: { beery: false, sperm: false },
    계약병원3: { beery: true, sperm: false },
    asdf: {beery: false, sperm: false },
};

export default hospital;