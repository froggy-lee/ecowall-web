import React from 'react'
import Paginate from 'react-paginate'
import * as S from './styles'
import Image from 'next/image'

function Pagination(props) {
  return (
    <S.Wrapper>
      <Paginate
        nextLabel={
          <div className="images">
            <Image
              src={'/images/icons/arrow-right.png'}
              alt=""
              width={7.55}
              height={17}
            />
          </div>
        }
        previousLabel={
          <div className="images">
            <Image
              src={'/images/icons/arrow-left.png'}
              alt=""
              width={7.55}
              height={17}
            />
          </div>
        }
        pageRangeDisplayed={2}
        breakLabel="..."
        marginPagesDisplayed={1}
        pageCount={props.pageCount}
        onPageChange={props.onChangePage}
        containerClassName="panigate-wrapper"
        pageClassName="item"
        pageLinkClassName="link"
        previousClassName="item"
        previousLinkClassName="link"
        nextClassName="item"
        nextLinkClassName="link"
        breakClassName="item"
        breakLinkClassName="link"
        activeClassName="active"
      />
    </S.Wrapper>
  )
}

export default Pagination
