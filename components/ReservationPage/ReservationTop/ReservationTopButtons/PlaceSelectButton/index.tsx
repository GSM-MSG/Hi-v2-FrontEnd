import { Button } from '@/components/commons';
import { PlaceSelectModal } from '@/modals';
import { theme } from '@/styles';
import { OpenModalButtonProps } from '@/types';

const PlaceSelectButton = ({ openModal }: OpenModalButtonProps) => {
  return (
    <Button
      width='80px'
      height='36px'
      border={`1px solid ${theme.color.primary}`}
      color={theme.color.primary}
      hoverBackground={theme.color.primary}
      onClick={() => openModal(<PlaceSelectModal />)}
    >
      상세조회
    </Button>
    );
};

export default PlaceSelectButton;