import clsx from "clsx";
import React, { forwardRef } from "react";

import styles from "./button.module.scss";

export const Button = forwardRef(
  (
    {
      isLoading = false,
      color = "primary",
      type = "button",
      variant = "contained",
      size = "auto",
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className,
      as: TagName = "button",
      "aria-label": ariaLabel,
      fullWidth = false,
      ...restProps
    },
    ref
  ) => {
    const classNames = clsx(
      styles.button,
      {
        // colors
        [styles["button--primary"]]: color === "primary",
        [styles["button--secondary"]]: color === "secondary",
        [styles["button--tertiary"]]: color === "tertiary",
        [styles["button--success"]]: color === "success",
        [styles["button--info"]]: color === "info",
        [styles["button--danger"]]: color === "danger",
        [styles["button--dark"]]: color === "dark",
        [styles["button--light"]]: color === "light",
        // variants
        [styles["button--outlined"]]: variant === "outlined",
        [styles["button--inverted"]]: variant === "inverted",
        [styles["button--text"]]: variant === "text",
        // sizes
        [styles["button--extra-small"]]: size === "xs",
        [styles["button--small"]]: size === "s",
        [styles["button--auto-size"]]: size === "auto",
        [styles["button--medium"]]: size === "m",
        [styles["button--large"]]: size === "l",
        // loader
        [styles["button--loading"]]: isLoading,
        // width
        [styles["button--full-width"]]: fullWidth,
        // link
        [styles["button--link"]]: TagName === "a",
      },
      className
    );

    const content = (
      <>
        {isLoading && (
          <>
            <div className={styles.button__loader} />
            <div
              className={styles["button__loading-floating-border"]}
            />
          </>
        )}
        {leftIcon && (
          <div className={styles["button__icon--left"]}>
            {leftIcon}
          </div>
        )}
        <div
          className={clsx(styles.button__content, {
            [styles["button__content--loading"]]: isLoading,
            [styles["button__content--disabled"]]: disabled,
          })}
        >
          {children}
        </div>
        {rightIcon && (
          <div className={clsx(styles["button__icon--right"])}>
            {rightIcon}
          </div>
        )}
      </>
    );

    if (TagName === "a") {
      return (
        <a
          className={classNames}
          ref={ref}
          aria-label={isLoading && !ariaLabel ? "loading" : ariaLabel}
          {...restProps}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type={TagName === "button" ? type : undefined}
        className={classNames}
        disabled={
          TagName === "button" ? disabled || isLoading : undefined
        }
        ref={ref}
        aria-label={isLoading && !ariaLabel ? "loading" : ariaLabel}
        {...restProps}
      >
        {content}
      </button>
    );
  }
);
