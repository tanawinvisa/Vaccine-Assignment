
import { dbConnect } from "@/db/dbConnect"
import Hospital from "@/db/models/Hospital"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function AddHospitalForm () {

    const addHospital = async (addHospital: FormData) => {
        "use server"
        const name = addHospital.get("name")
        const address = addHospital.get("address")
        const district = addHospital.get("district")
        const province = addHospital.get("province")
        const postalCode = addHospital.get("postalCode")
        const tel = addHospital.get("tel")
        const picture = addHospital.get("picture")

        try {
            await dbConnect()
            const hospital = await Hospital.create({
                name,
                address,
                district,
                province,
                postalCode,
                tel,
                picture
            })
        } catch (error) {
            console.log(error)
        }
        revalidateTag("hospitals")
        redirect("/hospital")

    }

    return (<div className="w-full flex justify-center mt-16">
        <form className="bg-gray-100 p-6 rounded-lg shadow-lg w-[40%]" action={addHospital}>
    <div>
        <h2 className="text-2xl font-semibold text-blue-800">Add Hospital</h2>
        <div className="mt-4">
            <label className="text-xl font-semibold text-blue-700" htmlFor='name'>Hospital Name</label>
            <input type="text" required id="name" name="name" placeholder="Hospital Name"
                className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mt-4">
            <label className="text-xl font-semibold text-blue-700" htmlFor='address'>Address</label>
            <input type="text" required id="address" name="address" placeholder="Address"
                className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex justify-between gap-[10px]">
            <div className="mt-4 flex-1">
                <label className="text-xl font-semibold text-blue-700" htmlFor='district'>District</label>
                <input type="text" required id="district" name="district" placeholder="District"
                    className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mt-4 flex-1">
                <label className="text-xl font-semibold text-blue-700" htmlFor='province'>Province</label>
                <input type="text" required id="province" name="province" placeholder="Province"
                    className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500" />
            </div>
        </div>
        <div className="flex justify-between gap-[10px]">
            <div className="mt-4 flex-1">
                <label className="text-xl font-semibold text-blue-700" htmlFor='postalCode'>Postal Code</label>
                <input type="text" required id="postalCode" name="postalCode" placeholder="Postal Code"
                    className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mt-4 flex-1">
                <label className="text-xl font-semibold text-blue-700" htmlFor='tel'>Telephone no.</label>
                <input type="text" required id="tel" name="tel" placeholder="Telephone no."
                    className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500" />
            </div>
        </div>
        <div className="mt-4">
            <label className="text-xl font-semibold text-blue-700" htmlFor='picture'>Picture URL</label>
            <input type="text" required id="picture" name="picture" placeholder="Picture URL"
                className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded'>Add Hospital</button>
    </div>
</form>

</div>
    )
}