import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <header className="border-b-2 border-black h-[88px] flex items-center justify-center gap-x-5">
            <Button className={`${location.pathname === '/' ? 'bg-[#c4c4c4]' : ''}`} onClick={() => navigate('/')} variant='big'>Edit Users</Button>
            <Button className={`${location.pathname === '/users' ? 'bg-[#c4c4c4]' : ''}`} onClick={() => navigate('/users')} variant='big'>Users</Button>
        </header>
    );
}
 
export default Header;