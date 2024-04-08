import React from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";
import {FaRegEdit} from "react-icons/fa";
import {Link} from "react-router-dom";
import Menu from "../Components/Menu";


const Single = () => {
    return (
        <div className={"max-w-[1100px] flex gap-[50px] m-auto"}>
            <div className={"flex-5 flex flex-col gap-4"}>
                <div>
                <img
                    className={"max-w-[700px] h-[300px] mb-3"}
                    src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                    alt=""/>
                    <div className={"flex"}>
                        <img
                            className={"w-[50px] h-[50px] rounded-[50%] object-cover"}
                            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                            alt=""/>
                        <div>
                            <span className={"font-bold"}>John</span>
                            <p>Posted 2 days ago</p>
                        </div>
                        <div className={"flex gap-2"}>
                            <Link to={`/write?edit=2`}>
                                <FaRegEdit size={20}/>
                            </Link>
                            <RiDeleteBin6Line size={20}/>
                        </div>
                    </div>
                </div>
                <div className={"max-w-[700px]"}>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p className={"text-justify leading-loose"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Animi asperiores culpa eaque error, expedita harum impedit ipsam magnam magni nulla
                        numquam officia porro ut! Accusantium aperiam aspernatur atque cupiditate deleniti dignissimos,
                        dolorem dolores, ducimus error esse impedit, ipsum necessitatibus neque nobis nostrum nulla
                        officia praesentium quaerat quia quidem! Animi cum dignissimos ea fuga id, illum ipsam laborum
                        nemo, nihil qui ratione, reprehenderit saepe! Aspernatur culpa expedita iste labore odit! A
                        assumenda delectus, dolorem, doloribus, error exercitationem fugiat illo illum laboriosam magnam
                        repudiandae sapiente sequi tempora veniam voluptate? A animi asperiores consectetur distinctio
                        iste necessitatibus omnis quidem quos? Ducimus, neque voluptas? <br/>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Animi asperiores culpa eaque error, expedita harum impedit ipsam
                        magnam magni nulla numquam officia porro ut! Accusantium aperiam aspernatur atque cupiditate
                        deleniti dignissimos, dolorem dolores, ducimus error esse impedit, ipsum necessitatibus neque
                        nobis nostrum nulla officia praesentium quaerat quia quidem! Animi cum dignissimos ea fuga id,
                        illum ipsam laborum nemo, nihil qui ratione, reprehenderit saepe! Aspernatur culpa expedita iste
                        labore odit! A assumenda delectus, dolorem, doloribus, error exercitationem fugiat illo illum
                        laboriosam magnam repudiandae sapiente sequi tempora veniam voluptate? A animi asperiores
                        consectetur distinctio iste necessitatibus omnis quidem quos? Ducimus, neque voluptas? </p>
                </div>
            </div>
            <div className={"flex-2"}>

                <Menu/>
            </div>
        </div>
    );
};

export default Single;