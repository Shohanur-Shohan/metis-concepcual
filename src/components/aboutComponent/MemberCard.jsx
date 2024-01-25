

const MemberCard = ({item}) => {
    // console.log(item);
    return (
            <div className="w-full px-3 mb-12 md:w-1/2 lg:w-1/4">
                <img className="object-cover object-top w-64 h-64 mx-auto rounded"
                src={item?.imgCDN}
                alt=""
                />
                <p className="mt-6 text-xl">{item?.name}</p>
                <p className="mt-2 mb-4 text-blue-600">{item?.role}</p>
                <div className="flex justify-center py-1 space-x-2">
                    <img src="metis-assets/icons/facebook.svg" alt="" />
                    <img src="metis-assets/icons/twitter.svg" alt="" />
                </div>
            </div>
    );
};

export default MemberCard;