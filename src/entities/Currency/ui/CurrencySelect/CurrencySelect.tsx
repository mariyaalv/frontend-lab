import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/Currency";
import { memo, useCallback } from "react";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

// статичный массив => вынесли из компонента, чтобы избежать перерисовок
const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readOnly,
  } = props;

  const { t } = useTranslation("select");

  const onChangeHandler = useCallback((value:string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={classNames("", {}, [className])}
      label={t("Укажите валюту")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
});
