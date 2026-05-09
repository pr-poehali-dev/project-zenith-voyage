import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const products = [
  {
    name: "Сплит-система настенная",
    type: "Жилые помещения",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/53360c86-6992-4ccc-acc2-fe6ef349bfd5.jpg",
    description: "Тихая работа, энергоэффективность класса А++, управление со смартфона",
    price: "от 25 000 ₽",
  },
  {
    name: "Инверторный кондиционер",
    type: "Эконом-класс",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/53360c86-6992-4ccc-acc2-fe6ef349bfd5.jpg",
    description: "Экономия электроэнергии до 40%, плавная регулировка температуры",
    price: "от 32 000 ₽",
  },
  {
    name: "Мультисплит-система",
    type: "Несколько комнат",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/9f733cd1-33fd-48a0-b8ae-185e5db9154a.jpg",
    description: "Один внешний блок на несколько комнат — идеальное решение для квартиры",
    price: "от 65 000 ₽",
  },
  {
    name: "Кассетный кондиционер",
    type: "Коммерческие помещения",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/9f733cd1-33fd-48a0-b8ae-185e5db9154a.jpg",
    description: "Равномерное распределение воздуха по всему помещению, монтаж в потолок",
    price: "от 85 000 ₽",
  },
  {
    name: "Напольно-потолочный",
    type: "Большие пространства",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/36c7220e-1dfd-4600-9c59-39f45d85a0cd.jpg",
    description: "Мощное охлаждение залов, ресторанов и торговых площадей",
    price: "от 120 000 ₽",
  },
  {
    name: "Прецизионный кондиционер",
    type: "Серверные и склады",
    image: "https://cdn.poehali.dev/projects/da71614f-e7c2-4386-8491-5313b534306f/files/36c7220e-1dfd-4600-9c59-39f45d85a0cd.jpg",
    description: "Точное поддержание температуры и влажности для оборудования",
    price: "от 180 000 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Каталог <span className="font-semibold">кондиционеров</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Подбираем оборудование под любой объект — от квартиры до склада. Все марки в наличии, монтаж за 1 день
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Wind" className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{product.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{product.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Весь каталог
          </Button>
        </div>
      </div>
    </section>
  )
}
