export default function ({ store, route }) {
  switch (route.path) {
    case '/':
    case '/about':
      store.commit('setAppBar', {
        appBarSrc:
          '//cdn.global.eachin-life.com/image/b22f7191ce5b118f004a68ddbca84c5d.jpeg',
        appBarShrinkOnScroll: true,
        appBarFadeImgOnScroll: true,
        appBarProminent: true,
        appBarExtension: true,
      })
      break
    default:
      store.commit('setAppBar', {
        appBarSrc: undefined,
        appBarShrinkOnScroll: false,
        appBarFadeImgOnScroll: false,
        appBarProminent: false,
        appBarExtension: false,
      })
  }
}
