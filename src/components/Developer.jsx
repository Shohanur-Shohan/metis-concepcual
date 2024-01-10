import Image from 'next/image';
import Link from 'next/link';


const Developer = () => {

    return (
    <div className="md:py-[100px] py-14 w-full bg-gray-50 dark:bg-darker">
        <div className="container px-2 mx-auto text-gray-600">
          <div className="justify-center space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
                <Image width={500} height={500} src={'images/pie.svg'} alt="chart"/>
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Nuxt development is carried out by passionate developers
              </h2>
              <p className="my-8 text-gray-600 dark:text-gray-300">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>

              <a className="px-8 py-4 mt-5 mb-2 text-center  border-2 bg-transparent border-[#1A56DB] font-medium hover:bg-[#1A56DB] hover:text-white rounded-lg" href="#">
                Browse More
              </a>
                
                    
            </div>
          </div>
        </div>
      </div>
                                          
                                          
    );
};

export default Developer;