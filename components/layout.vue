<template>
  <v-app dark>
    <v-navigation-drawer
      :value="$store.state.drawer"
      :mini-variant="miniVariant"
      fixed
      app
      @input="setDrawer"
    >
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
      :src="appBarSrc"
      :class="{ indigo: !dark }"
      :height="appBarHeight"
      :shrink-on-scroll="appBarShrinkOnScroll"
      :fade-img-on-scroll="appBarFadeImgOnScroll"
      fixed
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="setDrawer(!$store.state.drawer)" />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot></slot>
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
      <v-card flat tile class="white--text text-center">
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

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
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
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      dark: false,
      dialog: false,
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
      appBarSrc: undefined,
      appBarHeight: undefined,
      appBarShrinkOnScroll: false,
      appBarFadeImgOnScroll: false,
    }
  },
  computed: {
    drawer() {
      return this.$store.state.drawer
    },
  },
  created() {
    switch (this.$route.path) {
      case '/':
        this.appBarSrc =
          '//cdn.global.eachin-life.com/image/a32dbb58b38ea375ac17f35750afcb62.jpeg'
        this.appBarHeight = '300px'
        this.appBarShrinkOnScroll = true
        this.appBarFadeImgOnScroll = true
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.dark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
  },
  methods: {
    ...mapMutations(['setDrawer']),
  },
}
</script>
