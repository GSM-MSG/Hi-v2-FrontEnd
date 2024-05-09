import { useGetRole, useModal } from '@/hooks';
import { RefetchProps, ReservationDataType } from '@/types';
import AllDeleteButton from './AllDeleteButton';
import PlaceSelectButton from './PlaceSelectButton';
import DeleteButton from './TableButton';
import * as S from './style';

const ReservationTopButtons = ({ refetch }: RefetchProps<ReservationDataType[]>) => {
    const { openModal } = useModal()
    const { isAdmin } = useGetRole()
    
    return (
       <S.ButtonContainer>
       <PlaceSelectButton openModal={openModal} />
        <DeleteButton openModal={openModal} />
        {isAdmin && (
          <AllDeleteButton openModal={openModal} refetch={refetch} />
        )}
      </S.ButtonContainer>
    );
};

export default ReservationTopButtons;