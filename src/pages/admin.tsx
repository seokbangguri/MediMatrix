import { useEffect, useState } from "react";
import { Heading, Searchbar } from "../components";
import axios from "axios";
import { ListItem } from "../components/AdminComponents/AdminListItem/ListItem";

//Component
const Admin = () => {
    const [therapists, setTherapists] = useState(data);
    const [patients, setPatients] = useState(patientData);
    const [hospitalName, setHospitalName] = useState('분당차병원');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPatients, setFilteredPatients] = useState(patientData);

    // Search funtion
    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    //Filter function for therapists
    const filteredTherapists = therapists.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleFilter = (text: string) => {
        if (text === 'male') {
            const filteredData = patientData.filter((item) =>
                item.gender.toLowerCase().startsWith(text)
            );
            setFilteredPatients(filteredData);
        } else if (text === 'female') {
            const filteredData = patientData.filter((item) =>
                item.gender.toLowerCase().startsWith(text)
            );
            setFilteredPatients(filteredData)
        } else if (text === 'test') {
            const sortedData = patientData.sort(function (a, b) {
                if (a.test < b.test) {
                    return -1;
                }
                if (a.test > b.test) {
                    return 1;
                }
                return 0;
            });
            setFilteredPatients(sortedData);
        }
    }
    // const filteredPatients = patients.filter((item) =>
    //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    // 
    // useEffect(() => {
    //     fetchTherapistData(); // Fetch data when the component mounts
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const apiUrl = process.env.REACT_APP_API_USERS;

    const deleteTherapist = (id: string | number) => {
        const updatedTherapists = therapists.filter((therapist) => therapist.id !== id);
        setTherapists(updatedTherapists);
    }
    const deletePatients = (id: string | number) => {
        const updatedTherapists = therapists.filter((therapist) => therapist.id !== id);
        setTherapists(updatedTherapists);
    }

    const fetchTherapistData = () => {
        axios.get(`${apiUrl}/getAllTherapist/${hospitalName}`)
            .then((response) => {
                setTherapists(response.data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return <>
        <div className="flex flex-col w-full px-6 py-8 min-h-screen my-[150px] max-w-[1445px]">
            <Heading tag="h2">관리자 페이지</Heading>
            <div className="w-full self-start mt-16">
                <div className="flex justify-between items-center w-full">
                    <Heading tag="h3" className="tex-left">Therapists</Heading>
                    <Searchbar handleSearch={handleSearch} />
                </div>
                <div className="w-full bg-white rounded-sm drop-shadow-2xl p-4 mt-8">
                    <div className="w-full flex justify-between gap-2 border-b border-[#cecece] py-4">
                        <span className="font-bold text-[20px] w-[30px]">#</span>
                        <span className="font-bold text-[20px] w-[150px]">Name</span>
                        <span className="font-bold text-[20px] w-[150px]">Email</span>
                        <span className="font-bold text-[20px] w-[150px]">Phone Number</span>
                        <span className="font-bold text-[20px] w-[150px] text-center">Patients</span>
                        <span className="font-bold text-[20px] w-[150px] text-center">See Patients</span>
                        <span className="font-bold text-[20px] w-[100px] text-center">Delete</span>
                    </div>
                    <div className="">
                        {filteredTherapists.map((item, i) => (
                            <ListItem key={item.id} name={item.name} email={item.email} data={item.data} phone={item.phone} id={i} deleteTherapist={deleteTherapist} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full self-start mt-16">
                <div className="flex justify-between items-center w-full">
                    <Heading tag="h3" className="tex-left">Therapist Kim's patients</Heading>
                    <Filter handleFilter={handleFilter} />
                </div>
                <div className="w-full bg-white rounded-sm drop-shadow-2xl p-4 mt-8">
                    <div className="w-full flex justify-between gap-2 border-b border-[#cecece] py-4">
                        <span className="font-bold text-[20px] w-[30px]">#</span>
                        <span className="font-bold text-[20px] w-[150px]">Name</span>
                        <span className="font-bold text-[20px] w-[150px]">ID</span>
                        <span className="font-bold text-[20px] w-[150px]">Score</span>
                        <span className="font-bold text-[20px] w-[150px] text-center">Type</span>
                        <span className="font-bold text-[20px] w-[150px] text-center">See Results</span>
                        <span className="font-bold text-[20px] w-[100px] text-center">Remove</span>
                    </div>
                    <div className="">
                        {filteredPatients.map((item, i) => (
                            <ListItem key={item.id} name={item.name} email={item.patient_id} data={item.test} phone={item.gender} id={i} deleteTherapist={deletePatients} />
                        ))}
                        {/* <ListItem name={name} id={id} type={type} score={score} />
                    <ListItem name={name} id={id} type={type} score={score} />
                    <ListItem name={name} id={id} type={type} score={score} /> */}
                    </div>
                </div>
            </div>
            {/* <Patients name='Usmon' id='1' score="45" type="Berry VMI" /> */}
        </div>
    </>
};

export default Admin;

interface SearchBarProps {
    handleFilter: (query: string) => any;
}
export const Filter = ({ handleFilter }: SearchBarProps) => {

    return <div className='w-[400px] flex items-center h-12 rounded-lg drop-shadow-xl px-4 bg-white overflow-hidden'>
        <span className="font-bold text-base">Filter:</span>
        <button onClick={() => handleFilter('test')} className="ml-auto bg-neutral-500/80 px-4 rounded-sm text-white mr-2 hover:bg-button-green" type="button">Test</button>
        <button onClick={() => handleFilter('female')} className="bg-neutral-500/80 px-4 rounded-sm text-white mr-2 hover:bg-button-green" type="button">Female</button>
        <button onClick={() => handleFilter('male')} className="bg-neutral-500/80 px-4 rounded-sm text-white hover:bg-button-green" type="button">Male</button>
    </div>
}

export const data = [
    {
        id: '1',
        name: 'Lee',
        email: 'lee@gmail.com',
        phone: '01028865624',
        data: '21',
    },
    {
        id: '2',
        name: 'Kim',
        email: 'kim@gmail.com',
        phone: '01012345678',
        data: '15',
    },
    {
        id: '3',
        name: 'Park',
        email: 'park@yahoo.com',
        phone: '01098765432',
        data: '28',
    },
    {
        id: '4',
        name: 'Choi',
        email: 'choi@hotmail.com',
        phone: '01055556666',
        data: '10',
    },
    {
        id: '5',
        name: 'Jung',
        email: 'jung@gmail.com',
        phone: '01077778888',
        data: '19',
    },
    {
        id: '6',
        name: 'Shin',
        email: 'shin@gmail.com',
        phone: '01033334444',
        data: '25',
    },
    {
        id: '7',
        name: 'Yoon',
        email: 'yoon@yahoo.com',
        phone: '01012312312',
        data: '14',
    },
    {
        id: '8',
        name: 'Lim',
        email: 'lim@hotmail.com',
        phone: '01099998888',
        data: '3',
    },
    {
        id: '9',
        name: 'Han',
        email: 'han@gmail.com',
        phone: '01077779999',
        data: '7',
    },
    {
        id: '10',
        name: 'Song',
        email: 'song@yahoo.com',
        phone: '01045674567',
        data: '30',
    },
];

const patientData = [
    {
        id: '1',
        name: 'Hong Gil Tong',
        therapist: 'Lee',
        patient_id: '16413483',
        test: 'Beery VMI',
        gender: 'male',
        score: '23',
    },
    {
        id: '2',
        name: 'Park Ji Young',
        therapist: 'Kim',
        patient_id: '98765432',
        test: 'WISC-IV',
        gender: 'female',
        score: '17',
    },
    {
        id: '3',
        name: 'Choi Min Woo',
        therapist: 'Han',
        patient_id: '55555555',
        test: 'ADOS-2',
        gender: 'male',
        score: '20',
    },
    {
        id: '4',
        name: 'Kang Min Hee',
        therapist: 'Jung',
        patient_id: '12345678',
        test: 'Beery VMI',
        gender: 'female',
        score: '7',
    },
    {
        id: '5',
        name: 'Lee Eun Bi',
        therapist: 'Shin',
        patient_id: '11112222',
        test: 'Beery VMI',
        gender: 'female',
        score: '0',
    },
    {
        id: '6',
        name: 'Kim Joon Ho',
        therapist: 'Yoon',
        patient_id: '77778888',
        test: 'Beery VMI',
        gender: 'male',
        score: '0',
    },
    {
        id: '7',
        name: 'Park Soo Min',
        therapist: 'Lim',
        patient_id: '98765432',
        test: 'ADOS-2',
        gender: 'female',
        score: '15',
    },
    {
        id: '8',
        name: 'Yoo Min Ji',
        therapist: 'Han',
        patient_id: '33333333',
        test: 'CARS-2',
        gender: 'female',
        score: '13',
    },
    {
        id: '9',
        name: 'Song Ki Bum',
        therapist: 'Shin',
        patient_id: '22223333',
        test: 'Beery VMI',
        gender: 'male',
        score: '0',
    },
    {
        id: '10',
        name: 'Lee Ji Eun',
        therapist: 'Kim',
        patient_id: '55556666',
        test: 'SCQ',
        gender: 'female',
        score: '2',
    },
];
