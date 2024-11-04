export function Timeline() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-20">
        <div className="flex flex-1 flex-col gap-10"></div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] flex-1 bg-muted-foreground" />
          <div className="grid h-10 w-10 place-items-center rounded-full border border-foreground bg-background font-sfmono text-foreground">01</div>
          <div className="w-[1px] flex-1 bg-muted-foreground" />
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-2xl border-2 border-muted-foreground bg-background px-5 py-2.5 lg:px-10 lg:py-5">
          <div className="text-sm uppercase text-muted-foreground">2022 - present</div>
          <div className="flex flex-col">
            <div className="text-2xl font-semibold">Bébéboutik</div>
            <div className="text-lg text-muted-foreground">Ingénieur développeur sénior frontend web</div>
          </div>
          <div>
            Bébéboutik est un site de ventes privées dans la petite enfance. Ma mission est constituée de principalement deux objectifs: Créer une marketplace
            Bébéboutik Faire une migration du site de ventes privées de Prestashop à NextJS Nous sommes deux développeurs sur le frontend.
          </div>
          <div className="mt-2 flex gap-2">
            <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">NextJS</div>
            <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">ReactJS</div>
            <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">Typescript</div>
            <div className="rounded-full bg-foreground px-2 py-0.5 font-sfmono text-xs text-background">GraphQL</div>
          </div>
        </div>
      </div>
      <div>Etape 2</div>
      <div>Etape 3</div>
    </div>
  )
}
