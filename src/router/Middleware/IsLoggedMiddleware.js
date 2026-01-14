export default function process ({ next, router }) {
  const jwt = localStorage.getItem('JWT')
  if (jwt) {
    router.push({ name: 'DashboardMain' })
  } else {
    return next()
  }
}
//Тут по идее если подсунуть с сторадж эту переменную программа будет автомтом перекидывать на главную страницу админки
//Но так как авторизации нет, то с главной страницы будет перекидывать суда
