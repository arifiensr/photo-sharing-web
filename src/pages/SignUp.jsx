import { useRef } from 'react'
import psApi from '../api/psApi'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const registerNameRef = useRef()
  const registerUsernameRef = useRef()
  const registerEmailRef = useRef()
  const registerPasswordRef = useRef()
  const registerPasswordRepeatRef = useRef()
  const registerProfilePictureUrlRef = useRef()
  const registerPhoneNumberRef = useRef()
  const registerBioRef = useRef()
  const registerWebsiteRef = useRef()

  async function handleRegister(e) {
    e.preventDefault()
    const data = {
      name: registerNameRef.current.value,
      username: registerUsernameRef.current.value,
      email: registerEmailRef.current.value,
      password: registerPasswordRef.current.value,
      passwordRepeat: registerPasswordRepeatRef.current.value,
      profilePictureUrl: registerProfilePictureUrlRef.current.value,
      phoneNumber: registerPhoneNumberRef.current.value,
      bio: registerBioRef.current.value,
      website: registerWebsiteRef.current.value,
    }

    const register = await psApi.registerUser(data)
    console.log(register)
  }

  return (
    <>
      <section id="signup" className="signup">
        <div className="container mt-4">
          <div className="row">
            {/* <form onSubmit={handleSubmit}>
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
            </form> */}
            <form>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input ref={registerNameRef} defaultValue={registerNameRef.current} type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input ref={registerUsernameRef} defaultValue={registerUsernameRef.current} type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input ref={registerEmailRef} defaultValue={registerEmailRef.current} type="email" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input ref={registerPasswordRef} defaultValue={registerPasswordRef.current} type="password" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="repeatPassword" className="form-label">
                  Repeat Password
                </label>
                <input ref={registerPasswordRepeatRef} defaultValue={registerPasswordRepeatRef.current} type="password" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="profilePictureUrl" className="form-label">
                  Profile Picture URL
                </label>
                <input ref={registerProfilePictureUrlRef} defaultValue={registerProfilePictureUrlRef.current} type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input ref={registerPhoneNumberRef} defaultValue={registerPhoneNumberRef.current} type="number" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <input ref={registerBioRef} defaultValue={registerBioRef.current} type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="website" className="form-label">
                  Website
                </label>
                <input ref={registerWebsiteRef} defaultValue={registerWebsiteRef.current} type="text" className="form-control" />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button type="submit" className="btn btn-primary" onClick={handleRegister}>
                  Sign Up
                </button>
                <Link to={'/'}>
                  <button className="btn btn-secondary ms-2">Sign In</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
