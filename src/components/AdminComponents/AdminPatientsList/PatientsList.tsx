import Heading from "../../Heading/Heading";
import { ListItem } from "../AdminListItem/ListItem";
import { patientsProps } from "../Searchbar/adminPageProps";

// export const Patients = ({ name, id, score, type }: patientsProps) => {

//     return (
//         <div className="w-full self-start mt-16">
//             <Heading tag="h3" className="tex-left">Therapist Kim's patients</Heading>
//             <div className="w-full bg-white rounded-sm drop-shadow-2xl p-4 mt-8">
//                 <div className="w-full flex justify-between gap-2 border-b border-[#cecece] py-4">
//                     <span className="font-bold text-[20px] w-[30px]">#</span>
//                     <span className="font-bold text-[20px] w-[150px]">Name</span>
//                     <span className="font-bold text-[20px] w-[150px]">ID</span>
//                     <span className="font-bold text-[20px] w-[150px]">Score</span>
//                     <span className="font-bold text-[20px] w-[150px] text-center">Type</span>
//                     <span className="font-bold text-[20px] w-[150px] text-center">See Results</span>
//                     <span className="font-bold text-[20px] w-[100px] text-center">Remove</span>
//                 </div>
//                 {/* <div className="">
//                     <ListItem name={name} id={id} type={type} score={score} />
//                     <ListItem name={name} id={id} type={type} score={score} />
//                     <ListItem name={name} id={id} type={type} score={score} />
//                 </div> */}
//             </div>
//         </div>
//     )
// };