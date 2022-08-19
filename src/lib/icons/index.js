export const resolve = {
  chevron_right: () =>
    import('$lib/icons/shape/chevron_right.svelte'),
  chevron_left: () => import('$lib/icons/shape/chevron_left.svelte'),
  chevron_up: () => import('$lib/icons/shape/chevron_up.svelte'),
  privacy: () => import('$lib/icons/privacy.svelte'),
  location: () => import('$lib/icons/location.svelte'),
  phone: () => import('$lib/icons/social/phone.svelte'),
  emailAttachment: () =>
    import('$lib/icons/social/email attachment.svelte'),
  campus: () => import('$lib/icons/campus.svelte'),
  laboratory: () => import('$lib/icons/laboratory.svelte'),
  instagram: () => import('$lib/icons/social/instagram.svelte'),
  linkedin: () => import('$lib/icons/social/linkedin.svelte'),
  facebook: () => import('$lib/icons/social/facebook.svelte'),
  youtube: () => import('$lib/icons/social/youtube.svelte'),
  twitter: () => import('$lib/icons/social/twitter.svelte'),
}
