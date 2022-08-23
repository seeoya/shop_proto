import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.scss";

import Main from "./routes/Main";
import List from "./routes/List";
import Detail from "./routes/Detail";
import MyPage from "./routes/MyPage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Cart from "./routes/Cart";

function App() {
    const navigate = useNavigate();

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
                <Route path="/list" element={<List />}></Route>
                <Route path="/list/:cate" element={<List />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="*" element={<>없는 페이지</>}></Route>
            </Routes>
        </Suspense>
    );
}

function Header() {
    const navigate = useNavigate();

    let categoryUrl = {
        top: "top",
        bottom: "bottom",
        shoes: "shoes",
        accessory: "accessory",
        review: "review"
    };

    return (
        <header>
            <nav className="user-nav">
                <Link to="/login">로그인</Link>
                <Link to="/register">회원가입</Link>
                <Link to="/mypage">마이페이지</Link>
                <Link to="/cart">장바구니</Link>
            </nav>

            <img src="./img/logo.png" alt="logo" onClick={() => navigate("/")} className="link" />

            <nav className="link-nav">
                <Link to="/">홈</Link>
                <Link to="/list">리스트</Link>
                <Link to="/detail/1">아이템 미리보기(1번)</Link>
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
