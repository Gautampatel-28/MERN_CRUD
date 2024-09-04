import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"

const Backbutton = ({destination = '/'}) => {
  return (
    <>
        <div className="flex">
            <Link to={destination} className="bg-sky-900 text-black px-2 py-2 rounded-lg w-fit">
                <BsArrowLeft className="text-2x1"/>
            </Link>
        </div>
    </>
  )
}

export default Backbutton;