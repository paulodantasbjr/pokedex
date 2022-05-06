import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { About } from 'pages/about/About';
import { BlogView } from 'pages/blog/BlogView';
import { Contact } from 'pages/contact/Contact';
import { Experience } from 'pages/experience/Experience';
import { Home } from 'pages/home/Home';
import { Portfolio } from 'pages/portfolio/Portfolio';

import Logo from './assets/logo.png';

export const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <BrowserRouter>
        <div className="bg-slate-700 w-72">
          <header className="flex flex-col items-center justify-around h-full">
            <div>
              <img className="w-36 h-36" src={Logo} alt="logo" />
            </div>
            <nav>
              <ul>
                <Link to="/">
                  <li>home</li>
                </Link>
                <Link to="/about">
                  <li>about</li>
                </Link>
                <Link to="/experience">
                  <li>experience</li>
                </Link>
                <Link to="/portfolio">
                  <li>portfolio</li>
                </Link>
                <Link to="/blog">
                  <li>blog</li>
                </Link>
                <Link to="/contact">
                  <li>contact</li>
                </Link>
              </ul>
            </nav>
            <footer>@paulo dantas</footer>
          </header>
        </div>
        <main className="flex-grow bg-slate-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<BlogView />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
