import {FC} from 'react';
import './Sidebar.css'
import Group from '../../assets/Group.png'
import key from '../../assets/key1.png'
import book from '../../assets/book1.png'
import {Link} from 'react-router-dom'

interface sidebar1{
}

const Sidebar:FC<sidebar1>=()=>{
   
    return(
      <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">         
              <li className="sidebarListItem active">
                <Link to='/' className='link'>
                <img  src={Group} className="sidebarIcon " alt=""/>
                </Link>
              </li>
              
              <li className="sidebarListItem">
                <Link to='/key'className='link'>
                <img  src={key} className="sidebarIcon" alt=""/>
                </Link>
              </li>
            <li className="sidebarListItem">
              <Link to='/book'className='link'>
              <img  src={book} className="sidebarIcon" alt=""/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>


    )
}
export default Sidebar;


