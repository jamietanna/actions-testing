module.exports = {
  username: "renovate-bot", // https://github.com/renovatebot/renovate/issues/12948
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",

  requireConfig: "optional",
  onboarding: false,

  platform: "github",
  repositories: [
    'jamietanna/jamietanna',
  ],

  // improve performance
  baseDir: '/tmp/renovate-baseDir',
  cacheDir: '/tmp/renovate-cacheDir',
  repositoryCache: 'enabled'
};

