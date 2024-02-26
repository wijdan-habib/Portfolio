import React from 'react'
// import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import PageComp from './Components/PageComp';
import PageTwo from './Components/PageTwo';
export default function MainRoute() {
  return (
    <>
      <HomePage/>
      <PageComp/>
      <PageTwo/>
    </>
  )
}
