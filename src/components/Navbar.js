import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [show, setShow] = useState()
  return (
    <nav>
      {/* <button
        onClick={() => {
          setShow(!show)
        }}
      >
        show/hide menu
      </button>
      <div className={show ? "nav-links show-links" : "nav-links"}></div> */}
      <Link
        to="/"
        onClick={() => {
          setShow(false)
        }}
      >
        Home
      </Link>
      <Link
        to="/lots"
        onClick={() => {
          setShow(false)
        }}
      >
        Lots
      </Link>
      <Link
        to="/tags"
        onClick={() => {
          setShow(false)
        }}
      >
        Tags
      </Link>
    </nav>
  )
}

export default Navbar
