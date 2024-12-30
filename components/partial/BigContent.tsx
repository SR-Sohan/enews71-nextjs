import Image  from 'next/image';
import bigImg from "../../public/big.png";
import Link from 'next/link';
const BigContent = () => {

    return(
        <>
            <div className="w-full mb-2">
                <Image
                    src={bigImg}
                    alt=''
                    className='w-[100%] h-full'
                />
            </div>

            <Link href={"/"}>

                <h2 className='text-black-500 text-lg lg:text-2xl my-2'>ডিগ্রিতে অটো পাসের দাবিতে জাতীয় বিশ্ববিদ্যালয়ের উপাচার্যের অফিস ঘেরাও</h2>
                <p className='text-black-400 text-xs lg:text-sm'>জাতীয় বিশ্ববিদ্যালয়ের ডিগ্রি ২০১৯-২০ পরীক্ষা না নিয়ে অটো পাসের দাবিতে শিক্ষার্থীরা উপাচার্য অফিস ঘেরাও করেছেন। রোববার (২৯ সেপ্টেম্বর) দুপুর ১২টায় প্রথমে জাতীয় বিশ্ববিদ্যালয়ের প্রধান ফটকে অবস্থান নিয়ে বিক্ষোভ</p>
            </Link>
        </>
    );
}

export default BigContent;