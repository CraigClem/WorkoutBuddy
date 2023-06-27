import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='bg-white'>
            <div className='flex p-5 mx-auto max-w-screen-xl'>
                <Link to={"/"}>
                    <h1 className='font-bold text-3xl tracking-widest'>Workout Buddy</h1>
                </Link>
            </div>
        </header>

    )
}

export default NavBar