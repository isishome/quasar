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
    setActive(id, top) {
      const findSection = this.sections.find(s => s.id === id)
      if (findSection) {
        findSection.top = top
        const filter = this.sections.filter(s => s.top !== null)
        if (filter.length > 0)
          this.active = filter.reduce((prev, current) => (Math.abs(prev.top) < Math.abs(current.top)) ? prev : current).id
      }
    },
    setOffset(value) {
      this.offset = value
    }
  }
})