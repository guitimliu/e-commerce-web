<template>
    <div class="bg-dark">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white py-4">
          <p class="mb-0">{{ copyrightText }}</p>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li v-for="platform in socialBtn" :key="platform.name">
                <router-link class="text-white mx-3" :to="platform.link">
                    <i class="bi" :class="platform.iconClass"></i>
                </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      copyrightText: '© 2022 LOGO All Rights Reserved.',
      socialBtn: [
        {
          name: 'Facebook',
          link: '#',
          iconClass: 'bi-facebook'
        },
        {
          name: 'Instagram',
          link: '#',
          iconClass: 'bi-instagram'
        },
        {
          name: 'Line',
          link: '#',
          iconClass: 'bi-line'
        }
      ]
    }
  }
}
</script>
