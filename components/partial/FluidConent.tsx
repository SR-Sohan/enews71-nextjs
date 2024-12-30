import FluidSingle from "./FluidSingle";

export default function FluidConent(){
    const newsItems = [
        {
          imageUrl: "/img.png",
          title: "আইপিএলে দল পামনি গোপালগঞ্জের সাকিব",
          content: "ক্রীড়া অনুশীলক রিপোর্ট (ফাইলফটো) । ৭৪ জন ক্রিকেটারকে । এইদিন মোট নিলামে উঠেছেন"
        },
        {
          imageUrl: "/img.png",
          title: "৭ রানে অলআউট, টি-টোয়েন্টিতে সস্তার বিশ্বরেকর্ড",
          content: "ক্রীড়া অনুশীলক রিপোর্ট (ফাইলফটো) । ৭৪ জন ক্রিকেটারকে । এইদিন মোট নিলামে উঠেছেন ক্রীড়া অনুশীলক রিপোর্ট (ফাইলফটো) । ৭৪ জন ক্রিকেটারকে । এইদিন মোট নিলামে উঠেছেন ক্রীড়া অনুশীলক রিপোর্ট (ফাইলফটো) । ৭৪ জন ক্রিকেটারকে । এইদিন মোট নিলামে উঠেছেন"
        }
      ];
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {
                newsItems.map((item,key) => <FluidSingle key={key} {...item} />)
            }

        </div>
    );
}