import { Outlet } from "react-router";

function MainLayout() {     
        return (
            <div className='container'>
              <header className='header'>
                <img src='teamBlogo.png' alt='Logo' className='logo' />
              </header>
              <div className='content'>
                <nav className='sidebar'>
                  <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
                <main className='main-content'>
                  <Outlet />
                </main>
              </div>
              <footer className='footer'><p>&copy; 2024 Your Company Name. All rights reserved.</p></footer>
            </div>
          )
        }
    

export default MainLayout;