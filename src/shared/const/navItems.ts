import { getRouteMain, getRouteServices, getRouteDoctors, getRouteContacts, getRouteDocuments, getRouteLegalInfo, getRouteOrganizations, getRouteInsurance, getRouteLinks, } from './router';

export const navItems = [
    { 
        path: getRouteMain(), 
        label: 'Главная', 
    },
    { 
        path: getRouteContacts(), 
        label: 'О нас',
        children: [
            { path: getRouteContacts(), label: 'Контакты', },
            { path: getRouteLegalInfo(), label: 'Юридические данные', },
            { path: getRouteOrganizations(), label: 'Контролирующие организации', },
            { path: getRouteLinks(), label: 'Полезные ссылки', },
        ],
    },
    { 
        path: getRouteDoctors(), 
        label: 'Врачи',
    },
    { 
        path: getRouteServices(), 
        label: 'Услуги',
        children: [
            { path: getRouteServices(), label: 'Каталог услуг', },
            { path: getRouteInsurance(), label: 'Страховые организации', },
        ],
    },
    { 
        path: getRouteDocuments(), 
        label: 'Документы', 
    },
];