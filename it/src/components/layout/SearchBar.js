import React from 'react'

 const SearchBar = () => {
    return (
    <div>
        <nav style={{ marginBottom: '30px' }} className="blue" >
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input id="search" type="search" />
                  <label htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons red-text">close</i>
                </div>
              </form>
            </div>
          </nav>
      </div>
    )
}

export default SearchBar