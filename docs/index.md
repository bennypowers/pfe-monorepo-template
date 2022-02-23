---
layout: layout-base.njk
title: Project
description: A set of community-created web components based on PatternFly Elements.
githubLink: https://github.com/scope/repo
templateEngineOverride: njk,md
---

<body unresolved>
  <header>
    <pfe-band color="accent" context="accent">
      <h1 id="home-title">
        <img src="/images/logo/pfe-icon-white-shaded.svg" alt="">
        {{ title }}
      </h1>
      <p class="tagline">{{ description }}</p>
      <pfe-cta priority="primary" slot="footer">
        <a href="get-started">Get started</a>
      </pfe-cta>
      <pfe-cta priority="secondary" slot="footer">
        <a href="components">View the components</a>
      </pfe-cta>
    </pfe-band>
    <pfe-band size="small">
      <pfe-cta>
        <a href="{{ githubLink }}">
          <pfe-icon size="md" style="--pfe-icon--Color: #666" icon="fas-github" aria-hidden="true"></pfe-icon>
          Contribute on GitHub
        </a>
      </pfe-cta>
    </pfe-band>
  </header>

  <main>
    <!-- Your content here -->
  </main>

  <footer>
    <pfe-band color="darkest">
      <h3 slot="header">Community</h3>
      <ul>
        <li><a href="{{ githubLink }}">GitHub</a></li>
        <li><a href="{{ githubLink }}/blob/main/CONTRIBUTING.md">Contributing</a></li>
        <li><a href="{{ githubLink }}/blob/main/CODE_OF_CONDUCT.md">Code of conduct</a></li>
      </ul>
    </pfe-band>
  </footer>

  <script type="module" src="/main.mjs"></script>

