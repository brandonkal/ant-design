export const imports = {
  'first.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "first" */ 'first.mdx'),
}
