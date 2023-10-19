import Image from "next/image"
import getHospital from "@/libs/getHospital"
export default async function HospitalDetailPage( {params} : {params : {hid: string}} ) {

    const hospitalDetail = await getHospital(params.hid)

    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set("001" , {name : "Chulalongkorn Hospital", image : "/img/chula.jpg"})
    // mockHospitalRepo.set("002" , {name : "Thammasat Hospital", image : "/img/thammasat.jpg"})
    // mockHospitalRepo.set("003" , {name : "Rajavithi Hospital", image : "/img/rajavithi.jpg"})

    return (
        <main className="bg-white p-5 flex items-center justify-center">
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex flex-col sm:flex-row items-center sm:space-x-10">
      <div className="w-1/2 text-center">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Image"
          width={500}  // Adjust the width to make it larger
          height={400} // Adjust the height to make it larger
        />
      </div>
      <div className="w-1/2 text-center sm:text-left">
        <h1 className="text-2xl font-semibold mb-3">
          {hospitalDetail.data.name}
        </h1>
        <p className="text-base mb-3">{hospitalDetail.data.address}</p>
        <p className="text-base mb-3">{hospitalDetail.data.district}</p>
        <p className="text-base mb-3">{hospitalDetail.data.province}</p>
        <p className="text-base mb-3">{hospitalDetail.data.postalcode}</p>
        <p className="text-base mb-3">tel: {hospitalDetail.data.tel}</p>
      </div>
    </div>
  </div>
</main>


    )
}
//asdas
export async function generateStaticParams(){
    return [{hid:"001"},{hid:"002"},{hid:"003"}]
}