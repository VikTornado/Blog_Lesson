import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
    console.log(value)


    return (
        // <div className={"w-full"}>
        <div className={"max-w-[1100px] grid grid-cols-[70%_1fr] gap-4 mt-4  m-auto"}>
            <div className={"w-full flex-5 flex flex-col gap-4"}>
                <input className={"border-1 p-2"} type="text" placeholder={"Title"}/>
                <div className={"min-h-[300px] overflow-scroll border-1"}>
                    <ReactQuill className={"h-full border-none"} theme="snow" value={value} onChange={setValue}/>
                </div>
            </div>
            <div className={"flex-2 flex flex-col gap-4"}>
                <div className={"border-1 p-2 flex-1 flex flex-col justify-between text-2xl text-[#555]"}>
                    <h1 className={"text-2xl"}>Publish</h1>
                    <span>
                            <b>Status:</b> Draft
                        </span>
                    <span>
                            <b>Visibility:</b> Public
                        </span>
                    <input style={{display: "none"}} type="file" id={"file"} name={""}/>
                    <label htmlFor={"file"}>Upload Image</label>
                    <div className={"flex justify-between"}>
                        <button
                            className={"cursor-pointer text-teal-400 bg-white px-1 py-2 border-1 border-teal-400"}>Save
                            as a draft
                        </button>
                        <button
                            className={"cursor-pointer text-white bg-teal-400 px-1 py-2 border-1 border-teal-400"}>Update
                        </button>
                    </div>
                </div>
                <div className={"border-1 p-2 flex-1 flex flex-col justify-between items-center text-1xl text-[#555]"}>
                    <h1 className={"text-2xl"}>Category</h1>
                    <div className={"w-full px-1 mx-4 flex align-center gap-4 text-teal-400"}>
                        <input type="radio" name={"cat"} value={"art"} id={"art"}/>
                        <label htmlFor={"art"}>Art</label>
                    </div>
                    <div className={"w-full px-1 mx-4 flex align-center gap-4 text-teal-400"}>
                        <input type="radio" name={"cat"} value={"science"} id={"science"}/>
                        <label htmlFor={"science"}>Science</label>
                    </div>
                    <div className={"w-full px-1 mx-4 flex align-center gap-4 text-teal-400"}>
                        <input type="radio" name={"cat"} value={"technology"} id={"technology"}/>
                        <label htmlFor={"technology"}>Technology</label>
                    </div>
                    <div className={"w-full px-1 mx-4 flex align-center gap-4 text-teal-400"}>
                        <input type="radio" name={"cat"} value={"cinema"} id={"cinema"}/>
                        <label htmlFor={"cinema"}>Cinema</label>
                    </div>
                    <div className={"w-full px-1 mx-4 flex align-center gap-4 text-teal-400"}>
                        <input type="radio" name={"cat"} value={"design"} id={"design"}/>
                        <label htmlFor={"design"}>Design</label>
                    </div>
                    <div className={"w-full px-1 mx-4 flex align-center gap-4 text-teal-400"}>
                        <input type="radio" name={"cat"} value={"food"} id={"food"}/>
                        <label htmlFor={"food"}>Food</label>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Write;