import { useEffect, useRef } from 'react'
import psApi from '../api/psApi'

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

    const login = await psApi.loginUser(email, password)
    console.log(login)

    localStorage.setItem('token', login.token)

    const token = login.token
    console.log('token:', token)

    const exploreData = await psApi.getExplorePost(token, { params: { size: 10, page: 1 } })
    console.log(exploreData)

    // window.location.reload()
  }

  async function handleLogout(e) {
    e.preventDefault()
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
