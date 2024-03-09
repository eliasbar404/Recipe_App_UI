import image from "../../assets/logo.png";

// eslint-disable-next-line react/prop-types
const Logo = ({width}) => {
    return (
    <img src={image} alt="Logo..." width={width} />
    )
}

export default Logo