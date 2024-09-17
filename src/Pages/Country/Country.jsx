import { useLoaderData } from "react-router-dom";


const Country = () => {
    const data=useLoaderData();
    const country =data[0];
    const {name,region,flags,capital,
        population,
        languages,
        currencies
        }=country;
    console.log(data);
    return (
        <div className="mt-20 border-2 ">
          <div className="  flex  items-center justify-center">
          <img className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto " src={flags.png} alt="" />
          </div>
         <div className="mt-7 items-center justify-center">
         <h2 className="text-3xl font-bold text-center text-pink-600"> Name:{name.common} </h2>
         <h2 className="text-3xl m-3 text-center text-pink-600"> Capital:{capital} </h2>
         <h2 className="text-3xl m-3 font-bold text-center text-pink-600" > Population:{population} </h2>
       
         <h3 className="text-2xl m-3 text-center text-pink-600" >Region :{region}</h3>
         </div>
         
         
        </div>
    );
};

export default Country;