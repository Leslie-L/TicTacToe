
import { useState } from 'react'
import { infoHome } from "../../Constants/constantsHome";
import MainButtons from '../../Components/MainButtons';
import ToggleButton from '../../Components/ToggleButton';
import LogoTTT from '../../Components/LogoTTT';

function Home() {
    const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
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
                    />
                    <MainButtons
                        text={infoHome.button2}
                        color={"bg-bntBlue"}
                    />

                </div>
            </section>
        </main>
    )
}
export default Home;