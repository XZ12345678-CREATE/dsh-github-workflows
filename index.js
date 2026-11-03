// Standalone DSH plugin; package-local imports only.
import { definePlugin } from './lib/provider.js';
const plugin = definePlugin({ name: 'dsh-github-workflows', skills: ["dsh-ci-diagnose","dsh-pr-review","dsh-pr-publish"], baseURL: new URL('.', import.meta.url) });
export const { name, inject, skillNames, createProvider } = plugin;
export function apply(ctx, config = {}) { plugin.apply(ctx, config);  }
