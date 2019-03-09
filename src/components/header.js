import React from "react"
import { Link } from "gatsby"


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    }
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  render() {
    const { location, title } = this.props;
    const { width } = this.state;
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
              fontSize: width > 500 ? 20 : 16,
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
              {width > 500 ? title: "Blogs by Sazzad Sazib"}
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
