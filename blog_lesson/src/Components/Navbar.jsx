import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"w-full"}>
            <div className={"max-w-[1100px] flex m-auto justify-between items-center"}>
                <div>Logo</div>
                <div className={"flex gap-4 items-center"}>
                    <Link>
                        <h6>1</h6>
                    </Link>
                    <Link>
                        <h6>1</h6>
                    </Link>
                    <Link>
                        <h6>1</h6>
                    </Link>
                    <Link>
                        <h6>1</h6>
                    </Link>
                    <Link>
                        <h6>1</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className={"w-[50px] h-[50px] cursor-pointer bg-cyan-400 rounded-[50%] flex items-center justify-center"}>
                        <Link className={"p-2"} to={"/write"}>Write</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;