import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import { Breadcrumbs } from '@/components';
import { useTranslation } from '@/hooks';

interface Props {
  title?: string;
}

export const PageTitle: FC<Props> = ({ title }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [titleValue, setTitleValue] = useState<string>('');

  useEffect(() => {
    let finalTitle = '';

    if (title) {
      finalTitle = title;
    } else {
      const pathnames = router.asPath.split('/').filter((x) => x);
      const pageTitle = pathnames.length > 0 ? pathnames[pathnames.length - 1] : 'home';
      const valueTranslated = t(`paths.${pageTitle}`);

      finalTitle = valueTranslated;
    }

    setTitleValue(finalTitle);
  }, [router.asPath, title]);

  return (
    <>
      <Typography
        variant="h4"
        textTransform="uppercase"
        sx={{
          fontSize: '32px',
          color: 'common.pageTitleColor',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          mt: 3,
        }}
      >
        {titleValue}
      </Typography>

      <Breadcrumbs />
    </>
  );
};
