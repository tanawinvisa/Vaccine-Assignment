import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import AddHospitalForm from "@/components/AddHospitalForm"

export default async function Hospital() {
    const hospitals = getHospitals()

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null
    const profile = session ? await getUserProfile(session.user.token) : null;
    
    return (
        <main className="text-center p-5 h-screen">
            <h1 className="text-xl font-bold">Select Your Hospital</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog 
                hospitalJson={hospitals}
                />
                {
                (profile.data.role == "admin")?
                    <AddHospitalForm/>
                :
                null
            }
            </Suspense>
        </main>
    )
}