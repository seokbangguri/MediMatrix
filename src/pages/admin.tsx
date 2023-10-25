import { useEffect, useState } from "react";
import { Heading, Searchbar } from "../components";
import { HiOutlineUserRemove } from 'react-icons/hi'
import { RiShareBoxFill } from 'react-icons/ri'
import Swal from "sweetalert2";
import axios from "axios";

//Component
const Admin = () => {
    const [therapists, setTherapists] = useState([]);
    const [hospitalName, setHospitalName] = useState('분당차병원');

    useEffect(() => {
        fetchTherapistData(); // Fetch data when the component mounts
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const apiUrl = process.env.REACT_APP_API_USERS;

    const fetchTherapistData = () => {
        axios.get(`${apiUrl}/getAllTherapist/${hospitalName}`)
            .then((response) => {
                setTherapists(response.data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return <div className="flex flex-col w-full px-6 py-8 md:h-screen mt-[150px] max-w-[1445px]">
        <Heading tag="h2">관리자 페이지</Heading>
        <div className="w-full self-start mt-16">
            <div className="flex justify-between items-center w-full">
                <Heading tag="h3" className="tex-left">Therapists</Heading>
                <Searchbar />
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
                    <ListItem name='Kim' id='kim@gmail.com' type='23' score='01028872323' />
                    <ListItem name='Min' id='min@gmail.com' type='23' score='01028872323' />
                    <ListItem name='Wang' id='kim@gmail.com' type='28' score='01028872323' />
                    <ListItem name='Wang' id='kim@gmail.com' type='28' score='01028872323' />
                    <ListItem name='Wang' id='kim@gmail.com' type='28' score='01028872323' />
                    <ListItem name='Wang' id='kim@gmail.com' type='28' score='01028872323' />
                    <ListItem name='Wang' id='kim@gmail.com' type='28' score='01028872323' />
                </div>
            </div>
        </div>
        <Patients name='Usmon' id='1' score="45" type="Berry VMI" />
    </div>;
};

export default Admin;



interface patientsProps {
    name: string,
    id: string,
    score?: string,
    type?: string,
}

export const Patients = ({ name, id, score, type }: patientsProps) => {

    return (
        <div className="w-full self-start mt-16">
            <Heading tag="h3" className="tex-left">Therapist Kim's patients</Heading>
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
                    <ListItem name={name} id={id} type={type} score={score} />
                    <ListItem name={name} id={id} type={type} score={score} />
                    <ListItem name={name} id={id} type={type} score={score} />
                </div>
            </div>
        </div>
    )
};



export const ListItem = (props: patientsProps) => {
    const showAlert = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this therapist? This action cannot be undone. The account will be permanently removed and you won’t be able to see it again. ",
            icon: 'warning',
            iconColor: '#d33',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="w-full flex justify-between text-left  gap-2 py-2">
            <span className="text-base w-[30px] ">1</span>
            <span className="text-base w-[150px] ">{props.name}</span>
            <span className="text-base w-[150px]">{props.id}</span>
            <span className="text-base w-[150px]">{props.score}</span>
            <span className="text-base w-[150px] text-center">{props.type}</span>
            <span className="text-[20px] w-[150px] flex items-start justify-center"><button type="button"><RiShareBoxFill className="w-[50px]" /></button></span>
            <span className="text-[20px] w-[100px] flex items-start justify-center text-red-600"><button type="button" onClick={showAlert}><HiOutlineUserRemove className="w-[50px]" /></button></span>
        </div>
    )
}