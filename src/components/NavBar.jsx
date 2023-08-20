import "./Styles.css";

const NavBar = ({ filterdata, menuCategory }) => {
  console.log(filterdata);
  console.log(menuCategory);
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuCategory.map((curElem) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterdata(curElem)}
                >
                  {curElem}
                  
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
