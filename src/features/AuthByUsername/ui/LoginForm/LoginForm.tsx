import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

// на каждый рендер не будет новой ссылки (вынесено за компонент)
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && (
        <Text
          text={t("Вы ввели неверный логин или пароль")}
          theme={TextTheme.ERROR}
        />
      )}
        <Input
          className={cls.input}
          placeholder={t("Введите логин")}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={cls.input}
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginBtn}
          onClick={onLoginClick}
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>

    </DynamicModuleLoader>
  );
});

export default LoginForm;
