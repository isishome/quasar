import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    sections: [],
    active: null,
    offset: 0,
    bottomAccessTimeStamp: Date.now(),
    rightAccessTimeStamp: Date.now()
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
    setTop(id, top) {
      const findSection = this.sections.find(s => s.id === id && s.top === 0)
      if (findSection)
        findSection.top = top
    },
    setIntersecting(id, intersecting) {
      const findSection = this.sections.find(s => s.id === id)
      if (findSection)
        findSection.intersecting = intersecting
    },
    setActive(id) {
      this.active = id
    },
    setOffset(value) {
      this.offset = value
    }
  }
})