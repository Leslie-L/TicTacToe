import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faO } from '@fortawesome/free-solid-svg-icons'
import { infoTurn } from '../../Constants/constantsGame';

function ButtonTurn({turn}) {
    return(
        <div className='flex gap-1 items-center p-2 rounded-md shadow-lg bg-secondary'>
            {(turn==='X') ? <FontAwesomeIcon className="text-bntGray text-md" icon={faX} /> :
                    <FontAwesomeIcon className="text-bntGray text-md font-bold" icon={faO} />
            }
            <span className='text-bntGray text-xl ml-2'>{infoTurn.TURN}</span>
        </div>
    )
}
export default ButtonTurn;