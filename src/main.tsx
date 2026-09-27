import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css'

import { router } from './router/router';

// Скрываем статичный прелоадер из index.html после начала рендера приложения
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('preloader--hidden');
    // Убираем элемент из DOM после завершения CSS-перехода
    setTimeout(() => {
      preloader.remove();
    }, 400);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

// После первого кадра, когда приложение смонтировано, скрываем прелоадер
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    hidePreloader();
  });
});