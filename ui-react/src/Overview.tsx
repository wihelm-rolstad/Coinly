import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./Overview.css";


const NavBar = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="nav-bar">
            <h2>Coinly</h2>
            <button>Dashboard</button>
            <button>Incomes</button>
            <button>Expenses</button>
            <button id="profile-button"></button>
        </div>
    </>
  )
}

type CardProps = {
  title: string;
  content: string;
};

const Card = ({title, content} : CardProps) => {
    return(
        <>
        <div className="card">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
        </>
    )
}

const Overview = () => {
    const navigate = useNavigate();
    return(
        <>
        <NavBar />
        <h1>Dashboard</h1>
        <div className="overview-container">
            <Card title="My Balance:" content="$5400"/>
            <Card title="Income:" content="$7500"/>
            <Card title="Expenses:" content="$2000"/>
        </div>
        </>
    )
}

export default Overview;