import { lazy } from 'react';

export const AboutPageAsync = lazy(
	() => new Promise((resolve) => {
		// @ts-ignore
		// так делать не надо, делаем для проекта - отображение loading
		setTimeout(() => resolve(import('./AboutPage')), 1500);
	}),
);
