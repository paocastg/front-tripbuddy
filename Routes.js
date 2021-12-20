export const RoutesPrivate = {
  LoginPage: { slug: '/login', file: '/Modules/Public/LoginPage' },
  SelectPage: { slug: '/select', file: '/Modules/Private/SelectPage' },
  ConfirmationPage: { slug: '/confirmation', file: '/Modules/Private/ConfirmationPage' }
}

export const RoutesPublic = {
  SolicitudesPage: { slug: '/viajes-otros-usuarios', file: '/Modules/Public/SolicitudesPage' },
  SolicitudesPage: { slug: '/solicitudes/detalles/:id', file: '/Modules/Public/DetailsPage' },
  HomePage: { slug: '/', file: '/Modules/Public/HomePage' },
  Faq: { slug: '/faq', file: '/Modules/Public/Faq' }
}
