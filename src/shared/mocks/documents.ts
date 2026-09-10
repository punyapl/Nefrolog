import citizenRightsDutiesHealthcare from '@/shared/assets/documents/citizenRightsDutiesHealthcare.pdf'
import discountedDrugsList from '@/shared/assets/documents/discountedDrugsList.pdf'
import essentialDrugsList from '@/shared/assets/documents/essentialDrugsList.pdf'
import federalLaw323fzHealthcareBasics from '@/shared/assets/documents/federalLaw323fzHealthcareBasics.pdf'
import federalLaw326fzOms from '@/shared/assets/documents/federalLaw326fzOms.pdf'
import govResolution922ppTerritorialProgram from '@/shared/assets/documents/govResolution922ppTerritorialProgram.pdf'
import insuredInfoMedCost from '@/shared/assets/documents/insuredInfoMedCost.pdf'
import licenseMedActivity28072022 from '@/shared/assets/documents/licenseMedActivity28072022.pdf'
import memoChooseMedOrg from '@/shared/assets/documents/memoChooseMedOrg.pdf'
import memoInsuredOms from '@/shared/assets/documents/memoInsuredOms.pdf'
import memoMzFreeMedCare from '@/shared/assets/documents/memoMzFreeMedCare.pdf'
import memoRosminzdravFreeMedCare from '@/shared/assets/documents/memoRosminzdravFreeMedCare.pdf'
import orderMz17nNephrologyCare from '@/shared/assets/documents/orderMz17nNephrologyCare.pdf'
import orderMz406nOrgSelection from '@/shared/assets/documents/orderMz406nOrgSelection.pdf'
import rareDiseasesDrugsList from '@/shared/assets/documents/rareDiseasesDrugsList.pdf'
import territorialTariffAgreementOms2023 from '@/shared/assets/documents/territorialTariffAgreementOms2023.pdf'

