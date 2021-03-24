export default function ({ store, route }) {
  switch (route.path) {
    case '/':
      store.commit('setAppBar', {
        // appBarSrc:
        //   '//cdn.global.eachin-life.com/image/5b033239c184252cb6e86d1260274488.jpeg',
        // appBarSrc: 'https://picsum.photos/1920/1080?random',
        appBarSrc:
          'https://i.picsum.photos/id/388/1920/1080.jpg?hmac=5kDwk7WAMMXXmPiMTQaOCCgkykXc6Gt-fHA-evtSX14',
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
