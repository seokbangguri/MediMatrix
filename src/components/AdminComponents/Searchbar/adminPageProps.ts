export interface patientsProps {
    name: string,
    id: string | number,
    email: string,
    phone?: string,
    data?: string,
    isTherapist?: boolean,
    score?: string,
    handleDelete: (id: string) => any;
    handleFilter: (query: string) => any;
}