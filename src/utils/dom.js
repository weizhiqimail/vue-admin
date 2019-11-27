import defaultSettings from '@/settings';

const title = defaultSettings.title || 'vue-admin';

export const getPageTitle = pageTitle => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
};
