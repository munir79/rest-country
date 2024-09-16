

const Countries = ({country}) => {
    const {area,capital,currencies,flags,name,
        population,
        region
        }=country;
    console.log(country);
    return (
        <div>
            <h3>{area} </h3>
            <h3>{capital} </h3>
            <img src={flags.png} alt="" />
            <h2>{name.common} </h2>
            <h2>{population} </h2>
            <h2>{region} </h2>
          
        </div>
    );
};

export default Countries;