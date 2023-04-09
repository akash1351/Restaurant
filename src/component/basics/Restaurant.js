import React, { useState } from 'react';
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from './menuCard';
import NavBar from './navBar';

const uniqueList=[...new Set(Menu.map((curElem)=>{
  return curElem.category;
})),"All",];

const Restaurant = () => {
  const [menuData, setmenuData]= useState(Menu);
  const [menuList,setmenuList]=useState(uniqueList);
  const filterItem=(catogory)=>{
    if(catogory==="All"){
      setmenuData(Menu);
      return;
    }
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category===catogory;
    });
    setmenuData(updatedList);
  }
  return (
    <>
    <NavBar menuList={menuList} filterItem={filterItem} />
    <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
