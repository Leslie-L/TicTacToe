import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import useGame from '../../Providers/useGame'

function Restart() {
    const navigate = useNavigate();
    const {restart} = useGame((state)=>({
        restart:state.restart
    }))
    const handleRestart = ()=>{
        restart();
        navigate("/");
    }
    return(
        <button className='w-10 bg-bntGray text-primary p-2 rounded-md'
                onClick={handleRestart}
        >
            <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
    )
}
export default Restart;