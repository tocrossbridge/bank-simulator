import Modal from '../Modal.vue';
import { mount } from 'cypress/vue'

describe('It should open', () => {
    it('mounts', () => {
      const modal = {open: true, data:[]};

      mount(Modal, {
        propsData: {
          modal
        }
      })
    })
})

describe('It should close', () => {
    it('mounts', () => {
      const modal = {open: true, data:[]};

      mount(Modal, {
        propsData: {
          modal
        }
      })

      cy.get('.modal').find('.modal__close')
      .should('contain', 'X')
      .click()

    })
})