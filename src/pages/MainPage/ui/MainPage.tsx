import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";

const MainPage = memo(() => {
// поделили на чанки, чтобы не все переводы подгружать, а только нужные
  const { t } = useTranslation("main");
  return (
    <Page>
      {t("Главная страница")}
    </Page>
  );
});

export default MainPage;
