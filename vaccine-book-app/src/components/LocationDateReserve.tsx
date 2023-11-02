'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { useState } from "react"
import dayjs, { Dayjs} from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { BookingItem } from "../../interfaces"
import { addBooking } from "@/redux/features/bookSlice"

export default function LocationDateReserve () {

    const [firstname, setFirstname] = useState<string|null>('')
    const [lastname, setLastname] = useState<string|null>('')
    const [citizenId , setCitizenId] = useState<string|null>('')
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState('Chulalongkorn Hospital')

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () =>{
        if(firstname && lastname && citizenId && reserveDate && location){
            const item:BookingItem = {
                firstname: firstname,
                lastname : lastname,
                citizenId : citizenId,
                hospital : location,
                date : dayjs(reserveDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-5 py-5 flex flex-col">
            <div className="w-fit space-y-2 mb-2 w-full flex flex-col">
                <div className="text-semibold text-left text-blue-950">Full Name</div>
                <div className="flex flex-row space-x-4 w-full">
                    <input type="text"
                        id="name"
                        placeholder="First Name"
                        className="rounded ring-1 ring-inset ring-gray-400 text-md leading-10 indent-2 placeholder:text-gray-400
                        focus:outline-none focus:ring-sky-600 focus:placeholder:text-sky-600 w-full"
                        onChange={(value)=>{setFirstname(value.target.value)}}
                        />
                    <input type="text"
                        id="name"
                        placeholder="Last Name"
                        className="rounded ring-1 ring-inset ring-gray-400 text-md leading-10 indent-2 placeholder:text-gray-400
                        focus:outline-none focus:ring-sky-600 focus:placeholder:text-sky-600 w-full"
                        onChange={(value)=>{setLastname(value.target.value)}}
                        />
                </div>
                <div className="w-fit space-y-2 mb-2 w-full flex flex-col ">
                    <div className="text-semibold text-left text-blue-950">Citizen ID</div>
                    <div className="flex flex-row space-x-4 w-full">
                        <input type="text"
                            id="Citizen"
                            placeholder="Citizen ID"
                            className="rounded ring-1 ring-inset ring-gray-400 text-md leading-10 indent-2 placeholder:text-gray-400
                            focus:outline-none focus:ring-sky-600 focus:placeholder:text-sky-600 w-1/2"
                            onChange={(value)=>{setCitizenId(value.target.value)}}

                            />
                    </div>
                </div>
                <div className="flex flex-col space-y-2 mb-2">
                    <div className="text-semibold text-left text-blue-950">Date and Hospital</div>
                    <div className="flex flex-row space-x-4 w-full justify-between items-center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="bg-white w-[45%] mr-3"
                                value={reserveDate}
                                onChange={(value)=>{setReserveDate(value)}}
                            />
                        </LocalizationProvider>
                        <Select variant="standard" name="location" id="location" className="h-[2em] w-[220px]"
                            value={location}
                            onChange={(e)=>{setLocation(e.target.value)}}
                            >
                        <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Thammasat Hospital">Thammasat Hospital</MenuItem>
                        <MenuItem value="Rajavithi Hospital Hospital">Rajavithi Hospital Hospital</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white mt-2" onClick={makeBooking}>
                Check Vaccine Availability
            </button>
        </div>
    )
}