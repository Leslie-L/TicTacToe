import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faO } from '@fortawesome/free-solid-svg-icons'

function ToggleButton({isChecked,handleCheckboxChange}) {
    return(
        <label className='flex cursor-pointer select-none items-center'>
                        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} className='sr-only'/>
                        <div className='flex w-48 h-12 items-center justify-center rounded-md bg-primary'>
                            <span
                                className={`flex h-9 w-24 items-center justify-center rounded m-2 ${
                                !isChecked ? 'bg-bntGray text-primary' : 'bg-primary text-bntGray'
                                }`}
                            >
                                <FontAwesomeIcon icon={faX} />
                            </span>
                            <span
                                className={`flex h-9 w-24 items-center justify-center rounded m-2 ${
                                isChecked ? 'bg-bntGray text-primary' : 'bg-primary text-bntGray'
                                }`}
                            >
                                <FontAwesomeIcon  icon={faO} />
                            </span>
                        </div>
                    </label>
    )
}
export default ToggleButton;