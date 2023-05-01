
import Href from "@/components/Href";
import MainContainer from "@/components/MainContainer";

// @ts-ignore
const Users = ({users}) => {


    return (
        <MainContainer title='Список пользователей'>
            <h1>Список пользователей</h1>
            <ul>
                {users.map((el:any)=>
                    <li key={el.id}> <Href href={`/users/${el.id}`} text={el.name}/></li>
                )}
            </ul>
        </MainContainer>
    );
};
export default Users

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await  res.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}
