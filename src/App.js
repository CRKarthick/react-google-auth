import './App.css';
// import './button.scss';
import { signInWitGoogle } from './Firebase';

const onLogout = () => {
    localStorage.clear();
    window.location.reload(false);
};

function App() {
    return (
        <div className='App'>
            <button onClick={signInWitGoogle} className='login-with-google-btn'>
                Sign In With Google
            </button>
            <h1>{localStorage.getItem('name')}</h1>
            <h1>{localStorage.getItem('email')}</h1>
            {/* <img src={localStorage.getItem('profilePic')} alt='profile pic' /> */}

            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default App;
