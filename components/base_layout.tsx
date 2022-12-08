interface LayoutProps {
    children: React.ReactNode;
}

export default function BaseLayout({ children } : LayoutProps) {
    return <div className="container">{children}</div>;
}
  