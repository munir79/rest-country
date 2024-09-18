

const LatestCard = ({data}) => {
    const { image,des}=data;
    console.log(data);
    return (
        <div className="flex mt-5">
            <div>
                <img src={ image} alt="" /> </div>
            <div className="m-3 p-2">
              <p>{des}</p>
              <button  className=" m-3 btn btn-active btn-accent">read more</button>
            </div>
        </div>
    );
};

export default LatestCard;