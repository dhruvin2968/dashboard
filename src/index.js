import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/index';
// import { Toaster } from 'react-hot-toast';
const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #ddd',
    borderTop: '5px solid #6f68d1',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#6f68d1',
    fontWeight: 'bold',
  },
};

const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Suspense fallback={
        <div style={styles.loaderContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading...</p>
        </div>}>
    <App /> 
    </Suspense>
    
   
   
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
