import style from "@/styles/Index.module.css";
import Href from "@/components/Href";
import Head from "next/head";

// @ts-ignore
const MainContainer = ({children, title}) => {
    return (
        <>
            <Head>
                <meta content = 'Nikita'/>
                <title>{title}</title>
            </Head>
            <div className={style.header}>
                <Href href={'/'} text='Главная'/>
                <Href href={'/users'} text='Пользователи'/>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
