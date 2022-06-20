import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ViewMore = ( { slug } ) => {
  return (
    <div className="view-more">
        <Link to={`/recipes/${ slug }`} className="view-more__link">View More<span className="view-more__arrow"><AiOutlineArrowRight /></span></Link>
    </div>
  )
}

export default ViewMore