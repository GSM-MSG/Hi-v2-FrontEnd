import { Floor2, Floor3, Floor4 } from "@/assets";
import { ReservationPlace } from "@/atoms";
import { Button, Portal } from "@/components";
import { useModal } from "@/hooks";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import * as S from './style';

export default function FloorLocationModal() {
  const {closeModal} = useModal()
  const reservationPlace = useRecoilValue(ReservationPlace)
  return (
    <Portal onClose={closeModal}>
      <S.FloorLocationModalContainer>
        {reservationPlace.floor === 2 && <Image src={Floor2} alt="테이블 위치" />}
        {reservationPlace.floor === 3 && <Image src={Floor3} alt="테이블 위치" />}
        {reservationPlace.floor === 4 && <Image src={Floor4} alt="테이블 위치" />}
        <Button>닫기</Button>
      </S.FloorLocationModalContainer>
    </Portal>
  )
}