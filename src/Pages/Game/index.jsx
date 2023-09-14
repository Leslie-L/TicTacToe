import ButtonGame from "../../Components/ButtonGame";
import ButtonTurn from "../../Components/ButtonTurn";
import LogoTTT from "../../Components/LogoTTT";
import Restart from "../../Components/Restart";
import ShowResults from "../../Components/ShowResults";
import { infoTurn } from "../../Constants/constantsGame";

function Game() {
    return(
        
        <section className=" w-full h-screen flex flex-col justify-center items-center bg-primary">
            <div className="w-80 flex justify-between items-center px-2">
                <LogoTTT/>
                <ButtonTurn turn={true}/>
                <Restart/>
            </div>
            <div className="w-80 h-auto mt-6 grid grid-cols-3 gap-3 place-items-center">
                <ButtonGame  gameSelected={'N'}/>
                <ButtonGame  gameSelected={'N'}/>
                <ButtonGame  gameSelected={'N'}/>

                <ButtonGame  gameSelected={'N'}/>
                <ButtonGame  gameSelected={'N'}/>
                <ButtonGame  gameSelected={'N'}/>

                <ButtonGame  gameSelected={'N'}/>
                <ButtonGame  gameSelected={'N'}/>
                <ButtonGame  gameSelected={'N'}/>
            </div>
            <div className="w-80 flex mt-4 justify-between items-center px-2">
                <ShowResults 
                    title={infoTurn.X+" (You)"}
                    result={0}
                    color={"bg-bntBlue"}
                />
                <ShowResults 
                    title={infoTurn.TIES}
                    result={0}
                    color={"bg-bntGray"}
                />
                <ShowResults 
                    title={infoTurn.O+" (CPU)"}
                    result={0}
                    color={"bg-bntYellow"}
                />
            </div>
        </section>

    )
}
export default Game;