import * as S from './style';

function HomeSection2() {
    return (
        <S.HomeSection2>
        <S.IntroductoryTextBox2>
          <h2>
            교무실에 가서 직접 신청하는 <span>비효율적</span>인 신청방법
          </h2>
          <p>학생들이 불편을 겪고 있어요</p>
        </S.IntroductoryTextBox2>
        <S.TalkBox>
          <div className='HiTalkGirl' />
          <div className='HiTalkBoy' />
        </S.TalkBox>
      </S.HomeSection2>
    );
};

export default HomeSection2;