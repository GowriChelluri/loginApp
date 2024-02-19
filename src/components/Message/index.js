import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const msg = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <p>{msg}</p>
}
export default Message
