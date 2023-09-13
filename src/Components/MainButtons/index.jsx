function MainButtons({text,color}) {
    return(
        <button className={`w-full h-10 ${color} shadow-lg rounded-lg mt-3 font-bold font-roboto text-primary`}>
            {text}
        </button>
    )
}
export default MainButtons;