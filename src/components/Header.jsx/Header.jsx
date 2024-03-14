
import profile from '../../../src/5.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1 className="text-4xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;