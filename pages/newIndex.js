import React, {useState} from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, List, Icon} from 'antd';
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Author from '../components/Author'
import Advert from '../components/Advert'
import '../public/style/pages/newIndex.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Home(list) {
  
   const [ collapsed, setCollapsed] = useState(false)
   const [mylist, setMylist] = useState(list.data)
  

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

  
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Layout style={{ minHeight: '100vh'}}>
                <Sider style={{overflow: 'auto',height: '100vh',position:'fixed' }}  collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" >11111</div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            
                            <span>User</span>
                        </span>
                        }
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            
                            <span>Team</span>
                        </span>
                        }
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        
                    </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                    <Content style={{ margin: '0 16px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Row className='comm-main' type='flex' justify='center'>
                            <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14} >
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
                                                <span><Icon type='calendar' /> {item.addTime}</span>
                                                <span><Icon type='folder' /> {item.typeName}</span>
                                                <span><Icon type='fire' /> {item.view_count}</span>
                                            </div>
                                            <div className='list-context'>{item.introduce}</div>
                                        </List.Item>
                                    )}
                                />
                            </Col>

                            <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
                                <Author />
                                <Advert />
                            </Col>
                        </Row>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
        
    );
  
}

Home.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleList).then((res)=>{
            resolve(res.data)
        })
    })

    return await promise
}

export default Home