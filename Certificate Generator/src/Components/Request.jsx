import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Request() {
    const [visible, setVisible] = useState(true);

    const handleRejectClick = () => {
        setVisible(false);
    };

    return (
        <div>
            {visible && (
                <div id="card" className="ml-4 mr-4 border border-gray-200 shadow-sm rounded-sm h-[100px] w-auto text-center">
                    <p>John Doe</p>
                    <p className="font-mono text-gray-400">johndoe@john.com</p>
                    <Link to= "/details">
                    <button className="w-16 text-white ml-4 bg-green-500 font-bold">Accept</button>
                    </Link>
                    <button className="w-16 text-white ml-4 bg-red-500 font-bold" onClick={handleRejectClick}>Reject</button>
                </div>
            )}
        </div>
    );
}
