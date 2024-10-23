import './UserSideBar.css';





const UserSideBar = ({onSelectView}) => {
    return (
        <div className="user-side-bar">
            <div className="side-bar-title">
                <h3>Perfil</h3>
            </div>
            <div className="side-bar-content">
                <ul>
                    <li>
                        <p>Información de mi Perfil</p>
                        <button onClick={() => onSelectView('account')}>Mi cuenta</button>
                    </li>
                    <li>
                        <p>Información de mis Compras</p>
                        <button onClick={() => onSelectView('orders')}>Mis compras</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserSideBar;