import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-professional-blue">
              ООО УМ Аутсорсинг
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-professional-blue transition-colors">
                О компании
              </a>
              <a href="#services" className="text-gray-600 hover:text-professional-blue transition-colors">
                Услуги
              </a>
              <a href="#contact" className="text-gray-600 hover:text-professional-blue transition-colors">
                Контакты
              </a>
            </div>
            <Button className="bg-professional-blue hover:bg-blue-700">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-professional-blue/90 to-professional-blue/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/img/f28ac54f-ffdd-4238-8870-2d6b4be54cb2.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-professional-blue/80" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Профессиональный бухгалтерский аутсорсинг
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Ведение учета и отчетности для вашего бизнеса в Саратове
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-white text-professional-blue hover:bg-gray-100 px-8 py-4 text-lg">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-professional-blue px-8 py-4 text-lg">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-professional-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-professional-dark mb-6">
              О компании
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ООО УМ Аутсорсинг — надежный партнер в области бухгалтерского учета и налогового планирования. 
              Мы помогаем бизнесу сосредоточиться на развитии, беря на себя все вопросы учета и отчетности.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-professional-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Calculator" size={32} className="text-professional-blue" />
                </div>
                <CardTitle className="text-professional-dark">Точность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Безошибочное ведение учета с соблюдением всех требований законодательства
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-professional-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-professional-blue" />
                </div>
                <CardTitle className="text-professional-dark">Оперативность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Своевременная подача отчетности и быстрое решение возникающих вопросов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-professional-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-professional-blue" />
                </div>
                <CardTitle className="text-professional-dark">Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Полная конфиденциальность и защита интересов вашего бизнеса
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-professional-dark mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр бухгалтерских услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <Icon name="FileText" size={48} className="text-professional-blue mb-4" />
                <CardTitle className="text-professional-dark">Ведение учета</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Полное ведение бухгалтерского и налогового учета в соответствии с требованиями законодательства
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <Icon name="TrendingUp" size={48} className="text-professional-blue mb-4" />
                <CardTitle className="text-professional-dark">Налоговое планирование</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Оптимизация налоговой нагрузки и разработка стратегий налогового планирования
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <Icon name="BarChart" size={48} className="text-professional-blue mb-4" />
                <CardTitle className="text-professional-dark">Отчетность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Подготовка и подача всех видов отчетности в установленные сроки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <Icon name="Users" size={48} className="text-professional-blue mb-4" />
                <CardTitle className="text-professional-dark">Кадровый учет</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ведение кадрового делопроизводства и расчет заработной платы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <Icon name="Building" size={48} className="text-professional-blue mb-4" />
                <CardTitle className="text-professional-dark">Регистрация ООО</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Полное сопровождение процесса регистрации и изменений в организации
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-scale">
              <CardHeader>
                <Icon name="MessageCircle" size={48} className="text-professional-blue mb-4" />
                <CardTitle className="text-professional-dark">Консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Профессиональные консультации по вопросам учета и налогообложения
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-professional-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-professional-dark mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваши потребности в бухгалтерских услугах
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-professional-blue/10 rounded-full">
                  <Icon name="MapPin" size={24} className="text-professional-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-professional-dark mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Саратов, ул. Московская, 155</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-professional-blue/10 rounded-full">
                  <Icon name="Phone" size={24} className="text-professional-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-professional-dark mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (8452) 555-123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-professional-blue/10 rounded-full">
                  <Icon name="Mail" size={24} className="text-professional-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-professional-dark mb-2">Email</h3>
                  <p className="text-gray-600">info@um-outsourcing.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-professional-blue/10 rounded-full">
                  <Icon name="Clock" size={24} className="text-professional-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-professional-dark mb-2">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: По договоренности</p>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-professional-dark">Получить консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input placeholder="Телефон" />
                </div>
                <div>
                  <Input placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={4} />
                </div>
                <Button className="w-full bg-professional-blue hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-professional-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ООО УМ Аутсорсинг</h3>
              <p className="text-gray-300">
                Профессиональные бухгалтерские услуги в Саратове
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Ведение учета</li>
                <li>Налоговое планирование</li>
                <li>Отчетность</li>
                <li>Кадровый учет</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>г. Саратов, ул. Московская, 155</li>
                <li>+7 (8452) 555-123</li>
                <li>info@um-outsourcing.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО УМ Аутсорсинг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;