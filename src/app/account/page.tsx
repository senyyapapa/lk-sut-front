import "./profile.scss";

export default function AccountPage() {
  return (
    <div className="pt-[4vh]">
      <div className="flex flex-row gap-4">
        <div className="students-photo rounded-xl"></div>
        <div className="flex mt-[0.5vh] flex-col mr-2 gap-6 justify-center profile-main-info">
          <span className="">
            <h1>ФИО:</h1>
            <p>Фамилия Имя Отчество</p>
          </span>
          <span className="">
            <h1>Дата рождения:</h1>
            <p>дд.мм.гггг</p>
          </span>
          <span className="">
            <h1>СНИЛС:</h1>
            <p>123-123-123 12</p>
          </span>
        </div>
      </div>
      <div className="mt-[4vh] ml-[2vw]">
        <div className="flex flex-col gap-2 profile-other-info">
          <span className="flex flex-row items-start">
            <h1 className="break-words flex-1 min-w-1/2">Учебное заведение:</h1>
            <p className="break-words flex-1 min-w-1/2">
              Университет телекоммуникаций
            </p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-words flex-1 min-w-1/2">Факультет:</h1>
            <p className="break-words flex-1 min-w-1/2">
              Информационных технологий и программной инженерии(ИТПИ)
            </p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-words flex-1 min-w-[1/2">
              Специцальность/направление:{" "}
            </h1>
            <p className="break-words flex-1 min-w-1/2">
              09.03.02 - Информационные системы и технологии
            </p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">
              Форма обучения, квалификация:{" "}
            </h1>
            <p className="break-words flex-1 min-w-1/2">Очная, Бакалавр</p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">Профиль: </h1>
            <p className="break-words flex-1 min-w-1/2">
              Системное и прикладное программирование информационных систем
            </p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">Группа: </h1>
            <p className="break-words flex-1 min-w-1/2">ИСТ-461</p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">Статус:</h1>
            <p className="break-words flex-1 min-w-1/2">Обучается (Контракт)</p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">Курс:</h1>
            <p className="break-words flex-1 min-w-1/2">1</p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">
              Год начала обучения:
            </h1>
            <p className="break-words flex-1 min-w-1/2">2024</p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">
              Год окончания обучения:
            </h1>
            <p className="break-words flex-1 min-w-1/2">2028</p>
          </span>
          <span className="flex flex-row items-start">
            <h1 className="break-wordsflex-1 min-w-1/2">Студенческий билет:</h1>
            <p className="break-words flex-1 min-w-1/2">№ 2422184</p>
          </span>
        </div>
      </div>
    </div>
  );
}
