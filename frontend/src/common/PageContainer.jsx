const PageContainer = ({
  children,
  className = "",
}) => {
  return (
    <section className={`relative py-24 ${className}`}>
      <div className="container-app">
        {children}
      </div>
    </section>
  );
};

export default PageContainer;