import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import SocialMediaButton from './components/button/social-media-button';
import instagramIcon from './asssets/images/icon-instagram.svg';
import twitterIcon from './asssets/images/icon-x.svg';
import './App.css';
import CTAButton from './components/button/cta-button';
import Anouncement from './components/anouncement/anouncement';
import Courses from './pages/courses';
import CourseDetail from './pages/course-detail';
import Home from './pages/home';
import Navigation from './components/navigation/navigation';
import Articles from './pages/articles';
import ArticleDetail from './pages/article-detail';

function App() {

  const webinar = {
    title: 'Upcoming Webinar',
    date: 'Our next webinar will be held on 15th of September at 15:00.',
    topic: `Webinar topic: React vs Angular vs Vue vs Svelte"`,
    speaker: 'Webinar speaker: Filiz'
  }

  return (
    <div className="app">
      <header className="appHeader">
        <Header />
        <SocialMediaButton className="headerSocialLink" ico={instagramIcon} alt="instagram link" url="https://www.instagram.com/" />
        <SocialMediaButton className="headerSocialLink" ico={twitterIcon} alt="twitter link" url="https://www.twitter.com/" />
      </header>
      <div className="appContent">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route path=":name" element={<CourseDetail />} />
          </Route>
          <Route path="/articles" element={<Articles />}/>
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
      </div>

      <section className="content">
        <Anouncement {...webinar}/>

        <CTAButton text="Sign Up" onClickAction={() => alert('You are signed up!')}/>
      </section>

      <footer className="footer">
        <SocialMediaButton ico={instagramIcon} alt="instagram link" url="https://www.instagram.com/" />
        <SocialMediaButton ico={twitterIcon} alt="Twitter Link" url="https://twitter.com/" />
      </footer>
    </div>
  );
}

export default App;
