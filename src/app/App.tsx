import './styles/index.scss';
import { Route, Routes, Link} from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



const App = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path={"/about"} element={<AboutPage />} />
					<Route path={"/"} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
