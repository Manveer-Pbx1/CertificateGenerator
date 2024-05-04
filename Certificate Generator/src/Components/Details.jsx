import certificate from "../Images/certificate.png";
import background from "../Images/sign_up_horizon.png";
export default function Details(){
    return(
        <div>
        <h1 className="text-3xl font-bold">Enter details to generate Certificate: </h1>
        <br/> <br/>
        <img className="-z-10 absolute bottom-0 h-[450px] p-4" src={background}></img>
        <form className="h-12 w-12 p-8 ml-4">
            <label>Name: </label>
            <input className="border cursor-pointer h-10 w-[350px] shadow-sm p-4 border-gray-300" type="text"></input>
            <label>Course: </label>
            <input className="border cursor-pointer h-10 w-[350px] shadow-sm p-4 border-gray-300" type="text"></input>
            <label>Date: </label>
            <input className="border cursor-pointer h-10 w-[350px] shadow-sm p-4 border-gray-300" type="date"></input>
            <button type="submit" className="w-[120px] bg-yellow-300 font-bold italic cursor-pointer rounded-sm relative top-4 ml-48 border border-gray-300">Submit Details</button>
            </form>
            <img className="h-[450px] w-[550px] left-[700px] p-10 absolute bottom-6" src={certificate}></img>
        </div>      
    )
}