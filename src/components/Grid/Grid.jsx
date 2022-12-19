import "./style.css";
import sun from '../../assets/img/sun.png'

const Grid = () => {
    return (
        <>
            <img src={sun} alt="" className="sun" />
            <div className="grid"></div>
        </>
    )
}

export default Grid