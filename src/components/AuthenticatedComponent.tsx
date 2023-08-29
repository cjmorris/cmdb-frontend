import Header from './Header';
import NavBar from './NavBar';

interface AuthenticatedComponentProps {
  component: JSX.Element,
} 

function AuthenticatedComponent(props: AuthenticatedComponentProps) {
  return (
    <>
        <Header/>
        <div className='app-body'>
          <NavBar/>
          <div className='standard-widget'>
            {props.component}
          </div>
        </div>
    </>
  )
}

export default AuthenticatedComponent
