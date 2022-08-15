import { AiOutlineApple, AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
export default function SignUp() {
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
        <div className="already"><p>---------------</p><p>Already have an account?</p> <a href="0">Log in</a><p>------------------</p></div>
      </div>
    </div>
  )
}
