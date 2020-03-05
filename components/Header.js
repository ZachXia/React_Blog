import React from 'react'
import '../public/style/components/header.css'
import {Row, Col, Affix} from 'antd'


function Header() {
   

    return (
        <Affix>
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <a href='/'><span className='header-logo'>ZachXia</span></a>
                    {/* <span className='header-txt'>专注前端开发</span> */}
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    {/* <Menu mode='horizontal' onClick={handleClick}>
                        <Menu.Item key='home'>
                            
                            首页
                            
                        </Menu.Item>

                        {
                            navArray.map((item)=>{
                                return(<Menu.Item key={item.id}>{item.typeName}</Menu.Item>)
                            })
                        }
                    </Menu> */}
                </Col>
            </Row>
        </div>
        </Affix>
    )
    
}

export default Header