import React, {useState, useEffect}from 'react';
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import {Row, Col, List, Icon, Breadcrumb, BackTop} from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import NavMenu from '../components/NavMenu';

function MyList(list){

    const [mylist, setMylist] = useState(list.data)
    useEffect(()=>{
        setMylist(list.data)
    },[list])

    return (
        <div>
            <Head>
                <title>分类 | ZachXia的博客</title>
            </Head>

            <Header></Header>

            <Row className='comm-main' type='flex' justify='center'>
                
                <Col className='comm-left' xs={0} sm={0} md={7} lg={5} xl={4} >
                    <Author />
                    <NavMenu />
                </Col>
                
                <Col className='comm-right' xs={24} sm={24} md={16} lg={18} xl={14} >
                    <div className='bread-div' >
                        <Breadcrumb>
                            <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>{mylist.length>0?mylist[0].typeName:'空分类'}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <List 
                        header={<div>最新日志</div>} 
                        itemLayout='vertical'   
                        dataSource={mylist}
                        renderItem={(item)=>(
                            <List.Item>
                                <div className='list-title'>
                                    <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className='list-icon'>
                                    <span><Icon type='calendar' /> {item.addTime} </span>
                                    <span><Icon type='folder' /> {item.typeName} </span>
                                    {/* <span><Icon type='fire' /> {item.view_count} </span> */}
                                </div>
                                <div className='list-context'>{item.context}</div>
                            </List.Item>
                        )}
                    />
                </Col>

            </Row>

            <Footer />
            <BackTop />

        </div>
        
    )
}

MyList.getInitialProps = async (context)=>{
    let id = context.query.id
    const promise = new Promise((resolve)=>{
        axios(servicePath.getListById + id).then((res)=>{
            resolve(res.data)
        })
    })

    return await promise
}

export default MyList