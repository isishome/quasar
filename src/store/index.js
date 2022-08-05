import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    sections: [],
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
    setActive(id, value) {
      const findSection = this.sections.find(s => s.id === id)
      if (findSection)
        findSection.active = value
    },
    setOffset(value) {
      this.offset = value
    }
  }
})