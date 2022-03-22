import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhJazzHands } from '@rhds/rh-jazz-hands';

const element = html`
  <rh-jazz-hands></rh-jazz-hands>
`;

describe('<rh-jazz-hands>', function() {
  it('should upgrade', async function() {
    const el = await createFixture<RhJazzHands>(element);
    const klass = customElements.get('rh-jazz-hands');
    expect(el)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhJazzHands);
  });
});
