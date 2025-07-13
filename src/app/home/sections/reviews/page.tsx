import { TestimonialsCarousel } from '@/components/ui/Carousel'

const testimonials = [
  {
    id: '1',
    name: 'Иван Иванов',
    text: 'Отличный сервис, всё быстро и качественно. Буду рекомендовать друзьям!',
    rating: 5,
    photo: '/images/about.webp',
  },
  {
    id: '2',
    name: 'Мария Петрова',
    text: 'Очень довольна качеством продукции. Доставка быстрая, сервис на высоте!',
    rating: 4,
    photo: '/images/about.webp',
  },
  {
    id: '3',
    name: 'Алексей Смирнов',
    text: 'Постоянно заказываю здесь, всегда свежие продукты и отличное обслуживание.',
    rating: 5,
    photo: '/images/about.webp',
  },
  {
    id: '4',
    name: 'Елена Васильева',
    text: 'Приятно удивлена качеством сервиса. Персонал очень внимательный и вежливый.',
    rating: 5,
    photo: '/images/about.webp',
  },
  {
    id: '5',
    name: 'Елена Васильева',
    text: 'Приятно удивлена качеством сервиса. Персонал очень внимательный и вежливый.',
    rating: 5,
    photo: '/images/about.webp',
  },
  {
    id: '6',
    name: 'Елена Васильева',
    text: 'Приятно удивлена качеством сервиса. Персонал очень внимательный и вежливый.',
    rating: 5,
    photo: '/images/about.webp',
  },
  {
    id: '7',
    name: 'Елена Васильева',
    text: 'Приятно удивлена качеством сервиса. Персонал очень внимательный и вежливый.',
    rating: 5,
    photo: '/images/about.webp',
  },
  {
    id: '8',
    name: 'Елена Васильева',
    text: 'Приятно удивлена качеством сервиса. Персонал очень внимательный и вежливый.',
    rating: 5,
    photo: '/images/about.webp',
  },
]

export default function ReviewsSection() {
  return (
    <section className="px-0 mt-40 md:px-60">
      <div className="container mx-auto  ">
        <h2 className="text-title text-center mb-4 px-6 md:px-0">Отзывы наших клиентов</h2>
                <p className="text-description text-center mb-8 px-6 md:px-0">Отзывы наших клиентов</p>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}