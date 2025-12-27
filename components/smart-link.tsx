import Link from "next/link";

export function SmartLink({
  href,
  children,
  className,
  target,
  rel,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer noopener"}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Avoid passing external-only anchor props to Next.js <Link />
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { download, hrefLang, media, ping, referrerPolicy, type, ...linkSafeProps } = props;

  return (
    <Link href={href} className={className} {...linkSafeProps}>
      {children}
    </Link>
  );
}

