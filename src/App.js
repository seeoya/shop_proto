import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

import Main from "./routes/Main";
import List from "./routes/List";
import Item from "./routes/Item";

function App() {
    return (
        <>
            <div className="App">
                <Header />

                <div className="wrapper">
                    <_Routes />
                </div>

                <Footer />
            </div>
        </>
    );
}

function _Routes() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/* ROUTER */}
                <Route exact path="/" element={<Main />}></Route>
                <Route path="/list/:cate" element={<List />}></Route>
                <Route path="/item/:id" element={<Item />}></Route>
                <Route path="/mypage" element={<>마이페이지</>}></Route>
                <Route path="*" element={<>없는 페이지</>}></Route>
            </Routes>
        </Suspense>
    );
}

function Header() {
    let categoryUrl = {
        top: "top",
        bottom: "bottom",
        shoes: "shoes",
        accessory: "accessory",
        review: "review"
    };

    return (
        <header>
            <img src="" alt="" />
            <nav>
                <Link to="/">홈</Link>
                <Link to="/list/cc">리스트</Link>
                <Link to="/item/11">아이템</Link>
                <Link to="/mypage">마이페이지</Link>
                {/* <Link to="/">홈</Link> */}
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <div>판매자정보</div>
            <div>고객센터</div>
            <div>약관 기타등등</div>
        </footer>
    );
}

function Loading() {
    return <div>로딩중...</div>;
}

export default App;
