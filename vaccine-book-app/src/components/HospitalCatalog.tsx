import HospitalCard from "./HospitalCard"
import Link from "next/link"

export default async function CarCatalog({hospitalJson}:{hospitalJson:Object}) {
    const hospitalJsonReady = await hospitalJson

    return (
        <>
        Explore {hospitalJsonReady.count} models in our catalog
        <div className='hospital-list' style={{display: 'flex' , justifyContent: 'space-around'}}>
            {
                hospitalJsonReady.data.map((item) => (
                <Link href={`/hospital/${item.id}`}>
                    <HospitalCard 
                    hospitalName={item.name}
                    imgSrc={item.picture}
                    />
                </Link>
                ))
            }
            </div>
        </>
    )
}