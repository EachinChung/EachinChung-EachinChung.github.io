<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-card flat tile dark>
        <v-img
          height="160px"
          src="//cdn.global.eachin-life.com/image/64c3f2c31d21329012d1e46e8e43d751.jpeg"
        >
          <v-list class="pt-6">
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  src="//cdn.global.eachin-life.com/image/2f3f498bb74c7f1974c7afa051391578.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title"> Eachin </v-list-item-title>
                <v-list-item-subtitle>
                  me@eachin-life.com
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-img>
      </v-card>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :src="$store.state.appBarSrc"
      :shrink-on-scroll="$store.state.appBarShrinkOnScroll"
      :fade-img-on-scroll="$store.state.appBarFadeImgOnScroll"
      :prominent="$store.state.appBarProminent"
      :color="dark ? undefined : '#6D4C41'"
      fixed
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title> Eachin的万事屋 </v-toolbar-title>

      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-if="$store.state.appBarExtension" #extension>
        <v-tabs align-with-title>
          <v-tab>文章</v-tab>
          <v-tab>关于</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-dialog v-model="dialog" persistent max-width="420">
      <v-card>
        <v-card-title class="headline"> 该网站正在处于施工状态 </v-card-title>
        <v-card-text> The site is under construction. </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> 知道了 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-footer dark padless>
      <v-card flat tile disabled class="white--text text-center" width="100%">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0 mx-auto" style="max-width: 800px">
          不要把自己活得像落难者一样，急着告诉所有人你的不幸。
          你所经历的在别人眼里只是故事，成长本来就是一个孤立无援的过程，
          你要努力强大起来，然后独当一面。
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          <a
            class="text-decoration-none"
            style="color: white"
            target="_blank"
            href="https://beian.miit.gov.cn/"
          >
            粤ICP备18063371号
          </a>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
      drawer: false,
      dialog: true,
      items: [
        {
          icon: 'mdi-home',
          title: '首页',
          to: '/',
        },
        {
          icon: 'mdi-language-go',
          title: 'Go',
          to: '/go',
        },
        {
          icon: 'mdi-language-python',
          title: 'Python',
          to: '/python',
        },
        {
          icon: 'mdi-calculator',
          title: '算法',
          to: '/calculator',
        },
        {
          icon: 'mdi-lifebuoy',
          title: '生活',
          to: '/life',
        },
      ],
      miniVariant: false,
      icons: ['mdi-wechat', 'mdi-linkedin', 'mdi-instagram', 'mdi-github'],
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.dark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
  },
}
</script>
