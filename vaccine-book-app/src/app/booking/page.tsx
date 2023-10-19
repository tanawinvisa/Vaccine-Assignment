import LocationDateReserve from "@/components/LocationDateReserve";
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Booking () {

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)


    return (
        <main className="w-full h-screen flex flex-col items-center space-y-4 bg-gradient-to-r from-[rgb(9,21,42)] to-black">
            {
  session ? (
    <div className="bg-white p-4 rounded-lg shadow-md text-center w-[300px] mt-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">User Profile</h2>
      <div className="flex items-center space-x-4">
        <div className="w-1/2 text-left">
          <div>
            <span className="font-semibold">Name:</span> {profile.data.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {profile.data.email}
          </div>
          <div>
            <span className="font-semibold">Tel:</span> {profile.data.tel}
          </div>
          <div>
            <span className="font-semibold">Member Since:</span>{" "}
            {createdAt.toDateString()}
          </div>
        </div>
      </div>
    </div>
  ) : null
}
            <div className="text-xl font-bold text-white mt-5">Booking Vaccine</div>
            <div className="bg-white flex flex-col p-4 rounded">
                <div className="w-fit space-y-2 mb-2 w-full">
                    <div className="text-semibold text-left text-blue-950">Full Name</div>
                    <div className="flex flex-row space-x-4 w-full">
                        <input type="text"
                            id="name"
                            placeholder="First Name"
                            className="rounded ring-1 ring-inset ring-gray-400 text-md leading-10 indent-2 placeholder:text-gray-400
                            focus:outline-none focus:ring-sky-600 focus:placeholder:text-sky-600 w-full"
                            />
                        <input type="text"
                            id="name"
                            placeholder="Last Name"
                            className="rounded ring-1 ring-inset ring-gray-400 text-md leading-10 indent-2 placeholder:text-gray-400
                            focus:outline-none focus:ring-sky-600 focus:placeholder:text-sky-600 w-full"
                            />
                    </div>
                </div>
                <div className="w-fit space-y-2 mb-2 w-full">
                    <div className="text-semibold text-left text-blue-950">Citizen ID</div>
                    <div className="flex flex-row space-x-4 w-full">
                        <input type="text"
                                id="Citizen"
                                placeholder="Citizen ID"
                                className="rounded ring-1 ring-inset ring-gray-400 text-md leading-10 indent-2 placeholder:text-gray-400
                                focus:outline-none focus:ring-sky-600 focus:placeholder:text-sky-600 w-1/2"
                                />
                    </div>
                </div>
                <div className="w-fit space-y-2 mb-2">
                    <div className="text-semibold text-left text-blue-950">Pick date taking vaccine and Location</div>
                    <LocationDateReserve/>
                </div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white mt-2">
                    Check Vaccine Availability
                </button>
            </div>
        </main>
    );
}