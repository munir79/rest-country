import { useEffect, useState } from "react";
import Countries from "./Country/Countries";
import { FaSortAmountDown } from "react-icons/fa";


const Home = () => {
    const [country, setCountry] = useState([]);
    const [filterCountry,setfilterCountry]=useState([]);
    const [search,setSearch]=useState("");
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountry(data);
                setfilterCountry(data);
                console.log(data);
            });
    }, [])

    const handleRegion=(filter)=>{
        if(filter==="Europe"){
            const europe=country.filter(data=>data.region==="Europe");
            setfilterCountry(europe);
        }
        else if (filter==="Africa"){
            const Africa=country.filter(data=>data.region==="Africa");
            setfilterCountry(Africa);
        }
        else if (filter==="Americas"){
            const America=country.filter(data=>data.region==="Americas");
            setfilterCountry(America);
        }
        else if(filter==="Asia"){
            const Asia=country.filter(data=>data.region==="Asia");
            setfilterCountry(Asia);
        }
        else if(filter==="Oceania"){
            const Oceania=country.filter(data=>data.region==="Oceania");
            setfilterCountry(Oceania);
        }
    }
    return (
        <div>
            <div className=" mt-8 gap-3 flex flex-col md:flex-row justify-center items-center  md:space-x-4 w-full">

                <div>
                    <input type="text" placeholder="search by country name" onChange={event=>setSearch(event.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1"> <FaSortAmountDown /> sort by continent</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>handleRegion("Asia")} ><a>Asia</a></li>
                        <li onClick={()=>handleRegion("Europe")} ><a>Europe</a></li>
                        <li  ><a>Antarctica</a></li>
                        <li onClick={()=>handleRegion("Americas")}><a>America</a></li>
                        <li  onClick={()=>handleRegion("Africa")}><a>Africa</a></li>
                        <li onClick={()=>handleRegion("Oceania")} ><a>Australia (Oceania)</a></li>
                    </ul>
                </div>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
                {
                    filterCountry.filter(val=>{
                        if(val==="") return val;
                        else if(val.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()))return val;
                    })
                    
                    .map(country => <Countries country={country} key={country.ccn3}></Countries>)
                }
            </div>
        </div>
    );
};

export default Home;