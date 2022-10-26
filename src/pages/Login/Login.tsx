import { useDispatch } from "react-redux";
import { createUser } from "../../redux/state/user";
import { getMorty } from "../../services/auth.service";

function Login() {
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
