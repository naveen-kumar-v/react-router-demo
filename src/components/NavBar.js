import React from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='navBar navbar'>
      <div className="logo">
        <Link to='/'>STUDYHOLICS
        </Link>
      </div>
      <div className="center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="login">
        {!isLoggedIn &&
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
        }
        {!isLoggedIn &&
          <Link to="/signup">
            <button>
              Signup
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/">
            <button onClick={() => {
              setIsLoggedIn(false);
              toast.success('logged out!')
            }}>
              Logout
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/dashboard">
            <button>
              Dashboard
            </button>
          </Link>
        }
      </div>


    </div>
  )
}
