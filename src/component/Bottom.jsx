import Send from "../assets/Send.png"
import Paperclip from "../assets/Paperclip.png"
import Logo from "../assets/Logo.svg"

const Bottom = () => {
    return (
        <div className="h-[80px] bg-blue-50 rounded-b-[20px] flex justify-between items-center text-sm">
            <div className="flex flex-col w-full">
                <div className="flex justify-center gap-2">
                    <div className="relative">
                        <div className="relative">
                            <input className="rounded-lg w-64 p-2" placeholder="Type your message"></input>
                            <img className="absolute right-2 top-2 cursor-pointer" src={Paperclip} alt="paperclip" />
                        </div>
                        <button className="absolute z-20"></button>
                    </div>
                    <button><img src={Send} alt="send_logo" /> </button>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <span className="text-slate-400">Powered by  </span>
                    <div className="text-slate-500 font-bold flex gap-2">Krun.ai </div>
                    <img src={Logo} alt="send_logo" />


                </div>
            </div>
        </div>
    )
}

export default Bottom

