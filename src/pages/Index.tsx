import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-industrial-dark via-industrial-gray to-industrial-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-industrial-dark/90 backdrop-blur-sm border-b border-industrial-metal/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-heading font-bold text-industrial-light">
              СМ ДЕВЕЛОПМЕНТ
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-industrial-light hover:text-industrial-red transition-colors">Главная</a>
              <a href="#services" className="text-industrial-light hover:text-industrial-red transition-colors">Услуги</a>
              <a href="#equipment" className="text-industrial-light hover:text-industrial-red transition-colors">Техника</a>
              <a href="#contact" className="text-industrial-light hover:text-industrial-red transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden" variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/b0246eb6-4edb-4d7e-a2a6-2d3fe5aa61b1.jpg"
            alt="Экскаватор на стройке"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
              МОЩНЫЕ
              <span className="block text-industrial-red">РЕШЕНИЯ</span>
              ДЛЯ СТРОЙКИ
            </h1>
            <p className="text-xl text-industrial-light mb-8 animate-fade-in">
              СМ ДЕВЕЛОПМЕНТ — профессиональные экскаваторные работы с современной техникой 
              и опытной командой специалистов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button size="lg" className="bg-industrial-red hover:bg-industrial-red/90 text-white font-heading">
                <Icon name="Phone" size={20} className="mr-2" />
                ЗАКАЗАТЬ ЗВОНОК
              </Button>
              <Button size="lg" variant="outline" className="border-industrial-light text-industrial-light hover:bg-industrial-light hover:text-industrial-dark">
                <Icon name="ArrowDown" size={20} className="mr-2" />
                УЗНАТЬ БОЛЬШЕ
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-6 pb-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "150+", label: "ПРОЕКТОВ" },
              { number: "8", label: "ЛЕТ ОПЫТА" },
              { number: "24/7", label: "РАБОТАЕМ" },
              { number: "15", label: "ЕДИНИЦ ТЕХНИКИ" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4 border border-industrial-metal/30 bg-industrial-dark/50 backdrop-blur">
                <div className="text-3xl font-heading font-bold text-industrial-red mb-2">{stat.number}</div>
                <div className="text-sm text-industrial-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-industrial-light text-industrial-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            НАШИ <span className="text-industrial-red">УСЛУГИ</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "ЗЕМЛЯНЫЕ РАБОТЫ",
                description: "Профессиональные земляные работы любой сложности с использованием современной техники"
              },
              {
                icon: "Settings",
                title: "ДЕМОНТАЖ",
                description: "Снос зданий и демонтаж конструкций с соблюдением всех требований безопасности"
              },
              {
                icon: "Truck",
                title: "ПЛАНИРОВКА УЧАСТКОВ",
                description: "Подготовка территории под строительство, выравнивание и планировка грунта"
              },
              {
                icon: "Construction",
                title: "ФУНДАМЕНТНЫЕ РАБОТЫ",
                description: "Рытье котлованов и траншей для фундаментов различных типов зданий"
              },
              {
                icon: "Wrench",
                title: "ПРОКЛАДКА КОММУНИКАЦИЙ",
                description: "Земляные работы для прокладки водопровода, канализации и других инженерных сетей"
              },
              {
                icon: "Shield",
                title: "БЛАГОУСТРОЙСТВО",
                description: "Ландшафтные работы, устройство дренажа, подготовка участков под озеленение"
              }
            ].map((service, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-industrial-metal/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-industrial-red/10 rounded-lg group-hover:bg-industrial-red group-hover:text-white transition-colors">
                      <Icon name={service.icon as any} size={24} />
                    </div>
                    <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-industrial-gray">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-gradient-to-b from-industrial-dark to-industrial-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-white">
            НАША <span className="text-industrial-red">ТЕХНИКА</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "ГУСЕНИЧНЫЕ ЭКСКАВАТОРЫ",
                specs: "20-25 тонн, глубина копания до 6.5м",
                image: "/img/d069fc45-2e76-4c69-91de-b61060c3096e.jpg"
              },
              {
                name: "КОЛЁСНЫЕ ЭКСКАВАТОРЫ",
                specs: "14-18 тонн, высокая мобильность",
                image: "/img/d069fc45-2e76-4c69-91de-b61060c3096e.jpg"
              },
              {
                name: "МИНИ-ЭКСКАВАТОРЫ",
                specs: "1.5-6 тонн, для ограниченных пространств",
                image: "/img/d069fc45-2e76-4c69-91de-b61060c3096e.jpg"
              }
            ].map((equipment, idx) => (
              <Card key={idx} className="bg-industrial-dark/80 border-industrial-metal/30 text-white overflow-hidden group hover:scale-105 transition-transform">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-industrial-red">{equipment.name}</CardTitle>
                  <p className="text-industrial-light">{equipment.specs}</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-industrial-red hover:bg-industrial-red/90 font-heading">
              <Icon name="Eye" size={20} className="mr-2" />
              ПОСМОТРЕТЬ ВСЮ ТЕХНИКУ
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-industrial-light text-industrial-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            СВЯЖИТЕСЬ <span className="text-industrial-red">С НАМИ</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-industrial-red/10 rounded-lg">
                      <Icon name="Phone" size={20} className="text-industrial-red" />
                    </div>
                    <div>
                      <div className="font-semibold">+7 (XXX) XXX-XX-XX</div>
                      <div className="text-industrial-gray">Звоните с 8:00 до 20:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-industrial-red/10 rounded-lg">
                      <Icon name="Mail" size={20} className="text-industrial-red" />
                    </div>
                    <div>
                      <div className="font-semibold">info@sm-development.ru</div>
                      <div className="text-industrial-gray">Отвечаем в течение часа</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-industrial-red/10 rounded-lg">
                      <Icon name="MapPin" size={20} className="text-industrial-red" />
                    </div>
                    <div>
                      <div className="font-semibold">г. Москва</div>
                      <div className="text-industrial-gray">Работаем по всей области</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-industrial-red/5 border border-industrial-red/20 rounded-lg">
                <h4 className="font-heading font-bold text-industrial-red mb-2">БЫСТРЫЙ РАСЧЁТ</h4>
                <p className="text-industrial-gray">
                  Оставьте заявку и получите предварительную стоимость работ в течение 30 минут
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-industrial-metal/20">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">ЗАКАЗАТЬ ЗВОНОК</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="border-industrial-metal/30" />
                </div>
                <div>
                  <Input placeholder="Телефон" className="border-industrial-metal/30" />
                </div>
                <div>
                  <Input placeholder="Email (необязательно)" className="border-industrial-metal/30" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Описание работ..."
                    rows={4}
                    className="border-industrial-metal/30"
                  />
                </div>
                <Button className="w-full bg-industrial-red hover:bg-industrial-red/90 font-heading">
                  <Icon name="Send" size={20} className="mr-2" />
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark text-industrial-light py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-industrial-red mb-4">СМ ДЕВЕЛОПМЕНТ</h3>
              <p className="text-industrial-metal mb-4">
                Профессиональные экскаваторные работы для строительных компаний и частных лиц
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-industrial-metal text-industrial-light hover:bg-industrial-red">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-industrial-metal text-industrial-light hover:bg-industrial-red">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">УСЛУГИ</h4>
              <div className="space-y-2 text-industrial-metal">
                <div>Земляные работы</div>
                <div>Демонтаж зданий</div>
                <div>Планировка участков</div>
                <div>Рытье котлованов</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">РАБОЧЕЕ ВРЕМЯ</h4>
              <div className="space-y-2 text-industrial-metal">
                <div>Пн-Пт: 8:00 - 20:00</div>
                <div>Сб-Вс: 9:00 - 18:00</div>
                <div className="text-industrial-red font-semibold">Аварийные работы 24/7</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-industrial-metal/30 mt-8 pt-8 text-center text-industrial-metal">
            <p>&copy; 2024 СМ ДЕВЕЛОПМЕНТ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;