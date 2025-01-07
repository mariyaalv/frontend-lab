/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

// компоненты, которые не требуют асинхронного чанка,
// экспортируем именованным образом
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Laboriosam sunt eius eligendi quia, expedita fugiat,
        sint tempore quidem veniam saepe, dicta at vitae impedit
        asperiores dolore dolores ipsam quos aperiam.
      </Modal>
    </div>
  );
};
