export function Timeline() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-20">
        <div className="flex flex-1 flex-col gap-10"></div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] flex-1 bg-muted-foreground" />
          <div className="grid h-10 w-10 place-items-center rounded-full border border-foreground bg-background text-foreground">01</div>
          <div className="w-[1px] flex-1 bg-muted-foreground" />
        </div>
        <div className="flex flex-1 flex-col gap-10 rounded-2xl border-2 border-muted-foreground bg-background px-5 py-2.5 lg:px-10 lg:py-5">
          <div>title</div>
          <div>title</div>
          <div>title</div>
          <div>title</div>
          <div>title</div>
        </div>
      </div>
      <div>Etape 2</div>
      <div>Etape 3</div>
    </div>
  )
}
