import './Searchresultslist.css'
import Searchresults from './Searchresults';

const Searchresultslist = ( {results} ) => {
    return (
        <div className="lista-resultados">
            {results.map((result, id) => {
                return <Searchresults result={result} key={id} />;
            })}
        </div>
    )
}

export default Searchresultslist