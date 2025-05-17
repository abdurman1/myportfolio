
function Navbar() {
    return (  
        <div className='header'>
            <h1>Abdurrahman Abuoun</h1>
            <ul>
                <li><a href="#">Github</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
            <div className='toggleBtn'>
            <i className='fa-solid fa-bars'></i>
            </div>
        </div>
    );
}

export default Navbar;