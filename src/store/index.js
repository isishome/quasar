import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    sections: [],
    active: null,
    offset: 0
  }),
  getters: {
    section(state) {
      return (id) => state.sections.find(s => s.id === id)
    }
  },
  actions: {
    setSections(payload) {
      this.sections = payload
    },
    setActive(id, ratio) {
      const findSection = this.sections.find(s => s.id === id)
      if (findSection) {
        findSection.ratio = ratio
        this.active = this.sections.reduce((prev, current) => (prev.ratio > current.ratio) ? prev : current).id
        console.log(this.active)
      }
    },
    setOffset(value) {
      this.offset = value
    }
  }
})