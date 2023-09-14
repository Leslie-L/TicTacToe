import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faO } from '@fortawesome/free-solid-svg-icons'
function ButtonGame({gameSelected, handleClick }) {
   
    return(
        <button className='w-20 h-20 rounded-md bg-secondary shadow-md' onClick={handleClick}>
            {
                gameSelected === 'X' &&
                    <FontAwesomeIcon className="text-bntBlue text-2xl" icon={faX} />
            }
            {
                gameSelected === 'O' &&
                    <FontAwesomeIcon className="text-bntYellow text-2xl" icon={faO} />
            }

        </button>
    )
}
export default ButtonGame;