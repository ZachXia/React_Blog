import React from 'react';
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Tocify from '../components/tocify.tsx'

import {Row, Col, Breadcrumb, Icon, Affix, BackTop} from 'antd'
import Head from 'next/head'
import '../public/style/pages/detailed.css'
import 'markdown-navbar/dist/navbar.css'

import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import servicePath from '../config/apiUrl';



function Detailed(props){
    const mermaid = require('mermaid')
    
    const renderer = new marked.Renderer()

    const tocify = new Tocify()
    renderer.heading = (text, level, raw)=>{
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    }
    renderer.code = function (code, language) {
        if(code.match(/^sequenceDiagram/)||code.match(/^graph/)){
            return '<div class="mermaid">'+code+'</div>';
        }
        else{
            return '<pre><code>'+hljs.highlightAuto(code).value+'</code></pre>';
        }
    }
    marked.setOptions({
        renderer: renderer, 
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: (code) => (
            hljs.highlightAuto(code).value
        )
    })

    let html = marked(props.article_content)


    
    
    return (
        <div>
            <Head>
                <title>{props.title} | ZachXia的博客</title>
            </Head>

            <Header />

            <Row className='comm-main' type='flex' justify='center'>
        
                <Col className='comm-left' xs={0} sm={0} md={7} lg={5} xl={4} >
                    <Author /> 
                    <Affix offsetTop={55}>
                        <div className='detailed-nav comm-box'>
                            <div className='nav-title'>文章目录</div>
                            <div className='toc-list'>
                                {tocify && tocify.render()}
                            </div>
                            
                        </div>
                    </Affix>
                    
                    
                </Col>
                <Col className='comm-right' xs={24} sm={24} md={16} lg={18} xl={14} >
                    <div>
                        <div className='bread-div'>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                                <Breadcrumb.Item></Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <div className='detailed-title'>
                                {props.title}
                            </div>
                            <div className='list-icon center'>
                                <span><Icon type='calendar' /> {props.addTime} </span>
                                <span><Icon type='folder' /> {props.typeName} </span>
                                {/* <span><Icon type='fire' /> {props.view_count} </span> */}
                            </div>
                            <div className='detailed-content' dangerouslySetInnerHTML={{__html:html}} />
                        </div>
                        
                    </div>
                </Col>    
            </Row>

            <Footer />
            <BackTop />


        </div>
        
    )
}

Detailed.getInitialProps = async (context)=>{
    let id = context.query.id
    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleById + id).then((res)=>{
            resolve(res.data.data[0])
        })
    })

    return await promise
}

export default Detailed