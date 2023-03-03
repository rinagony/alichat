import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './assets/styles/index.scss'
import { AuthProvider } from './context';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider>
    <Provider store={store}>
        <App />
    </Provider>
  </AuthProvider>
);
