export interface patientsProps {
    name: string,
    id: string | number,
    email: string,
    phone?: string,
    data?: string,
    handleDelete: (id: string) => any;
}