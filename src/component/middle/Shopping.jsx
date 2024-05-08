import Bag from "../../assets/Bag.png";
import Vector from "../../assets/Vector.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Shopping = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-blue-100 to-blue-50  w-[80%] h-28 top-16 rounded-2xl p-2">

                <div className="bg-white rounded-md p-1 h-16 flex gap-6">

                    <img src={Bag} alt="bag icon" />
                    <div className="flex flex-col">
                        <div className="flex text-xs  w-32 justify-around"> Bags on <span className="font-bold">Timpu</span> <img className="w-4 h-4 flex gap-4" src={Vector} alt="verified" />
                        </div>
                        <div className="text-xs text-slate-400 p-2">1123 Products <span><ChevronRightIcon /></span> </div>
                    </div>
                </div>
                <span>Or set filter and help us choose the best bag for you.</span>

            </div>
            <small className="text-[11.2px] m-2">4:48 PM</small>
        </div>
    )
}

export default Shopping
