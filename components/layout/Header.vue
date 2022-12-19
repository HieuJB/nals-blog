<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <svg-icon style="width: 50px; height: 50px" name="test"  />
      <b-navbar-brand class="ml-1" href="#">{{ $t('menu.blog') }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="(item, index) in listMenu" :key="index">
          <b-nav-item href="#">{{ item.title }}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav
          class="ml-auto d-flex align-items-lg-center align-items-start"
        >
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item
              v-for="(locale, index) in $i18n.locales"
              :key="index"
              >{{ locale.code }}</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
              ></b-avatar>

              <em>{{ $t('menu.user') }}</em>
            </template>
            <b-dropdown-item href="#">{{ $t('menu.profile') }}</b-dropdown-item>
            <b-dropdown-item href="#">{{ $t('menu.signOut') }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface IListMenu {
  titel: string
  routerLink: string
}

export default Vue.extend({
  data(): IListMenu {
    return {
      listMenu: [
        {
          title: this.$t('menu.home'),
          routerLink: '#',
        },
        {
          title: this.$t('menu.features'),
          routerLink: '#',
        },
        {
          title: this.$t('menu.contact'),
          routerLink: '#',
        },
      ],
    }
  },
})
</script>
