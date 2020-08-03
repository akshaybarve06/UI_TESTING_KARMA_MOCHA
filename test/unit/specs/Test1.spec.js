import Vue from 'vue';

import TestMe from '../../../src/components/TestMe';

describe('TestMe.vue', () => {
  it('should render propValue as its text content', () => {
    const Constructor = Vue.extend(TestMe);
    const comp = new Constructor({
      propsData: {
        propValue: 'Test Text',
      },
    }).$mount();
    expect(comp.$el.textContent)
      .to.equal('Test Text');
  });
});
