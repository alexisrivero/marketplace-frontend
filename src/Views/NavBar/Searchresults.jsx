import { useNavigate } from 'react-router-dom';
import './Searchresults.css';

const Searchresults = ({ result }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/temp', { replace: true });
        setTimeout(() => {
            navigate(`/product/${result.id}`);
        }, 0);
    };

    return (
        <div className="search-result" onClick={handleClick}>
            {result.name}
        </div>
    );
};

export default Searchresults;