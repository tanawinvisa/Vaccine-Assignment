import HospitalCard from "./HospitalCard"
import Link from "next/link"

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
    const hospitalJsonReady = await hospitalJson

    return (
        <div>
        Explore {hospitalJsonReady.count} models in our catalog
        <div className='hospital-list' style={{display: 'flex' , justifyContent: 'space-around'}}>
        {hospitalJsonReady.data.map((hospitalItem: Object) => (
                    <div key={hospitalItem.id} className="w-1/3 px-2 my-7">
                        <Link href={`/hospital/${hospitalItem.id}`}>
                    <HospitalCard 
                    hospitalName={hospitalItem.name}
                    imgSrc={hospitalItem.picture}
                    />
                </Link>
                </div>
                ))}
            </div>
        </div>
    )
}