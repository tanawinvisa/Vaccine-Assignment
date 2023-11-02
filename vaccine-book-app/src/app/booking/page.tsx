import LocationDateReserve from "@/components/LocationDateReserve";
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { Dayjs } from "dayjs";

export default async function Booking () {

  const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile?.data.createdAt)

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
              <div className="w-fit space-y-2 mb-2">
                  <div className="text-semibold text-left text-blue-950">Pick date taking vaccine and Location</div>
                  <LocationDateReserve/>
              </div>
          </div>
      </main>
  );
}