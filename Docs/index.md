---
title: SukiSU-Ultra Contributors
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from "vitepress/theme";
import { data } from "./.vitepress/data/contributors.data.ts";

const github = {
  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/></svg>`
}

const commit = {
  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M12 3l0 6"/><path d="M12 15l0 6"/></svg>`
}

// Helper functions
function formatContributions(num) {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`
  return num.toString()
}

// Process all contributors
const contributors = data.map((contributor) => ({
  avatar: contributor.avatar_url,
  name: contributor.login,
  title: `${formatContributions(contributor.contributions)} contributions`,
  links: [
    {
      icon: github,
      link: contributor.html_url,
    },
    {
      icon: commit,
      link: `https://github.com/sukisu-ultra/sukisu-ultra/commits?author=${contributor.login}`,
    },
  ],
}))

const totalContributions = data.reduce((acc, current) => acc + current.contributions, 0);
</script>

<!-- Main contributors page -->
<div class="contributors-page">
  <!-- Header section with logo background -->
  <div class="page-header">
    <div class="logo-background">
      <img src="/logo.png" alt="SukiSU-Ultra Logo" class="logo" />
    </div>
    <h1 class="main-title">SukiSU-Ultra Contributors</h1>
    <p class="main-subtitle">Meet the amazing developers who power our project</p>
    <div class="stats-badge">
      <span class="stats-number">{{ totalContributions }}</span>
      <span class="stats-label">total contributions from {{ contributors.length }} developers</span>
    </div>
  </div>
  
  <!-- Contributors section -->
  <div class="contributors-section">
    <div class="section-header">
      <h2 class="section-title">Our Amazing Contributors</h2>
      <p class="section-subtitle">The talented developers who make SukiSU-Ultra possible</p>
    </div>
    <VPTeamPage>
      <VPTeamMembers size="medium" :members="contributors" />
    </VPTeamPage>
  </div>
  
  <!-- Thank you section -->
  <div class="thank-you-section">
    <div class="thank-you-content">
      <h2 class="thank-you-title">Thank You All</h2>
      <p class="thank-you-message">
        For your invaluable contributions to SukiSU-Ultra. Your dedication, code, ideas, and support 
        have made this project what it is today. Every commit, every bug report, and every feature 
        request helps make SukiSU-Ultra better for everyone.
      </p>
      <div class="thank-you-stats">
        <div class="stat-item">
          <span class="stat-number">{{ contributors.length }}</span>
          <span class="stat-label">Contributors</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ totalContributions }}</span>
          <span class="stat-label">Contributions</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">∞</span>
          <span class="stat-label">Gratitude</span>
        </div>
      </div>
      <div class="cta-buttons">
        <a href="https://github.com/sukisu-ultra/sukisu-ultra" class="cta-button primary" target="_blank">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Contribute to SukiSU-Ultra
        </a>
        <a href="https://github.com/sukisu-ultra/sukisu-ultra/issues" class="cta-button secondary" target="_blank">
          Report Issues
        </a>
      </div>
    </div>
  </div>
</div>

