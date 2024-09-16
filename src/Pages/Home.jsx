import { useEffect, useState } from "react";
import Countries from "./Country/Countries";
import { FaSortAmountDown } from "react-icons/fa";


const Home = () => {
    const [country, setCountry] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [])
    return (
        <div>
            <div className=" mt-8 gap-3 flex flex-col md:flex-row justify-center items-center  md:space-x-4 w-full">

                <div>
                    <input type="text" placeholder="search by country name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1"> <FaSortAmountDown /> sort by continent</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Asia</a></li>
                        <li><a>Europe</a></li>
                        <li><a>Antarctica</a></li>
                        <li><a>North America</a></li>
                        <li><a>South America</a></li>
                        <li><a>Africa</a></li>
                        <li><a>Australia (Oceania)</a></li>
                    </ul>
                </div>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
                {
                    country.map(country => <Countries country={country} key={country.ccn3}></Countries>)
                }
            </div>
        </div>
    );
};

export default Home;