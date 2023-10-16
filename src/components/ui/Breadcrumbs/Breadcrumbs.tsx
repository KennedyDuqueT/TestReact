import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Breadcrumbs as BreadcrumbsMUI, Link, Typography } from '@mui/material';
import { useTranslation } from '@/hooks';

export const Breadcrumbs = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const pathnames = router.asPath.split('/').filter((x) => x);

  return (
    <BreadcrumbsMUI separator={'/'} aria-label="breadcrumb" sx={{ mt: 0, mb: 3, '& .MuiBreadcrumbs-separator': { mx: 0.5 } }}>
      {pathnames.length === 1 && (
        <NextLink href={'/'} passHref legacyBehavior key={'home'}>
          <Link>
            <Typography variant="body2" sx={{ color: 'common.breadcrumbColor' }}>
              Home
            </Typography>
          </Link>
        </NextLink>
      )}

      {pathnames.map((value, index) => {
        if (i18n.exists(`paths.${value}`)) {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const valueTranslated = t(`paths.${value}`);

          return last ? (
            <NextLink href={to} passHref legacyBehavior key={to}>
              <Link>
                <Typography variant="body2" sx={{ color: 'common.breadcrumbLastColor', fontWeight: 'bold' }}>
                  {valueTranslated}
                </Typography>
              </Link>
            </NextLink>
          ) : (
            <NextLink href={to} passHref legacyBehavior key={to}>
              <Link>
                <Typography variant="body2" sx={{ color: 'common.breadcrumbColor' }}>
                  {valueTranslated}
                </Typography>
              </Link>
            </NextLink>
          );
        }
      })}
    </BreadcrumbsMUI>
  );
};
