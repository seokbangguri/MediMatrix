/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Filter, Heading, Searchbar } from "../components";
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
    let filteredTherapists = therapists.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleFilter = (text: string) => {
        if (text === 'male') {
            const filteredData = patientData.filter((item) =>
                item.gender.toLowerCase() === 'male'
            );
            setFilteredPatients(filteredData);
        } else if (text === 'female') {
            const filteredData = patientData.filter((item) =>
                item.gender.toLowerCase().startsWith(text)
            );
            setFilteredPatients(filteredData)
        } else if (text) {
            const filteredData = patientData.filter((item) =>
                item.therapist.toLowerCase() === text.toLowerCase()
            );
            setFilteredPatients(filteredData)
        } else if (text === 'test') {
            const sortedData = patientData.sort(function (a, b) {
                if (a.test.toLowerCase() < b.test.toLowerCase()) {
                    return -1;
                }
                if (a.test.toLowerCase() > b.test.toLowerCase()) {
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

    const deleteTherapist = (id: string) => {
        const updatedTherapists = filteredTherapists.filter((therapist) => therapist.id !== id);
        setTherapists(updatedTherapists)
    }

    const deletePatients = (id: string) => {
        const updatedPatients = patients.filter((patient) => patient.id !== id);
        console.log(updatedPatients)
        setFilteredPatients(updatedPatients)
    }
    useEffect(() => { }, [therapists, filteredPatients])

    useEffect(() => {
        axios.get(`${apiUrl}/getAllTherapist/${hospitalName}`)
            .then((response) => {
                setTherapists(response.data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            <ListItem key={item.id} name={item.name} email={item.email} data={item.data} phone={item.phone} id={i} handleDelete={deleteTherapist} isTherapist={true} handleFilter={handleFilter} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full self-start mt-16">
                <div className="flex justify-between items-center w-full">
                    <Heading tag="h3" className="tex-left">Patients</Heading>
                    <Filter handleFilter={handleFilter} />
                </div>
                <div className="w-full bg-white rounded-sm drop-shadow-2xl p-4 mt-8">
                    <div className="w-full flex justify-between gap-2 border-b border-[#cecece] py-4">
                        <span className="font-bold text-[20px] w-[30px]">#</span>
                        <span className="font-bold text-[20px] w-[150px]">Name</span>
                        <span className="font-bold text-[20px] w-[150px]">ID</span>
                        <span className="font-bold text-[20px] w-[150px]">Gender</span>
                        <span className="font-bold text-[20px] w-[150px] text-center">Type</span>
                        <span className="font-bold text-[20px] w-[150px] text-center">Score</span>
                        <span className="font-bold text-[20px] w-[100px] text-center">Remove</span>
                    </div>
                    <div className="">
                        {filteredPatients.map((item, i) => (
                            <ListItem key={item.id} name={item.name} email={item.patient_id} data={item.test} phone={item.gender} id={i} handleDelete={deletePatients} score={item.score} handleFilter={handleFilter} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Admin;

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
