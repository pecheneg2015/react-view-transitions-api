import {
    LinkProps,
    matchPath, matchRoutes,
    To,
    useHref,
    useLinkClickHandler, useLocation,
    useMatch,
    useMatches,
    useNavigate, useRoutes
} from "react-router-dom";
import React, {HTMLProps, MouseEventHandler} from "react";
import classNames from "classnames";


export const CustomLink: React.FC<LinkProps> = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (
        {
            onClick,
            replace = false,
            state,
            target,
            to,
            reloadDocument = false,
            className,
            ...rest
        },
        ref
    ) => {
        const isMatch = useMatch(to as string)
        let href = useHref(to);
        let handleClick = useLinkClickHandler(to, {
            replace,
            state,
            target,

        });

        return (
            <a
                {...rest}
                href={href}
                onClick={(event) => {
                    event.preventDefault();
                    if (isMatch)
                        return null;
                    // @ts-ignore
                    if (document.startViewTransition) {
                        // @ts-ignore
                        const transition = document.startViewTransition(() => handleClick(event));
                        transition.ready.then(() => {
                            document.documentElement.animate(
                                {
                                    opacity:['1','0','0']
                                },
                                {
                                    duration: 500,
                                    easing: 'ease-in',
                                    pseudoElement: '::view-transition-old(root-item)',
                                }
                            );
                            document.documentElement.animate(
                                {
                                    opacity:['0','0','1']
                                },
                                {
                                    duration:500,
                                    easing: 'ease-in',
                                    pseudoElement: '::view-transition-new(root-item)',
                                }
                            );
                        });
                    } else {
                        handleClick(event);
                    }
                }}
                ref={ref}
                className={classNames({
                    [`${className}`]: className,
                    "underline decoration-4 decoration-[#00754B] ": isMatch,
                    'text-[#47474] font-semibold underline-offset-4	': true
                })}
                target={target}
            />
        );
    }
);