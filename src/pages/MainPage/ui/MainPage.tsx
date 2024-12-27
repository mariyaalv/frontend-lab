import { useTranslation } from "react-i18next";

const MainPage = () => {
	//поделили на чанки, чтобы не все переводы подгружать, а только нужные
	const { t } = useTranslation("main");
	return <div>{t("Главная страница")}</div>;
};

export default MainPage;
