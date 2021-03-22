<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list>
        <v-list-item class="px-4">
          <v-list-item-avatar>
            <v-img
              src="https://static.ek-studio.cn/image/2f3f498bb74c7f1974c7afa051391578.jpg"
            />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Eachin Chung</v-list-item-title>
            <v-list-item-subtitle>EachinChung@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

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
      src="/a32dbb58b38ea375ac17f35750afcb62.jpeg"
      class="indigo"
      height="300px"
      shrink-on-scroll
      fade-img-on-scroll
      fixed
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
        <nuxt />
      </v-container>
    </v-main>

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
export default {
  data() {
    return {
      drawer: false,
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
    this.$vuetify.theme.dark = false
  },
}
</script>

<style>
.filing {
  display: inline-block;
  text-decoration: none;
  color: #dad7da;
  height: 20px;
  line-height: 20px;
}
</style>
