export const MainLayout = ({ children }: any) => {
  return (
    <div className="layout">
      <aside className="layout__sidebar">меню</aside>
      <main className="layout__content">{children}</main>
      <div className="layout__right">реклама</div>
    </div>
  );
};
