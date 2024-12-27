import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
	// @ts-ignore
	// так делать не надо, делаем для проекта - отображение loading
	setTimeout(() => resolve(import('./MainPage')), 1500);
}));
