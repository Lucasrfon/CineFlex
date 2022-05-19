import { Link } from "react-router-dom";

export default function Day ({day}) {
    return (
        <>
            <span>{day}</span>
            <div className="hour">
                <Link to="filme">
                    <div className="button">15:00</div>
                </Link>
                <Link to="filme">
                    <div className="button">16:00</div>
                </Link>
                <Link to="filme">
                    <div className="button">17:00</div>
                </Link>
                <Link to="filme">
                    <div className="button">18:00</div>
                </Link>
            </div>
        </>
    )
}