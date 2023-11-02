// import Link from "next/link"
// import getUserProfile from "@/libs/getUserProfile"

// export default async function Profile({session}:{session:Object}) {
//     const sessionReady = await session
//     if (!session || !session.user.token) return null

//     const profile = await getUserProfile(session.user.token)
//     var createdAt = new Date(profile.data.createdAt)

//     return (
//         <div className="bg-white p-4 rounded-lg shadow-md text-center w-[300px] mt-5">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-3">User Profile</h2>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-1/2 text-left">
//                     <div>
//                       <span className="font-semibold">Name:</span> {profile.data.name}
//                     </div>
//                     <div>
//                       <span className="font-semibold">Email:</span> {profile.data.email}
//                     </div>
//                     <div>
//                       <span className="font-semibold">Tel:</span> {profile.data.tel}
//                     </div>
//                     <div>
//                       <span className="font-semibold">Member Since:</span>{" "}
//                       {createdAt.toDateString()}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//     )
// }