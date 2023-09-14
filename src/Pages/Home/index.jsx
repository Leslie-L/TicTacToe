import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { infoHome } from "../../Constants/constantsHome";
import MainButtons from '../../Components/MainButtons';
import ToggleButton from '../../Components/ToggleButton';
import LogoTTT from '../../Components/LogoTTT';
import useGame from '../../Providers/useGame';

function Home() {
  const {configureGame }=useGame((state)=>({
    configureGame:state.configureGame,
  }))
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  const handleConfigureUser= ()=>{
    const playerX =isChecked ? 'YOU' : 'P2' ;
    const playerO =isChecked ? 'P2': 'YOU';
    configureGame(playerO,playerX)
    navigate("/game")
  }
  
    return(
        <main className="w-full h-screen bg-primary flex flex-col justify-center items-center">
            <h1 className="font-bold font-roboto text-2xl text-bntGray">{infoHome.title}</h1>
            <section className='flex flex-col justify-center items-center mt-10'>
                <LogoTTT/>
                <div className='w-60 h-44 bg-secondary rounded-lg p-6 my-6 flex flex-col justify-center shadow-md'>
                    <p className="font-roboto font-semibold text-md text-bntGray text-center py-4">{infoHome.mainText1}</p>
                    <ToggleButton isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
                    <p className="font-roboto font-light text-sm text-bntGray py-4 text-center">{infoHome.mainText2}</p>
                </div>
                <div className='w-60 h-auto'>
                    <MainButtons
                        text={infoHome.button1}
                        color={"bg-bntYellow"}
                        handleEvent={()=>{}}
                    />
                    <MainButtons
                        text={infoHome.button2}
                        color={"bg-bntBlue"}
                        handleEvent={handleConfigureUser}
                    />

                </div>
            </section>
        </main>
    )
}
export default Home;