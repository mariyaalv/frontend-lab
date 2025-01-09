import { classNames } from "shared/lib/classNames/classNames";
import React, {
 ReactNode, useCallback, useEffect, useRef, useState,
} from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
 className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // для управления монтированием
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      // плавное закрытие
      // храним таймаут в рефе, чтобы затем очищать в эффекте
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // чтобы сохранять ссылку на функцию
  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
    }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  // с флагом lazy модалку в дом дерево не монтируем
  // для корректного отображения автофокуса в инпуте
  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
