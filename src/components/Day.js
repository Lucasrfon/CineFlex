import { Link } from "react-router-dom";

export default function Day ({day, hour}) {
    return (
        <>
            <span>{day}</span>
            <div className="hour">
                {hour.map((i) => (
                    <Link to={`/assentos/${i.id}`} key={i.id}>
                        <div className="button">{i.name}</div>
                    </Link>
                    ))}
            </div>
        </>
    )
}