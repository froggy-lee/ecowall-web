import React from 'react'
import * as S from './styles'
import Image from 'next/image'

const AvatarColumn = ({ user }) => {
  return (
    <S.WrapperContentTable>
      <Image
        className="image-user"
        src={user.avatar || '/images/LeaderBoard/avatar-user.png'}
        width={35}
        height={35}
        alt=""
      />
      <S.Level>
        <Image
          src={'/images/LeaderBoard/level.png'}
          alt=""
          width={16.7}
          height={16.7}
        />
        <p>{user.level}</p>
      </S.Level>
      <S.Username>{user.username}</S.Username>
    </S.WrapperContentTable>
  )
}

export default AvatarColumn
