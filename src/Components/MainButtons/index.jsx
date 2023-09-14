function MainButtons({text,color,handleEvent}) {
    return(
        <button 
            className={`w-full h-10 ${color} shadow-lg rounded-lg mt-3 font-bold font-roboto text-primary`}
            onClick={handleEvent}
        >
            {text}
        </button>
    )
}
export default MainButtons;