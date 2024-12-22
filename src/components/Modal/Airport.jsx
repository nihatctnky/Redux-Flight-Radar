


const Airport = ({ data }) => {
    console.log(data);

    return (
        <div className="airport">
            <div>
                <h2>{data.origin.code.iata}</h2>
                <h5>{data.origin.position.region.city}</h5>
                <span>
                    {data.origin.timezone.abbr} ({data.origin.timezone?.name})
                </span>
            </div>

            <div className="icon">
                <img src="/plane_icon.png" />
            </div>

            <div>
                <h2>{data.destination.code.iata}</h2>
                <h5>{data.destination.position.region.city}</h5>
                <span>
                    {data.destination.timezone?.abbr} (
                    {data.destination.timezone?.name})
                </span>
            </div>
        </div>
    );
};

export default Airport;