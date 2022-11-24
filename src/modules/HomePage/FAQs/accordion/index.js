import React, { useState } from 'react'
import Image from 'next/image'

function Accordion(props) {
  const [active, setActive] = useState(false)

  return (
    <div className={`accordion ${active ? 'active' : ''}`}>
      <div className="accordion-title" onClick={() => setActive(!active)}>
        <div className="accordion-icon">
          <Image
            src="/images/icons/dropdown-faq.png"
            alt="dropdown"
            width={14}
            height={14}
          />
        </div>
        <span>{props.title}</span>
      </div>
      <div
        className="accordion-content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  )
}

export default Accordion
