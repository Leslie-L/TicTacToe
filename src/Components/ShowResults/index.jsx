function ShowResults({title, result,color}) {
    return(
        <div className={`w-20 h-14 ${color} rounded-md flex flex-col justify-center items-center`} >
            <span className="text-primary text-sm font-light">{title}</span>
            <span className="text-primary text-lg font-bold">{result}</span>
        </div>
    )
}
export default ShowResults;