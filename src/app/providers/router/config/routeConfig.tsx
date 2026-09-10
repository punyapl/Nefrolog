import { type RouteObject, } from 'react-router'
import { createBrowserRouter, } from 'react-router-dom'
import { ContactsPage, } from '@/pages/ContactsPage'
import { ControlOrganizationsPage, } from '@/pages/ControlOrganizationsPage'
import { DoctorsPage, } from '@/pages/DoctorsPage'
import { DocumentsPage, } from '@/pages/DocumentsPage'
import { InsurancePage, } from '@/pages/InsurancePage'
import { LegalInfoPage, } from '@/pages/LegalInfoPage'
import { LinksPage, } from '@/pages/LinksPage'
import { MainPage, } from '@/pages/MainPage'
import { ServicesPage, } from '@/pages/ServicesPage'
import {
    AppRoutes,
    getRouteMain,
    getRouteServices,
    getRouteDoctors,
    getRouteContacts,
    getRouteDocuments,
    getRouteLegalInfo,
    getRouteOrganizations,
    getRouteInsurance,
    getRouteLinks,
} from '@/shared/const/router'
import { RouteErrorBoundary, } from '../ui/RouteErrorBoundary'

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.SERVICES]: {
        path: getRouteServices(),
        element: <ServicesPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.DOCTORS]: {
        path: getRouteDoctors(),
        element: <DoctorsPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.CONTACTS]: {
        path: getRouteContacts(),
        element: <ContactsPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.DOCUMENTS]: {
        path: getRouteDocuments(),
        element: <DocumentsPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.LEGAL]: {
        path: getRouteLegalInfo(),
        element: <LegalInfoPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.ORGANIZATIONS]: {
        path: getRouteOrganizations(),
        element: <ControlOrganizationsPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.INSURANCE]: {
        path: getRouteInsurance(),
        element: <InsurancePage/>,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.LINKS]: {
        path: getRouteLinks(),
        element: <LinksPage/>,
        errorElement: <RouteErrorBoundary />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        // element: <NotFoundPage/>,
        errorElement: <RouteErrorBoundary />,
    },
}

export const router = createBrowserRouter(Object.values(routeConfig))
