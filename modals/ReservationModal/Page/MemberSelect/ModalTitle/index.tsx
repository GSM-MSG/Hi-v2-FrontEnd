import { PageToggleBox, SubTitle, Title, TitleBox, TitleTextBox } from '@/components';

export default function ModalTitle() {
  return (
    <TitleBox>
      <TitleTextBox>
        <Title>
          팀원선택 <span />
        </Title>
        <SubTitle>같이할 팀원을 선택해주세요.</SubTitle>
      </TitleTextBox>
      <PageToggleBox>
        <div className='currentToggle' />
        <div />
        </PageToggleBox>
      </TitleBox>
  );
};