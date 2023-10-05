'use client'
import HospitalCard from "./HospitalCard"
import { useReducer, useState } from "react"
import Link from "next/link"

export default function CardPanel() {

    const ratingReducer = ( ratingList:Map<string,number>, action:{type:string ,score:number, HospitalName:string}) =>{
        switch(action.type){
            case 'add':{
                ratingList.set(action.HospitalName,action.score)
                return new Map(ratingList)
            }
            case 'remove':{
                ratingList.delete(action.HospitalName)
                return new Map(ratingList)
            }
            default: return ratingList
        }

    }

    const [ ratingList , dispatchRating ] = useReducer( ratingReducer , new Map<string,number>())

    console.log(ratingList)

    const mockHospitalRepo = [
        {hid : "001", name : "Chulalongkorn Hospital", image : "/img/chula.jpg"},
        {hid : "002", name : "Thammasat Hospital", image : "/img/thammasat.jpg"},
        {hid : "003", name : "Rajavithi Hospital", image : "/img/rajavithi.jpg"},
    ]

    return (
        <div>
            <div className='hospital-list' style={{display: 'flex' , justifyContent: 'space-around'}}>
            {
                mockHospitalRepo.map((item) => (
                <Link href={`/hospital/${item.hid}`}>
                    <HospitalCard 
                    hospitalName={item.name}
                    imgSrc={item.image}
                    onClickRating={( scorerating:number , e:Event)=>{dispatchRating({type:"add", score: scorerating, HospitalName:`${item.name}`})
                    }}
                    ratingList={ratingList}
                    />
                </Link>
                ))
            }
            </div>
            <div className="w-full bg-white text-black p-4 shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-semibold mb-4">Rating List: {ratingList.size}</h2>
                <div className="divide-y divide-gray-300 space-y-4">
                    {Array.from(ratingList.entries()).map(([key, value]) => (
                    <div
                        key={key}
                        onClick={() => dispatchRating({ type: 'remove', HospitalName: key, score: 0 })}
                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    >
                        <strong className="text-blue-600 mr-2">{key}:</strong>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}