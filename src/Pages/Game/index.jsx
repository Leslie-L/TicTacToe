import { useNavigate } from "react-router-dom";
import ButtonGame from "../../Components/ButtonGame";
import ButtonTurn from "../../Components/ButtonTurn";
import LogoTTT from "../../Components/LogoTTT";
import Restart from "../../Components/Restart";
import ShowResults from "../../Components/ShowResults";
import { infoTurn } from "../../Constants/constantsGame";
import useGame from "../../Providers/useGame";
import ModalWin from "../../Components/ModalWin";
import { findBestMove } from '../../Functions/algorithmTicTacToe'
import { useEffect, useState } from "react";
function Game() {
    const navigate = useNavigate();
    const [isStarting, setIsStarting]= useState(true)
    const {playerX,playerO,playerXwins,playerOwins,ties,turn,modal,playGame,isConfigured,stateButton,tableGame} = useGame(
        (state) => ({ 
                      playerX:state.playerX,
                      playerO:state.playerO,
                      playerXwins: state.playerXwins, 
                      playerOwins: state.playerOwins,
                      ties:state.ties,
                      turn:state.turn,
                      modal:state.modal,
                      playGame:state.playGame,
                      isConfigured:state.isConfigured,
                      stateButton:state.stateButton,
                      tableGame:state.tableGame
                    })
      )
     
    if(!isConfigured){
        navigate("/");
    }
    useEffect(()=>{
            //console.log('Modal',modal)
            //console.log('Desde el tablero: X', playerX, 'O',playerO)
            if((turn=='X' && playerX=='CPU') ){
                //console.log('Hows playing: ',turn,playerX)
                const moves = findBestMove(tableGame,turn)
                playGame(moves[0],moves[1]);
                if(isStarting)setIsStarting(false)
            }
    },[modal])
    return(
        
        <section className=" w-full h-screen flex flex-col justify-center items-center bg-primary">
            {
                modal &&
                <ModalWin/>
            }
            <div className="w-80 flex justify-between items-center px-2">
                <LogoTTT/>
                <ButtonTurn turn={turn}/>
                <Restart/>
            </div>
            <div className="w-80 h-auto mt-6 grid grid-cols-3 gap-3 place-items-center">
                <ButtonGame  gameSelected={stateButton(0,0)} handleClick={()=>playGame(0,0)}/>
                <ButtonGame  gameSelected={stateButton(0,1)} handleClick={()=>playGame(0,1)}/>
                <ButtonGame  gameSelected={stateButton(0,2)} handleClick={()=>playGame(0,2)}/>

                <ButtonGame  gameSelected={stateButton(1,0)} handleClick={()=>playGame(1,0)}/>
                <ButtonGame  gameSelected={stateButton(1,1)} handleClick={()=>playGame(1,1)}/>
                <ButtonGame  gameSelected={stateButton(1,2)} handleClick={()=>playGame(1,2)}/>

                <ButtonGame  gameSelected={stateButton(2,0)} handleClick={()=>playGame(2,0)}/>
                <ButtonGame  gameSelected={stateButton(2,1)} handleClick={()=>playGame(2,1)}/>
                <ButtonGame  gameSelected={stateButton(2,2)} handleClick={()=>playGame(2,2)}/>
            </div>
            <div className="w-80 flex mt-4 justify-between items-center px-2">
                <ShowResults 
                    title={infoTurn.X+` (${playerX})`}
                    result={playerXwins}
                    color={"bg-bntBlue"}
                />
                <ShowResults 
                    title={infoTurn.TIES}
                    result={ties}
                    color={"bg-bntGray"}
                />
                <ShowResults 
                    title={infoTurn.O +` (${playerO})`}
                    result={playerOwins}
                    color={"bg-bntYellow"}
                />
            </div>
        </section>

    )
}
export default Game;