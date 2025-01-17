import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/Currency";
import { memo, useCallback } from "react";
import { Country } from "entities/Country/model/types/Country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

// статичный массив => вынесли из компонента, чтобы избежать перерисовок
const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Azerbaijan, content: Country.Azerbaijan },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readOnly,
  } = props;

  const { t } = useTranslation("select");

  const onChangeHandler = useCallback((value:string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames("", {}, [className])}
      label={t("Укажите страну")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
});
