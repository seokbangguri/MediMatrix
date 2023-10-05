import { Heading } from "../components";
import { HiOutlineUserRemove } from 'react-icons/hi'
import { RiShareBoxFill } from 'react-icons/ri'
import Swal from "sweetalert2";

//Component
const Admin = () => {

    return <div className="flex flex-col w-full px-6 py-8 md:h-screen mt-[150px] max-w-[1445px]">
        <Heading tag="h2">관리자 페이지</Heading>
        <div className="w-full self-start mt-16">
            <Heading tag="h3" className="tex-left">Therapists</Heading>
            <div className="w-full bg-white rounded-sm drop-shadow-2xl p-4 mt-8">
                <div className="w-full flex justify-between gap-2 border-b border-[#cecece] py-4">
                    <span className="font-bold text-[20px] w-[30px]">#</span>
                    <span className="font-bold text-[20px] w-[150px]">Name</span>
                    <span className="font-bold text-[20px] w-[150px]">Email</span>
                    <span className="font-bold text-[20px] w-[150px]">Phone Number</span>
                    <span className="font-bold text-[20px] w-[50px] text-center">Patients</span>
                    <span className="font-bold text-[20px] w-[150px] text-center">See Patients</span>
                    <span className="font-bold text-[20px] w-[100px] text-center">Delete</span>
                </div>
                <div className="">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>


            </div>
        </div>
    </div>;
};

export default Admin;


export const ListItem = () => {
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
            <span className="text-[20px] w-[30px] ">1</span>
            <span className="text-[20px] w-[150px] ">Usmon</span>
            <span className="text-[20px] w-[150px]">usmon@gmail.com</span>
            <span className="text-[20px] w-[150px]">Phone Number</span>
            <span className="text-[20px] w-[50px] text-center">20</span>
            <span className="text-[20px] w-[150px] flex items-start justify-center"><button type="button"><RiShareBoxFill className="w-[50px]" /></button></span>
            <span className="text-[20px] w-[100px] flex items-start justify-center text-red-600"><button type="button" onClick={showAlert}><HiOutlineUserRemove className="w-[50px]" /></button></span>
        </div>
    )
}
