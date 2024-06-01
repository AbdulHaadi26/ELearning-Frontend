const ContainerFluid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen flex flex-col h-screen overflow-y-auto">
      {children}
    </div>
  );
};

export default ContainerFluid;
