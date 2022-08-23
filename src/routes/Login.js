function Login() {
    return (
        <div>
            <h3>로그인</h3>
            <form action="">
                <input type="text" />
                <input type="password" />
                <button type="submit" onClick={(e) => e.preventDefault()}>로그인</button>
            </form>
        </div>
    );
}

// submit 이벤트는 react에서 필요 없으므로 e.preventDefault()로 막고 알림창

export default Login;
