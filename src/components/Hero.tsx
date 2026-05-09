import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/36c7220e-1dfd-4600-9c59-39f45d85a0cd.jpg"
          alt="Монтаж кондиционера"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">
            Идеальный климат
            <span className="block font-semibold mt-2">в вашем доме</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Продажа и профессиональный монтаж кондиционеров. Работаем быстро, даём гарантию и приходим в день обращения
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
            >
              Выбрать кондиционер
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 bg-transparent">
              Вызвать мастера
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">500+</div>
            <div className="text-sm text-muted-foreground">Монтажей в год</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">10+</div>
            <div className="text-sm text-muted-foreground">Лет на рынке</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">4.9</div>
            <div className="text-sm text-muted-foreground">Рейтинг клиентов</div>
          </div>
        </div>
      </div>
    </section>
  )
}