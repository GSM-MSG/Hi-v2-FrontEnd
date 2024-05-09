import { Button } from '@/components/commons';
import { FloorLocationModal } from '@/modals';
import { theme } from '@/styles';
import { OpenModalButtonProps } from '@/types';

const TableButton = ({ openModal }: OpenModalButtonProps) => {
  return (
    <Button
      width='98px'
      height='36px'
      border={`1px solid ${theme.color.primary}`}
      color={theme.color.primary}
      hoverBackground={theme.color.primary}
      onClick={() => openModal(<FloorLocationModal />)}
    >
      테이블 위치
    </Button>
  );
};

export default TableButton;