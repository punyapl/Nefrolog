export enum AppRoutes {
    MAIN = 'main',
    DOCTORS = 'doctors',
    SERVICES = 'services',
    CONTACTS = 'contacts',
    DOCUMENTS = 'documents',
    LEGAL = 'legal',
    ORGANIZATIONS = 'organizations',
    INSURANCE = 'insurance',
    LINKS = 'links',
    // last
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
export const getRouteServices = () => '/services'
export const getRouteDoctors = () => '/doctors'
export const getRouteContacts = () => '/contacts'
export const getRouteDocuments = () => '/documents'
export const getRouteLegalInfo = () => '/legal'
export const getRouteOrganizations = () => '/organizations'
export const getRouteInsurance = () => '/insurance'
export const getRouteLinks = () => '/links'
// export const getRouteArticlesDetails = (id: string) => `/articles/${id}`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteServices()]: AppRoutes.SERVICES,
    [getRouteDoctors()]: AppRoutes.DOCTORS,
    [getRouteContacts()]: AppRoutes.CONTACTS,
    [getRouteDocuments()]: AppRoutes.DOCUMENTS,
    [getRouteLegalInfo()]: AppRoutes.LEGAL,
    [getRouteOrganizations()]: AppRoutes.ORGANIZATIONS,
    [getRouteInsurance()]: AppRoutes.INSURANCE,
    [getRouteLinks()]: AppRoutes.LINKS,
    // [getRouteArticlesDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
}
