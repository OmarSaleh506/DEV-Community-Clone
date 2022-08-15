import { AiOutlineApple, AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
export default function Login() {
  return (
    <div className="sign-container">
      <div className="welcome-container">
        <h1>Welcome to DEV Community</h1>
        <p><a href="0">DEV Community</a> is a community of 883,563 amazing developers</p>
      </div>
      <div className="sign">
        <div className="apple"> <AiOutlineApple className="apple-icon" size={30}/>Sign up with Apple</div>
        <div className="forem"><BsEmojiSmile className="forem-icon" size={25}/> Sign up with Forem</div>
        <div className="githup"> <AiFillGithub className="githup-icon" size={30}/>Sign up with GitHup</div>
        <div className="twitter"> <FiTwitter className="twitter-icon" size={30}/>Sign up with Twitter</div>
        <div className="already"><p>-----------</p><p>Have a password? Continue with your email address</p><p>--------------</p></div>
      </div>
      <form className="form">
        Email
        <input className="input" type="text" />
        Password
        <input className="input" type="text" />
        <div className="checkbox">
        <input className="ch" type="checkbox" /> 
          <p>Remember me</p>
        </div>
        <div className="Continue">Continue</div>
        <div className="forgot-pass">
        <a href="0">I forgot my password</a>
        </div>
      </form>
    </div>
  )
}

 
