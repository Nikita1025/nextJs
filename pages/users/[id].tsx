import {useRouter} from "next/router";
import MainContainer from "@/components/MainContainer";

// @ts-ignore
export default function User({user}){
    const {query}=useRouter()
    return (
        <MainContainer title='Пользователь'>
           <h1>Пользователь с id {query.id}</h1>
            <div>Имя пользователя - {user.name}</div>
        </MainContainer>
    )
}

// @ts-ignore
export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await  res.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}
