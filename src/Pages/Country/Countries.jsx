

const Countries = ({country}) => {
    const {area,capital,currencies,flags,name,
        population,
        region
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
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Visit</button>
    </div>
  </div>
</div>
    );
};

export default Countries;