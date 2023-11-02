"use client"
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function MyBookingList() {
  const Items = useAppSelector((state) => state.bookSlice.Items);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main className="">
  {Items.length ? (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="px-4 py-2 text-left">Full Name</th>
          <th className="px-4 py-2 text-left">Citizen ID</th>
          <th className="px-4 py-2 text-left">Hospital</th>
          <th className="px-4 py-2">Remove</th>
        </tr>
      </thead>
      <tbody>
        {Items.map((bookItem) => (
          <tr key={bookItem.citizenId} className="border-b">
            <td className="px-4 py-2">{bookItem.firstname} {bookItem.lastname}</td>
            <td className="px-4 py-2">{bookItem.citizenId}</td>
            <td className="px-4 py-2">{bookItem.hospital}</td>
            <td className="px-4 py-2 flex justify-center">
              <button
                onClick={() => dispatch(removeBooking(bookItem))}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="text-center text-gray-500 my-4">No Vaccine Booking</div>
  )}
</main>

  );
}
