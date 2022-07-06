import React, { useState, useEffect } from "react";

function Main() {
    return (
        <div id="main">
            <Banner type="main" />
            <New />
            <Popular />
            <Review />
            <Banner type="sub" />
            공지사항
            <br />
            문의
            <br />
        </div>
    );
}

function Banner(props) {
    let { type } = props;

    if (type == "main") {
        return (
            <div className="slide-banner main">
                <img src="./img/suit.jpg" alt="" />
            </div>
        );
    } else if (type == "sub") {
        return (
            <div className="slide-banner sub">
                <img src="./img/coffee.jpg" alt="" />
            </div>
        );
    }
}

function New() {
    return <div className="new">신상 아이템 목록</div>;
}

function Popular() {
    return <div className="popular">인기 아이템 목록</div>;
}

function Review() {
    return <div className="review">리뷰 항목</div>;
}

export default Main;
