const PageSkeleton = () => (
  <div className="pt-32 pb-24 px-6 animate-pulse">
    <div className="container mx-auto max-w-4xl space-y-6">
      <div className="h-4 w-24 bg-muted rounded" />
      <div className="h-10 w-3/4 bg-muted rounded" />
      <div className="h-6 w-1/2 bg-muted rounded" />
      <div className="h-64 w-full bg-muted rounded-2xl mt-8" />
      <div className="space-y-3 mt-8">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
        <div className="h-4 w-4/6 bg-muted rounded" />
      </div>
    </div>
  </div>
);

export default PageSkeleton;
