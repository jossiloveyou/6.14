import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, Table, Tag } from 'antd'
import { connect } from "react-redux";
import { getName, delName, addName, updateName } from "@/actions/hook";
import Model from '@@/Model'
import tagAction from '@/actions/tag'
import str from '@/utils/string'
import Tagg from './tag'

function Tables (props) {
  const { data, getName, delName, addName, updateName, tag, selecttag, selectedRowKeys } = props
  const [dataSource, setDataSource] = useState([])
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('添加')
  // const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [formdata, setForm] = useState({})
  const inp = useRef(null)
  const del = val => {
    delName({id: val.id})
    getName()
  }
  const updata = val => {
    setTitle('编辑')
    setVisible(true)
    setForm(val)
  }
  const columns = 
        [
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'MSG',
            dataIndex: 'msg',
            key: 'msg',
          },
          {
            title: '操作',
            render: (text, record) => {
              return (
                <span>
                    <span onClick={()=>{updata(record)}}>编辑</span>
                    <span onClick={()=>(del(record))}>删除</span>
                </span>
              )
            }
          },
        ]
    const onSelectChange = ( check, data ) => {
      selecttag( check );
      tag(data)
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const show = () => {
      setTitle('添加')
      setVisible(true)
    }
    const handleOk = async e => {
      setVisible(false)
      const fieldValue = await inp.current.validateFields();
      if(title=='添加'){
        addName(fieldValue)
        getName()
      }else{
        updateName(fieldValue)
        getName()
      }
      console.log(fieldValue)
      console.log(inp.current)
      
      inp.current.setFieldsValue({})
    };
  
    const handleCancel = e => {
      setVisible(false)
      
    };

    useEffect(() => {
      getName()
    },[])

    function log(e) {
      console.log(e);
    }
  return (
    <div className="pages-quan">
        
        <div style={{padding:"25px",boxSizing:'border-box'}}>
          <Button type="primary" onClick={show}>添加</Button>
        </div>
          { 
            data.length<=0?"暂无数据":
              <Table 
                rowKey="id" 
                rowSelection={rowSelection} 
                dataSource={data.users} 
                columns={columns} 
              />
          }

          <Model 
            visible={visible}
            handleOk={handleOk}
            handleCancel={handleCancel}
            ref={inp}
            formdata={formdata}
            title={title}
          />
    </div>
  )
}

export default connect(state => {
  return {
    data: state.hook.data,
    // tagdata: state.tag.data,
    selectedRowKeys: state.tag.selectedRowKeys,
  }
},{
  getName, 
  delName, 
  addName, 
  updateName,
  tag: tagAction[str('TAGS')],
  selecttag: tagAction[str('SELECTTAGS')],
})(Tables)