export const state = () => ({
  drawer: false,
  appBarSrc: undefined,
  appBarShrinkOnScroll: false,
  appBarFadeImgOnScroll: false,
  appBarProminent: false,
  appBarExtension: false,
})

export const mutations = {
  setDrawer(state, drawer) {
    state.drawer = drawer
  },
  setAppBar(state, appBar) {
    state.appBarSrc = appBar.appBarSrc
    state.appBarShrinkOnScroll = appBar.appBarShrinkOnScroll
    state.appBarFadeImgOnScroll = appBar.appBarFadeImgOnScroll
    state.appBarProminent = appBar.appBarProminent
    state.appBarExtension = appBar.appBarExtension
  },
}
