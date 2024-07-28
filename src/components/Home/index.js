import Cookies from 'js-cookie'

import {
  MainContainer,
  Navbar,
  LogoImage,
  LogoutBtn,
  HomeContainer,
  HomeHeading,
  HomeCardImage,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <MainContainer>
      <Navbar>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutBtn onClick={onClickLogout}>Logout</LogoutBtn>
      </Navbar>
      <HomeContainer>
        <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
        <HomeCardImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeContainer>
    </MainContainer>
  )
}

export default Home
