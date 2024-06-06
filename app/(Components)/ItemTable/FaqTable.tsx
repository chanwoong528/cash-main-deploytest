//@ts-nocheck
import React from 'react'

const FaqTable = ({ itemList }) => {


  return (
    <ul>
      {itemList.map((item, idx) => {
        return (
          <li
            key={item.idx + item.createDate}
            className={`faqList-item`}>
            <button type="button">
              <span className='q-mark'>Q</span>
              {item.title}
            </button>
            <article
              dangerouslySetInnerHTML={{
                __html: item.content,
              }}
            />
          </li>
        )
      })
      }
    </ul>
  )
}

export default FaqTable