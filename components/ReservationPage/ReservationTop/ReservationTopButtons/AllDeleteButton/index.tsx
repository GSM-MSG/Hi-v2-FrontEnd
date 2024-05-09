import { del, reservationQueryKeys, reservationUrl } from '@/apis';
import { Button } from '@/components/commons';
import { useModal } from '@/hooks';
import { AllDeleteTableCheckModal } from '@/modals';
import { theme } from '@/styles';
import { OpenModalButtonProps, RefetchProps, ReservationDataType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllDeleteButton = ({ openModal, refetch }: OpenModalButtonProps & RefetchProps<ReservationDataType[]>) => {
  const { closeModal } = useModal()
  const { mutate } = useMutation<void, Error>({
    mutationKey: reservationQueryKeys.deleteAll(),
    mutationFn: () => del(reservationUrl.deleteAll()),
    onSuccess: () => {
      closeModal()
      refetch()
      toast.success('예약 테이블을 모두 삭제했습니다.')
    },
  })

  return (
    <Button
      width='80px'
      height='36px'
      border={`1px solid ${theme.color.sub}`}
      color={theme.color.sub}
      hoverBackground={theme.color.sub}
      onClick={() =>
        openModal(<AllDeleteTableCheckModal onDelete={() => mutate()} />)
      }
    >
      전체삭제
    </Button>
  );
};

export default AllDeleteButton;