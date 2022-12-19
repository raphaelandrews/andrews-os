import { useState } from 'react'
import './style.css'
import logo from '../../assets/img/logo.svg'
import Projects from '../Projects/Projects'


const Dashboard = () => {
    const [isProject, setIsProject] = useState(false);

    const handleProject = () => {
        setIsProject((current) => !current);
    };

    return (
        <div>
            <div className='db__container'>
                <div className='icon__folder' onClick={(e) => handleProject()}>
                    <div className='icon__box'></div>
                </div>
                <div className='icon__folder'>
                    <div className='icon__box'></div>
                </div>
                <div className='icon__folder'>
                    <div className='icon__box'></div>
                </div>
                <div className='icon__folder'>
                    <div className='icon__box'></div>
                </div>
                <div className='icon__logo'>
                    <img src={logo} alt="Logo Andrews" className='db__logo' />
                </div>
                <div className='icon__folder'>
                    <div className='icon__box'></div>
                </div>
                <div className='icon__folder'>
                    <div className='icon__box'></div>
                </div>
                <div className='icon__folder'>
                    <div className='icon__box'></div>
                </div>
                <div className='icon__folder'>
                    <div className='icon__box'></div>
                </div>
            </div>

            {isProject && (
                <Projects />
            )}
        </div>
    )
}

export default Dashboard