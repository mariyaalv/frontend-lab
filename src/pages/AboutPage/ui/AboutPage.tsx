import { memo } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = memo(() => {
  // поделили на чанки, чтобы не все переводы подгружать, а только нужные
  const { t } = useTranslation("about");
  return (
    <div>
      {t("О сайте")}
    </div>
  );
});

export default AboutPage;
