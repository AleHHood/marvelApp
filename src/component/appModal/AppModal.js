import "./appModal.scss";

const AppModal = (props) => {
    return(
        <div className="search">
            <form className="search__form">
                <label className="search__label" >
                    Or find a character by name:
                    <input className="search__input" type="text" name="name" />
                </label>
                <button className="button button__main">
                    <div className="inner">find</div>
                </button>
            </form>
            <p className="search__error">The character was not found. Check the name and try again</p>
        </div>
    )
}

export default AppModal