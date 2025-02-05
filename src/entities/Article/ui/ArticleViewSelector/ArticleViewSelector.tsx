import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import ListIcon from "shared/assets/icons/list-24-24.svg";
import TiledIcon from "shared/assets/icons/tiled-24-24.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleView } from "../../model/types/Article";
import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    Icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    Icon: ListIcon,
  },
];

// скорее всего, лучше на уровне фичей
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  // замыкание
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames("", {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.Icon}
            className={classNames("", { [cls.notSelected]: viewType.view !== view }, [])}
          />
        </Button>
      ))}
    </div>
  );
});