export const Documents = [
    {
        label: 'Регламентирующие документы',
        docs: [
            {
                label: 'Федеральный закон от 21.11.2011 N 323-ФЗ (ред. от 03.07.2016) "Об основах охраны здоровья граждан в Российской Федерации"',
                document: federalLaw323fzHealthcareBasics,
            },
            {
                label: 'Права и обязанности граждан в сфере охраны здоровья (ФЗ от 21.11.2011 N 323-ФЗ (ред. от 03.07.2016) "Об основах охраны здоровья граждан в Российской Федерации")',
                document: citizenRightsDutiesHealthcare,
            },
            {
                label: 'Приказ Министерства здравоохранения и социального развития РФ от 18 января 2012 г. N17н «ОБ УТВЕРЖДЕНИИ ПОРЯДКА ОКАЗАНИЯ МЕДИЦИНСКОЙ ПОМОЩИ ВЗРОСЛОМУ НАСЕЛЕНИЮ ПО ПРОФИЛЮ "НЕФРОЛОГИЯ"',
                document: orderMz17nNephrologyCare,
            },
        ],
    },
    {
        label: 'Лицензии на осуществляемые виды деятельности',
        docs: [
            {
                label: 'Л041-01023-25/00591275 от 28.07.2022',
                document: licenseMedActivity28072022,
            },
        ],
    },
    {
        label: 'Обязательное медицинское страхование',
        docs: [
            {
                label: 'Федеральный закон от 29 ноября 2010 г. N 326-ФЗ "Об обязательном медицинском страховании в Российской Федерации"',
                document: federalLaw326fzOms,
            },
            {
                label: 'Постановление Правительства ПК 922-пп от 28.12.2022 "О территориальной программе государственных гарантий бесплатного оказания гражданам медицинской помощи в Приморском крае на 2023 год и на плановый период 2024 и 2025 годов"',
                document: govResolution922ppTerritorialProgram,
            },
            {
                label: 'Территориальное тарифное соглашение по оплате медицинской помощи (медицинских услуг) в системе ОМС на территории Приморского края на 2023 год',
                document: territorialTariffAgreementOms2023,
            },
            {
                label: 'Приказ МЗ РФ от 26 апреля 2012 г. N 406н "Об утверждении Порядка выбора гражданином медицинской организации при оказании ему медицинской помощи в рамках программы государственных гарантий бесплатного оказания гражданам медицинской помощи"',
                document: orderMz406nOrgSelection,
            },
            {
                label: 'О выборе медицинской организации',
                document: memoChooseMedOrg,
            },
            {
                label: 'ПАМЯТКА Минздрава для граждан о гарантиях бесплатного оказания медицинской помощи',
                document: memoMzFreeMedCare,
            },
            {
                label: 'ПАМЯТКА ДЛЯ ГРАЖДАН о гарантиях бесплатного оказания медицинской помощи (Росминздрав)',
                document: memoRosminzdravFreeMedCare,
            },
            {
                label: 'Информирования застрахованных лиц о стоимости медицинской помощи в медицинских организациях',
                document: insuredInfoMedCost,
            },
            {
                label: 'Памятка гражданам, застрахованным в системе ОМС',
                document: memoInsuredOms,
            },
        ],
    },
    {
        label: 'Лекарственное обеспечение',
        docs: [
            {
                label: 'Перечень жизненно необходимых и важнейших лекарственных препаратов для медицинского применения для медицинского применения, в том числе лекарственных препаратов для медицинского применения, назначаемых по решению врачебных комиссий медицинских организаций',
                document: essentialDrugsList,
            },
            {
                label: 'Перечень лекарственных препаратов отпускаемых населению в соответствии с Перечнем групп населения и категорий заболеваний, при амбулаторном лечении которых лекарственные средства и изделия медицинского назначения отпускаются по рецептам врачей бесплатно, а также в соответствии с Перечнем групп населения, при амбулаторном лечении которых лекарственные средства отпускаются по рецептам врачей с пятидесятипроцентной скидкой',
                document: discountedDrugsList,
            },
            {
                label: 'Перечень лекарственных препаратов предназначенных для обеспечения лиц, больных гемофилией, муковисцидозом, гипофизарным нанизмом, болезнью Гоше, злокачественными новообразованиями лимфоидной, кроветворной и родственных им тканей, рассеянным склерозом, а также лиц после трансплантации органов и (или) тканей рассеянным склерозом, а также лиц',
                document: rareDiseasesDrugsList,
            },
        ],
    },
    {
        label: 'Стандарты, клинические рекомендации',
        docs: [
            {
                label: 'Стандарт первичной медико-санитарной помощи',
                link: 'https://minzdrav.gov.ru/ministry/61/22/stranitsa-979/stranitsa-983/1-standarty-pervichnoy-mediko-sanitarnoy-pomoschi',
            },
            {
                label: 'Стандарт специализированной медицинской помощи',
                link: 'https://minzdrav.gov.ru/ministry/61/22/stranitsa-979/stranitsa-983/2-standarty-spetsializirovannoy-meditsinskoy-pomoschi',
            },
            {
                label: 'Стандарт скорой медицинской помощи',
                link: 'https://minzdrav.gov.ru/ministry/61/22/stranitsa-979/stranitsa-983/3-standarty-skoroy-meditsinskoy-pomoschi',
            },
            {
                label: 'Рубрикатор клинических рекомендаций',
                link: 'https://cr.minzdrav.gov.ru/#!/',
            },
        ],
    },
    {
        label: 'Порядки оказания медицинской помощи',
        docs: [
            {
                label: 'Порядки оказания медицинской помощи населению Российской Федерации',
                link: 'https://minzdrav.gov.ru/ministry/61/4/stranitsa-857/poryadki-okazaniya-meditsinskoy-pomoschi-naseleniyu-rossiyskoy-federatsii',
            },
        ],
    },
]