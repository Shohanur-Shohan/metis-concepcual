
const ServiceCard = ({item}) => {


    return (
        <div className="w-full px-3 mb-20 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <img
                className="h-[300px] mx-auto mb-4"
                src={item?.imgCDN}
                alt="icon" />
            <h3 className="font-bold text-center sm:text-2xl font-heading">
                {item?.title}
            </h3>
        </div>
    );
};

export default ServiceCard;