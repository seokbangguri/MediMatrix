import Swal from "sweetalert2"
import { patientsProps } from "../Searchbar/adminPageProps"
import { RiShareBoxFill } from "react-icons/ri"
import { HiOutlineUserRemove } from "react-icons/hi"

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
                props.handleDelete(props.id.toString())
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
            <span className="text-base w-[30px] ">{props.id}</span>
            <span className="text-base w-[150px] ">{props.name}</span>
            <span className="text-base w-[150px]">{props.email}</span>
            <span className="text-base w-[150px]">{props.phone}</span>
            <span className="text-base w-[150px] text-center">{props.data}</span>
            <span className="text-[20px] w-[150px] flex items-start justify-center"><button type="button"><RiShareBoxFill className="w-[50px]" /></button></span>
            <span className="text-[20px] w-[100px] flex items-start justify-center text-red-600"><button type="button" onClick={showAlert}><HiOutlineUserRemove className="w-[50px]" /></button></span>
        </div>
    )
}