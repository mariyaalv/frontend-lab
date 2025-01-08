import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const { t } = useTranslation("main");
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button onClick={increment} data-testid="btn-increment">
        {t("increment")}
      </Button>
      <Button onClick={decrement} data-testid="btn-decrement">
        {t("decrement")}
      </Button>
    </div>
  );
};
