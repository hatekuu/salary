import React,{ lazy,Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const Home =lazy(()=>import("./router/home/home")) 
const Register =lazy(()=>import ("./router/register/register"))
const Login =lazy(()=>import ("./router/login/login"))
const Confirmrg =lazy(()=>import ( "./router/register/confirm"))
const Confirmrs =lazy(()=>import ( "./router/resetpasword/confirm"))
const Reset =lazy(()=>import ( "./router/resetpasword/reset"))
function App() {
  return (
<Router>
  <Suspense fallback={<div> Loading...</div>}>
   <Routes>
    <Route path="/salayy/home" element={<Home/>}/>
    <Route path="/salayy/register" element={<Register/>}/>
    <Route path="/salayy/login" element={<Login/>}/>
    <Route path="/salayy/confirmrg" element={<Confirmrg/>}/>
    <Route path="/salayy/confirm" element={<Confirmrs/>}/>
    <Route path="/salayy/reset" element={<Reset/>}/>

   </Routes>
  </Suspense>
</Router>
  );
}

export default App;
