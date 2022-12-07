import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, LogIn, BookOpen, Info } from 'react-feather'

import s from './sidebar.module.scss'

const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)

    const navigate = useNavigate()

    const handleOver = () => setOpen(true)
    const handleOut = () => setOpen(false)

    const links = [
        {
            name: 'Головна',
            icon: <Home />,
            path: '/',
        },
        {
            name: 'Статті',
            icon: <BookOpen />,
            path: '/about',
        },
    ]

    return (
        <nav
            className={`${s.sidebar} ${isOpen ? s.open : ''}`}
            onMouseOver={handleOver}
            onMouseOut={handleOut}
        >
            <ul>
                {links &&
                    links.map(({ name, icon, path }, id) => (
                        <li key={id} onClick={() => navigate(path)}>
                            {icon}
                            <h6>{name}</h6>
                        </li>
                    ))}
            </ul>

            <ul>
                <li onClick={() => navigate('/login')}>
                    <LogIn />
                    <h6>Log In</h6>
                </li>
            </ul>
        </nav>
    )
}
export default Sidebar