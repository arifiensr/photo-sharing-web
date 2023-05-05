import { useRef } from 'react'
import psApi from '../api/psApi'

export default function SignUp() {
  const nameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordRepeatRef = useRef()
  const profilePictureUrlRef = useRef()
  const phoneNumberRef = useRef()
  const bioRef = useRef()
  const websiteRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordRepeat: passwordRepeatRef.current.value,
      profilePictureUrlRef: profilePictureUrlRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      bio: bioRef.current.value,
      website: websiteRef.current.value,
    }

    const register = await psApi.registerUser(data)
    console.log(register);
  }

  return (
    <>
      <section id="signup" className="signup">
        <div className="container">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input ref={nameRef} type="text" />
              <br />
              <label htmlFor="username">Username</label>
              <input ref={usernameRef} type="text" />
              <br />
              <label htmlFor="email">Email</label>
              <input ref={emailRef} type="email" />
              <br />
              <label htmlFor="password">Password</label>
              <input ref={passwordRef} type="password" />
              <br />
              <label htmlFor="password">Repeat Password</label>
              <input ref={passwordRepeatRef} type="password" />
              <br />
              <label htmlFor="profilepictureurl">Profile Picture URL</label>
              <input ref={profilePictureUrlRef} type="text" />
              <br />
              <label htmlFor="phonenumber">Phone Number</label>
              <input ref={phoneNumberRef} type="number" />
              <br />
              <label htmlFor="bio">Bio</label>
              <input ref={bioRef} type="text" />
              <br />
              <label htmlFor="website">Website</label>
              <input ref={websiteRef} type="text" />
              <br />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
