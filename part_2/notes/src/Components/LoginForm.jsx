const LoginForm = (
  {handleLogin, 
    username, 
    password,
    handleUsernameChange,
    handlePasswordChange}) => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                  username
                    <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={handleUsernameChange}
                  />
                </div> <br />
                <div>
                  password
                    <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={handlePasswordChange}
                  />
                </div> <br />
                <button type="submit">login</button>
              </form> 
        </div>    
    )
  }
export default LoginForm