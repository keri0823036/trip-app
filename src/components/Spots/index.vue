<template>
  <div class="spots">
    <template v-if="isLoaded">
      <div class="spots__type-filter">
        <div
          :class="{ 'spots__type-filter__option--active': isSelectedAll }"
          class="spots__type-filter__option"
          @click="clickAll"
        >
          <label class="option__text">全部</label>
        </div>
        <div
          v-for="(type, index) in typeList"
          :key="`${index}-${type.handle}`"
          :class="{ 'spots__type-filter__option--active': selectedType.includes(type.handle) }"
          class="spots__type-filter__option"
          >
          <input
            v-model="selectedType"
            :id="type.handle"
            :value="type.handle"
            type="checkbox"
            class="option__input"
          />
          <label
            :for="type.handle"
            class="option__text"
            v-text="type.name"
          />
        </div>
      </div>
      <div class="spots__main">
        <Toast v-model="isShowToast">
          <p>已複製地址至剪貼簿</p>
        </Toast>
        <h3 class="spots__title">景點列表</h3>
        <ul class="spots__list">
          <template v-for="item in spotsData">
            <li v-show="showItemByType(item.type)" :key="item.id" class="spots__list__item">
              <div class="item__icon" v-html="getIcon(item.type)"></div>
              <div class="item__content">
                <p class="item__content__time" v-text="item.time"></p>
                <p class="item__content__title" v-text="item.title"></p>
              </div>
              <a v-if="item.ig_url" :href="item.ig_url" target="_blank" class="item__ig">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style="fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ff9800"><path d="M57.32214,17.2c-22.12493,0 -40.12214,18.01386 -40.12214,40.14453v57.33333c0,22.12493 18.01386,40.12214 40.14453,40.12214h57.33333c22.12493,0 40.12214,-18.01386 40.12214,-40.14453v-57.33333c0,-22.12493 -18.01386,-40.12214 -40.14453,-40.12214zM126.13333,40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM86,51.6c18.9716,0 34.4,15.4284 34.4,34.4c0,18.9716 -15.4284,34.4 -34.4,34.4c-18.9716,0 -34.4,-15.4284 -34.4,-34.4c0,-18.9716 15.4284,-34.4 34.4,-34.4zM86,63.06667c-12.66573,0 -22.93333,10.2676 -22.93333,22.93333c0,12.66573 10.2676,22.93333 22.93333,22.93333c12.66573,0 22.93333,-10.2676 22.93333,-22.93333c0,-12.66573 -10.2676,-22.93333 -22.93333,-22.93333z"></path></g></g></svg>
              </a>
              <a :href="item.google_url" target="_blank" class="item__google-map">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><g><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,59.607846%,0%);fill-opacity:1;" d="M 22.5 1 C 20.207031 1 18.1875 2.199219 17.03125 4 L 6 4 C 4.894531 4 4 4.894531 4 6 L 4 24 C 4 24.179688 4.03125 24.347656 4.074219 24.511719 L 17.058594 11.527344 C 17.367188 12.160156 17.710938 12.761719 18.0625 13.347656 L 16.414062 15 L 25.925781 24.511719 C 25.96875 24.347656 26 24.179688 26 24 L 26 14.929688 C 26.148438 14.675781 26.300781 14.421875 26.457031 14.171875 C 27.648438 12.214844 29 10 29 7.5 C 29 3.914062 26.085938 1 22.5 1 Z M 22.5 3 C 24.984375 3 27 5.015625 27 7.5 C 27 8.765625 26.496094 10.011719 25.847656 11.222656 C 25.578125 11.734375 25.285156 12.242188 24.984375 12.742188 C 24.960938 12.78125 24.9375 12.820312 24.917969 12.855469 C 24.894531 12.894531 24.875 12.929688 24.851562 12.964844 C 24.589844 13.394531 24.335938 13.816406 24.09375 14.234375 C 23.875 14.605469 23.667969 14.980469 23.488281 15.34375 C 23.375 15.582031 23.273438 15.820312 23.179688 16.050781 C 23.15625 16.113281 23.140625 16.175781 23.117188 16.234375 C 23.050781 16.421875 23 16.601562 22.953125 16.785156 C 22.9375 16.851562 22.921875 16.921875 22.90625 16.992188 C 22.863281 17.226562 22.828125 17.460938 22.828125 17.6875 C 22.828125 17.859375 22.667969 17.984375 22.5 17.984375 C 22.332031 17.984375 22.191406 17.835938 22.191406 17.667969 C 22.191406 17.460938 22.167969 17.25 22.128906 17.039062 C 22.117188 16.96875 22.097656 16.894531 22.078125 16.824219 C 22.050781 16.691406 22.015625 16.5625 21.972656 16.429688 C 21.941406 16.332031 21.910156 16.230469 21.871094 16.128906 C 21.824219 16.007812 21.773438 15.882812 21.71875 15.761719 C 21.679688 15.664062 21.636719 15.5625 21.589844 15.464844 C 21.554688 15.390625 21.511719 15.3125 21.472656 15.234375 C 21.34375 14.980469 21.195312 14.714844 21.046875 14.449219 C 20.890625 14.179688 20.734375 13.910156 20.566406 13.632812 C 20.292969 13.183594 20.019531 12.722656 19.742188 12.257812 C 19.304688 11.523438 18.886719 10.777344 18.570312 10.015625 C 18.570312 10.011719 18.566406 10.007812 18.566406 10.003906 C 18.480469 9.800781 18.40625 9.597656 18.339844 9.390625 C 18.335938 9.390625 18.339844 9.390625 18.339844 9.386719 C 18.273438 9.191406 18.210938 8.992188 18.164062 8.792969 C 18.144531 8.710938 18.132812 8.628906 18.113281 8.542969 C 18.089844 8.414062 18.0625 8.285156 18.042969 8.152344 C 18.015625 7.9375 18 7.71875 18 7.5 C 18 7.222656 18.035156 6.953125 18.082031 6.6875 C 18.089844 6.636719 18.097656 6.585938 18.109375 6.539062 C 18.160156 6.3125 18.230469 6.09375 18.3125 5.878906 C 18.347656 5.789062 18.386719 5.699219 18.425781 5.613281 C 18.5 5.457031 18.582031 5.3125 18.667969 5.171875 C 18.757812 5.027344 18.855469 4.886719 18.957031 4.753906 C 18.992188 4.710938 19.03125 4.667969 19.066406 4.625 C 19.253906 4.402344 19.460938 4.199219 19.683594 4.019531 C 19.691406 4.011719 19.695312 4.003906 19.703125 4 C 20.472656 3.382812 21.4375 3 22.5 3 Z M 10.082031 6 C 11.140625 6 12.101562 6.402344 12.828125 7.0625 L 11.683594 8.214844 C 11.25 7.84375 10.691406 7.617188 10.082031 7.617188 C 8.722656 7.617188 7.621094 8.71875 7.621094 10.078125 C 7.621094 11.4375 8.722656 12.542969 10.082031 12.542969 C 11.222656 12.542969 12.015625 11.867188 12.304688 10.921875 L 10.082031 10.921875 L 10.082031 9.359375 L 13.929688 9.367188 C 14.265625 10.957031 13.507812 14.160156 10.082031 14.160156 C 7.828125 14.160156 6 12.335938 6 10.078125 C 6 7.824219 7.828125 6 10.082031 6 Z M 22.5 6 C 21.671875 6 21 6.671875 21 7.5 C 21 8.328125 21.671875 9 22.5 9 C 23.328125 9 24 8.328125 24 7.5 C 24 6.671875 23.328125 6 22.5 6 Z M 15 16.414062 L 5.488281 25.925781 C 5.652344 25.96875 5.820312 26 6 26 L 24 26 C 24.179688 26 24.347656 25.96875 24.511719 25.925781 Z M 15 16.414062 "/></g></svg>
              </a>
              <div
                class="item__copy"
                @click="copyAddress(item.address)">
                <!-- <p ref="addressText" style="display:none" v-text="item.address"></p> -->
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M63.06667,11.46667c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v91.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h74.53333c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-65.93333c0,-1.51933 -0.60182,-2.97578 -1.67969,-4.05365l-31.53333,-31.53333c-1.07787,-1.07787 -2.53431,-1.67969 -4.05364,-1.67969zM108.93333,22.38464l29.21536,29.21536h-23.48203c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333zM34.4,40.13333c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v91.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h74.53333c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-5.73333h-57.33333c-12.64773,0 -22.93333,-10.2856 -22.93333,-22.93333v-74.53333z"></path></g></g></svg>
              </div>
              <!-- <div v-html="iconSvgList[]"></div> -->
            </li>
          </template>
        </ul>
      </div>
    </template>
    <template v-else>
      <div>
        <Loading />
      </div>
    </template>
  </div>
