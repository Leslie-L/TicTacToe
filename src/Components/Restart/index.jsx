import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
function Restart() {
    return(
        <button className='w-10 bg-bntGray text-primary p-2 rounded-md'>
            <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
    )
}
export default Restart;