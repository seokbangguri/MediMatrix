export interface patientsProps {
    name: string,
    id: string | number,
    email: string,
    phone?: string,
    data?: string,
    deleteTherapist: (id: string | number) => any;
}