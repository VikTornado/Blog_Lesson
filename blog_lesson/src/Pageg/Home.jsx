import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => {
    const posts = [
        {
            id: 1,
            title: "Lorem Ipsum1.",
            desc: "Lorem Ipsum - это текст-часто текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
            img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 2,
            title: "Lorem Ipsum2.",
            desc: "Lorem Ipsum - это текст-це с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
            img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },
        {
            id: 3,
            title: "Lorem Ipsum3.",
            desc: "Lorem Ipsum - это екстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
            img: "https://pixlr.com/images/index/ai-image-generator-one.webp",
        },
    ]

    return (
        <div className={"w-full"}>
            <div className={"max-w-[1100px] m-auto flex flex-col mt-4 gap-4"}>
                {posts.map(post => (
                    <div className={"flex gap-[100px] items-center"} key={post.id}>
                        <div className={"flex-2 bg-cyan-400 relative"}>
                            <img className={"min-w-[200px] h-[250px] object-fit-cover relative"} src={post.img} alt=""/>
                            <div className={"w-full h-full bg-cyan-200 after:content-[''] absolute top-[10px] left-[-10px] z-[-1]"}></div>
                        </div>
                        <div className={"flex-3 flex flex-col justify-between"}>
                            <Link to={`/posts/${post.id}`}>
                                <h1 className={"text-[48px]"}>{post.title}</h1>
                            </Link>
                            <p className={"text-[18px]"}>{post.desc}</p>
                            <button className={"border p-2 text-gray-600"}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;