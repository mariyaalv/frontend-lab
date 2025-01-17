import { classNames, Mods } from "shared/lib/classNames/classNames";
import React, {
 InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from "react";
import cls from "./Input.module.scss";

// забираем из типа все пропсы, но исключаем те, что хотим заменить
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    autoFocus,
    type = "text",
    placeholder,
    readOnly,
    ...otherProps
  } = props;

  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readOnly;

  useEffect(() => {
    if (autoFocus) {
      // так только каретку отображаем
      setIsFocused(true);
      // для физического фокуса =>
      ref.current.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  // выходим из инпута
  const onBlur = () => {
    setIsFocused(false);
  };

  // нажимаем на инпут
  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readOnly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readOnly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
          // сдвиг на букву, ширину символа определила на глаз
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
