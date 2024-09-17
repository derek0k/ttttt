import { Link, useNavigate } from "react-router-dom";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <header>
      <nav className="flex justify-between">
        <Link to="/">홈</Link>
        <div>
          <Link to="/profile">프로필</Link>
          {user ? (
            <>
              <div>{user.nickname} 님</div>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
