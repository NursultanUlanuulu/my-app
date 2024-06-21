import React, { useState, useRef,
  //  useEffect 
  } from "react";
import { SignUpStyle } from "./SignUp";
// import { useDispatch, 
  // useSelector 
// } from "react-redux";
// import { login } from "../../redux/thunk/authThank/authThunk";
// import { RootState } from "../../redux";

interface SignInProps {
  onClose?: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  // const dispatch = useDispatch();
  // const auth = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(login({ username, password }));
  };

  // useEffect(() => {
    // const handleClickOutside = (event: MouseEvent) => {
    //   if (
    //     modalRef.current &&
    //     !modalRef.current.contains(event.target as Node)
    //   ) {
    //     onClose();
    //   }
    // };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onClose]);

  return (
    <SignUpStyle>
      <div className="auth" ref={modalRef} id="test">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <p>
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Enater password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <input type="submit" value={"Sign In"} />
          </p>
        </form>
        {/* {auth.error && <p>Error: {auth.error}</p>} */}
        {/* {auth.error && <p>Welcome: {auth.user.username}</p>} */}
      </div>
    </SignUpStyle>
  );
};
