import { classNames } from "shared/lib/classNames/classNames";
import {
 memo, MutableRefObject, ReactNode, useRef,
} from "react";
import { useInfinityScroll } from "shared/lib/hooks/useInfinityScroll/useInfinityScroll";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      className={classNames(cls.Page, {}, [className])}
      ref={wrapperRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
