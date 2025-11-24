import { Title } from "../../components/ui/Title.jsx";
import { ButtonGray } from "../../components/ui/ButtonGray.jsx";
import UserAvatar from "../../assets/user.png";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <main className="grow flex flex-col justify-around items-center gap-12">
      <Title>Welcome back, {user.username}!</Title>
      <img src={UserAvatar} alt="User avatar image" className=" size-65" />
      <ButtonGray className="font-bold" onClick={() => logoutUser()}>
        Logout
      </ButtonGray>
    </main>
  );
};

export default Home;
