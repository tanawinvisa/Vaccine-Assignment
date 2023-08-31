import Link from "next/link";

export default function TopMenuItem ({title, pageRef} : {title:string ,pageRef:string}) {
    return (
        <Link className='w-28 text-center mt-auto mb-auto text-white mr-5' href={pageRef}>
            {title}
        </Link>
    );
}