import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
// поделили на чанки, чтобы не все переводы подгружать, а только нужные
  const { t } = useTranslation("main");
  return (
    <div>
      <BugButton />
      {t("Главная страница")}
    </div>
  );
};

export default MainPage;
