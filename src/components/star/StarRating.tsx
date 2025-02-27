import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";


// @ts-ignore
const StarRating = ({rating}) => {
    const stars = [];

    for (let i = 1; i <= 5 ; i++) {
        if (rating >= i) {
            stars.push(<FontAwesomeIcon icon={faStar} key={i}/>)
        } else if (rating >= i - 0.5) {
            stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
        }
    }

    return (
        <div>{stars}</div>
    )
}

export default StarRating