import React from "react"
import { Link } from "gatsby"


class Header extends React.Component {

  render() {
    const { location } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
          <div
            style={{
              paddingLeft: 40,
              background: 'linear-gradient(141deg,#0098f3,#6650e0)',
              color: 'white',
              textAlign: 'left',
              fontSize: 16,
              height: 65,
              width: '100%',
              position: 'fixed',
              zIndex: 999,
              paddingTop: 18,
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              Blogs by Sazzad Sazib
            </Link>
          </div>
      )
    } else {
      header = (
        <div
          style={{
            paddingLeft: 40,
            background: 'linear-gradient(141deg,#0098f3,#6650e0)',
            color: 'white',
            textAlign: 'left',
            height: 65,
            width: '100%',
            position: 'fixed',
            zIndex: 999,
            paddingTop: 18,
            fontFamily: 'Montserrat, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              background: `#ffffff38`,
              padding: 10,
              borderRadius: 45,
            }}
            to={`/`}
          >
            Go Back
          </Link>
        </div>
      )
    }
    return (
        <header>{header}</header>
    )
  }
}

export default Header
