import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faO } from '@fortawesome/free-solid-svg-icons'
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons'
import useGame from '../../Providers/useGame'
import { useNavigate } from 'react-router-dom'
function ModalWin() {
    const navigate = useNavigate();
    const {playerX,playerO,win,nextGame,restart} = useGame((state)=>({
        playerX:state.playerX,
        playerO:state.playerO,
        win:state.win,
        nextGame:state.nextGame,
        restart:state.restart
    }))
    const winner = win ==='N' ? 'NONE' : win === 'X' ? playerX : playerO; 
    const handleNextGame = ()=>{
        nextGame();
    }
    const handleRestart = ()=>{
        restart();
        navigate("/");
    }
   return(
        <div className="w-full h-full fixed top-0 right-0 left-0 bg-primary bg-opacity-75 flex justify-center items-center">
            <section className="w-full h-60 bg-secondary flex flex-col  justify-center items-center">
                <p className='font-bold text-md text-bntGray'>{winner} WON!</p>
                
                    {
                        win==='N' &&
                        <p><FontAwesomeIcon className="text-bntGray text-2xl mr-2" icon={faFaceMeh} />
                        <span className='text-2xl font-bold text-bntGray '>Takes the round</span></p>
                    }
                    {
                        win==='X' &&
                        <p><FontAwesomeIcon className="text-bntBlue text-2xl mr-2" icon={faX} />
                        <span className='text-2xl font-bold text-bntBlue'>Takes the round</span></p>
                    }
                    {
                        win==='O' &&
                        <p><FontAwesomeIcon className="text-bntYellow text-2xl mr-2" icon={faO} />
                        <span className='text-2xl font-bold text-bntYellow '>Takes the round</span></p>
                    }
                <div className='mt-4 flex'>
                    <button className='bg-bntGray px-3 h-9 text-primary font-bold shadow-md rounded-md'
                    onClick={handleRestart}
                    >Quit</button>
                    <button className='bg-bntYellow px-3 ml-3 h-9 font-bold text-primary shadow-md rounded-md'
                    onClick={handleNextGame}
                    >Next Round</button>
                </div>
            </section>
        </div>
   ) 
}
export default ModalWin;