import Login from './Login'
import PersistentDrawerLeft from './HomeView'

export default function Home(){

    return (

        <div>
            <PersistentDrawerLeft / >
            <h1>Landing  Page</h1>
            <Login />
        </div>
    );
}