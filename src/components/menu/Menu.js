import './Menu.css';
import { useContext } from 'react';
import { ScrollContext } from './../../contextAPI/ScrollContext';


export default () => {

  const { active, setActive } = useContext(ScrollContext);

  const handleMenu = id => {
    setActive(id);
  }

  return(
    <ul className="menu">
      <div style={{ left: active }} className="circle"></div>
      <li>
        <a onClick={() => handleMenu("10px")} href="#">
          <box-icon color="#fff" name='home'></box-icon>
        </a>
      </li>
      <li>
        <a onClick={() => handleMenu("70px")} href="#sobre">
          <box-icon color="#fff" name='user'></box-icon>
        </a>
      </li>
      <li>
        <a onClick={() => handleMenu("130px")} href="#experiencias">
          <box-icon color="#fff" name='medal'></box-icon>
        </a>
      </li>
      <li>
        <a onClick={() => handleMenu("190px")} href="#projetos">
          <box-icon color="#fff" name='code-alt'></box-icon>
        </a>
      </li>
      <li>
        <a onClick={() => handleMenu("250px")} href="#form">
          <box-icon color="#fff" name='message-square-dots'></box-icon>
        </a>
      </li>
    </ul>
  );
}