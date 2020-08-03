import Vue from 'vue';

import TestMe2 from '../../../src/components/TestMe2.vue';

describe('TestMe2.vue', () => {
  it('should update when dataText is changed', done => {
    const Constructor = Vue.extend(TestMe2);
    const comp = new Constructor().$mount();
    comp.dataProp = 'New Text';
    Vue.nextTick(() => {
      expect(comp.$el.textContent)
        .to.equal('New Text');
      done();
    });
  });
});