</template>
<script>
import { spotsTypeConfig } from '@/config/spotsType.config'
import Loading from '@/components/Loading'
import Toast from '@/components/Toast'

export default {
  components: {
    Toast,
    Loading
  },
  props: {
    spotsData: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {
      isShowToast: false,
      selectedType: [],
      isSelectedAll: true,
      isLoaded: false
    }
  },
  computed: {
    typeList() {
      return spotsTypeConfig
    }
  },
  watch: {
    selectedType: {
      handler(val) {
        if(val.length <= 0 ) this.isSelectedAll = true
        else this.isSelectedAll = false
      },
      deep: true
    },
    spotsData(data) {
      if(data) {
        this.isLoaded = true
      }
    },
    isSelectedAll(val) {
      if(val) this.selectedType = []
    }
  },
  methods: {
    showItemByType(type) {
      return this.isSelectedAll || this.selectedType.includes(type)
    },
    clickAll() {
      this.isSelectedAll = true
    },
    getIcon(type) {
      return this.typeList[type].icon
    },
    copyAddress (text) {
      const vueThis = this
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!')
        vueThis.isShowToast = true
      }, function(err) {
        console.error('Async: Could not copy text: ', err)
      }) 
    }
  }
}
</script>
<style lang="scss" scoped>
.spots {
  &__type-filter {
    display: flex;
    margin-bottom: 24px;

    &__slider-wrap {
      width: 100%;
    }

    &__option {
      background-color: var(--gray-10);
      padding: 16px 8px;
      border-radius: 30px;
      width: 100%;
      text-align: center;
      box-shadow: 0px 2px 5px 1px var(--gray-30);
      transition: all 0.2s ease;

      &--active {
        background-color: var(--orange-base);
        color: var(--gray-10);
      }

      &:not(:last-of-type) {
        margin-right: 4px;
      }

      .option {
        &__input {
          display: none;
        }
      }
    }
  }

  &__title {
    font-weight: bold;
    font-size: var(--font-l);
  }
  &__list {
    overflow: scroll;

    &__item {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        &__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          background-color: var(--orange-light);
          border-radius: 12px;
        }

        &__content {
          width: 100%;
          margin: 0 12px;

          &__time {
            font-size: var(--font-base);
            color: var(--gray-60);
            margin-bottom: 4px;
          }

          &__title {
            font-size: var(--font-m);
            color: var(--gray-80);
          }
        }

        &__google-map, &__ig_url {
          margin-right: 4px;
        }
      }

      &::v-deep svg {
        g {
          fill: var(--orange-base);
        }
      }
    }
  }
}
</style>