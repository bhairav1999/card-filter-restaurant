import { useState } from "react";
import Menu from "./restaurantApi";
import MenuList from "./MenuList";
import NavBar from "./NavBar";

const UniqData = [
  ...new Set(
    Menu.map((cateCrum) => {
      return cateCrum.category;
    })
  ),
  "All"
];


const Restaurant = () => {
  const [menudata, setMenuData] = useState(Menu);
  const [menuCategory, setMenuCategory] = useState(UniqData);

  const filterdata = (category) => {

    if(category === "All"){
        setMenuData(Menu)
        return
    }
    const updatedata = Menu.filter((cateCrum) => {
      return cateCrum.category === category;
    });
    setMenuData(updatedata);
  };

  return (
    <>
      <NavBar filterdata={filterdata} menuCategory={menuCategory} />
      <MenuList menudata={menudata} />
    </>
  );
};

export default Restaurant;
