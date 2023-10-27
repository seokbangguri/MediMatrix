export interface SelectedTest {
    hospital: string;
    patientNo: string;
    score: {
      [key: string]: string;
    };
    totalScore: string;
    month: string;
    Date: string;
}