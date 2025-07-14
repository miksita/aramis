// import Logo from "../../../public/icons/logo.svg";
// import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-black text-gray-300  justify-center items-center flex md:px-60 mt-40">
      <div className="container justify-center items-center w-full px-6 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
           <div className="space-y-6">
            {/* <div className="flex items-center">
              <Image src={Logo} alt="лого Арамис" className="w-0 h-20" />
              <span className="text-xl font-medium text-white">
                Конный центр «Арамис»
              </span>
            </div> */}
            <p className="text-white leading-relaxed max-w-sm">
              Конный центр «Арамис» - мир гармонии с лошадьми
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              {/* <svg
                className="w-5 h-5 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
              Часы работы
            </h3>
            <ul className="space-y-3">
              {[
                { day: "Пн-Пт", time: "08:00 - 20:00" },
                { day: "Суббота", time: "09:00 - 18:00" },
                { day: "Воскресенье", time: "10:00 - 16:00" },
              ].map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between items-center"
                >
                  <span>{item.day}:</span>
                  <span
                    className={`${
                      item.day === "Воскресенье"
                        ? "text-gray-400"
                        : "text-white"
                    } font-medium`}
                  >
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>

            {/* <button className="mt-6 bg-[#343434] hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-all duration-300 w-full flex items-center justify-center">
              Записаться на занятие
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button> */}
          </div>
<div>
            <h3 className="text-white text-lg font-medium mb-6 flex items-center">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 rounded-lg mr-4">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white">Телефон</p>
                  <a
                    href="tel:+79294283999"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +7 (929) 428-39-99
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className=" p-2 rounded-lg mr-4">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white">Адрес</p>
                  <p className="text-gray-400">
                    Центральная улица, 7а с. Гоголевка, Красноармейский район,
                    Приморский край
                  </p>
                </div>
              </li>
            </ul>
          </div>

         
        </div>

        <div className="border-t border-[#343434] my-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Конный центр «Арамис». Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
}
