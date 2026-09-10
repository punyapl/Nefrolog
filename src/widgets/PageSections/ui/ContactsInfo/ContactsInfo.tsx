import { Section, } from '@/shared/ui/Section'
import { Map, } from '@/widgets/Map'

export const ContactsInfo = () => {
    return (
        <Section
            SectionClassName="py-5 max-xl:p-8 max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex justify-between xl:items-center max-xl:flex-col-reverse max-xl:gap-8 max-md:gap-3"
            role="region"
            aria-label="Контактная информация"
        >
            <div
                className="flex self-center w-full max-w-[785px] h-[535px] max-md:h-[220px] text-center"
                role="img"
                aria-label="Карта с расположением клиник"
            >
                <Map />
            </div>

            <address className="h-max w-max max-xl:w-full flex flex-col gap-7 not-italic">
                <div className="flex flex-col gap-4 flex-wrap">
                    <div className="flex gap-3 items-center">
                        <h3 className="font-h6 text-text-primary">Телефон:</h3>
                        <a
                            href="tel:+79532250505"
                            className="font-p-lg text-text-main"
                            aria-label="Позвонить по номеру +7 (953) 225‒05‒05"
                        >
                            +7 (953) 225‒05‒05
                        </a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h3 className="font-h6 text-text-primary">E-mail:</h3>
                        <a
                            href="mailto:nefrolog-v@mail.ru"
                            className="font-p-lg text-text-main"
                            aria-label="Написать письмо на nefrolog-v@mail.ru"
                        >
                            nefrolog-v@mail.ru
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 flex-wrap">
                    <div className="flex gap-3 flex-col">
                        <h3 className="font-h6 text-text-primary">Медицинский центр:</h3>
                        <p className="font-p-lg text-text-main">690001 г. Владивосток, ул. Светланская 87в</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <h3 className="font-h6 text-text-primary">Время работы:</h3>
                        <div className="flex flex-col gap-3 items-end">
                            <div className="flex gap-3">
                                <p className="font-p-lg text-text-main">Пн-Сб</p>
                                <p className="font-p-lg text-text-main">08:00-20:00</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="font-p-lg text-text-main">Вс</p>
                                <p className="font-p-lg text-text-main">10:00-14:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex gap-4 self-center">
                    <Link
                        to={'https://vk.com/zhemchugclinic'}
                        aria-label="Мы в ВКонтакте"
                    >
                        <Button
                            theme="blue"
                            size="large"
                            icon={VK}
                            iconType="fill"
                            aria-hidden="true"
                        />
                    </Link>
                    <Link
                        to={'https://api.whatsapp.com/send/?phone=79835100003&text=Здравствуйте%21%0A%0A%0A%0A&type=phone_number&app_absent=0'}
                        aria-label="Написать в WhatsApp"
                    >
                        <Button
                            theme="blue"
                            size="large"
                            icon={WA}
                            iconType="fill"
                            aria-hidden="true"
                        />
                    </Link>
                </div> */}
            </address>
        </Section>
    )
}