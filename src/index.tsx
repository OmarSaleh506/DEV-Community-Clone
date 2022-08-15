import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/home';
import { ProfilePage } from './routes/profile';
import { LoginPage } from './routes/login';
import { SignUpPage } from './routes/signUp';
import VideosPage from './routes/video';
import PodcastPage from './routes/podcast';
import TagsPage from './routes/tags';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      
			<Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/videos' element={<VideosPage />} />
      <Route path='/podcast' element={<PodcastPage />} />
      <Route path='/tag' element={<TagsPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
