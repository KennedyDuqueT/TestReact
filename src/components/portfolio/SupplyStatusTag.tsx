import { FC } from 'react';
import { Chip, Tooltip } from '@mui/material';
import { useTranslation } from '@/hooks';
import { SupplyStatusValues as SupplyStatus } from '@/models/portfolio';

interface Props {
  status: SupplyStatus;
}

const getColor = (status: SupplyStatus) => {
  switch (status) {
    case SupplyStatus.ACTIVE:
      return 'success';
    case SupplyStatus.INACTIVE:
      return 'error';
    case SupplyStatus.SUSPENDED:
      return 'warning';
    case SupplyStatus.WITH_WARNING:
      return 'warning';
    case SupplyStatus.LEGAL_RETURN:
      return 'info';

    default:
      break;
  }
};

export const SupplyStatusTag: FC<Props> = ({ status }) => {
  const { t } = useTranslation();
  const label = t(`supply.status.${status}`);

  return (
    <Tooltip title={label} arrow>
      <Chip size="small" color={getColor(status)} sx={{ color: 'common.white', width: 90 }} label={label} />
    </Tooltip>
  );
};
