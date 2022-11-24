import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const TutorialSection = () => {
  const { t } = useTranslation('homepage')
  const router = useRouter()

  const handleButtonStart = () => {
    router.push('/earn')
  }

  return (
    <S.TutorialWrapper>
      <div className="title">
        <h1>
          {t('tutorial')}
          <div className="background">
            <Image
              src="/images/e-background.png"
              width={170}
              height={192}
              alt=""
            />
          </div>
        </h1>
        <p>{t('earningMoney')}</p>
      </div>
      <div className="list-picture">
        <div>
          <Image src="/images/step1.png" width={246} height={130} alt="step1" />
        </div>
        <div>
          <Image src="/images/step2.png" width={246} height={130} alt="step2" />
        </div>
        <div>
          <Image src="/images/step3.png" width={246} height={130} alt="step3" />
        </div>
      </div>
      <S.ButtonWrapper>
        <S.Button onClick={handleButtonStart}>{t('startEarning')}</S.Button>
      </S.ButtonWrapper>
    </S.TutorialWrapper>
  )
}

export default TutorialSection
