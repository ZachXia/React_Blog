import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Menu, Affix, Icon} from 'antd'
import Router from 'next/router'
import servicePath from '../config/apiUrl'
import '../public/style/components/NavMenu.css'

export default ()=>{
    const [navArray, setNavArray] = useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const result = await axios(servicePath.getTypeInfo).then((res)=>{
            return res.data.data
        })
        setNavArray(result)
    }

    const handleClick = (e)=>{
        if(e.key === 'home'){
            Router.push('/')
        } else{
            Router.push('/list?id=' + e.key)
        }
    }

    return (
        <Affix offsetTop={55}>
            <div className='nav-menu comm-box'>
                <Menu mode='inline' defaultOpenKeys={['type']} >
                    <Menu.Item key='home'>
                        <Icon type='home' />首页
                    </Menu.Item>
                    <Menu.SubMenu key='type' title={<span><Icon type='appstore' /><span>分类</span></span>} onClick={handleClick}>
                        {
                            navArray.map((item)=>{
                                return(<Menu.Item key={item.id}>{item.typeName}</Menu.Item>)
                            })
                        }
                    </Menu.SubMenu>
                    <Menu.SubMenu key='page' title={<span><Icon type='file-text' /><span>页面</span></span>}>
                        <Menu.Item key='me'>
                            关于
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key='blogroll' title={<span><Icon type='link' /><span>友链</span></span>}>
                        <Menu.Item key='jspang'>
                            <a href='http://www.jspang.com' target='_blank'>技术胖</a>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </div>
        </Affix>
    )
}