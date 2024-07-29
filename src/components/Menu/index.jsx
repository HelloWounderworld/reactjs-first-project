import { Link } from 'react-router-dom';
import '../../styles/button.css';

export const Menu = () => {
    return (
        <nav>
            <button className="buttonbuttonContentFirst"><Link to='/content'>Content - 1ª Form</Link></button>
            <button className="buttonbuttonContentSecond"><Link to='/contentbet'>Content - 2ª Form</Link></button>
            <button className="buttonbuttonContentThird"><Link to='/translator'>Translate page</Link></button>
        </nav>
    );
}