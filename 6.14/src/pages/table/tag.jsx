import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Tag } from 'antd'
import tagAction from '@/actions/tag'
import str from '@/utils/string'

export default connect((state) => {
  return {
    selectedRowKeys: state.tag.selectedRowKeys,
  }
},{
  selecttag: tagAction[str('SELECTTAGS')],
})(Tagg)

function Tagg (props) {
  const { data, selectedRowKeys, selecttag } = props
  console.log(selectedRowKeys)
  const log = v => {
    const select = selectedRowKeys.filter(sel => sel!=v)
    console.log(v);
    selecttag(select)
  }
  return (
    <div>
      {
        data.map((v,i) => {
          return <Tag closable onClose={() => {log(v.id)}} key={v.id}>
            {v.name}
          </Tag>
        })
      }
    </div>
  )
}