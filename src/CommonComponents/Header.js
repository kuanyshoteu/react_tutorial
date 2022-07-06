
function Header({setCountId}) {
    return <section className="flex header mb-50">
        <a href="/" className="logo">Battle Of Math 2</a>
        <div className="menu">
            <a className="menuLink" href="/trello/0">Trello</a> 
            <a className="menuLink" href="/trello/1">Trello</a> 
            <a className="menuLink" href="/trello/2">Trello</a> 
            <a className="menuLink" href="/trello/79">Trello</a> 
            {/* localhost:3000 */}
            <a className="menuLink" href="/gladiator">Gladiator</a>
        </div>
    </section>
}



export default Header;
