import PhoneFilled from '@/shared/assets/icons/PhoneFilled.svg'
import { useDevice, } from '@/shared/hooks/useDevice'
import { Button, } from '@/shared/ui/Button'
import { Section, } from '@/shared/ui/Section'

export const AboutBanner = () => {
    const { isMobile, } = useDevice()

    return (
        <Section SectionClassName="py-12 max-xl:p-8 max-md:py-6 max-md:px-2.5" ContainerClassName='h-full' role="region" aria-label="О клинике">
            <div
                className="flex justify-between items-center max-xl:flex-col
                bg-[url('/src/shared/assets/images/BannerBackground.png')] bg-cover
                w-full min-h-[587px] h-full max-xl:h-max
                pl-20 pr-[75px] max-xl:p-20 max-md:p-7.5 max-xl:gap-[32px] max-md:gap-4 rounded-[30px]"
                role="banner"
                aria-label="Промо-баннер сети диализных центров Спасение"
            >
                <div
                    className="flex flex-col max-xl:w-full py-4 "
                >
                    <div className="flex flex-col max-w-[500px] max-xl:max-w-none gap-14 max-md:gap-7.5">
                        <div className='flex flex-col gap-4 max-xl:gap-5 max-md:gap-2.5'>
                            <h2 className="font-h2 text-text-white">Ваша долгая и счастливая жизнь - это наша работа!</h2>
                            <p className="font-sub text-text-white">
                                Сеть диализных центров &quot;Спасение&quot; - У нас только высококвалифицированные врачи с многолетним опытом работы.
                            </p>
                        </div>
                        <Button
                            icon={PhoneFilled}
                            iconType='both'
                            theme="white"
                            text="Позвонить"
                            onClick={() => window.open('tel:+79532250505')}
                            aria-label="Позвонить по номеру +7 (953) 225‒05‒05"
                            className='self-start max-xl:self-center'
                        />
                    </div>
                </div>
                    <div
                    className="bg-[url('/src/shared/assets/images/BannerImage.png')] w-1/2 self-end
                        min-xl:min-h-[561px] min-xl:h-full bg-cover bg-center rounded-[20px] max-xl:hidden"
                    role="img"
                    aria-label="Доктор сети диализных центров Спасение"
                />
                
            </div>
        </Section>
    )
}