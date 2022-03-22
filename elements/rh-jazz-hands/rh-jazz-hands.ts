import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-jazz-hands.scss';

/**
 * Jazz Hands
 * @slot - Place element content here
 */
@customElement('rh-jazz-hands') @pfelement()
export class RhJazzHands extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  render() {
    return html`
      <span>👋</span>
      <slot></slot>
      <span><span>👋</span></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-jazz-hands': RhJazzHands;
  }
}
