import React from 'react';
import './style.css';

export default function Nav() {
    return (
        <div className='navbar-items'>
            <p className='home'>Home</p>
            <p className='about'>About</p>
            <p className='projects'>Projects</p>
            <p className='contact'>Contact</p>
        </div>
    )
}



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import home from '../../assets/images/home.png';
// import about from '../../assets/images/about-me.png';
// import project from '../../assets/images/my-work.png';
// import resume from '../../assets/images/resume.png';
// import contact from '../../assets/images/contact.png';
// import Resume from '../../assets/resume/CMC_Resume.pdf';
// import './style.css';

// const Nav = () => {
//     return (
//         <div>
//             <NavLink className='navbar-item' activeClassName='is-active' to='/Professional-Portfolio' exact>
//                 <img className='icons home' src={home} alt='House black icon' />
//                 <span className='toolTip text-light'>Home</span>
//             </NavLink>
//             <NavLink className='navbar-item' activeClassName='is-active' to='/Professional-Portfolio/about' exact>
//                 <img className='icons aboutme' src={about} alt='Faceless and armless upper torso with question mark on stomach black icon' />
//                 <span className='toolTip text-light'>About</span>
//             </NavLink>
//             <NavLink className='navbar-item' activeClassName='is-active' to='/Professional-Portfolio/projects' exact>
//                 <img className='icons mywork' src={project} alt='Lightbulb black icon' />
//                 <span className='toolTip text-light'>Projects</span>
//             </NavLink> 
//             <NavLink className='navbar-item' to={Resume} target='_blank' rel='noreferrer'>
//                 <img className='icons resume' src={resume} alt='Sheet of paper with women torso and lines below, and a magnifiying glass containing a check mark black icon' />
//                 <span className='toolTip text-light'>Resume</span>
//             </NavLink>
//             <NavLink className='navbar-item' activeClassName='is-active' to='/Professional-Portfolio/contact' exact>
//                 <img className='icons contact' src={contact} alt='Contact book with faceless and armless upper torso black icon' />
//                 <span className='toolTip text-light'>Contact</span>
//             </NavLink>
//         </div>
//     )
// };

// export default Nav;