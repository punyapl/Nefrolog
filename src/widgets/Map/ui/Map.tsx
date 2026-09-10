import {
    YMap,
    YMapComponentsProvider,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
} from 'ymap3-components';
import LogoWaypoint from '@/shared/assets/icons/LogoWaypoint.svg'
import { useDevice, } from '@/shared/hooks/useDevice';
import { Icon, } from '@/shared/ui/Icon';

export const Map = () => {
    const { isMobile, } = useDevice()

    return (
        <YMapComponentsProvider apiKey={__YMAPKEY__} lang="ru_RU">
            <YMap location={{ center: [131.90413, 43.11619,], zoom: isMobile ? 15 : 16, }} theme="light" mode="vector">
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                {/* <YMapDefaultMarker coordinates={[131.90413, 43.11618,]} title='Спасение' subtitle='Медицинский центр' color='#4A4390' /> */}
                <YMapMarker coordinates={[131.904146, 43.11618,]} >
                    <div className='group flex gap-2 -translate-x-[24px] -translate-y-full h-[59px] hover:h-[76.5px] transition-all' >
                        <Icon Svg={LogoWaypoint} width={48} height={48} className='self-end' />
                        <p className='font-p-sm w-max shadow text-text-primary bg-background p-3 rounded-2xl'>
                            Сеть диализных центров <br /> "Спасение"
                            <span className='hidden opacity-0 group-hover:block group-hover:opacity-100'>ул. Светланская 87в</span>
                        </p>
                    </div>
                </YMapMarker>
            </YMap>
        </YMapComponentsProvider>
    )
}