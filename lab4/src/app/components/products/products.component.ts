
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone 14 Pro',
      description: 'Apple iPhone 14 Pro with 256GB storage.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 Ultra 512GB.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },
    {
      name: 'MacBook Pro 16"',
      description: 'MacBook Pro 16" M2 Max, 32GB RAM.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-16-gb-ssd-512-gb-macos-mk183-102892102/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h4d/87040702578718.jpg?format=gallery-medium',
      name: 'Сумка кросс-боди 7456 black1 искусственная кожа черный',
      description: 'Характеристики Для кого - для женщин, Цвет - черный',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-7456-black1-iskusstvennaja-kozha-chernyi-109405033/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h4d/84656597139486.jpg?format=gallery-medium',
      name: 'Рюкзак полиэстер, оксфорд черный',
      description: 'Характеристики Цвет черный',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/rjukzak-15378081-ids21090702-poliester-oksford-chernyi-109556758/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h13/84065971601438.png?format=gallery-medium',
      name: 'Часы Кварцевые FOURRON 6846000_55 сталь',
      description: 'Современный Стиль и Надежность с Fourron: Надёжный механизм в Металлическом Корпусе',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/kvartsevye-fourron-6846000-55-stal--113577617/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
      name: 'Электрочайник Yingzheng ZY-305 черный',
      description: 'Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн и передовые функции для вашего удобства.',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium',
      name: 'Блендер Slaouwo HB-2075 черный',
      description: 'Характеристики Цвет черный',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/hec/79996057780254.jpg?format=gallery-medium',
      name: 'Настольная электропечь DAUSCHER DMO-3600RE красный',
      description: 'Характеристики Цвет красный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/dauscher-dmo-3600re-krasnyi-109849401/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h99/85838094467102.jpg?format=gallery-medium',
      name: 'Футболка серый',
      description: 'Эта постиранная хлопковая футболка изготовлена из высококачественного хлопка. Ткань очень мягкая и приятная для кожи, свободная, дышащая и удобная в носке.',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/futbolka-730323194-seryi-s-118741292/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h2f/84779982192670.jpg?format=gallery-medium',
      name: 'Джинсы джинсы-мом Denim голубой',
      description: 'Slim fit jeans made from high-quality denim.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/dzhinsy-dzhinsy-mom-denim-9194-goluboi-w27-115650378/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h3d/86680739282974.jpg?format=gallery-medium',
      name: 'Бомбер белый',
      description: 'Warm and stylish winter jacket.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/bomber-331205817-belyi-s-122015829/?c=750000000'
        }
  ];
  shareOnWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/send?text=Check this product: ${link}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${link}`, '_blank');
  }
}
