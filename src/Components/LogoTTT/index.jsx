import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faO } from '@fortawesome/free-solid-svg-icons'
function LogoTTT() {
    return(
        <div className='flex gap-3'>
            <span>
                <FontAwesomeIcon className="text-bntBlue text-2xl" icon={faX} />
            </span>
            <span>
                <FontAwesomeIcon className="text-bntYellow text-2xl" icon={faO} />
            </span>
        </div>
    )
}
export default LogoTTT;