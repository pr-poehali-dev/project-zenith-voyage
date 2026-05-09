import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Icon from "@/components/ui/icon"

const packages = [
  {
    title: "Стандарт",
    area: "до 25 м²",
    time: "1 день",
    rating: "4.9",
    reviews: "312",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/53360c86-6992-4ccc-acc2-fe6ef349bfd5.jpg",
    highlights: ["Кондиционер 9 BTU", "Монтаж", "Гарантия 2 года", "Вывоз упаковки"],
    price: "35 000 ₽",
  },
  {
    title: "Комфорт",
    area: "до 45 м²",
    time: "1 день",
    rating: "4.9",
    reviews: "218",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/36c7220e-1dfd-4600-9c59-39f45d85a0cd.jpg",
    highlights: ["Инвертор 12 BTU", "Монтаж", "Гарантия 3 года", "Сервис 1 год"],
    price: "55 000 ₽",
  },
  {
    title: "Премиум",
    area: "до 70 м²",
    time: "1-2 дня",
    rating: "5.0",
    reviews: "97",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/9f733cd1-33fd-48a0-b8ae-185e5db9154a.jpg",
    highlights: ["Инвертор 18 BTU", "Монтаж + трасса", "Гарантия 5 лет", "Сервис 2 года"],
    price: "90 000 ₽",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Готовые <span className="font-semibold">пакеты</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Всё включено — оборудование, монтаж и гарантия. Выбирайте пакет и мы приедем завтра
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Home" size={16} />
                      <span>{pkg.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Clock" size={16} />
                      <span>{pkg.time}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Цена под ключ</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
