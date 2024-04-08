import React from 'react';

const Menu = () => {
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
        <div className={"flex-2 flex flex-col gap-[25px]"}>
            <h2 className={"text-[20px] text-[#555]"}>Other posts you may like</h2>
            {posts.map(post=> (
                <div className={"flex flex-col gap-[10px]"} key={post.id}>
                    <img className={"w-full h-[200px] object-cover"} src={post.img} alt=""/>
                    <h2>{post.title}</h2>
                    <button className={"max-w-sm bg-amber-600"}>Read More</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;