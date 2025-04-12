import Input from './Input'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <a className="btn btn-ghost text-xl">Personal Diary</a>
            <div className='flex-grow'></div>
            <Input />
        </div>
    )
}

export default NavBar