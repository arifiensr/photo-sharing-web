import { useEffect, useRef } from 'react'
import psApi from '../api/psApi'
import { Link } from 'react-router-dom'

export default function ApiTest() {
  const isLogin = localStorage.getItem('token')
  const token = localStorage.getItem('token')

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })

    const [email, password] = [emailRef.current.value, passwordRef.current.value]

    // * API Login User
    const login = await psApi.loginUser(email, password)
    console.log('Login User: ', login)

    localStorage.setItem('token', login.token)

    const token = login.token
    // console.log('token:', token)

    // * API Get Logged User

    const loggedUser = await psApi.getLoggedUser(token)
    console.log('Logged User: ', loggedUser)

    // * API Get User by ID

    const userById = await psApi.getUserById(loggedUser.data.id, token)
    console.log('User by ID: ', userById)

    // * API Update User Profile

    const data = {
      name: '',
      username: '',
      email: '',
      profilePictureUrlRef: '',
      phoneNumber: '',
      bio: '',
      website: '',
    }
    const updateUserProfile = await psApi.updateUserProfile()

    // window.location.reload()
  }

  async function handleLogout(e) {
    e.preventDefault()

    // * API Logout User
    const logout = await psApi.logoutUser(token)
    console.log(logout)
    localStorage.clear()
    // window.location.reload()
  }

  useEffect(() => {}, [])

  return (
    <>
      {!isLogin ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input ref={emailRef} type="email" id="email" />
                  <br />
                  <label htmlFor="password">Password</label>
                  <br />
                  <input ref={passwordRef} type="password" id="password" />
                  <br />
                  <button type="submit">Submit</button>
                </form>
                <Link to={'signup'}>Sign Up</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  )
}
