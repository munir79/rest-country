import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";
const Countries = ({country}) => {
    const {area,capital,currencies,flags,name,
        population,
        region,
        ccn3,
        cca3,
        GBR
        }=country;
    console.log(country);
    return (
        <div className="card card-compact mb-4 bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={flags.png}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-pink-600">{name.common}</h2>
    <h3>Region:{region} </h3>
   
    <div className=" ">
      <Link to={`/country/${cca3}`}>
      <button className=" w-full p-0 m-0 btn   btn-primary"> <FaLocationArrow />Visit</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Countries;