// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-60 grid place-items-center p-10">
      <div className="text-center">
        <h1 className="text-title  mb-6">Упсс... Ну ты и проказник)) забрёл туда, куда не следовало </h1>
        <p className="text-description mb-20">А ну-ка вернись обратно 😏</p>
        <Link
          href="/"
          className="hover:scale-103 py-2 sm:py-3 px-8 sm:px-12 lg:px-16 xl:px-20 text-simple bg-gray-100 rounded-xl sm:rounded-2xl hover:bg-gray-200  transition-colors "
        >
          Смиренно вернуться
        </Link>
      </div>
    </div>
  );
}